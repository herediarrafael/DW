# La etiqueta `<head>` en HTML
[icon ](https://convertio.co/es/png-ico/)

La etiqueta `<head>` se utiliza para contener información relevante para el documento HTML, como metadatos, vínculos a hojas de estilo, scripts y más. Aquí tienes una descripción de algunos elementos comunes que se encuentran dentro de la etiqueta `<head>`:

- `<title>`: Define el título de la página, que se muestra en la barra de título del navegador. Se coloca dentro de la etiqueta `<head>` y antes de la etiqueta `<body>`. Ejemplo:

  ```html
  <title>Título de mi página web</title>
  ```

- `<meta charset="...">`: Especifica la codificación de caracteres utilizada en el documento. El atributo `charset` se establece en el valor de la codificación de caracteres que se está utilizando, como UTF-8. Ejemplo:

  ```html
  <meta charset="UTF-8">
  ```

- `<meta name="..." content="...">`: Proporciona metadatos adicionales sobre el documento, como la descripción de la página, palabras clave, autor, etc. El atributo `name` indica el tipo de metadato y el atributo `content` contiene el valor correspondiente. Ejemplo:

  ```html
  <meta name="description" content="Una breve descripción de la página">
  <meta name="keywords" content="HTML, desarrollo web, etiquetas">
  ```

- `<link rel="..." href="...">`: Se utiliza para vincular el documento HTML a una hoja de estilo externa o a otros recursos. El atributo `rel` especifica el tipo de relación y el atributo `href` contiene la URL del recurso. Ejemplo:

  ```html
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  ```

- `<style>`: Permite agregar reglas de estilo CSS directamente en el documento HTML. Se coloca dentro de la etiqueta `<head>`. Ejemplo:

  ```html
  <style>
    body {
      background-color: #f1f1f1;
      font-family: Arial, sans-serif;
    }
  </style>
  ```

- `<script src="..."></script>`: Permite incluir un archivo JavaScript externo en el documento. El atributo `src` indica la ruta del archivo JavaScript. Ejemplo:

  ```html
  <script src="script.js"></script>
  ```

**Ejercicios**:

1. Agrega una etiqueta `<title>` con el título de tu página web.
2. Utiliza la etiqueta `<meta charset="...">` para especificar la codificación de caracteres UTF-8.
3. Añade una etiqueta `<meta name="description" content="...">` para proporcionar una breve descripción de tu página web.
4. Vincula tu página web a una hoja de estilo externa utilizando la etiqueta `<link rel="stylesheet" href="...">`. Asegúrate de tener un archivo CSS válido para vincularlo.
5. Si tienes un ícono personalizado (favicon) para tu página, utiliza la etiqueta `<link rel="icon" href="...">` para agregarlo. Asegúrate de proporcionar la ruta correcta y el tipo de archivo.
6. Si deseas agregar reglas de estilo CSS directamente en tu documento HTML, utiliza la etiqueta `<style>` para hacerlo.
7. Si tienes algún archivo JavaScript externo, añade la etiqueta `<script src="..."></script>` para incluirlo en tu documento HTML.