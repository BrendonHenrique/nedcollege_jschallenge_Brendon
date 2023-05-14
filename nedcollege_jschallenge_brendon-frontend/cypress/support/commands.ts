/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const getByData = (
  selector: string,
  options?: Partial<
    Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
  >
) => cy.get(`[data-cy=${selector}]`, options)

Cypress.Commands.addAll({ getByData })

export { getByData }
