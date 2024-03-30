import { IHTMLEditable } from "./interfaces/HTMLEditable.js";
import { IUseStateManagementClass } from "./interfaces/UseStateManagemenntClass";
import { THandleChange } from "./types/THandleChange";
import { THandleClick } from "./types/THandleClick";
import { TRegisterElemet } from "./types/TRegisterElement";
declare class TemplateEngine implements IUseStateManagementClass, IHTMLEditable {
    private registerElementData;
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    useStateManagement(): any[];
    handleClick({ elementId, callback }: THandleClick): void;
    registerElementAndSetElementValue(data: TRegisterElemet): void;
    run(): void;
}
export default TemplateEngine;
//# sourceMappingURL=Template-Engine.d.ts.map