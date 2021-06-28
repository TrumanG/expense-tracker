import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormVisible, setFormVisibility] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        formVisibilityHandler();
    };

    const formVisibilityHandler = () => {
        setFormVisibility(prevState => !prevState);
    };

    return(
        <div className="new-expense">
            {!isFormVisible && <button onClick={formVisibilityHandler}>Add New Expense</button>}
            {isFormVisible && <ExpenseForm onCancel={formVisibilityHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;