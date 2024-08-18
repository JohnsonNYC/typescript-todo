import React, {useState} from 'react';
import TodoElement from './TodoElement';
import styled from 'styled-components';

type TodoItem = {
  id: number;
  text: string;
  complete: boolean;
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>('');
  
  const handleAddToList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault(); 
    setTodos([...todos, {id: todos.length, text: input, complete: false}]);
    setInput('');  
  }

  const removeFromTodo = (id: number): void => {
    let todoCopy = [...todos];
    todoCopy.splice(id, 1);
    setTodos(todoCopy);
  }

  const handleComplete = (id: number): void => {
    let todoCopy = [...todos];
    todoCopy[id].complete = !todoCopy[id].complete;
    setTodos(todoCopy);
  }

  return ( <>
  <Form>
    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
    <button onClick={e => handleAddToList(e)}>Add</button>
  </Form> 

  <h2>Todo List</h2>
    <UL>
      {todos.map(todo => <TodoElement key={todo.id} todo={todo} removeFromTodo={removeFromTodo} handleComplete={handleComplete}/>)}
    </UL>
  </>
  );
}

export default TodoContainer;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const UL = styled.ul`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`