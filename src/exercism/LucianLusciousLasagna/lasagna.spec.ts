import { remainingMinutesInOven } from '.'

describe('LucianLusciousLasagna', () => {
  test('should remainingMinutesInOven returns how much time left', () => {
    expect(remainingMinutesInOven(30)).toBe(10)
  })
})
