const jsonHasChildrenArray = (obj) => {
    return Object.keys(obj).map((key) => {
        if (typeof obj[key] === "object") {
        }
        else {
            return obj;
        }
    });
};
export default jsonHasChildren;
//# sourceMappingURL=JsonHasChildren.js.map