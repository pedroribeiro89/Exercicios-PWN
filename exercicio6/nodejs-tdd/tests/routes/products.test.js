const expect = require('chai').expect;

const { get, getById, post } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
        it('should return object with title ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.eql({ title: 'Products page'});
        });

        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });

        it('should fail if description less than 10 chars ', function() {
            const getReq = req;
            getReq.body = {
                id: 2,
                name: 'Product 2',
                description: 'Product 2',
                price: 19.00
            }

            post(getReq, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'lenght less than 10' })
        });

        it('should fail if price less or equals to 0 ', function() {
            const getReq = req;
            getReq.body = {
                id: 2,
                name: 'Product 2',
                description: 'Product 2 -desc',
                price: -19.00
            }

            post(getReq, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'invalid price' })
        });
    })
});