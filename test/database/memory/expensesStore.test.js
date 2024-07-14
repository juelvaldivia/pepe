const assert = require('assert');

const ExpensesStore = require('../../../database/memory/expensesStore.js')
const Expense = require('../../../app/entities/expense.js')

describe('Expenses Store', function () {
  let store;
  let date;

  beforeEach(function () {
    store = new ExpensesStore();
    date = new Date('2024-07-13');
  });

  describe('#save()', function () {
    it('should save an expense successfully', function() {
      const newExpense = new Expense('rent payment', 3000, date, 1);

      const result = store.save(newExpense);

      assert.equal(result.description, 'rent payment')
      assert.equal(result.amount, 3000)
      assert.equal(result.date, date)
      assert.equal(result.folio, 1)
    })

    it('should raise an error when description is not a string', function() {
      const newExpense = new Expense(true, 3000, date, 1);

      assert.throws(() => store.save(newExpense),{
        name: 'Error',
        message: 'Description must be a string'
      })
    })
  })

  describe('#getAll()', function() {
    it('should return all expenses', function() {
      const newExpense = new Expense('rent payment', 3000, date, 1);
      store.save(newExpense);

      const expenses = store.getAll();

      assert.equal(expenses[0].description, 'rent payment')
      assert.equal(expenses[0].amount, 3000)
      assert.equal(expenses[0].date, date)
      assert.equal(expenses[0].folio, 1)
    })
  })
})
