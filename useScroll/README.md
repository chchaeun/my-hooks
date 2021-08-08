# Usage
특정 범위로 페이지가 스크롤되는 것을 감지한다. 이를 통해 이벤트를 발생시킬 수 있다.

```javascript
const App = () => {
    const { y } = useScroll();
    return (
      <div style={{ height: "1000vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
      </div>
    );
  };
```