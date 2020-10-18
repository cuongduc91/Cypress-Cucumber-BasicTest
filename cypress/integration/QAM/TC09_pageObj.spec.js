import Login from '../pageObjects/login';
describe('Login check',()=>{
    const login = new Login();
    it('Sign in', ()=>{
         // "baseUrl":"http://react-redux.realworld.io"
        cy.visit('http://react-redux.realworld.io/#/login');
        login.email().type('bdcuong91@gmail.com');
        login.password().type('Cuongduc91');
        login.signInButton().should('be.visible').click();
    })
})