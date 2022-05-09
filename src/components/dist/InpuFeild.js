"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.css");
var InputFeild = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    var inputRef = react_1.useRef(null);
    return (react_1["default"].createElement("form", { className: "input", onSubmit: function (event) {
            var _a;
            handleAdd(event);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        } },
        react_1["default"].createElement("input", { ref: inputRef, type: "input", placeholder: " Enter List", value: todo, onChange: function (event) { return setTodo(event.target.value); }, className: "input_style" }),
        react_1["default"].createElement("button", { className: "input_submit", type: "submit" }, "Add")));
};
exports["default"] = InputFeild;
