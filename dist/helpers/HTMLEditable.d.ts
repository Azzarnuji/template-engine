import { THandleChange } from "../types/THandleChange";
import { THandleClick } from "../types/THandleClick";
declare class HTMLEditable {
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    handleClick({ elementId, callback }: THandleClick): void;
}
export default HTMLEditable;
//# sourceMappingURL=HTMLEditable.d.ts.map