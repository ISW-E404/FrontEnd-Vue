import { shallowMount } from '@vue/test-utils'
import New from '../../src/components/home/new'
import Top from '../../src/components/home/top'
/*
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
*/
describe('New.vue', () =>{
  it('check connection between components', ()=>{

    const wrapper = shallowMount(New)


    const TopByName = wrapper.findComponent({name:'top'})
    const TopValuationByName = wrapper.findComponent({name:'top-valuation'})

    expect(TopByName.exists()).toBe(true)
    expect(TopValuationByName.exists()).toBe(true)
  })
})


