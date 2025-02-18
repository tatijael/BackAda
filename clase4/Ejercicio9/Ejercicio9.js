const fs = require('fs');

const filePath = '../Ejercicio6/goals.json';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const goals = JSON.parse(data);

  const modifiedGoals = goals.map((goal, index) => ({
    description: goal,
    status: index % 2 === 0 ? 'completed' : 'pending'
  }));

  const completedGoals = modifiedGoals.filter(goal => goal.status === 'completed');
  console.log('Completed Goals:');
  console.log(completedGoals);


  const goalsJSON = JSON.stringify(modifiedGoals, null, 2);


  fs.writeFile(filePath, goalsJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File written successfully');
  });
});