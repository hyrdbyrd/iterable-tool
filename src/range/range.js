/// <reference path="./range.d.ts" />
function *range(...args) {
    args = args.map(Number);

    if (!args.length) throw new Error('ArgumentError: first argument is required');
    if (args.some((e) => isNaN(e))) throw new Error('ArgumentError: incorrect value');

    let [start, end, step] = args;
    if (end === undefined) {
        end = start;
        start = 0;
    }

    if (step === undefined) step = 1;
    step = Math.abs(step);

    if (start > end) for (let item = start; item > end; item -= step) yield item;
    else for (let item = start; item < end; item += step) yield item;
}

module.exports = range;
