
function Controller(injectedStore) {

    let store = injectedStore; 
    if(!store){
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list();
    }
    function get(id) {
       return store.get(id);
    }
    
    function add(body) {
        const user = {
            name : body.nombre,
            edad : body.edad,
            rut : body.rut,
        }
       
        return store.upsert(user);
    }
    
    return{
        list,
        get,
        add
    };
}

module.exports  = Controller