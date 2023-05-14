import MyComponent from "../../components/MyComp"

describe("MyComponent", () => {
  it("updates value when input changes", () => {
    // Mount the component
    cy.mount(MyComponent)

    // Get the input element and type a value
    cy.get("input").type("New Value")

    // Assert that the value has been updated
    cy.get("div").contains("New Value").should("be.visible")
  })
})
