const ExpensesStore = require('./expensesStore.js');

class MemoryDatabase {
  constructor() {
    this.expenses = new ExpensesStore();
  }
}

module.exports = MemoryDatabase;
