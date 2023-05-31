# La etiqueta `<table>` en HTML

La etiqueta `<table>` se utiliza para crear tablas en HTML. Las tablas son una forma efectiva de organizar y presentar datos de manera estructurada. La etiqueta `<table>` se compone de varias etiquetas secundarias para definir la estructura y el contenido de la tabla. A continuación, se describen algunos atributos y elementos comunes utilizados con la etiqueta `<table>`:

- `border`: El atributo `border` se utiliza para especificar el ancho del borde de la tabla y de las celdas. Puede establecerse en un valor numérico, como `1`, para definir un borde visible. Ejemplo:

  ```html
  <table border="1">
    <!-- contenido de la tabla -->
  </table>
  ```

- `colspan`: El atributo `colspan` se utiliza para especificar cuántas columnas debe abarcar una celda. Puede ser útil cuando deseas combinar varias celdas en una sola para una mejor organización. Ejemplo:

  ```html
  <tr>
    <td colspan="2">Celda que abarca 2 columnas</td>
    <td>Otra celda</td>
  </tr>
  ```

- `rowspan`: El atributo `rowspan` se utiliza para especificar cuántas filas debe abarcar una celda. Esto puede ser útil para fusionar celdas verticalmente. Ejemplo:

  ```html
  <tr>
    <td rowspan="2">Celda que abarca 2 filas</td>
    <td>Otra celda</td>
  </tr>
  <tr>
    <td>Otra celda</td>
  </tr>
  ```

**Ejercicios**:

1. Crea una tabla con 3 columnas y 4 filas. Agrega el atributo `border` para definir un borde visible.
2. Utiliza `colspan` para fusionar dos celdas consecutivas en la segunda columna.
3. Utiliza `rowspan` para fusionar dos celdas consecutivas en la segunda fila.
4. Crea una tabla más compleja con varias filas y columnas. Experimenta con `colspan` y `rowspan` para fusionar celdas y lograr la estructura deseada.
5. Aplica estilos CSS personalizados a la tabla y las celdas utilizando clases o identificadores.