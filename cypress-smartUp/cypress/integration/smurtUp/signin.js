describe("Form test", () => {
    it("Can fill the form", () => {
      cy.visit("/");
      cy.get("form");

      cy.get('input[type="email"]')
        .type("moshkin.sergey9@gmail.com")
        .should("have.value", "moshkin.sergey9@gmail.com")

      cy.get('input[type="password"]')
        .type("123456Aa!")
        
        cy.get("form").submit();  
        
    /*     /* cy.intercept('POST', 'https://partner.smartupglobal.dev/#/settings/profile', {
        statusCode: 200, 
        
}) */
        
    });
    
  });