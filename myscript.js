import TemplateEngine from "./dist/Template-Engine.js";
const data = {
    dataPengantin: {
        mempelaiWanita: "Handa",
        mempelaiPria: "Azzar"
    }
};
const engine = new TemplateEngine()
const [values, setState] = engine.useStateManagement()
engine.handleChangeInput({
    elementId: "mempelaiWanitaEditable",
    type: "keyup",
    callback: (event, statevalue) => {
        engine.setElementValue("mempelaiWanita", event.target.value)
        setState("mempelaiWanitaEditable", event.target.value)
    }
})
engine.handleChangeInput({
    elementId: "mempelaiPriaEditable",
    type: "keyup",
    callback: (event, statevalue) => {
        engine.setElementValue("mempelaiPria", event.target.value)
        setState("mempelaiPriaEditable", event.target.value)
    }
})
engine.handleChangeInput({
    elementId: "colorPicker",
    type: "input",
    callback: (event, statevalue) => {
        engine.changeBackgroundColor("dataPengantin", event.target.value)
        setState("colorPicker", event.target.value)
    }
})
engine.handleClick({
    elementId: 'get',
    callback: (event) => {
        console.log(values);
    }
})
document.addEventListener('DOMContentLoaded', () => {
    engine.registerElementAndSetElementValue({
        data_pengantin: {
            mempelai_wanita: {
                id: "mempelaiWanita",
                value: data.dataPengantin.mempelaiWanita
            },
            mempelai_pria: {
                id: "mempelaiPria",
                value: data.dataPengantin.mempelaiPria
            },
        }
    })
    engine.run()
})
