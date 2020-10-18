Feature: Login
    I want to log into Conduit
    
    @smoke
    Scenario: Conduit Login
        Given I open Conduit login page
        When I type in 
            | username | password |
            | bdcuong91@gmail.com | Cuongduc91 |
        And I click on Sign in button
        Then "Your Feed" should be shown