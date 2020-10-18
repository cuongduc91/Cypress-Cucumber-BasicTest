describe('Create and mark-unmark as favorite', ()=>{
    it('Sign in', ()=>{
        cy.visit('http://react-redux.realworld.io/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','http:');
        cy.get('form').within(($form)=>{
            cy.get('input[type="email"]').type('bdcuong91@gmail.com');
            cy.get('input[type="password"]').type('Cuongduc91');
            cy.root().submit();
        })
        // cy.get('input[type="email"]').type('bdcuong91@gmail.com');
        // cy.get('input[type="password"]').type('Cuongduc91');
        // cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed',{timeout:6000}).should('be.visible');
    })
    it('Create a new post', ()=>{
        // cy.get('.nav-link').contains('New Post').click();
        cy.get('ul.navbar-nav').children().contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('form').within(($form)=>{
            // cy.get('input[placeholder="Article Title"]').type('Test');
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