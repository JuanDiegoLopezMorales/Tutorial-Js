//Manejo de Excepciones
//Conceptos Clave:
//try...catch: Permite manejar errores que ocurren en tiempo de ejecución. La estructura es: 

//try {
// Código que puede causar un error
//} catch (error) {
// Código que maneja el error}

//Preguntas:
//¿Para qué se utiliza un bloque try?
//¿Qué sucede si no se maneja una excepción?

//Tarea Práctica:
//Escribe un código que intente convertir un texto a un número y maneje cualquier error que ocurra.

try {
    let numero = parseInt("30"); // Intenta convertir texto a número
    console.log(numero); // Imprime el número
  } catch (error) {
    console.log("Error:", error.message); // Captura y muestra el error
  }



try {
    let numero = parseInt("Minimo 5 Arle"); // Intenta convertir texto a número
    console.log(numero); // Imprime el número
  } catch (error) {
    console.log("Error:", error.message); // Captura y muestra el error
  }