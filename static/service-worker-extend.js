// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432

self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.', JSON.stringify(event));
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  // let data = event.data.text();
  // try {
  //   data = JSON.parse(event.data.text());
  // } catch (e){
  //   data = {
  //     text: event.data.text()
  //   }
  // }
  const data = JSON.parse(event.data.text());
  const options = {
    // badge: '/static/img/icons/ico_android_app.png',
    icon: '/static/android-launchericon-512-512.png',
    body: data.text,
    actions: [
      {action: 'More', title: 'More'}
    ],
    data: data
  };

  event.waitUntil(registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.', JSON.stringify(event));

  event.notification.close();

  var redirect = '/inbox';
  if (event.notification.data && event.notification.data.type) {
    if (event.notification.data.type === 'reservation') {
      redirect = '/guest-panel';
    }
  }
  var urlToOpen = new URL(redirect, self.location.origin).href;
  event.waitUntil(clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then(function (clientList) {

    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      //Inbox or Guest Panel
      if (client.url === urlToOpen && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow(urlToOpen);
  }));
});
