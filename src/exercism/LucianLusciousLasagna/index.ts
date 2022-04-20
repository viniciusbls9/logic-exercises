// @ts-check

/**
 * The number of minutes it takes to prepare a single layer.
 */

export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven: number) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

