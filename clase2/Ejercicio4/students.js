// Crea un array de objetos que represente una lista de
// estudiantes.
// o Cada estudiante debe tener las propiedades: nombre, edad,
// curso y notas (un array de números).
// o Exporta este array usando module.exports.

const students = [
  {
    name: "Leo",
    age: 20,
    course: "Web Development",
    grades: [90, 85, 88]
  },
  {
    name: "Paula",
    age: 22,
    course: "Data Science",
    grades: [95, 90, 92]
  },
  {
    name: "Alicia",
    age: 25,
    course: "UX/UI Design",
    grades: [80, 85, 88]
  },
  {
    name: "Beto",
    age: 21,
    course: "Web Development",
    grades: [85, 90, 92]
  }
]

module.exports = students;