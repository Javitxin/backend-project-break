# Tienda de ropa

En esta documentación vamos a explicar el funcionamiento de la tienda de ropa, las tecnologías usadas, endpoints, etc.

## Índice

- [Url donce está ubicada nuestra tienda](#URL-Tienda-de-ropa)
- [Funcionamiento de la tienda de ropa](#Funcionamiento-de-la-tienda-de-ropa)
- [Tecnologías usadas para crear esta tienda de ropa](#Tecnologias-usadas)
- [Endpoints utilizados para HTML](#Endpoints-html)
- [Endpoints utilizados para la API](#Endpoints-Api)

## URL Tienda de ropa
Esta sería la URL donde está alojada la tienda: URL:http********

## Funcionamiento de la tienda de ropa

Una vez que se accede a la url de la web, lo primero que nos vamos ha encontrar es una web con una barra de navegación, la cual consta de las siguientes categorías:

- [Productos](#Categoría-Productos)
- [Camisetas](#Categoría-Camisetas)
- [Pantalones](#Categoría-Pantalones)
- [Zapatos](#Categoría-Zapatos)
- [Accesorios](#Categoría-Accesorios)
- [login](#Login)
- [La web Logeado](#La-web-Logeado)
- [Logeado Productos](#Logeado-Productos)
- [Botón Actualizar](#Botón-Actualizar)
- [Botón Eliminar](#Botón-Eliminar)
- [Opcion de crear nuevo producto](#Opción-de-crear-nuevo-producto)
- [Opción Logout](#Opción-Logout)

### Categoría Productos

En este apartado de la web, nos muestra todos los productos que existen en la web, cada producto tiene un botón para porde ver una vista detalle del producto en cuestión.

### Categoría Camisetas

En este apartado de la web, nos muestra solo los productos por camisetas que existan en nuestra web, también con su botón para acceder a su vista detalle.

### Categoría Pantalones

En este apartado de la web, nos muestra solo los productos por pantalones que existan en nuestra web, también su botón para acceder a su vista detalle.

### Categoría Zapatos

En este apartado de la web, nos muestra solo los productos por zapatos que existan en nuestra web, también su botón para acceder a su vista detalle.

### Categoría Accesorios

En este apartado de la web, nos muestra solo los productos por accesorios que existan en nuestra web, también su botón para acceder a su vista detalle.

#### Login

En este apartado tienes la opción de logearte en la web para poder acceder a ella con las funciones de administrador y así poder utilizar todas las opciones de Crear, buscar, modificar y borrar los artículos de la tienda.

#### La web Logeado

Cuando cliques en la opción de login, te saldrá una pantalla donde deberas introducir tu Usuário y contraseña de administrador de la web, esa pantalla comprueba que la información sea correcta, para poder entrar como administrador.
Una vez logeado te aparece una web con una barra de navegación arriba con; Productos, Camisetas, Pantalones, Zapatos, Accesorios, Nuevo  Producto y Logout.

#### Logeado Productos
A simple vista lo que se muestra es lo mismo que en la opción de inicio de productos pero una vez que presionas el botón Ver detalle, nos muestra una vista detalle del producto con dos botones más, botón Actualizar y Botón Eliminar.

#### Botón Actualizar

Una vez presionado este botón, nos muestra una web con la misma barra de navegación que cuando estás logeado y como cuerpo principal de la web un formulario de actualización del producto en cuestión con la información de ese producto y un botón de actualizar, uan vez hechos los cambios pertinentes en dicho producto al pinchar en el botón actualizar no vuelve a mostrar el producto en cuestión con su modificación ya realizada.
Esto es aplicable  a todas las categorías de la web pantalones, camisetas, zapatos, accesorios.


#### Botón Eliminar

Una vez pulsado el botón de eleminar, nos mostrará un mensaje el cual no dice que el producto se ha eliminado correctamente. Esto es aplicable  a todas las categorías de la web pantalones, camisetas, zapatos, accesorios.

#### Opción de crear nuevo producto

Una vez de clicar en la opción de la barra de menus, Nuevo Producto, nos aparece una web cd crear producto con todos los campos para crear dicho producto y un botón de enviar, una vez que se han rellenado todos los campos del nuevo producto, al presionar el botón de enviar, nos redirecciona a la web principal donde nos muestra todos los productos incluido el nuevo producto.

#### Opción Logout

Una clicado esta opción, simplemente cerrará la sesón del usuario que estemos usando y nos llevará a la pagina principal de la web que es solo de consulta.

## Tecnologias usadas

Estas son las tecnologías o recursos utilizados para nuestra web.

- [Express](#Epress)
- [Mongoose](#Mongoose)
- [Atlas](#Atlas)
- [Fl0](#Fl0)
- [dotenv](#dotenv)
- [express-session](#express-session)
- [express.urlencoded](#express.urlencoded)
- [express.static](#express.static)
- [Template literals](#Template-literals)
- [Pug](#Pug)
- [Firebase](#firebase)
  - [Firebase Auth](#firebase-Auth)
  - [Get Started with Firebase Authentication on Websites](https://firebase.google.com/docs/auth/web/start)

### Express

Qué es Epress.js:

Express.js es el framework backend más popular para Node.js y es una parte extensa del ecosistema JavaScript.

Instalación de Express:

```
npm install express --save
```
Para más informacion de express(https://expressjs.com/)

### Mongoose

Qué es Mongoose:

Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.

Instalación Mongoose:

```
npm install mongoose --save
```
Para más información de mongoose (https://mongoosejs.com/)

### Atlas

Qué es Atlas:

La base de datos nativa de la nube: la forma más sencilla de implementar, operar y  ewscalar MongoDB en la nube.
Para más información (https://www.mongodb.com/cloud/atlas)

### Fl0

Qué es Fl0:

Herramienta de despliege de aplicaciones y bases de datos.
Para más información (https://www.fl0.io/)

### dotenv
Qué es dotenv:

Dotenv es un módulo de dependencia cero que carga las variables de entorno desde un archivo .env en process. env.

Instalación de dotenv:

```
npm install dotenv --save
```
Para más información (https://www.npmjs.com/package/dotenv)

### express-session

Qué es express-session:

El middleware express-session almacena los datos de sesión en el servidor; sólo guarda el ID de sesión en la propia cookie, no los datos de sesión.

Instalación de express-session:

```
npm install express-session
```
Para más información (https://www.npmjs.com/package/express-session)

### express.urlencoded

Qué es express.urlencoded:

Actúa como middleware al procesar los datos enviados desde el cliente al servidor a través de formularios HTML o solicitudes POST.
Para más información (https://expressjs.com/en/api.html#express.urlencoded)

### express.static

Qué es express.static:

Esta función de middleware le permite al servidor acceder a un directorio público donde se almacenan los recursos estáticos.
Para más información (https://expressjs.com/en/api.html#express.static)

### Template-literals

Qué es Template-literals:

Cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
Para más información (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Pug

Qué es Pug:

Es un motor de plantillas de NodeJS que nos permite preprocesar código HTML de una manera más rápida y sencilla. 

Instalación de Pug.
```
npm install pug
```
Para más información (https://pugjs.org/api/getting-started.html)

### firebase

Qué es firebase.

Firebase es una plataforma de desarrollo de apps que te ayuda a desarrollar y crecer las applicaciones y juegos favoritos de los usuarios. Con el respaldo de Google.

Para más información (https://firebase.google.com/)

#### firebase-Auth

Qué es firebase-Auth:

Firebase Authentication proporciona servicios de backend, SDK fáciles de usar y bibliotecas de IU ya elaboradas para autenticar a los usuarios en tu app.

Para más información (https://firebase.google.com/)



## Endpoints html

Al usar formularios html, las rutas serán de tipo GET y POST.

- GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- GET /products/:productId: Devuelve el detalle de un producto.
- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- POST /dashboard: Crea un nuevo producto.
- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- POST /dashboard/:productId: Actualiza un producto.
- GET /dashboard/:productId/delete: Elimina un producto.

## Endpoints Api

- GET /api/products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- GET /api/products/:productId: Devuelve el detalle de un producto.
- GET /api/dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
- GET /api/dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- POST /api/dashboard: Crea un nuevo producto.
- GET /api/dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
- GET /api/dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- PUT /api/dashboard/:productId: Actualiza un producto.
- DELETE /api/dashboard/:productId/delete: Elimina un producto.