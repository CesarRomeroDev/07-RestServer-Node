# 07-RestServer-Node

## Iniciando Proyecto

1- Ingresa a tu proyecto en consolo y ejecuta:

```text
npm init -y
```

2- Prodras observar que en la consola se iniciaron varias lineas, esto indica la información del proyecto, tanto el nombre, la versión, autores etc.

3- Podemos observar que tambien se creo un archivo package.json. Esté archivo contendra los paquetes intalados que tiene el proyecto.

4- Para hacer una prueba, creamos un archivo llamado app.js, hacemos un console.log('Hola Mundo') y corremos en consola:

```text
nodemon app
```

## Instalar servidor express y variables de entorno con dotenv

1- ingresa el siguiente comando en consola.

```text
npm i express dotenv
```

## Instalar cors middlewares

El cors nos permite proteger nuestro servidor.

1 - ingresa el sigueinte comando en tu proyecto de la raiz:

```text
npm i cors
```

## Crear un Tag en Git.

1 - ingresa a consola de tu proyento en la raiz.

2 - ingresa el siguiente comando en consola.

```text
git tag -a v1.0.0 -m "Fín sección"
```

3 - La versión es funcional en un estado "v1.0.0" y una versión a un no terminada seria "v1.0.1" haciendo otras modificaciónes "v1.0.2", versión ya funcional "v2.0.2"