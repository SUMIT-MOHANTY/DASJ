Cypress.Commands.add("login", () => {
  cy.fixture("credentials").then(c => {
    cy.request({
      method: "POST",
      url: "/api/auth/login",
      body: c
    }).its("body.token").then(t => {
      window.localStorage.setItem("authToken", t);
    });
  });
});
