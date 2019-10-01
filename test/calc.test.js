  
'use strict';

/* eslint-disable no-undef */
const calc = require('../lib/calc');
const assert = require('chai').assert;

describe('calc', function() {
    it('should add numbers', function() {
        assert.equal(calc.add(3, 7), 10, 'Can add normal numbers');
        assert.equal(calc.add(-5, 3), -2, 'Can add negative numbers');
    });

    it('should subtract numbers', function() {
        assert.equal(calc.subtract(7, 4), 3, 'Can subtract normal numbers');
        assert.equal(calc.subtract(2, -3), 5, 'Can subtract negative numbers');
    });
});
