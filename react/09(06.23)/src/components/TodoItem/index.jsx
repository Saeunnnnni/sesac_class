import React from 'react';
import './index.css'

const TodoItem = ({children,onClickItem,isSelected,onClickDelete}) => {
    return (
        
        <div onClick={onClickItem} className={isSelected ? 'TodoItem active' : 'TodoItem'} >
            {/* todolist에서 onclickItem를 setSelectedTodoIndex(index)으로 저장했기때문에 여기서도 onclick안에setSelectedTodoIndex(index) 전달된거지 */} 
                {children} {/* {todo.title}  //컴퍼넌트 안에 있는 props값을 받을때는 children으로 받아야함 */}
                <button className='TodoItem__deletedBtn' onClick={onClickDelete}>Del</button> {/* delelte버튼 생성 */}

            
        </div>
    );
};

export default TodoItem;