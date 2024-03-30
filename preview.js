import TemplateEngine from "./dist/Template-Engine.js";
// this is from database user configuration for content template
const data = {
    data_pengantin: {
        mempelai_wanita: "Handa",
        mempelai_pria: "Azzar"
    },
    template_config: {
        divEditableBackgroundColor: {
            dataPengantin1: "#7c2727",
            dataPengantin2: "#c84646",
            dataPengantin3: "#945151"
        }
    }
}

// this is from database template config
const configTemplate = {
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
document.addEventListener('DOMContentLoaded', () => {
    const mergedData = engine.mergerData({
        data: data,
        target: configTemplate
    })
    const queryURL = window.location.search;
    const params = new URLSearchParams(queryURL)
    engine.registerElement(mergedData)
    engine.run()
})