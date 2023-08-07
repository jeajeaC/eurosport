describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Learn more about your favorite player");
    cy.contains("Stan Wawrinka");
    cy.get("button#player-1").click();
    cy.url().should("include", "player-1");
    cy.contains("Go back").click();
    cy.url().should("equal", "http://localhost:5173/");
  });
});
