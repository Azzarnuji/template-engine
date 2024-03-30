const getElement = (id) => {
    var element = document?.getElementById(id);
    if (element === null || element === undefined) {
        const iframe = document?.getElementById("previewIframe");
        element = iframe?.contentWindow?.document.getElementById(id);
    }
    else {
        element = document?.getElementById(id);
    }
    return element;
};
export { getElement };
//# sourceMappingURL=GetElement.js.map