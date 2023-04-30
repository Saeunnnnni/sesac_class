import './App.css';
import { useState,useCallback } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoTitleArea from './components/TodoTitleArea';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';


const debounceSetItem = debounce(setItem,6000) 
 
function App() {

  const [todos, setTodos] = useState(getItem('todo')||[])//localstorage에 아무것도 없는 상태가 있을수도 있으니까 or로 받아줌
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);

  const setTodo = useCallback((newTodo) => { //새로 적은 값으로 todos를 교체 
    const newTodos = [...todos]; //todos가 훼손되지 않도록 복사해서 새로운 newTodos배열이 생긴것 
    newTodos[selectedTodoIndex] = newTodo;
    setTodos(newTodos); //카피가 되었기 때문에 같은 형태이지만 다른 레퍼런스를 갖는다.  
   // localStorage.setItem('todo',JSON.stringify(newTodos)) 
   debounceSetItem('todo',newTodos)
  },[selectedTodoIndex,todos])
  const addTodo =useCallback(() => {
    const newTodos = [
      ...todos,
      {
        title: '💜Untitled',
        content: ''
      }
    ]
    setTodos(newTodos)
    setSelectedTodoIndex(todos, length);
    debounceSetItem('todo', newTodos)
  },[todos])
    setItem('todo',newTodos)
   // localStorage.setItem('todo',JSON.stringify(newTodos))  

  

  const deleteTodo =useCallback( (index) => {
    const newTodos = [...todos]; 
    newTodos.splice(index, 1)//인덱스부터 한개까지 삭제 된 배열 
    setTodos(newTodos)
    if (index === selectedTodoIndex) {
      setSelectedTodoIndex(0);
    }
    setItem('todo',newTodos)
    //localStorage.setItem('todo',JSON.stringify(newTodos))
  },[selectedTodoIndex,todos])
  
  return (
  
    <div className="App">
      <TodoTitleArea todos={todos}
        setSelectedTodoIndex={setSelectedTodoIndex}
        selectedTodoIndex={selectedTodoIndex}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      /> {/* -> 값이 필요하기 때문에 porps로 내려줌  */}     
      <TodoContainer todo={todos[selectedTodoIndex]} setTodo={setTodo} />
      
    </div>
  );
}

export default App;
