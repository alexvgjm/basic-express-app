import { describe, expect, it } from 'vitest'
import { sum } from '#utils/sum.js'

// Example test case for the sum function
describe('sum function', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
