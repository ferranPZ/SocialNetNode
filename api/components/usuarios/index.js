const store = require('../../../store/dummy');
const ctrl = require('./controller');



// let myctrl = new controller.Controller(store);

module.exports = ctrl(store);

// module.exports = ctrl(store); 
