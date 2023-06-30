import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../TheNavbar.vue'

const RouterLinkStub = {
  name: "router-link",
  template: "<a><slot></slot></a>",
};


describe('Navbar.vue', () => {

  const mountOptions = {
    global: {
      components: {
        "router-link": RouterLinkStub,
      },
    },
  };

  it('mounts without crashing', () => {
    const wrapper = mount(Navbar, mountOptions)
    expect(wrapper.exists()).toBe(true)
  })

  it("should hide the menu initially", () => {
    const wrapper = mount(Navbar, mountOptions);
    const menu = wrapper.find(".menu");

    expect(menu.classes()).toContain("hide-menu");
  })

  it('menu has correct class based on its state', async () => {
    const wrapper = mount(Navbar, mountOptions)
    const menuIcon = wrapper.find('.menu-icon')
    const menuCloseIcon = wrapper.find('.menu-close-icon')
    const menu = wrapper.find('.menu')

    expect(menu.classes()).toContain('hide-menu')

    await menuIcon.trigger('click')
    expect(menu.classes()).toContain('show-menu')

    await menuCloseIcon.trigger('click')
    expect(menu.classes()).toContain('hide-menu')
  })  

  it("should open the menu when the menu icon is clicked", async () => {
    const wrapper = mount(Navbar, mountOptions);
    const menuIcon = wrapper.find(".menu-icon");

    await menuIcon.trigger("click");
    expect(wrapper.vm.menu).toBe(true);
  })

  it("should render all menu links", () => {
    const wrapper = mount(Navbar, mountOptions);
    const menuLinks = wrapper.findAll(".menu a");

    expect(menuLinks.length).toBe(5);
  })

  it("should close the menu when the close icon is clicked", async () => {
    const wrapper = mount(Navbar, mountOptions);
    const menuIcon = wrapper.find(".menu-icon");
    const closeIcon = wrapper.find(".menu-close-icon");

    await menuIcon.trigger("click");
    expect(wrapper.vm.menu).toBe(true);

    await closeIcon.trigger("click");
    expect(wrapper.vm.menu).toBe(false);
  })

})
