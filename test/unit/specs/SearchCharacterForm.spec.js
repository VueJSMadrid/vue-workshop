import Vue from 'vue'
import SearchCharacterForm from '@/components/SearchCharacterForm'

describe('SearchCharacterForm.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SearchCharacterForm)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
