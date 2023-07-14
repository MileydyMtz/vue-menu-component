<template>
<nav class="navbar">
    <div class="navbar-container">
        <div class="home">
            <router-link to="/">
                <img class="home-icon icon" src="@/assets/home.svg" alt="Home Icon" />
            </router-link>
            <img class="menu-icon icon" @click="toggleMenu" src="@/assets/menu.svg" alt="Menu Icon">
        </div>

        <section class="menu" :class="{ 'show-menu': showMenu }">
            <img class="menu-close-icon icon" @click="toggleMenu" src="@/assets/menu.svg" alt="Close Icon">
            <template v-for="(navItem, index) in navigationItems" :key="index">
                <router-link :to="navItem.route" @click="hideMenu">{{ navItem.label }}</router-link>
            </template>
        </section>

        <section>
                <template v-for="(navIcon, index) in navigationIcons" :key="index">
                    <router-link :to="navIcon.route">
                        <img class="icon" :src="navIcon.icon" :alt="navIcon.alt" />
                    </router-link>
                </template>
        </section>
    </div>
</nav>
</template>

<script>
export default {
    name: 'TheNavbar',
    props: {
        navigationItems: {
            type: Array,
            default: () => [],
        },
        navigationIcons: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        hideMenu() {
            this.showMenu = false;
        },
    },
};
</script>

<style lang="scss" scoped>
$background-nav: #fff;
$font-color: black;
$font-size: 1.2rem;

%highlight-font {
    color: #002482;
    font-weight: 550;
    transform: scale(1.05);
}

%center-content {
    align-items: center;
    display: flex;
    justify-content: center;
}

.navbar {
    background-color: $background-nav;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

    .navbar-container {
        @extend %center-content;
        justify-content: space-between;
        padding: 20px;
    }

    a {
        color: $font-color;
        display: inline-block;
        font-size: $font-size;
        margin-right: 1rem;
        text-decoration: none;
        transition: transform 0.2s ease;
        white-space: nowrap;

        &.router-link-exact-active {
            @extend %highlight-font;
        }
    }

    .icon {
        width: 1.6rem;
        transition: transform 0.2s ease;
    }

    .icon:hover {
        cursor: pointer;
        transform: scale(1.08);
    }

    .home-icon {
        width: 1.8rem;
    }
}

.menu-icon,
.menu-close-icon {
    display: none;
}

.menu {
    @extend %center-content;

    a:hover {
        @extend %highlight-font;
    }
}

@media (max-width: 780px) {
    .home {
        display: flex;
        flex-direction: row;
    }

    .menu {
        display: none;
    }

    .show-menu {
        background: $background-nav;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        height: 100vh;
        left: 0;
        position: fixed;
        text-align: center;
        top: 0;
        width: 60%;
        z-index: 100;

        a {
            display: block;
            padding: 20px;
        }
    }

    .menu-icon {
        display: flex;
    }

    .menu-close-icon {
        display: flex;
        position: absolute;
        right: 15%;
        top: 8%;        
    }
}
</style>
