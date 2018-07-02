'Use strict';

const EventEmitter = require('events');

let monEcouteur = new EventEmitter();

monEcouteur.on('saute', function () {
    console.log("J'ai sauté");
});

monEcouteur.emit('saute');


