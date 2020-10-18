describe('Create and mark-unmark as favorite', ()=>{
    Cypress.config('pageLoadTimeout', 100000)
    before( ()=>{
        cy.SignIn()
    })
    it('Create a new post', ()=>{
        cy.get('ul.navbar-nav').children().contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('form').within(($form)=>{
            cy.get('input').first().type('Test');
            cy.get('input').eq(1).type('Test 1');
            cy.get('textarea').type('Test 2');
            cy.contains('Publish Article').click();
        })
        
        cy.url().should('include','article');

    })

    it.skip('Mark-unmark as favorite',()=>{
        // cy.get('.nav-link').contains('Cuong').click();
        cy.get('ul.navbar-nav').children().contains('Cuong').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').first().click({ multiple: true });
        cy.reload();
        cy.contains('Favorited Articles').click();
        cy.url().should('include', 'favorites');
        // cy.contains('Test 2').should('be.visible');
        // cy.get('.ion-heart').first().click({ multiple: true });
        // cy.reload();
        cy.go('back');
        // cy.contains('No articles are here... yet').should('be.visible');
        cy.get('.ion-heart').first().click({ multiple: true });
        cy.contains('Favorited Articles').click();
        cy.contains('No articles are here... yet').should('be.visible');
        // cy.go(-1)

    })
})