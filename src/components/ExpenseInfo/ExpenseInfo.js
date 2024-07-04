import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  let totalProfitAmount = 0;
  let totalLossAmount = 0;

  const netTotal = expenses.reduce((accumulator, currentExpense) => {
    const currentExpenseAmount = parseInt(currentExpense.amount);
    if (currentExpenseAmount < 0) {
      totalLossAmount += currentExpenseAmount;
    } else {
      totalProfitAmount += currentExpenseAmount;
    }
    return currentExpenseAmount + accumulator;
  }, 0);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>
          ${/* Grand total should be displayed here */ netTotal.toFixed(2)}
        </h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +$
            {
              /*Total Profit Amount should be displayed here */ totalProfitAmount
            }
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -$
            {
              /* Total expense amount should be displayed here */ totalLossAmount
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
