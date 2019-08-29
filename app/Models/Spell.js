export default class Spell {
    constructor(data) {
        this.name = data.name
        this.level = data.level
        this.description = data.description || data.desc.join("\n")
        this.range = data.range
        this.duration = data.duration
        this.components = data.components
    }

    get Template() {
        return this.title
    }
}


name: { type: String, required: true },
description: { type: String, required: true },
level: { type: Number },
range: { type: String, required: true },
duration: { type: String, required: true },
components: [{ type: String }],
    user: { type: String, required: true },