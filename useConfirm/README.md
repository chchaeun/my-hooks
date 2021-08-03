# Usage
요소에 이벤트가 발생했을 때 정말 그 함수를 실행할 것인지 확인한다.
```javascript
export const App = () => {
    const deleteWorld = () => console.log("delete the world...");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld);
    return <button onClick={confirmDelete}>Delete the world</button>;
  };
```