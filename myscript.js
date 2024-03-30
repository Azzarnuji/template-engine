import TemplateEngine from "./dist/Template-Engine.js";
// this is from database template config
const previewDataIdAndValue = {
    data_pengantin: {
        mempelai_wanita: {
            id: "mempelaiWanita",
        },
        mempelai_pria: {
            id: "mempelaiPria",
        },
    },
    template_config: {
        divEditableBackgroundColor: [
            {
                id: "dataPengantin1"
            },
            {
                id: "dataPengantin2"
            },
            {
                id: "dataPengantin3"
            },
        ]
    }
}
const engine = new TemplateEngine()
const [values, setState] = engine.useStateManagement()

document.addEventListener('DOMContentLoaded', () => {
    engine.handleChangeInput({
        elementId: "mempelaiWanitaEdit",
        type: "keyup",
        callback: (event) => {
            engine.setElementValue(previewDataIdAndValue.data_pengantin.mempelai_wanita.id, event.target.value)
            setState("data_pengantin", {
                ...values.data_pengantin,
                ["mempelai_wanita"]: event.target.value
            })
        }
    })
    engine.handleChangeInput({
        elementId: "mempelaiPriaEdit",
        type: "keyup",
        callback: (event) => {
            engine.setElementValue(previewDataIdAndValue.data_pengantin.mempelai_pria.id, event.target.value)
            setState("data_pengantin", {
                ...values.data_pengantin,
                ["mempelai_pria"]: event.target.value
            })
        }
    })
    previewDataIdAndValue.template_config.divEditableBackgroundColor.forEach((divEditable, index) => {
        const idElementEdit = `editTable-${index + 1}`
        engine.createElement({
            tagName: "input",
            attributes: {
                type: "color",
                id: idElementEdit,
            },
            targetPlace: "parentColorPicker"
        })
        engine.handleChangeInput({
            elementId: idElementEdit,
            type: "input",
            callback: (event, statevalue) => {
                engine.changeBackgroundColor(divEditable.id, event.target.value)
                setState(prevState => ({
                    ...prevState,
                    ["template_config"]: {
                        ["divEditableBackgroundColor"]: {
                            ...values?.template_config?.divEditableBackgroundColor,
                            [divEditable.id]: event.target.value
                        }
                    }
                }))
            }
        })
    })
    engine.handleClick({
        elementId: 'get',
        callback: (event) => {
            console.log(values);
        }
    })
    // engine.registerElementAndSetElementValue({
    //     data_pengantin: {
    //         mempelai_wanita: {
    //             id: "mempelaiWanita",
    //             value: data.dataPengantin.mempelaiWanita
    //         },
    //         mempelai_pria: {
    //             id: "mempelaiPria",
    //             value: data.dataPengantin.mempelaiPria
    //         },
    //     }
    // })
    engine.run()
})
