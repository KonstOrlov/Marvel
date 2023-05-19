describe("Main page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("check main url", () => {
    cy.url().should("include", "/Marvel");
  });

  it("check loaded random char section", () => {
    cy.get(".randomchar__name");
  });

  it("check name first char", () => {
    cy.get(".char__list .char__item").eq(0).contains("Captain Flint");
  });

  it("open char info", () => {
    cy.intercept("https://gateway.marvel.com/v1/public/characters/*").as(
      "getChars"
    );
    cy.wait("@getChars").its("response.statusCode").should("eq", 200);
    cy.get('[alt="Captain Marvel (Carol Danvers)"]').click();
    cy.get(".char__info-name").contains("Captain Marvel (Carol Danvers)");
  });

  it("selected character has no description", () => {
    cy.get('[alt="Captain Marvel (Carol Danvers)"]').click();
    cy.get(".char__descr").contains(
      "There is no description for this character"
    );
  });

  it("selected character has description", () => {
    cy.get('[alt="Captain Stacy"]').click();
    cy.get(".char__descr").contains(
      "NYPD Captain George Stacy was the father of one-time Peter Parker girlfriend Gwen Stacy...."
    );
  });
});
