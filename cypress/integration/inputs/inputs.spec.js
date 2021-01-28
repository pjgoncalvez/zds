describe("loadStorybook", () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it("should load the text input with its placeholder text", () => {
    cy.loadStory("Inputs", "SimpleTextInput");
    
    cy.matchImageSnapshot("default state, no value");

    cy.get("input").should("have.attr", "placeholder", "Placeholder text");
    cy.get("input").should("have.attr", "type", "text");

    cy.changeArg("primaryLabel",  "Label");
    cy.changeArg("secondaryLabel",  "Forgot password?");
    cy.changeArg("caption",  "Caption text, description, error notification");

    cy.matchImageSnapshot("default state, no value, with labels");
  });

  it("should load the text input in its disabled state", () => {
    cy.loadStory("Inputs",  "SimpleTextInput");

    cy.changeArg("value",  "Im in my disabled state");
    cy.changeArg("disabled", true);
    cy.matchImageSnapshot("text input - disabled state, w/ value");

    cy.get("input").should("have.attr", "placeholder", "Placeholder text");
    cy.get("input").should("have.attr", "type", "text");
    cy.get("input").should("have.attr", "disabled");

  });


  it("should load the text input in its focused state", () => {
    cy.loadStory("Inputs",  "SimpleTextInput");

    cy.changeArg("value",  "Im in my focus state");

    cy.get('input').focus()
    cy.matchImageSnapshot("text input - focused state, no value");
  });
  
  /*EMAIL*/
  // it should load a valid email
  // it should load a invalid email state


  /*NUMBER*/
  // it should load a valid email
  // it should load a invalid email state

  /*TELEPHONE*/
  // it should load a valid email
  // it should load a invalid email state

  /*CHECKBOX*/
  // it should load a valid CHECKBOX WITH LABEL
  // it should load a valid CHECKBOX WITHOUT LABEL
  // it should load a ERROR STATE WITH LABEL
  // it should load a ERROR STATE WITHOUT LABEL

  /*RADIOBUTTON*/
  // it should load a valid RADIOBUTTON WITH LABEL
  // it should load a valid RADIOBUTTON WITHOUT LABEL
  // it should load a ERROR STATE WITH LABEL
  // it should load a ERROR STATE WITHOUT LABEL
});