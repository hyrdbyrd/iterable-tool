const range = require('./range');
const { expect, assert } = require('chai');

describe('Range', () => {
    describe('Correct Result', () => {
        it('should return 0..5 with one argument', () => {
            expect([...range(5)]).to.deep.eq([0, 1, 2, 3, 4]);
        });

        it('should return 0..5', () => {
            expect([...range(0, 5)]).to.deep.eq([0, 1, 2, 3, 4]);
        });

        it('should return 0..10 with step=2', () => {
            expect([...range(0, 10, 2)]).to.deep.eq([0, 2, 4, 6, 8]);
        });

        it('should return 5..0', () => {
            expect([...range(5, 0)]).to.deep.eq([5, 4, 3, 2, 1]);
        });

        it('should return 10..0 with step=-2', () => {
            expect([...range(10, 0, -2)]).to.deep.eq([10, 8, 6, 4, 2]);
        });
    });

    describe('Throws errors', () => {
        it('should throw error on not numerable argument(s)', () => {
            assert.throw(() => range('stub').next());
        });

        it('should throw error without no one argument', () => {
            assert.throw(() => range().next());
        });
    });
});
