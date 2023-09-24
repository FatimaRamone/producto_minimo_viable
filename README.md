# README - Uso de la librería Konva.js en un Editor de Texto Enriquecido

Este README proporciona una breve descripción y guía de uso de un editor de texto enriquecido que utiliza la librería Konva.js para la manipulación y renderizado de contenido en un lienzo. El editor permite a los usuarios crear y formatear contenido enriquecido y luego exportarlo como una imagen JPG. A continuación, se detallan los principales componentes y funcionalidades del código proporcionado.

## Descripción General

El código proporcionado es un ejemplo de un editor de texto enriquecido que utiliza la librería Quill para la edición de contenido y la librería Konva.js para renderizar el contenido en un lienzo interactivo. El objetivo principal es permitir a los usuarios crear contenido enriquecido y luego exportarlo como una imagen JPG. A continuación, se describen los componentes y funcionalidades clave del código:

### 1. Configuración de Quill

El editor Quill se inicializa en un contenedor con un botón de formato personalizado ("negrita" en este caso). Los cambios realizados en el editor Quill se capturan y actualizan en un objeto JSON.

### 2. Lienzo Konva.js

Se crea un lienzo Konva.js en el que se renderizará el contenido del editor de Quill como una imagen. Se establecen propiedades como el tamaño del lienzo y se agrega una capa para los elementos dibujables.

### 3. Renderizado de Contenido Visible

Se proporciona una función `renderVisibleText()` que toma el contenido visible del editor Quill y lo convierte en una imagen utilizando la librería html2canvas. Esto asegura que solo el contenido visible se renderice en el lienzo Konva.js.

### 4. Exportación a JPG

Se incluye un botón "Guardar JPG" que permite a los usuarios exportar el contenido del editor como una imagen JPG. Se utiliza html2canvas para convertir el contenido visible en una imagen y luego se ofrece la descarga de la misma.

## Uso de la librería Konva.js

La librería Konva.js se utiliza principalmente para crear un lienzo interactivo en el que se renderiza el contenido del editor Quill como una imagen. Esto permite la manipulación y exportación del contenido enriquecido. A continuación, se destacan algunas de las funciones clave relacionadas con Konva.js:

- `Konva.Stage`: Se crea un lienzo Konva.Stage en un contenedor especificado y se define su tamaño.

- `Konva.Layer`: Se agrega una capa al lienzo donde se colocarán los elementos dibujables.

- `Konva.Image`: Se crea una imagen Konva que representará el contenido del editor Quill. Esta imagen es draggable y puede ser manipulada.

- `renderVisibleText()`: Esta función utiliza la librería html2canvas para convertir el contenido visible del editor Quill en una imagen y la muestra en el objeto Konva.Image.

## Cómo Guardar el Contenido como JPG

El código proporciona un botón "Guardar JPG" que permite a los usuarios exportar el contenido del editor como una imagen JPG. El proceso involucra los siguientes pasos:

1. Se obtiene una referencia al elemento que contiene el contenido del editor Quill.

2. Se utiliza la librería html2canvas para convertir el contenido en una imagen. Se especifica un fondo blanco para asegurar una apariencia adecuada.

3. La imagen generada se convierte en un enlace de descarga.

4. Se simula un clic en el enlace para iniciar la descarga de la imagen JPG.

## Nota

Para un funcionamiento adecuado, es necesario incluir las librerías Quill, Konva.js y html2canvas en su proyecto.

Este README proporciona una visión general del código y su uso de la librería Konva.js en un editor de texto enriquecido. Si necesita más detalles o ayuda con la implementación, no dude en ponerse en contacto con el equipo de desarrollo.
