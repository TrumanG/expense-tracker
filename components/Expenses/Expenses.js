import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from '../Chart/ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onFilterSelect={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
