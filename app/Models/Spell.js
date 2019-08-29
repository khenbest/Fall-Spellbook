export default class Spell {
    constructor(data) {
        this.name = data.name
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.description = data.description || data.desc.join("\n")
        this.components = data.components
    }

    get Template() {
        return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <p>${this.level}<br>${this.range}<br>${this.duration}<br>${this.components}</p>
                </div>
            </div>`
    }
}

