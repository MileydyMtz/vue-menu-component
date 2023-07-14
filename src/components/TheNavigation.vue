<template>
    <div>
        <Navbar :navigationItems="navigationItems" :navigationIcons="navigationIcons" />
    </div>
</template>

<script>
import Navbar from './TheNavbar.vue';

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            navigationItems: [{
                    route: '/products',
                    label: 'Products'
                },
                {
                    route: '/services',
                    label: 'Services'
                },
                {
                    route: '/blog',
                    label: 'Blog'
                },
                {
                    route: '/about',
                    label: 'About'
                },
                {
                    route: '/contact',
                    label: 'Contact Us'
                },
            ],
            navigationIcons: [{
                    icon: 'src/assets/like.svg',
                    alt: "Like Icon",
                    route: "/like"
                },
                {
                    icon: "src/assets/notification.svg",
                    alt: "Notification Icon",
                    route: "/notification"
                },
                {
                    icon: "src/assets/profile.svg",
                    alt: "Profile Icon",
                    route: "/profile"
                },
            ],
        };
    },
};
</script>
