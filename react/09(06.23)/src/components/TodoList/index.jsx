import React from 'react';
import TodoItem from './../TodoItem';

const TodoList = ({todos,selectedTodoIndex,setSelectedTodoIndex,deleteTodo}) => {
    return (
        <div>
            {
                todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        onClickItem={() => {
                            setSelectedTodoIndex(index)
                            
                        }}//-> 이벤트에 연결 , 인덱스를 선택한 인덱스의 값으로 바꿔줌 
                        isSelected={index===selectedTodoIndex}
                        onClickDelete={
                            (e) => {
                                deleteTodo(index)
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                    >
                        {todo.title} {/* //컴퍼넌트 안에 있는 props값을 받을때는 children으로 받아야함 ->todoitem에서 받을때   */}
                        </TodoItem> //열고 닫는 컴퍼넌트 
                ))
           } 
        </div>
    );
};

export default TodoList;