import { expect } from 'chai';
import { describe, it } from 'mocha';

import { helloWorld } from '../src/';

describe('Test suite #1', () => {
    it('should return Hello world!', () => {
        const result = helloWorld();

        expect(result).to.eql('Hello world!');
    });
});
