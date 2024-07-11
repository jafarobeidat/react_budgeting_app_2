import React, { useContext } from 'react'; // Importing necessary hooks from React
import { AppContext } from '../context/AppContext'; // Importing the context to use it in this component

// The Remaining component:
const Remaining = () => {
    // Accessing expenses and budget values from the context
    const { expenses, budget } = useContext(AppContext);

    // Calculating the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // Determining the alert type based on whether the total expenses exceed the budget
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    // Rendering the remaining budget with the appropriate alert type
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
