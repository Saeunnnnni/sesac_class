function MyButton() {
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button',
        {onClick:()=>setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
   
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
/* 마이버튼 컴포넌트를 리랜더 하는것  */