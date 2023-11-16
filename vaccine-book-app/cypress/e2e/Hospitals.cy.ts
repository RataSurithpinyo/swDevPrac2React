describe("Home Page", () => {
  it("Check VdoPlayer and count hospital(s)", () => {
    cy.visit("/");
    cy.get("#video").get("#video-button").contains("Pause"); // find('Get your vaccine today.')
    cy.wait(2000);
    cy.get("#video-button").click();
    cy.get("#video").get("#video-button").contains("Play");
    cy.get("#select-hospital-button").click();
    cy.wait(5000);
    cy.get("#hospital-div").find("img").should("have.length", 3);
  });
});
