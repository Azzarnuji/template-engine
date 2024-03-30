import HTMLEditable from "../helpers/HTMLEditable.js";
import { THandleChange } from "../types/THandleChange";
import { THandleClick } from "../types/THandleClick";
import { useStateManagementClass } from "../utils/StateManagement.js";
declare class Engine extends useStateManagementClass implements HTMLEditable {
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    handleClick({ elementId, callback }: THandleClick): void;
    setState(id: string, value: any): void;
    getState(): void;
}
export default Engine;
//# sourceMappingURL=Engine.d.ts.map