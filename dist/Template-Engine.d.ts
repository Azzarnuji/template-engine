import { IHTMLEditable } from "./interfaces/HTMLEditable.js";
import { IUseStateManagementClass } from "./interfaces/UseStateManagemenntClass";
import { THandleChange } from "./types/THandleChange";
import { THandleClick } from "./types/THandleClick";
import { TRegisterElemet } from "./types/TRegisterElement";
import TCreateElement from "./types/TCreateElement.js";
declare class TemplateEngine implements IUseStateManagementClass, IHTMLEditable, IHelperData {
    private registerElementData;
    private keyDataPengantin;
    private keydivEditableBackgroundColor;
    setElementValue(elementId: string, value: string): void;
    changeBackgroundColor(elementId: string, value: string): void;
    handleChangeInput({ elementId, type, callback }: THandleChange): void;
    /**
     * Creates and appends a new HTML element to a specified target element.
     *
     * @param {TCreateElement} tagName - The tag name of the element to create.
     * @param {TCreateElement} attributes - The attributes of the element.
     * @param {TCreateElement} id - The id of the element.
     * @param {TCreateElement} targetPlace - The target place to append the element to.
     * @return {HTMLElement | undefined} The created HTML element.
     */
    createElement({ tagName, attributes, targetPlace }: TCreateElement): HTMLElement | undefined;
    handleClick({ elementId, callback }: THandleClick): void;
    useStateManagement(): any[];
    registerElement(data: TRegisterElemet): void;
    mergerData({ data, target }: {
        data: Data;
        target: Target;
    }): any;
    run(): void;
}
export default TemplateEngine;
//# sourceMappingURL=Template-Engine.d.ts.map