const store = require('../../../store/dummy');


function getUsers() {
    return new Promise ((res,rej)=>{
        res(store.list());
    });
}

module.exports = {
    getUsers,
}