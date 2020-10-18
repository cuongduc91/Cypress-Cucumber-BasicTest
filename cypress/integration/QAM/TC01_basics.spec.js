
describe('Login check',()=>{
    it('Sign in', ()=>{
         // "baseUrl":"http://react-redux.realworld.io"
        cy.visit('http://react-redux.realworld.io/#/login');
        cy.get('input[type="email"]').type('bdcuong91@gmail.com');
        cy.get('input[type="password"]').type('Cuongduc91');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    })
})