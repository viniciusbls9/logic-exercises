import { remainingMinutesInOven, preparationTimeInMinutes, totalTimeInMinutes } from './lasagna'


describe('LucianLusciousLasagna', () => {
  test('should remainingMinutesInOven returns how much time left', () => {
    expect(remainingMinutesInOven(30)).toBe(10)
  })

  test('should returns calculate the preparation time in minutes', () => {
    expect(preparationTimeInMinutes(2)).toBe(4)
  })

  test('should calculates the total working time', () => {
    expect(totalTimeInMinutes(3, 20)).toBe(26)
  })
})
