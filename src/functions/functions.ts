/* global clearInterval, console, CustomFunctions, setInterval */

/**
 * Enum for planets with descriptions and tooltips.
 * @customenum {string}
 */
enum PLANETS {
  /** mercury is the first planet from the sun */
  mercury = "mercury",
  /** venus is the second planet from the sun */
  venus = "venus",
  /** Oh earth */
  earth = "earth",
  /** mars is the fourth planet from the sun */
  mars = "mars",
  /** jupiter is the fifth planet from the sun */
  jupiter = "jupiter",
  /** saturn is the sixth planet from the sun */
  saturn = "saturn",
  /** uranus is the seventh planet from the sun */
  uranus = "uranus",
  /** neptune is the eighth planet from the sun */
  neptune = "neptune",
}

/**
 * Test string enum
 * @customfunction
 * @param first
 * @param second param of enum type planets
 * @returns
 */
export function testStringEnum(first: number, second: PLANETS): any {
  return second;
}

/**
 * Test string enum
 * @customfunction
 * @param first
 * @param second param of enum type planets
 * @returns
 */
export function testStringEnum2(first: PLANETS, second: PLANETS): any {
  return first + second;
}

/**
 * Enum for numbers with descriptions and tooltips.
 * @customenum {number}
 */
enum NUMBERS {
  /** One */
  One = 1,
  /** Two */
  Two = 2,
  /** Three */
  Three = 3,
  /** Four */
  Four = 4,
  /** Five */
  Five = 5,
}

/**
 * Test number enum
 * @customfunction
 * @param first
 * @param second param of enum type numbers
 * @returns
 */
export function testNumberEnum(first: number, second: NUMBERS[]): any {
  const sum = second.reduce((acc, num) => acc + num, 0);
  return sum;
}

/**
 * Enum for deal types
 * @customEnum {string}
 */
enum DealType {
  // Represents a merger between two companies
  Merge = "Merge",
  // Represents the acquisition of one company by another
  Acquire = "Acquire",
  // Represents a tender offer to purchase some or all of shareholders' shares
  TenderOffer = "Tender Offer",
  // Represents a leveraged buyout, typically using borrowed funds
  LeveragedBuyout = "Leveraged Buyout",
  // Represents a company seeking a buyer
  SeekingBuyer = "Seeking Buyer",
  // Represents the purchase of a stake in a company
  StakePurchase = "Stake Purchase",
}

/**
 * @customfunction
 * @param type Deal type
 * @returns 
 */
function getDeals(type: DealType): string {
  return "Deals of type " + type;
}

/**
 * @customenum {string}
 */
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

/**
 * @customenum
 */
enum ColorNumber {
  Red = 1,
  Green = 2,
  Blue = 3
}

/**
 * @customfunction
 */
function foobar(input: Color, input2: ColorNumber) {
  return input + input2;
}