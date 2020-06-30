import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
function App() {

  return (
    <div className="App">
      <Button disabled>提交</Button>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >提交</Button>
      <Button
        btnType={ButtonType.Primary}
      >提交</Button>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Small}
      >提交</Button>
      <Button
        btnType={ButtonType.Default}
      >提交</Button>
      <Button
        btnType={ButtonType.Danger}
      >提交</Button>
      <Button
        btnType={ButtonType.Warning}
      >提交</Button>
      <Button
        btnType={ButtonType.Info}
      >提交</Button>
      <Button
        btnType={ButtonType.Success}
      >提交</Button>
      <Button
        onClick={(e) => {
          e.preventDefault()
          alert('123')
        }}
      >提交</Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="https://www.baidu.com"
        target="_blank"
      >link</Button>
    </div>
  );
}

export default App;
