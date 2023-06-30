<template>
<nav>
    <div class="navbar">

        <div class="home">
            <router-link to="/"><img class="home-icon" src="@/assets/home.svg" alt="Home Icon" /></router-link>
            <img class="menu-icon" @click="showMenu" src="@/assets/menu.svg" alt="Menu Icon" >
        </div>

        <section class="menu" :class="this.menu ? 'show-menu' : 'hide-menu'">
            <img class="menu-close-icon" @click="hideMenu" src="@/assets/close.svg" alt="Close Icon">
            <router-link to="/men" @click="hideMenu">Men</router-link>
            <router-link to="/women" @click="hideMenu">Women</router-link>
            <router-link to="/kids" @click="hideMenu">Kids</router-link>
            <router-link to="/shop" @click="hideMenu">Shop</router-link>
            <router-link to="/contact" @click="hideMenu">Contact Us</router-link>
        </section>

        <section class="icons">
            <router-link to="/like">
                <img src="@/assets/heart.svg" alt="Like Icon" />
            </router-link>
            <router-link to="/cart">
                <img src="@/assets/shoppingCart.svg" alt=" Shopping cart icon" />
            </router-link>
            <router-link to="/profile" class="profile">
                <img src="@/assets/profile.svg" alt="Profile Icon" />
                <p> Nombre </p>
            </router-link>
        </section>
    </div>
</nav>
</template>

<script>
export default {
    name: 'MenuComponent',
    data() {
        return {
            menu: false
        };
    },
    methods: {
        showMenu: function () {
            this.menu = true;
        },
        hideMenu: function () {
            this.menu = false;
        }
    },
};
</script>

<style lang="scss" scoped>
$background-nav: #fff;
$font-color: black;
$font-size: 1.2rem;

%highlight-font {
    color: #002482;
    font-weight: 600;
    transform: scale(1.05);
}

%center-content {
    align-items: center;
    display: flex;
    justify-content: center;
}

nav {
    background-color: $background-nav;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

    .navbar {
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

    .home-icon:hover {
        transform: scale(1.10);
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

.icons {
    @extend %center-content;

    img {
        width: 2rem;
    }

    img:hover {
        transform: scale(1.10);
    }

    .profile {
        @extend %center-content;

        p {
            color: $font-color;
            font-size: $font-size;
            margin-left: .5rem;
        }
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

    .hide-menu {
        display: none;
    }

    .menu-icon {
        cursor: pointer;
        display: flex;
        width: 1.5rem;
    }

    .menu-close-icon {
        cursor: pointer;
        display: flex;
        position: absolute;
        right: 15%;
        top: 8%;
        width: 1.8rem;
    }

    .menu-icon:hover,
    .menu-close-icon:hover {
        transform: scale(1.10);
    }

    p {
        display: none;
    }
}
</style>
