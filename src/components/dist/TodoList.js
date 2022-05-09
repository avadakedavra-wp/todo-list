"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoList = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos;
    return (react_1["default"].createElement("div", { className: "todos" }, todos.map(function (items) { return (react_1["default"].createElement("li", null, items.todo)); })));
};
exports["default"] = TodoList;
