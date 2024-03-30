import { getElement } from "../utils/GetElement";
class HTMLEditable {
    setElementValue(elementId, value) {
        const element = getElement(elementId);
        if (element) {
            element.innerHTML = value;
        }
    }
    changeBackgroundColor(elementId, value) {
        const element = getElement(elementId);
        if (element) {
            element.style.backgroundColor = value;
        }
    }
    handleChangeInput({ elementId, type, callback }) {
        var _a;
        console.log(getElement(elementId));
        (_a = getElement(elementId)) === null || _a === void 0 ? void 0 : _a.addEventListener(type, (event) => {
            callback(event);
        });
    }
    handleClick({ elementId, callback }) {
        var _a;
        (_a = getElement(elementId)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => callback(event));
    }
}
export default HTMLEditable;
//# sourceMappingURL=HTMLEditable.js.map