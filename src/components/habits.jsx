import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
// state 를 수정하는것은 좋지 않다. 
    handleIncrement = habit =>{
        this.props.onIncrement(habit);
    }
    handleDecreament = habit =>{
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDecrement(habit);
    };
    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd} />
            <ul>
                {this.props.habits.map(habit => (
                    <Habit 
                    key={habit.id}
                    habit={habit} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecreament}
                    onDelete={this.handleDelete}
                    />
                ))}
            </ul>
            <button className="hab-ts-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;