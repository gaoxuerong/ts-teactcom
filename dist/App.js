import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { disabled: true }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Large }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Primary }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Small }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Default }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Danger }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Warning }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Info }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Success }, "\u63D0\u4EA4"),
        React.createElement(Button, { onClick: function (e) {
                e.preventDefault();
                alert('123');
            } }, "\u63D0\u4EA4"),
        React.createElement(Button, { btnType: ButtonType.Link, size: ButtonSize.Large, href: "https://www.baidu.com", target: "_blank" }, "link")));
}
export default App;
