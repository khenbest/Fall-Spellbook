import Spell from "../Models/Spell.js";

let _sandBoxApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/class/spells'
})

let _apiSpells = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/spells'
})

//Private
let _state = {
    apiSpells: [],
    currentSpell: {},
    mySpells: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiSpells: [],
    currentSpell: [],
    mySpells: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class SpellService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get ApiSpells() {
        return _state.apiSpells
    }
    getApiSpells() {
        _apiSpells.get()
            .then(res => {
                _setState('apiSpells', res.data)
                console.log(res.data);
            })
    }
}
