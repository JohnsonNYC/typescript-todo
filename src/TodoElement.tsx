import React from 'react'
import styled from 'styled-components';

type TodoItem = {
  id: number;
  text: string;
  complete: boolean;
}

type TodoElementProps = {
  todo: TodoItem;
  removeFromTodo: (id: number) => void;
  handleComplete: (id: number) => void;
}

const TodoElement = ({ todo, removeFromTodo, handleComplete}: TodoElementProps) => {

  return (  
  <List key={todo.id}>
    <input type="checkbox" checked={todo.complete} onClick={() => handleComplete(todo.id)}/>
    <div>{todo.text}</div>
    <button onClick={() => removeFromTodo(todo.id)}>Remove</button>
  </List>);
} 

export default TodoElement;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px; 
  margin: 5px;
  width: 300px;

  button {
    margin-left: auto;
  }
`