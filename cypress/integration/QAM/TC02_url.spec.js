describe('Create and mark-unmark as favorite', ()=>{
    it('Sign in', ()=>{
        cy.visit('http://react-redux.realworld.io/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','http:');
        cy.get('input[type="email"]').type('bdcuong91@gmail.com');
        cy.get('input[type="password"]').type('Cuongduc91');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed',{timeout:6000}).should('be.visible');
    })
    it('Create a new post', ()=>{
        cy.get('.nav-link').contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('input[placeholder="Article Title"]').type('Test');
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2');
        cy.contains('Publish Article').click();
        cy.url().should('include','article');

    })

    it('Mark-unmark as favorite',()=>{
        cy.get('.nav-link').contains('Cuong').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart',{timeout:6000}).click({ multiple: true });
        
        cy.contains('Test 1').should('be.visible');
        cy.get('.ion-heart',{timeout:6000}).click({ multiple: true });
        cy.reload();
        // cy.contains('No articles are here... yet').should('be.visible');
        // cy.go('back');
        cy.contains('Favorited Articles').click();
        cy.url().should('include', 'favorites');
        // cy.go(-1)

    })
})