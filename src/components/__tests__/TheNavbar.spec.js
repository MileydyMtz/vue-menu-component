import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheNavbar from '@/components/TheNavbar.vue'

const RouterLinkStub = {
  name: "router-link",
  template: "<a><slot></slot></a>",
};

describe('TheNavbar.vue', () => {

  const mountOptions = {
    global: {
      components: {
        "router-link": RouterLinkStub,
      },
    },
    props: {
        navigationItems: [
            { label: 'Nav Item 1', route: '/route1' },
            { label: 'Nav Item 2', route: '/route2' },
            { label: 'Nav Item 3', route: '/route3' },
            { label: 'Nav Item 4', route: '/route4' },
            { label: 'Nav Item 5', route: '/route5' }
        ],
        navigationIcons: [
            { icon: "@/assets/icon1.svg", route: "/route6", alt: "Icon 1" },
            { icon: "@/assets/icon2.svg", route: "/route7", alt: "Icon 2" },
            { icon: "@/assets/icon3.svg", route: "/route8", alt: "Icon 3" },
        ]
    }
  };

  it('mounts without crashing', () => {
    const wrapper = mount(TheNavbar, mountOptions)
    expect(wrapper.exists()).toBe(true)
  })

  it("should hide the menu initially", () => {
    const wrapper = mount(TheNavbar, mountOptions);
    const menu = wrapper.find(".menu");

    expect(menu.classes()).not.toContain("show-menu");
  })

  it('menu has correct class based on its state', async () => {
    const wrapper = mount(TheNavbar, mountOptions)
    const menuIcon = wrapper.find('.menu-icon')
    const menu = wrapper.find('.menu')

    expect(menu.classes()).not.toContain('show-menu')

    await menuIcon.trigger('click')
    expect(menu.classes()).toContain('show-menu')

    const menuCloseIcon = wrapper.find('.menu-close-icon')
    await menuCloseIcon.trigger('click')
    expect(menu.classes()).not.toContain('show-menu')
  })

  it("should render all menu links", () => {
    const wrapper = mount(TheNavbar, mountOptions);
    const menuLinks = wrapper.findAll(".menu a");

    expect(menuLinks.length).toBe(5);
  })

  it("should render all icons", () => {
    const wrapper = mount(TheNavbar, mountOptions);
    const icons = wrapper.findAll("section:nth-child(3) a img.icon");

    expect(icons.length).toBe(3);
  })

  it("should close the menu when a navigation link is clicked", async () => {
    const wrapper = mount(TheNavbar, mountOptions);
    const menuIcon = wrapper.find(".menu-icon");

    await menuIcon.trigger("click");
    expect(wrapper.vm.showMenu).toBe(true);

    const navLink = wrapper.find(".menu a");
    await navLink.trigger("click");
    expect(wrapper.vm.showMenu).toBe(false);
  })

})
