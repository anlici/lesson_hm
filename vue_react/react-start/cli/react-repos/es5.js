"use strict";
// 原生 js 不支持jsx语法
var hello = React.createElement(
    "h1",
    {},
    "hello world",/*#__PURE__*/React.createElement(
        "span",
        {},
        "hello world"
    )
);
