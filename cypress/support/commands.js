import 'cypress-file-upload';

Cypress.Commands.add("SignIn",()=>{
    cy.visit('/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','http:');
        cy.get('form').within(($form)=>{
            cy.get('input[type="email"]').type('bdcuong91@gmail.com');
            cy.get('input[type="password"]').type('Cuongduc91');
            cy.root().submit();
    })
        
    cy.contains('Your Feed',{timeout:10000}).should('be.visible');
})