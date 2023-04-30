import './reset.css';
import './App.css';
import Nav from './Nav';

function App() {
  const arr = [1, 2, 3]
  /* let lis1 = arr.map(ele => <li>{ele}</li>) */
  let lis2 = arr.map((ele, key) => <li key={key}>{ele}</li>)
  
  //어떤 항목을 추가 변경할때 식별자로 사용하기 위해서 키값을 꼭 적용해야하고 키값은 고유한 값이어야 함 , 인덱스 값을 키값으로 사용하면 안됨 
  return (
    <div className='App'>
      <h1>map 함수</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}
  
  //return (
    //<div className="App">
    //  <Nav></Nav>  {/* 여는태그와 닫는 태그는 무조거 있어야해 아니면 <Nav /> 이렇게 써도됌 */}
     // <h1 className='title'>리액트 시작하기</h1>
     // <ul style={{ fontSize: '30px', color: '#fff', margin: '50px auto', display: 'flex', justifyContent:'center', backgroundColor:'#698'}}> {/* 인라인에서 스타일을 적용할때  */}
       //{arr.forEach((element) => {
         // return (
         //   <li>{element}</li>
       //   )
         
      // })};
        
     // </ul>
    //</div>
 // );
//}

export default App;
/* jsx 문법 js. html 혼합해서 사용
class줄때 className이라고 해야댐 
 */

/* npm start */
