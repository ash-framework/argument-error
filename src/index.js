'use strict'

const assert = require('assert')

function validateInput (context, property, message) {
  assert(!context || typeof context === 'string',
    `Argument 'context' given to ArgumentError was ${typeof context}, expected 'string'`)
  assert(!property || typeof property === 'string',
    `Argument 'property' given to ArgumentError was ${typeof property}, expected 'string'`)
  assert(!message || typeof message === 'string',
    `Argument 'message' given to ArgumentError was ${typeof message}, expected 'string'`)
}

module.exports = class ArgumentError extends Error {
  constructor (context, property, message) {
    validateInput(context, property, message)

    let errorMessage = []
    if (context || property || arguments.length === 0) errorMessage.push('Argument')
    if (property) errorMessage.push(`"${property}"`)
    if (context) errorMessage.push(`given to "${context}"`)
    errorMessage.push(message || 'was invalid')

    super(errorMessage.join(' '))

    this.name = this.constructor.name
  }
}

