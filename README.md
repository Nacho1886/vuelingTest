# Readme - Vueling Hackathon

Este proyecto es una prueba técnica para la hackathon de Vueling y ha sido desarrollado con las siguientes tecnologías:
- Angular 15 como plataforma principal
- Primeng para componentes y estilos
- Primeicons para la librería de iconos
- Primeflex para la creación de la estructura de la app

## Instalación

Para levantar el proyecto, es necesario tener Angular Cli instalado de manera global:
```
npm install -g @angular/cli
```
Luego, ejecutar el siguiente comando:
```
ng serve -o
```
La aplicación se abrirá en el puerto http://localhost:4200/.

## Estructura de la aplicación

La aplicación está estructurada de la siguiente manera:
- Módulo `shared` para los elementos compartidos, incluyendo un componente `login` y la importación del botón de Primeng.
- Módulo `Home` con la funcionalidad principal, incluyendo un servicio para las peticiones a la API de Unsplash, una directiva personalizada para aplicar estilos a las imágenes, un componente `body` para imprimir las cards de las fotos y un componente `card` para estructurar cada imagen.

La aplicación utiliza un `Subject` para almacenar la data de las fotos y el componente `body` se oculta o muestra en base a la presencia o ausencia de datos con un `ngIf`. El botón en el componente `card` refresca el array de fotos de forma aleatoria.
