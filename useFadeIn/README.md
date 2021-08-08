# Usage
HTML element를 띄울 때 페이지가 mount된 후 몇 초 뒤, 몇 초동안 Fade In 할 것인지 설정할 수 있다.

`useFadeIn(duration, delay)`
지속시간, 지연시간을 인자로 보낸다.

```javascript
const App = () => {
    const fadeInH1 = useFadeIn(3, 2);
    return (
      <div>
        <h1 {...fadeInH1}>Hello</h1>
      </div>
    );
  };
```