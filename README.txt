TP Final: Supermercado.

1- Crear una página estática en la cual se presente información sobre el supermercado con su historia,
   imagenes, descripción, información general, etc. (Home).

2- La página 2 es el sitio principal, donde el usuario va a ver:
   a- la lista de productos (nombre y precio) del mercado,
   b- que se tienen que cargar desde Javascript (es decir una lista fija de productos).

3- Por cada elemento debe haber un input donde el usuario seleccione la cantidad de productos que va a comprar.

4- Una vez que el usuario haga click en el botón “comprar”, se deben validar:
   a- que la cantidad de productos ingresada por el usuario sea menor o igual a la cantidad de productos disponibles
   b- y mayor o igual que 0,
   c- el stock de cada producto también tiene que estar cargado previamente desde Javascript (al igual que 
      los productos y precios (2-b)).

5- Si hay algún producto que no tenga stock suficiente, se debe mostrar un mensaje de error. 

6- Si todos los productos están disponibles en la cantidad seleccionada, se tiene que mostrar el total de la compra.
   (No es obligacion ingresar metodo de pago).

7- Crear una Página con los datos de contacto del mercado. ( La agregue al footer, y en la pagina del formulario)

8- Crear un formulario de contacto donde el usuario podrá ingresar:
   a- nombre,
   b- apellido, 
   c- email,
   d- telefono,
   e- y box donde el usuario podrá ingresar su consulta.
   f- La información completada en el formulario, deberá almacenarse  en un archivo .txt al momento en que el 
    usuario apriete el botón “Enviar”.

9- Todas las pestañas tienen que tener:
   a- header,
   b- sección principal
   c- y un footer (diseño libre)

10- En el Header se debe incluir un menú que permita al usuario navegar entre las diferentes páginas.

11- Para la nota final no solo es importante que sea funcional, sino que también también se valorarán:
    a- las buenas prácticas y
    b- la aplicacion de los conceptos vistos a lo largo del cuatrimestre (Flexbox, Herencia, cascada, JS, etc.)

12- Extras: 
            a- Agregar un producto en el home que este de oferta con 30% de descuento.
            b- Agregar distintos métodos de pago (tarjeta de crédito en cuotas, debito, efectivo).


Respuestas:
           1- index.html lineas 1 a 66

           2-a- productos.html lineas 43 a 72
           2-b- script.js lineas 1 a 5 y 38 a 54

           3- productos.html lineas 73 a 85

           4-a- script.js lineas 61 y 90
           4-b- script.js lineas 62 y 88
           4-c- script.js linea 6 y lineas 57 a 64

           5- script.js lineas 74 a 80 y linea 91

           6- script.js lineas 98 a 102

           7- form.html lineas 45 a 51

           8- form.html lineas 25 a 44
           8-a- form.html lineas 27 a 28
           8-b- form.html lineas 29 a 30
           8-c- form.html lineas 31 a 32
           8-d- form.html lineas 33 a 34
           8-e- form.html lineas 37 a 40
           8-f- form.js lineas 1 a 32

           9-a- index.html lineas 11 a 17
                productos.html lineas 11 a 17
                form.html lineas 11 a 17 
           9-b- index.html lineas 18 a 59
                productos.html lineas 18 a 92
                form.html lineas 18 a 54
           9-c- index.html lineas 60 a 63
                productos.html lineas 93 a 96
                form.html lineas 55 a 58

          10- index.html / productos.html / form.html lineas 12 a 16

          11-a- A valorar por los profes y tutores. (indentacion, comentarios y uso de camelCase estan presentes en el TP)
          11-b- style.css lineas 1 a 330

          12-a- pendiente
          12-b- pendiente


          Otros Extras:

          1- Validacion formulario: form.html lineas 28 a 41
                                    form.js lineas 13 a 15

          2- Alertas: index.js lineas 1 a 34
                      script.js lineas 20 a 37
                      form.js lineas 34 a 43

         3- Toogle de imagenes: productos.html lineas 21 a 27
                                script.js lineas 108 a 116

         4- Imagenes agregadas en productos.html (tanto de los productos como de propagandas)

         5- Renovacion de stock luego de una compra: script.js linea 94

            