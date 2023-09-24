// Objeto JSON inicial
var documentData = {
    content: "", // Aquí puedes almacenar el contenido del editor
    formatting: [], // Aquí puedes almacenar información de formato (por ejemplo, negrita)
    // Otras propiedades según sea necesario
  };
  
  // Función para actualizar el objeto JSON
  function updateJSON() {
    // Convierte el objeto JSON a una cadena JSON
    var jsonString = JSON.stringify(documentData);
  
    // Agrega un botón o función para permitir a los usuarios guardar el JSON
    // Ejemplo: Puedes crear un botón "Guardar JSON" que descargue el JSON
    var saveButton = document.getElementById('custom-save-button');
    saveButton.addEventListener('click', function() {
      // Crea un objeto Blob para el JSON
      var blob = new Blob([jsonString], { type: 'application/json' });
  
      // Crea un enlace para descargar el JSON
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'document.json';
      a.style.display = 'none';
  
      // Simula un clic en el enlace para descargar el JSON
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
  
  // Configura Quill con el botón personalizado
  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [['bold']],
    },
    theme: 'snow',
    formats: ['bold'],
  });
  
  var initialContent = '\u200B';
  quill.clipboard.dangerouslyPasteHTML(0, initialContent);
  
  // Escucha los cambios en el editor Quill y actualiza el objeto JSON
  quill.on('text-change', function() {
    // Captura el contenido del editor
    documentData.content = quill.root.innerHTML;
  
    // Captura información de formato (por ejemplo, negrita)
    documentData.formatting = quill.getFormat();
  
   
  
    // Actualiza el objeto JSON
    updateJSON();
  });
  
  // Establece el formato inicial del texto a no negrita
  quill.format('bold', false);
  
  // Tamaño de una página A4 en píxeles a 72 ppp (puntos por pulgada)
  var a4Width = 595.276;
  var a4Height = 841.890;
  
  var stage = new Konva.Stage({
    container: 'container',
    width: a4Width,
    height: a4Height,
  });
  
  const layer = new Konva.Layer();
  stage.add(layer);
  
  const shape = new Konva.Image({
    x: 10,
    y: 10,
    draggable: true,
    stroke: 'red',
    scaleX: 1 / window.devicePixelRatio,
    scaleY: 1 / window.devicePixelRatio,
  });
  layer.add(shape);
  
  // Función para eliminar el texto no deseado antes de guardar como JPG
  function removeUnwantedText(content) {
    // Reemplaza el texto no deseado con una cadena vacía o espacio en blanco
    var cleanedContent = content.replace("That is some styled text on canvas", "");
    return cleanedContent;
  }
  
  // Función para renderizar el texto visible en el editor Quill
  function renderVisibleText() {
    // Obtén todos los elementos visibles dentro del editor
    var visibleElements = document.querySelectorAll('.ql-editor > *');
  
    // Elimina el texto no deseado antes de renderizarlo
    for (var i = 0; i < visibleElements.length; i++) {
      var element = visibleElements[i];
      if (element.classList.contains('hidden-line')) {
        element.style.display = 'none'; // Oculta el elemento
      }
    }
  
    // Crea un nuevo div para contener solo los elementos visibles
    var visibleContent = document.createElement('div');
  
    // Copia los elementos visibles al div
    for (var i = 0; i < visibleElements.length; i++) {
      visibleContent.appendChild(visibleElements[i].cloneNode(true));
    }
  
    // Restaura la visibilidad de los elementos ocultos
    for (var i = 0; i < visibleElements.length; i++) {
      var element = visibleElements[i];
      if (element.classList.contains('hidden-line')) {
        element.style.display = 'block'; // Restaura la visibilidad
      }
    }
  
    // Convierte el div con contenido visible en una imagen
    html2canvas(visibleContent, {
      backgroundColor: 'rgba(0,0,0,0)',
    }).then((canvas) => {
      // Muestra la imagen dentro de Konva.Image o guárdala como JPG
      shape.image(canvas);
    });
  }
  
  // Llama a la función para renderizar solo el contenido visible
  renderVisibleText();
  
  // Luego, actualiza el contenido visible cada vez que haya un cambio de texto en Quill
  quill.on('text-change', renderVisibleText);
  
  ///////////////////////////////////////////////////////////////////////////////////////////// GUARDAR EL JPG
  
  // Obtén una referencia al botón "Guardar JPG" por su ID
  var saveJpgButton = document.getElementById('save-jpg');
  
  // Agrega un evento click al botón
  saveJpgButton.addEventListener('click', function() {
    // Captura el contenido del editor como una imagen JPG
  
    // Paso 1: Obtén una referencia al elemento que contiene el contenido del editor (en este caso, '.ql-editor').
    var editorElement = document.querySelector('.ql-editor');
  
    // Paso 2: Utiliza la librería html2canvas para convertir el contenido del editor en una imagen.
    html2canvas(editorElement, {
      backgroundColor: 'white', // Fondo blanco para asegurarte de que el contenido se vea bien
    }).then(function(canvas) {
      // Paso 3: Convierte el lienzo (canvas) en una imagen JPG
      var image = canvas.toDataURL('image/jpeg');
  
      // Paso 4: Crea un enlace para descargar la imagen JPG
      var a = document.createElement('a');
      a.href = image;
      a.download = 'documento.jpg';
  
      // Paso 5: Simula un clic en el enlace para iniciar la descarga
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
  


