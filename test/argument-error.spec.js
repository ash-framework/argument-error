/* global describe, it */
const assert = require('assert')
const ArgumentError = require('../src')

describe('argument-error', function () {
  it('HttpArgument created with no arguments', function () {
    const error = new ArgumentError()
    assert.strictEqual(error.message, 'Argument was invalid')
    assert.strictEqual(error.name, 'ArgumentError')

    assert(/ArgumentError: Argument was invalid/.test(error.stack))
  })

  it('incorrect context provided', function () {
    assert.throws(() => new ArgumentError(123))
  })

  it('invalid property provided', function () {
    assert.throws(() => new ArgumentError(null, 123))
  })

  it('Invalid message provided', function () {
    assert.throws(() => new ArgumentError(null, null, 123))
  })

  it('context provided', function () {
    const error = new ArgumentError('My Function')
    assert.strictEqual(error.message, 'Argument given to "My Function" was invalid')
  })

  it('context and property provided', function () {
    const error = new ArgumentError('My Function', 'status')
    assert.strictEqual(error.message, 'Argument "status" given to "My Function" was invalid')
  })

  it('context and property and message provided', function () {
    const error = new ArgumentError('My Function', 'status', 'Number expected, String given')
    assert.strictEqual(error.message, 'Argument "status" given to "My Function" Number expected, String given')
  })

  it('property and message provided', function () {
    const error = new ArgumentError(null, 'status', 'Number expected, String given')
    assert.strictEqual(error.message, 'Argument "status" Number expected, String given')
  })

  it('message provided', function () {
    const error = new ArgumentError(null, null, 'Number expected, String given')
    assert.strictEqual(error.message, 'Number expected, String given')
  })
})
