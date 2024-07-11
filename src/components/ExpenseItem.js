import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>  {/* Display department name */}
            <td>{props.cost}</td>  {/* Display allocated budget */}
            <td><button onClick={() => increaseAllocation(props.name)}>+</button></td> {/* Properly closed button tag */}
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td> {/* Properly closed TiDelete component */}
        </tr>
    );
};

export default ExpenseItem;
