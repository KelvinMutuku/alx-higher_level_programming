const request = require("request");

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);

  const completedTasks = todos.filter((todo) => todo.completed);

  const completedTasksByUserId = {};

  for (const todo of completedTasks) {
    const userId = todo.userId;

    if (!completedTasksByUserId[userId]) {
      completedTasksByUserId[userId] = 0;
    }

    completedTasksByUserId[userId]++;
  }

  for (const userId in completedTasksByUserId) {
    console.log(`User ${userId}: ${completedTasksByUserId[userId]} tasks completed`);
  }
});
