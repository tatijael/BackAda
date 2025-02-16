const students = require('./students.js');

console.log(students)

function calculateAverage(student) {
  let sum = 0;
  for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
  }
  return sum / student.grades.length;
}

const studentPaula = students.find(student => student.name === 'Paula');
 
if (studentPaula) {
  const average = calculateAverage(studentPaula);
  console.log(`Average grade for Paula: ${average}`);
} else {
  console.log('Student not found');
}

const newStudent = {
  name: "Juan",
  age: 23,
  course: "Design",
  grades: [85, 90, 92]
}

students.push(newStudent);

console.log("Students", JSON.stringify(students, null, 2))