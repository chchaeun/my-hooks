# Usage
요소의 클릭을 감지하고 클릭이 발생하면 특정 함수를 실행시킨다.

```javascript
export const App = () => {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);
    return <h1 ref={title}>Hi</h1>;
};
```