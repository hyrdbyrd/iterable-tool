/// <reference path="./iter.d.ts" />
function *iterTurn(...args) {
    for (const arg of args) yield arg;
}

module.exports = iterTurn;
