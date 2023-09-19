import Login from '../../src/components/login/Login.jsx'

describe('Login.cy.jsx', () => {

  beforeEach(() => {
    cy.mount(<Login />); // mount the component under test
    cy.get("input").first().as("userNameInput"); // create an alias for the first input
    cy.get("#password").as("passwordInput"); // create an alias for the input with id password
    cy.get("#btn").as("btn"); // create an alias for the button
  });

  it('Renders the username', () => {
    cy.get("@userNameInput").should("have.value", ""); // use the alias to assert its value
  });

  it("Renders the Password", () => {
    cy.get("@passwordInput").should("have.value", ""); // use the alias to assert its value
  });

  it("Renders the button", () => {
    cy.get("@btn").should("exist"); // use the alias to check the button's existence
  });

  it("User name starts with empty string", () => {
    cy.get("@userNameInput").should("have.value", ""); // use the alias to assert its value
  });

  it("Password starts with empty string", () => {
    cy.get("@passwordInput").should("have.value", ""); // use the alias to assert its value
  });

  it("Button is disabled initially", () => {
    cy.get("@btn").should("be.disabled"); // use the alias to assert the button's state
  });

  it("Button is not in loading state when rendered", () => {
    cy.get("@btn").should("not.have.text", "please wait"); // use the alias to assert the button's text
    // OR
    cy.get("@btn").should("not.contain", "please wait"); // use the alias to assert the button's content
  });

  it("Span is not visible when rendered", () => {
    cy.get("[data-cy=error]").should("not.be.visible"); // use the data-cy attribute to assert the span's visibility
  });

  it("User input changes when we type in the input", () => {
    cy.get("@userNameInput").type("test"); // use the alias to type in the input
    cy.get("@userNameInput").should("have.value", "test"); // use the alias to assert its value
  });

  it("Password input changes when we type in the input", () => {
    cy.get("@passwordInput").type("test"); // use the alias to type in the input
    cy.get("@passwordInput").should("have.value", "test"); // use the alias to assert its value
  });

  it("Button is enabled when both inputs have values", () => {
    cy.get("@userNameInput").type("test"); // use the alias to type in the input
    cy.get("@passwordInput").type("test"); // use the alias to type in the input
    cy.get("@btn").should("not.be.disabled"); // use the alias to assert the button's state
  });

  it("Button displays 'please wait' when clicked", () => {
    cy.get("@userNameInput").type("test"); // use the alias to type in the input
    cy.get("@passwordInput").type("test"); // use the alias to type in the input
    cy.get("@btn").click(); // use the alias to click the button
    cy.get("@btn").should("have.text", "please wait"); // use the alias to assert the button's text
  });
});
