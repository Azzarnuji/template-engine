import TCreateElement from "../types/TCreateElement";
import { THandleChange } from "../types/THandleChange";
import { THandleClick } from "../types/THandleClick";
interface IHTMLEditable {
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    handleClick({ elementId, callback }: THandleClick): void;
    createElement({ tagName, attributes, targetPlace }: TCreateElement): HTMLElement | undefined;
}
export { IHTMLEditable };
//# sourceMappingURL=HTMLEditable.d.ts.map