import { getElement } from "./utils/GetElement.js";
import { useStateManagementClass } from "./utils/StateManagement.js";
import jsonHelper from "./utils/JsonHasChildrenArray.js";
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
        getElement(elementId)?.addEventListener(type, (event) => {
            callback(event);
        });
    }
    /**
     * Creates and appends a new HTML element to a specified target element.
     *
     * @param {TCreateElement} tagName - The tag name of the element to create.
     * @param {TCreateElement} attributes - The attributes of the element.
     * @param {TCreateElement} id - The id of the element.
     * @param {TCreateElement} targetPlace - The target place to append the element to.
     * @return {HTMLElement | undefined} The created HTML element.
     */
    createElement({ tagName, attributes, targetPlace }) {
        const element = document.createElement(tagName);
        for (const [key, value] of Object.entries(attributes)) {
            if (typeof value === "string" && value !== null) {
                element.setAttribute(key, value);
            }
        }
        if (targetPlace !== undefined || targetPlace !== null) {
            getElement(targetPlace).appendChild(element);
        }
        else {
            return element;
        }
    }
    handleClick({ elementId, callback }) {
        getElement(elementId)?.addEventListener("click", (event) => callback(event));
    }
    useStateManagement() {
        const state = new useStateManagementClass();
        const setState = (...args) => {
            state.setState(...args);
        };
        const getState = () => {
            return state.getState();
        };
        return [state.state, setState];
    }
    registerElement(data) {
        this.registerElementData = data;
    }
    mergerData({ data, target }) {
        let mergedData = { ...target };
        for (const key in mergedData) {
            if (jsonHelper(mergedData, key).hasChildren()) {
                for (const keyChild in mergedData[key]) {
                    if (jsonHelper(mergedData[key], keyChild).isArray()) {
                        const mappedValue = Object.keys(data[key][keyChild]).map((keyData, index) => {
                            return {
                                id: keyData,
                                value: data[key][keyChild][keyData]
                            };
                        });
                        mergedData[key][keyChild] = mappedValue;
                    }
                    else if (!jsonHelper(mergedData[key], keyChild).isArray()) {
                        let temp = {};
                        Object.keys(data[key]).map((keyData, index) => {
                            temp = {
                                ...temp,
                                [keyData]: {
                                    id: target[key][keyData].id,
                                    value: data[key][keyData]
                                }
                            };
                        });
                        mergedData[key] = temp;
                    }
                }
            }
        }
        // console.log(mergedData);
        return mergedData;
    }
    // public setKeyData({ keyDataPengantin, keydivEditableBackgroundColor }: { keyDataPengantin: string; keydivEditableBackgroundColor: string }) {
    //     this.keyDataPengantin = keyDataPengantin;
    //     this.keydivEditableBackgroundColor = keydivEditableBackgroundColor;
    // }
    run() {
        // This is for data_pengantin
        for (const key in this.registerElementData?.data_pengantin) {
            const { id, value } = this.registerElementData.data_pengantin[key];
            this.setElementValue(id, value);
        }
        // This is for layout editable
        if (this.registerElementData?.template_config?.divEditableBackgroundColor !== undefined) {
            this.registerElementData?.template_config.divEditableBackgroundColor.forEach((divEditable, index) => {
                this.changeBackgroundColor(divEditable.id, divEditable.value);
            });
        }
    }
}
export default TemplateEngine;
//# sourceMappingURL=Template-Engine.js.map