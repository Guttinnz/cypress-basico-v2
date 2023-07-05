Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Gustavo");
  cy.get("#lastName").type("Bueno");
  cy.get("#email").type("gustavoriedel2202@gmail.com");
  cy.get("#open-text-area").type(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cum reiciendis ducimus odit animi, libero aliquam nisi ad est aperiam sint,aut aliquid explicabo eos itaque.",
    {
      delay: 5,
    }
  );
  cy.get('button.button[type="submit"]').click();
});
