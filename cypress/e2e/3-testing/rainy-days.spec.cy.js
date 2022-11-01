describe("visit rainy days", () => {
  it("it visits jacket specific page on rainy days website", () => {
    cy.visit(
      "https://rainy-days-noroff-project.netlify.app/shop/new-collection.html?page=new-collection"
    );
    cy.get(
      "div.items > div.jacket-info > div:nth-child(4) > div:nth-child(2) > a"
    )
      .should("have.attr", "href")
      .and("include", "/shop/jackets.html?id=")
      .then(() => {
        cy.visit(
          "https://rainy-days-noroff-project.netlify.app/shop/jackets.html?id=507"
        );
      });
  });
});
