# Documentacion del componente Navbar
## Descripcion:
Este componente es una barra de navegación adaptable y reutilizable. Incluye menús, íconos de navegación y es responsivo para distintos tamaños de pantalla.

## Tecnologias usadas
A continuación se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3
* Vue Router
* Preprocesador SCSS
* Vue Test Utils
* Vitest

## Caracteristicas del componente
### Props
El componente Navbar tiene dos propiedades:
* **navigationItems**: Array de objetos donde cada objeto representa un elemento del menú de navegación. Cada objeto debe tener las propiedades *route* y *label*. La propiedad *route* es la ruta a la que se dirige el enlace, y *label* es el texto que se muestra para el enlace.
* **navigationIcons**: Array de objetos donde cada objeto representa un ícono en la barra de navegación. Cada objeto debe tener las propiedades *route*, *icon* y *alt*. *route* es la ruta a la que el ícono enlaza, *icon* es la URL del ícono, y *alt* es el texto alternativo para el ícono.

### Métodos
* **toggleMenu**: Este método se utiliza para abrir o cerrar el menú de navegación en dispositivos móviles. Cuando se hace clic en el ícono del menú, el menú de navegación se expande. Cuando se hace clic en el ícono de cierre del menú, el menú de navegación se contrae.
* **hideMenu**: Este método se utiliza para cerrar el menú de navegación cuando se hace clic en un enlace del menú.

### Notas
* Este componente requiere Vue Router para funcionar correctamente, ya que utiliza el componente router-link para la navegación.
* Es importante asegurarse de que los íconos referenciados en las props navigationItems e icons existan en la ruta especificada o que sean URLs válidas.
 
### CSS
* Los estilos están definidos en la seccion de <style> y usan la extencion .scss.
* Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.
* Se puede modificar la variable $background-nav para cambiar el color del fondo del navbar, asi como tambien se pueden cambiar las variables $font-color y $font-size para cambiar el color y tamaño de la letra del navbar respectivamente.
* El componente utiliza media queries para adaptarse a diferentes tamaños de pantalla. Se muestra un menú de navegación desplegable cuando la pantalla es menor a 780px.
* Se definen dos placeholders scss: 
* * %highlight-font: Aumenta la escala del texto y lo colorea en azul oscuro cuando se activa un enlace.
* * %center-content: Centra el contenido en un bloque, tanto horizontal como verticalmente.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *TheNavbar.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 

Posteriormente en el componente padre se importa el componente *TheNavbar* y mediante la etiqueta *Navbar* se pasa el array de objetos que contienen los datos de la navegación.

A continuacion un ejemplo:

```vue
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

```

En *navigationItems*: cada objeto tiene una propiedad route que indica a dónde debe redirigir el enlace, y una propiedad label que indica el texto que se mostrará para el enlace

En *navigationIcons*: cada objeto tiene una propiedad icon que indica la ubicación del archivo de imagen del ícono, una propiedad alt que proporciona texto alternativo para el ícono, y una propiedad route que indica a dónde debe redirigir el ícono.

Estos datos se pasan al componente Navbar para que se puedan renderizar los enlaces de navegación y los íconos.


## Demostracion
El ejemplo anterior se encuentra en el archivo *TheNavigation*, donde se definen los ítems de navegación e íconos como datos en el componente padre, mismos que luego se pasan al componente *Navbar* a través de props.

La implementación de este componente se puede ver de la siguiente forma:

**Visualización de la barra de navegación**

![NavbarMenu](https://github.com/MileydyMtz/vue-navbar-component/assets/85470047/53b54a94-30f2-4f13-9dbb-1db175a6e6b9)


**Barra de navegacion desde la vista Mobile**

![NavbarMenu Mobile](https://github.com/MileydyMtz/vue-navbar-component/assets/85470047/de26ada5-aeb2-4e83-90b0-d057d570fd3d)


**Visualizacion del menu abierto**

![NavbarMenu Mobile Open](https://github.com/MileydyMtz/vue-navbar-component/assets/85470047/d6277f64-61aa-4f11-b09a-faa8ce97badc)


## Pruebas
Las pruebas se han implementado utilizando la biblioteca vitest para correr las pruebas y @vue/test-utils para montar el componente. 

A continuacion se muestran las pruebas implementadas:
* **mounts without crashing**: Esta prueba verifica si el componente Navbar se monta correctamente sin causar errores. 
* **should hide the menu initially**: Se verifica que el menú esté oculto por defecto cuando el componente se carga por primera vez. 
* **menu has correct class based on its state**: Esta prueba verifica que la clase del menú cambie correctamente cuando se hace clic en los iconos de abrir y cerrar menú. Esto se hace simulando clics en estos iconos y luego comprobando si la clase del menú ha cambiado como se esperaba.
* **should render all menu links**: Se verifica que todos los enlaces de menú proporcionados como propiedades se rendericen correctamente. Esto se hace buscando todos los enlaces dentro del menú y comprobando si su número coincide con el número de elementos proporcionados.
* **should render all icons**: Esta prueba verifica que todos los íconos proporcionados como propiedades se rendericen correctamente.
* **should close the menu when a navigation link is clicked**: Esta prueba verifica que el menú se cierre cuando se hace clic en un enlace de navegación. 
