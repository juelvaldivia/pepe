const Database = require('./database/memory/database.js');
const App = require('./app/app.js');
// const Server = require('./server/server.js');

const database = new Database();
const app = new App(database);

app.registerExpense("GASTO 1");
database.expenses.update("GASTO 2");
database.expenses.getAll("GASTO 3");
database.expenses.getById("GASTO 4");
database.expenses.delete("GASTO 5");
