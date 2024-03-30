const jsonHelper = (obj, key) => {
    const isArray = () => {
        return Array.isArray(obj[key]);
    };
    const hasChildren = () => {
        return Object.keys(obj[key]).length > 0;
    };
    return {
        isArray,
        hasChildren
    };
};
export default jsonHelper;
//# sourceMappingURL=JsonHasChildrenArray.js.map