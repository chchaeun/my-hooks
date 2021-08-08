# Usage
HTML element를 전체화면으로 만들어준다. 브라우저에 따라 full screen을 요청하는 방법이 달라 경우에 따라 trigger 해주었다. 요청 시 callback 함수를 인자로 보내주어 현재 스크린 상태가 full인지 아닌지 얻을 수 있다.

```javascript

const App = () => {
    const isFull = (tof) => {
      console.log(tof ? "full" : "small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(isFull);
    return (
      <div ref={element}>
        <img
          style={{ width: "100px" }}
          src="https://am23.mediaite.com/tms/cnt/uploads/2021/04/davidtennant_1600x720.0.jpg"
        />
        <br />
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
    );
  };
  
```