# Ejercicios de etiquetas HTML

## Ejercicio 1

Crea una página HTML que contenga lo siguiente:

- Un encabezado `<h1>` que diga "Mi página web".
- Un párrafo `<p>` que contenga el siguiente texto: "Bienvenidos a mi página web".
- Una imagen `<img>` con el siguiente atributo `src`: "<https://picsum.photos/id/[num_id]/600/400>">.
> num_id = puede tomar un valor entre el 1 y 1084
## Ejercicio 2

Crea una página HTML que contenga lo siguiente:

- Una lista `<ul>` que contenga tres elementos `<li>`, cada uno con un enlace `<a>` a una página web diferente.
- Cada enlace debe tener un texto diferente, como "Google", "Facebook" y "Twitter".
- Cada enlace debe abrirse en una nueva pestaña del navegador.
```html
<!-- target="_blank" nos permite abrir una nueva pestaña -->
<a href="https:\\google.com" target="_blank">Google</a>
```

## Ejercicio 3

Crea una página HTML que contenga lo siguiente:

- Un encabezado `<h1>` que diga "Mi lista de compras".
- Una lista `<ul>` que contenga cinco elementos `<li>`, cada uno con un artículo diferente de tu lista de compras.
- Un párrafo `<p>` que contenga el siguiente texto: "¡No te olvides de comprar todo lo que necesitas!".

## Ejercicio 4

Crea una página HTML que contenga lo siguiente:

- Un encabezado `<h1>` que diga "Mi lista de tareas".
- Una tabla `<table>` que contenga tres columnas: "Tarea", "Fecha límite" y "Completada".
- La tabla debe tener tres filas que representen diferentes tareas, con información ficticia en cada celda.

```html
<table>
    <!-- fila table row -->
    <tr>
        <!-- Columnas encabezado  table head-->
        <th>Encabezado1</th>
        <th>Encabezado2</th>
    </tr>
    <!-- fila -->
    <tr>
        <!-- dato de table : table data -->
        <td>Sonoo</td>
        <td>Jaiswal</td>
        <td>60</td>
    </tr>
</table>
```

## Ejercicio 5
Crea una página HTML basandote en el siguiente ejemplo:
- [Ejemplo pdf](Etiqutas_html.pdf)
Utilizaras un sistema de archivos, puedes optener todos los recursos en las siguientes carpetas
* [audio](audio/): ejemplo de un audio
* [example](example/): ejemplos html de como utilizar las etiquetas
* [img](img/): imagenes que se van a utilizar

### Recomendación
__Subir confirmaciones de cambios a un repositorio remoto__