import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    	return (
      		<ul>
        		{this.props.items.map(item => (
          			<li key={item.id}>{item.text}</li>
        		))}
      		</ul>
    	);
  	}
}

export default TodoList;