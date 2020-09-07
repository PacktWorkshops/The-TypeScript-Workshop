export const account = {
  due: 1000,
  paid: 0,
  status: 'OPEN',
  payAccount: function (amount: number): string {
    if (amount > this.due - this.paid) {
      return `$${amount} is more than the outstanding balance of $${
        this.due - this.paid
      }.`;
    }
    this.paid += amount;
    if (this.paid === this.due) {
      this.status = 'CLOSED';
    }
    return this.printStatus();
  },
  printStatus: function (): string {
    return `$${this.paid} has been paid and $${
      this.due - this.paid
    } is outstanding. This account is ${this.status}.`;
  },
};

console.log(account.printStatus());

console.log(account.payAccount(1500));

console.log(account.payAccount(500));

console.log(account.payAccount(500));
