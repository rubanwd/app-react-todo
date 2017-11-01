import React from 'react';
import './TodoApp.css';

import TodoList from './TodoList';

class TodoApp extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         items: [], 
         text: '' 
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   render() {
      return (
         <div>
            <h3>TODO</h3>
            
            <form onSubmit={this.handleSubmit}>
               <input
               onChange={this.handleChange}
               value={this.state.text}
               />
               <button>
                  Add #{this.state.items.length + 1}
               </button>
            </form>
            <TodoList items={this.state.items} />
         </div>
      );
   }

   handleChange(e) {
      this.setState({ text: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
         return;
      }
      const newItem = {
         text: this.state.text,
         id: Date.now()
      };
      this.setState(prevState => ({
         items: prevState.items.concat(newItem),
         text: ''
      }), function() {
            this._updateLocalStorage();
        });

   }

   componentDidMount() {
        var localList = JSON.parse(localStorage.getItem('items'));
        if (localList) {
            this.setState({ items: localList });
        }
    }

   

    _updateLocalStorage() {
        var items = JSON.stringify(this.state.items);
        localStorage.setItem('items', items);
    }
}

export default TodoApp;

