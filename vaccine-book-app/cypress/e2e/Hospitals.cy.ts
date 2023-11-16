describe("VdeoPlayer & Count Hospitals", () => {
  it("Check VdoPlayer and count hospital(s)", () => {
    cy.visit("/");
    // cy.get("#video").get("#video-button").contains("Pause"); // find('Get your vaccine today.')
    cy.get("video");
    cy.get("video").should("have.prop", "paused", false);
    cy.wait(2000);
    cy.get("#video-button").click();
    cy.get("video").should("have.prop", "paused", true); //.get("#video-button").contains("Play");
    cy.get("#select-hospital-button").click();
    cy.wait(5000);
    cy.get("#hospital-div").find("img").should("have.length", 3);
  });
});
