import { getElement } from "./utils/GetElement.js";
import { useStateManagementClass } from "./utils/StateManagement.js";
class TemplateEngine {
    constructor() {
        this.registerElementData = null;
    }
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
        (_a = getElement(elementId)) === null || _a === void 0 ? void 0 : _a.addEventListener(type, (event) => {
            callback(event);
        });
    }
    useStateManagement() {
        const state = new useStateManagementClass();
        const setState = (id, value) => {
            state.setState(id, value);
        };
        return [state.getState(), setState];
    }
    handleClick({ elementId, callback }) {
        var _a;
        (_a = getElement(elementId)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => callback(event));
    }
    registerElementAndSetElementValue(data) {
        this.registerElementData = data;
    }
    run() {
        for (const keyParent in this.registerElementData) {
            for (const keyChild in this.registerElementData[keyParent]) {
                const { id, value } = this.registerElementData[keyParent][keyChild];
                this.setElementValue(id, value);
            }
        }
    }
}
export default TemplateEngine;
//# sourceMappingURL=Template-Engine.js.map