class ExpensesStore {
  constructor() {
    this.expenses = [];
  }

  save(expense) {
    if (typeof expense.description !== 'string'){
      throw new Error('Description must be a string');
    }
    if (typeof expense.amount !== 'number'){
      throw new Error('Amount must be a number');
    }
    if (!(expense.date instanceof Date)){
      throw new Error('Date must be a date');
    }
    if (typeof expense.folio !== 'number'){
      throw new Error('Folio must be a number');
    }

    this.expenses.push(expense);

    return expense;
  }

  getAll() {
    return this.expenses;
  }
}

module.exports = ExpensesStore;
