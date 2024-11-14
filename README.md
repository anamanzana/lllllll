[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QTUQnWJd)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15752572&assignment_repo_type=AssignmentRepo)
# Tarea 2 :construction:

* :pencil2: **Nombre:** Ana Mahns Condeza
* :pencil2: **Correo:** amahns@uc.cl

## Código :symbols:

### :computer: Cómo ejecutar este código [1 Punto]
Para ejecutar este código de la página de creación de recetas en una aplicación React, sigue estos pasos:
1. Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, descárgalo e instálalo desde Node.js.
2. Clona el repositorio del proyecto o descarga los archivos en tu computadora.
3. En la terminal, navega a la carpeta del proyecto:

cd /ruta/al/proyecto
Instala las dependencias del proyecto con:
npm install

Ejecuta la aplicación en modo de desarrollo:
npm start
Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.

### :teacher: Explicación del funcionamiento del código [1.5 Puntos]

El código implementa un formulario en la página CreateRecipePage que permite a los usuarios crear una nueva receta. El formulario incluye campos para el título, descripción, ingredientes, pasos, URL de la imagen, evaluación, y tiempo de preparación.

Estados: El componente utiliza hooks de estado (useState) para controlar los valores de los campos del formulario. Cada campo tiene su propio estado.

Manejo del formulario: Al enviar el formulario (handleSubmit), los valores ingresados son validados. Si algún campo está vacío, se muestra un mensaje de error. Los ingredientes y pasos se dividen en arrays antes de enviarlos.

Envío de datos a la API: Los datos del formulario se envían a la API usando una función createRecipe, que hace una petición POST al backend para crear una nueva receta. Si la receta se crea con éxito, el usuario es redirigido a la página de recetas.

Manejo de errores: Si ocurre un error durante la creación de la receta, se muestra un mensaje de error en la pantalla.

### :warning: Funcionalidades implementadas y no implementadas

 RecipePage: Cumple parcialmente: logra desplegar las recetas pero no cumple la navegacion fluida.
  Se espera que la página muestre todas las recetas obtenidas de
la API en una grilla de 3x3, utilizando el método GET. Además, la página debe incluir
una paginación funcional que permita navegar entre las distintas recetas, y debe utilizar
correctamente el componente RecipeCard para cada receta.
• CreatePage: Cumple con lo esperado. Se espera que la página contenga un formulario funcional para
crear nuevas recetas. El formulario debe utilizar el método POST, incluir todos los campos
necesarios, impedir el envío si falta rellenar algún campo, y mostrar un mensaje de éxito
al completar el registro correctamente.
• App: Cumple con lo esperado. Se espera que el archivo App.jsx incluya el componente Navbar en el
body, de manera que todas las vistas de la aplicación muestren consistentemente la barra
de navegación.
• Navbar: Cumple con lo esperado. Se espera que el componente de navegación incluya el logo de la página, el nombre, y enlaces que permitan navegar entre las diferentes páginas de la aplicación
de manera intuitiva y accesible.
• RecipeCard: Se muestra de manera adecuada
• RecipeModal: Cumple parcialmente. 
Permite eliminar, despliega las opciones y hace el update pero tiene una doble ventana que dificulta cambiar los datos.
• PageNavigator: Parcialmente completado, se visualizan los elementos. Se espera que el componente permita la navegación entre las
páginas de recetas, con la funcionalidad de avanzar, retroceder, ir al inicio y al fin. Además, debe mostrar correctamente la página actual y el total de páginas disponibles.
• RecipeForm: Se cumple con lo esperado. Se espera que el componente incluya todos los campos necesarios para crear una nueva receta, utilizando el formato correcto para las listas. Además, debe evitar el envío del formulario si falta algún valor, y aplicar validaciones adecuadas
en los campos numéricos y en el campo de enlace.

## Reflexión :thought_balloon: [3.5 Puntos]

### :scroll: ¿Para que utilizamos *async* y *await* en las funciones? [1 Punto]

Usamos async y await para manejar operaciones asíncronas de manera más legible y sencilla en JavaScript. En este caso, async declara que la función será asíncrona, lo que permite el uso de await dentro de ella. await pausa la ejecución de la función hasta que la promesa que está esperando se resuelve o rechaza. Esto es útil cuando realizamos llamadas a una API o cualquier operación que no devuelve un resultado inmediato, permitiendo escribir código que parece secuencial pero en realidad es asíncrono.

### :thinking: En cuanto a códigos de error, ¿qué ocurre al intentar enviar valores que no son válidos? [1 Punto]

Si intentas enviar valores no válidos al backend, el servidor devolverá un código de error HTTP, generalmente un 400 Bad Request en caso de datos inválidos. Este error se puede manejar en el bloque catch de la función asíncrona, donde se puede mostrar un mensaje de error específico para el usuario. En este caso, si los datos enviados no son válidos, el mensaje de error "Failed to create recipe. Please try again." será mostrado.

### :adhesive_bandage: Explica la diferencia entre *props* y *state* dentro de un componente React. ¿En qué situaciones utilizarías cada uno? [1.5 Puntos]

Props: Son entradas que se pasan a un componente desde su componente padre. Son inmutables, lo que significa que el componente no puede cambiar directamente los valores de props. Se utilizan para mostrar información que proviene de componentes externos, como cuando pasas datos a un componente hijo.

Uso de props: Se utilizarían para pasar información estática o valores calculados desde un componente superior, como el título o imagen de una receta a un componente RecipeCard.

State: Es interno al componente y mutable. Los valores en el state pueden ser cambiados dentro del componente en respuesta a interacciones del usuario o resultados de operaciones asincrónicas. Los cambios en el state causan que el componente se vuelva a renderizar con los valores actualizados.

Uso de state: Se utilizaría para manejar información que cambia dinámicamente dentro del componente, como los valores del formulario en CreateRecipePage, donde los campos del formulario almacenan su valor en el state del componente.