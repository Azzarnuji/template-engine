import HTMLEditable from "../helpers/HTMLEditable.js";
import { useStateManagementClass } from "../utils/StateManagement.js";
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
class Engine extends useStateManagementClass {
    setElementValue(elementId, value) {
        throw new Error("Method not implemented.");
    }
    changeBackgroundColor(elementId, value) {
        throw new Error("Method not implemented.");
    }
    handleChangeInput({ elementId, type, callback }) {
        throw new Error("Method not implemented.");
    }
    handleClick({ elementId, callback }) {
        throw new Error("Method not implemented.");
    }
    setState(id, value) {
        throw new Error("Method not implemented.");
    }
    getState() {
        throw new Error("Method not implemented.");
    }
}
applyMixins(Engine, [useStateManagementClass, HTMLEditable]);
export default Engine;
//# sourceMappingURL=Engine.js.map