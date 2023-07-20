class Account {
  transactions = [];
  constructor(number, name, amount) {
    this.number = number;
    this.name = name;
    this.amount = amount;
  }

  expense(amount) {
    this.amount -= amount;
    this.transactions.push({
      date: new Date(),
      amount: "-" + amount,
      balance: this.amount,
    });
  }

  income(amount) {
    this.amount += amount;
    this.transactions.push({
      date: new Date(),
      amount: "+" + amount,
      balance: this.amount,
    });
  }

  getSummary() {
    console.log(`Account number ${this.number} has $${this.amount}`);

    this.transactions.forEach((trans) => {
      console.log(
        `Date: ${trans.date}    amount: ${trans.amount}    balance: ${trans.balance}`
      );
    });
  }
}

const myAccount = new Account("567", "John Smith", 2000);
myAccount.income(500);
myAccount.expense(2);
myAccount.expense(6.75);
myAccount.income(1200);
myAccount.getSummary();
