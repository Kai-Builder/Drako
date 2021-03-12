const globals = require('./globals.d.js')


class Model extends globals.Command {
    constructor(props) {
        super(props);
    }
    
    /**
     * Event Overrides
     * @param event
     * @returns {this}
     */
    eventAcceleration(event) {
        return super.eventAcceleration(event);
    }
    
    /**
     * consoleAPI
     * @returns {*}
     */
    consoleAPICalledEventDataType() {
        return super.consoleAPICalledEventDataType();
    }
    
}

Model("")