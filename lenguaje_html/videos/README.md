# Etiqueta `<video>` en HTML

La etiqueta `<video>` se utiliza para insertar videos en una página web. Permite reproducir archivos de video en diferentes formatos y proporciona opciones de control, como reproducción, pausa, volumen, etc.

A continuación, se muestra un ejemplo básico de cómo usar la etiqueta `<video>` en HTML:

```html
<video width="426" height="240" controls autoplay loop muted>
  <source src="assets/video.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de video HTML.
</video>
```

En este ejemplo, se define un video con las siguientes características:

- `width`: Establece el ancho del video en 426 píxeles.
- `height`: Establece la altura del video en 240 píxeles.
- `controls`: Muestra los controles de reproducción del video.
- `autoplay`: Inicia automáticamente la reproducción del video cuando la página se carga.
- `loop`: Reproduce el video en bucle.
- `muted`: Desactiva el sonido del video.

Dentro del elemento `<video>`, se utiliza la etiqueta `<source>` para especificar la ruta del archivo de video y su tipo MIME. Asegúrate de ajustar la ruta y el nombre del archivo de video según tus necesidades.

**Ejercicios**:

1. Crea una página web con dos videos insertados usando la etiqueta `<video>`. Personaliza los atributos, como el ancho, alto, reproducción automática, bucle y sonido.
2. Agrega controles personalizados para los videos, como botones personalizados de reproducción/pausa y barra de progreso personalizada.
3. Experimenta con diferentes formatos de video, como MP4, WebM y Ogg. Asegúrate de proporcionar los archivos de video correspondientes y ajustar la etiqueta `<source>` en consecuencia.
4. Agrega una descripción o subtítulos al video utilizando la etiqueta `<track>`.
5. Aplica estilos CSS a los elementos de video para personalizar su apariencia, como cambiar los colores de los controles y ajustar el diseño.

# Colocar un video como fondo en HTML

A veces, puede ser útil y visualmente atractivo tener un video en reproducción continua como fondo de una página web. Aquí se muestra cómo lograrlo en HTML:

1. Primero, asegúrate de tener un archivo de video adecuado en un formato compatible, como MP4, WebM o Ogg. Puedes buscar videos de muestra o crear los tuyos propios.

2. Crea una estructura básica de HTML para tu página web:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Video de fondo</title>
     <style>
       /* Estilos adicionales para la página */
     </style>
   </head>
   <body>
     <!-- Contenido de la página -->
   </body>
   </html>
   ```

3. Agrega estilos CSS para el video y el contenedor que lo envolverá. Utiliza el siguiente código como punto de partida y personalízalo según tus necesidades:

   ```html
   <style>
     body {
       margin: 0;
       padding: 0;
       /* Cuando se aplica overflow: hidden; a un elemento, cualquier contenido que se extienda más allá de los límites establecidos por el tamaño y posición del elemento será recortado y no se mostrará. En otras palabras, el contenido que exceda el área visible del contenedor se ocultará. */
       overflow: hidden;
     }

     .video-container {
      /* establecer la posición de un elemento de forma fija en relación a la ventana gráfica del navegador, independientemente del desplazamiento de la página. */
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       /* establece un nivel de apilamiento inferior para un elemento, lo que significa que se colocará detrás de otros elementos con un valor z-index mayor o predeterminado. */
       z-index: -1;
     }

     video {
       width: 100%;
       height: 100%;
       /* escala proporcionalmente para que cubra completamente el área del contenedor sin perder su relación de aspecto original. Si la relación de aspecto del elemento multimedia y el contenedor son diferentes, es posible que parte del contenido se recorte. */
       object-fit: cover;
     }
   </style>
   ```

4. Agrega el video como fondo en el contenedor específico utilizando la etiqueta `<video>`:

   ```html
   <div class="video-container">
     <video autoplay muted loop>
       <source src="ruta/al/video.mp4" type="video/mp4">
       Tu navegador no admite la etiqueta de video HTML.
     </video>
   </div>
   ```

   Asegúrate de ajustar la ruta del archivo de video en la etiqueta `<source>` según la ubicación y el nombre de tu video.

5. Personaliza el resto del contenido de la página dentro del `<body>` según tus necesidades.

Recuerda que utilizar videos de fondo puede aumentar el tamaño de carga de la página y afectar el rendimiento, así que asegúrate de optimizar tus videos para la web y considerar el equilibrio entre calidad y tamaño del archivo.