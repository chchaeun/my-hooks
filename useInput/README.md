# Usage
validtor에 조건을 넣어주어 조건에 맞지 않는 값은 input에 입력되지 못하도록 막는다.

```javascript
import useInput from "my-hooks/useInput"

const App = () => {
  const validator = value => value.length < 10;
  const name = useInput("unknown", validator);
  return (
    <div className="App">
      <h1>Input</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
};
```