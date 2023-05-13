/// <reference types="cypress" />

import { getByData } from "../support/commands.ts"

declare global {
  namespace Cypress {
    interface Chainable {
      getByData: typeof getByData
    }
  }
}

export {}
