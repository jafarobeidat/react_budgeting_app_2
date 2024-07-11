// In this file, we will be adding text and value to the budget

import React, { useContext, useState } from 'react'; // Importing necessary hooks from React
import { AppContext } from '../context/AppContext'; // Importing the context to use it in this component

// The budget component:
const Budget = () => {
    // Accessing the budget value from the context
    const { budget } = useContext(AppContext);
    
    // Initializing a local state for the new budget value, with the initial value set to the current budget
    const [newBudget, setNewBudget] = useState(budget);
    
    // Handler function to update the new budget value when the input changes
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        // Displaying the budget and an input field to change the budget
        <div className='alert alert-secondary'>
            <span>Budget: £     </span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
