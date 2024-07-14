class App {
  constructor(database) {
    this.database = database;
  }

  registerExpense(expense) {
    this.database.expenses.save(expense);
  }
}

module.exports = App;
