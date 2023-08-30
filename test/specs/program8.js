describe('first', () => {
    before(() => {
        console.log('Outter describe block');
    });

    describe('second', () => {
        before(() => {
            console.log('inner describe block');
        });

        describe('third', () => {
            before(() => {
                console.log('child describe block');
            });

            it('block', () => {
                console.log('test execution');
            });
        });
    });
});