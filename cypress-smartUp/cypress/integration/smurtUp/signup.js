describe("Form test", () => {
    it("Can fill the form", () => {
      cy.visit("/");
      cy.get('[class="popup__login-link small-1"]').click()

      cy.get('input[type="email"]').type("moshkin.sergey9+900@gmail.com")
      cy.get('[class="popup__field-type popup__field-type--help popup__field-type--eye"]').type("123456Aa!")
      cy.get('#popup-agreement-rules-login').check({force:true})
    //   cy.contains('Повтори пароль').find('input')
    //   cy.get('.popup__field>input.popup__field-type')
    cy.get('[id="cpss11"]').type("123456Aa!")
    cy.get("form").submit()

        

      
        
    });
    
});