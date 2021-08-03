# Usage
사용자의 마우스가 document 창을 벗어났을 때 함수를 발생시킨다. 좌표를 통해 어느 방향으로 벗어나는지에 따라서도 동작을 변화시킬 수 있다.

```javascript
export const App = () => {
    const begForLife = () => console.log("don't leave");
    useBeforeLeave(begForLife);
    return <div>Hello</div>;
};
```