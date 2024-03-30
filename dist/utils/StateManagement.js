class useStateManagementClass {
    constructor() {
        this.state = {};
    }
    /**
     * Sets the state of the object based on the provided arguments.
     *
     * @param {...any} args - The arguments passed to the function.
     *   If the first argument is a function, it is called with the current state.
     *   Otherwise, the first argument is treated as a key and the second argument as the value to set in the state.
     * @return {void} This function does not return anything.
     */
    setState(...args) {
        if (typeof args[0] === "function") {
            let prevState = this.state;
            const updaterFn = args[0];
            let newState = updaterFn(this.state);
            // this.state = { ...newState };
            Object.keys(newState).forEach((key, index) => {
                this.state[Object.keys(newState)[index]] = Object.values(newState)[index];
            });
        }
        else {
            const [key, value] = args;
            this.state[key] = value;
        }
    }
    getState() {
        return this.state;
    }
}
export { useStateManagementClass };
//# sourceMappingURL=StateManagement.js.map