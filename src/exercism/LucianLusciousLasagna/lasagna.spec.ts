import { remainingMinutesInOven, preparationTimeInMinutes } from '.'

function totalTimeInMinutes(numberOfLayers: number, actualMinutesInOven: number): number {
  const preparationLayersTime = numberOfLayers * 2
  return preparationLayersTime + actualMinutesInOven
}


describe('LucianLusciousLasagna', () => {
  test('should remainingMinutesInOven returns how much time left', () => {
    expect(remainingMinutesInOven(30)).toBe(10)
  })

  test('should returns calculate the preparation time in minutes', () => {
    expect(preparationTimeInMinutes(2)).toBe(4)
  })

  test('should calculates the total working time', () => {
    const preparation = preparationTimeInMinutes(2)
    const remain = remainingMinutesInOven(30)
    expect(totalTimeInMinutes(preparation, remain)).toBe(34)
  })
})
