"use strict";
function HolaMundo(persona) {
    return `Hello Mundo , soy ${persona.firstName} ${persona.lastName}`;
}
let user = { firstName: 'Omar Xavier', lastName: 'Romero López' };
document.body.innerHTML = HolaMundo(user);
