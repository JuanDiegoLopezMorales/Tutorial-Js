//Arrays
//Conceptos Clave:
//Array: Una lista ordenada de elementos que pueden ser de cualquier tipo, definidos con corchetes [].
//Acceso a elementos: Se accede a los elementos de un array usando índices, comenzando desde 0.
//Métodos comunes:
//push(): Agrega un elemento al final del array.
//pop(): Elimina el último elemento del array.

//Preguntas:
//¿Cómo se accede al primer elemento de un array?
//¿Qué método se utiliza para agregar un elemento al final de un array?

//Tarea Práctica:
//Crea un array de tus frutas favoritas y utiliza el método push para agregar una nueva fruta,
// luego imprime el array.

let frutas = ["manzana", "banana", "sandia"]; // Creación de un array
frutas.push("kiwi"); // Agrega "kiwi" al final del array
console.log(frutas); // Imprime el array actualizado



//Set
//Conceptos Clave:
//Set: Una colección de valores únicos, que no permite duplicados. Se crea usando new Set().
//Métodos comunes:
//add(): Agrega un nuevo elemento al Set.
//has(): Verifica si un elemento está presente en el Set.

//Preguntas:
//¿Cómo se crea un Set en JavaScript?
//¿Qué método puedes usar para agregar un elemento a un Set?

//Tarea Práctica:
//Crea un Set con algunos números, agrega un nuevo número, y luego imprime el Set.

let numeros = new Set([1, 2, 3, 4, 8]); // Creación de un Set con números
numeros.add(5); // Agrega el número 5 al Set
console.log(numeros); // Imprime el Set



//Map
//Conceptos Clave:
//Map: Una colección de pares clave-valor, donde cada clave es única. Se crea usando new Map().
//Métodos comunes:
//set(clave, valor): Agrega una entrada con la clave y el valor especificados.
//get(clave): Devuelve el valor asociado a la clave dada.

//Preguntas:
//¿Cómo se define un Map en JavaScript?
//¿Cómo puedes acceder a un valor en un Map usando su clave?

//Tarea Práctica:
//Crea un Map que contenga nombres y sus identificaciones,
// y luego imprime el nombre de una persona específica usando su identificación como clave.

let edades = new Map(); // Creación de un Map
edades.set(1098307917, "Juan"); // Agrega una entrada con clave 1098307917 y valor "Juan"
edades.set(10103232, "Raul"); // Agrega una entrada con clave 10103232 y valor "Raul"
console.log(edades.get(1098307917)); // Imprime el nombre de la identificación 1098307917