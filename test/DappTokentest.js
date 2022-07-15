const { assert } = require("chai");
const BigNumber = web3.BigNumber;
require('chai')
.use(require('chai-bignumber')(BigNumber))
.should();

const DappToken = artifacts.require('DappToken');

contract('DappToken', accounts => {

    const _name = "Dapp Token";
    const _symbol = "DAPssP";
    const _decimals = 18;

    beforeEach(async function(){
        this.token = await DappToken.new(_name,_symbol);
    })
    describe('token attributes', function () {
        it("has correct name", async function () {
            const name = await this.token.name();
            // assert.equal(name,_name);
            // or
            name.should.equal(_name);
        })

        it("has correct symbol", async function () {
            const symbol = await this.token.symbol();
            // assert.equal(symbol,_name);
            // or
            symbol.should.equal(_symbol);
        })

        it("has correct decimals", async function () {
            const decimals = await this.token.decimals();
            // assert.equal(decimals,_name);
            // or
            decimals.should.be.bignumber.equal(_decimals);
        })
    })
})