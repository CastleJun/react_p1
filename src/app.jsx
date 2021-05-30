import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };
    // state 를 수정하는것은 좋지 않다. 
    handleIncrement = (habit) =>{
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
        // this.setState({habits : habits});
    }
    handleDecreament = habit =>{
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        // 직접적 수정하면 안됨
        this.setState({habits});
    }

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    handleAdd = name => {
      const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
      this.setState({habits});
    }

    handleReset = () =>{
      const habits = this.state.habits.map(habit => {
        habit.count = 0;
        return habit;
      })
      this.setState({habits});
    };
  render() {
    return (
      <>
        <Navbar
        totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
