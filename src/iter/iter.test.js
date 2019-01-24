const iter = require('./iter');
const { expect } = require('chai');

describe('Iteration-Turn', () => {
    describe('Correct Result', () => {
        it('should iterate', () => {
            const args = [[2], [3], 4, 5];
            const iterator = iter(...args);

            expect([...iterator]).to.deep.eq(args);
        });
    });
});
