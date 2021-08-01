# Usage
```javascript
import { useTabs } from "./useTabs";

const tabs = [
    {
        title: "tab 1",
        content: "1: blah blah"
    },
    {
        title: "tab 2",
        content: "2: blah blah"    
    }
]

const App = () => {

  const { currentItem, changeItem } = useTabs(0, tabs)
  return(
        <div>
            <h1>Tabs</h1>
            {tabs.map((section, index) => (
                <button onClick={() => changeItem(index)}>
                    {section.title}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
  );
}

export default App;
```

## Logic
1. tab button 클릭이 발생하면 changeItem을 호출한다(인자로는 해당 탭의 index).
2. changeItem은 useTabs(index, tabs)를 부른다.
3. useTabs는 setIndex하고 currentItem과 changeItem을 반환한다.
4. currentIndex의 요소로 item이 바뀐 상태에서 currentItem.content를 호출하면 바뀐 탭의 content가 표시된다.

## map
배열을 대상을 요소 하나하나를 돌면서 동작을 처리해주는 함수

* 첫 번째 인자: 배열 요소
* 두 번째 인자: 배열 인덱스
