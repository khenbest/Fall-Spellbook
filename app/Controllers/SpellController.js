import SpellService from "../Services/SpellService.js";

//Private
let _spellService = new SpellService()

function _drawApiSpells() {
    let template = '<ul>'
    let spells = _spellService.ApiSpells
    spells.forEach(s => {
        template += `<li onclick="app.controllers.spellController.select('${s.id}')">${s.name}</li>`
    })
    document.getElementById('api-spells').innerHTML = template + '</ul>'
}


//Public
export default class SpellController {
    constructor() {
        //NOTE Register all subscribers
        _spellService.addSubscriber('apiSpells', _drawApiSpells)

        //NOTE Retrieve data
        _spellService.getApiSpells()
    }
    select(id) {
        _spellService.select(id)
    }
}