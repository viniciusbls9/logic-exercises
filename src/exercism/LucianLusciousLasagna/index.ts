// @ts-check

/**
 * The number of minutes it takes to prepare a single layer.
 */

const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven: number): number {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers: number): number {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}
