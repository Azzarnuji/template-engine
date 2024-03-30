import { THandleChange } from "../types/THandleChange";
import { THandleClick } from "../types/THandleClick";
interface IHTMLEditable {
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    handleClick({ elementId, callback }: THandleClick): void;
}
export { IHTMLEditable };
//# sourceMappingURL=HTMLEditable.d.ts.map