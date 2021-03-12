'use strict';



const discord = require('discord.js')

// Allocate a New Client
const client_default = new discord.Client();
const eventAccelerationInit = function (client, event) {
    client.on(event, parameterDecorator => {
    
    })
}



module.exports = {
    range: class abstractRange {
        name=null
        base=null
        defaults=null
        constructor(T) {
            this.name = T
        }
        consoleAPICalledEventDataType() {
            return 1;
        }
    },
    textModule: class {
    
    },
    // Command
    Command: class Command extends this.range {
       
    
        name=null
        aliases=new Map();
        external=false
        props = new discord.Client();
        
        consoleAPICalledEventDataType() {
            return super.consoleAPICalledEventDataType();
        }
        eventAcceleration(event) {
            return client_default.on(event)
        }
        constructor(param) {
            super(param);
            this.props.on(param, () => {
                if (param)
                    return true;
            })
        }
    }
}