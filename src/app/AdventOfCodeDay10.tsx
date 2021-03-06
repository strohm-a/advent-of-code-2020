import { Component } from "react";

export class Day10 extends Component {
  render () {
    let advent: AdventOfCodeDay10 = new AdventOfCodeDay10();

    return (
      <div>
        <div className="section">
          <div className="section-header">Day 10</div>
        </div>
        Total combinations: {advent.pathCount}
        {Array.from(advent.joltDifferences.keys()).map((key: number) => {
          return (
            <div className="solution-element" key={key}>
              Difference: {key}
              <br />
              Count: {advent.joltDifferences.get(key)}
            </div>
          );
        })}
      </div>
    );
  }
}

export class AdventOfCodeDay10 {
  public static dataExample: number[] = [
    16,
    10,
    15,
    5,
    1,
    11,
    7,
    19,
    6,
    12,
    4
  ];

  public static dataExample2: number[] = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3
  ];

  public static dataActual: number[] = [
    73,
    114,
    100,
    122,
    10,
    141,
    89,
    70,
    134,
    2,
    116,
    30,
    123,
    81,
    104,
    42,
    142,
    26,
    15,
    92,
    56,
    60,
    3,
    151,
    11,
    129,
    167,
    76,
    18,
    78,
    32,
    110,
    8,
    119,
    164,
    143,
    87,
    4,
    9,
    107,
    130,
    19,
    52,
    84,
    55,
    69,
    71,
    83,
    165,
    72,
    156,
    41,
    40,
    1,
    61,
    158,
    27,
    31,
    155,
    25,
    93,
    166,
    59,
    108,
    98,
    149,
    124,
    65,
    77,
    88,
    46,
    14,
    64,
    39,
    140,
    95,
    113,
    54,
    66,
    137,
    101,
    22,
    82,
    21,
    131,
    109,
    45,
    150,
    94,
    36,
    20,
    33,
    49,
    146,
    157,
    99,
    7,
    53,
    161,
    115,
    127,
    152,
    128
  ];

  public joltDifferences: Map<number, number> = new Map();

  public chargingAdapterJoltage: number;

  public joltageMap: Map<number, number[]> = new Map();

  public pathMap: Map<number, number> = new Map();

  public pathCount: number = 0;

  constructor () {
    // Get the data
    let dataInput: number[];
    dataInput = AdventOfCodeDay10.dataExample;
    dataInput = AdventOfCodeDay10.dataExample2;
    dataInput = AdventOfCodeDay10.dataActual;

    // Sort the array
    dataInput = dataInput.sort((a: number, b: number) => {
      return a - b;
    });

    console.log("sorted input: " + JSON.stringify(dataInput));

    let lastJoltage: number = 0;
    let difference: number = 0;
    let differenceCount = 0;
    for (let index = 0; index < dataInput.length; index++) {
      const currentJoltage = dataInput[index];

      difference = currentJoltage - lastJoltage;

      differenceCount = 1;

      if (this.joltDifferences.has(difference)) {
        differenceCount = this.joltDifferences.get(difference) + 1;
      }

      this.joltDifferences.set(difference, differenceCount);

      lastJoltage = currentJoltage;
    }

    // Add a +3 for the charging adapter
    difference = 3;

    if (this.joltDifferences.has(difference)) {
      differenceCount = this.joltDifferences.get(difference) + 1;
    }

    this.joltDifferences.set(difference, differenceCount);

    this.chargingAdapterJoltage = lastJoltage + difference;
    console.log("charging adapter joltage: " + this.chargingAdapterJoltage);

    this.getCombinations(dataInput);
  }

  private getCombinations (dataInput: number[]) {
    // Create a new array with 0 as the first element. 0 represents the wall adapter.
    let adapterJoltages: number[] = [
      0
    ];

    // Add the data input joltages
    adapterJoltages = adapterJoltages.concat(dataInput);

    this.joltageMap = new Map();

    adapterJoltages.forEach((currentJoltage: number, forEachIndex: number, array: number[]) => {
      let validJoltages: number[] = [];
      for (let index = forEachIndex + 1; index < array.length; index++) {
        let element: number = array[index];

        if (element - currentJoltage > 3) {
          break;
        }

        validJoltages.push(element);
      }

      this.joltageMap.set(currentJoltage, validJoltages);
    });

    /* Calculate the number of paths, or combinations. */
    this.pathCount = this.getPathCount(adapterJoltages[0]);
    console.log("path count: " + this.pathCount);
  }

  private getPathCount (index: number): number {
    let result: number = 0;
    console.log("getPathCount: " + index);

    // If the path count is cached, return that.
    if (this.pathMap.has(index)) {
      result = this.pathMap.get(index);
    }
    else {
      let validValues: number[] = this.joltageMap.get(index);

      if (0 === validValues.length) {
        result = 1;
      }

      validValues.forEach((value: number) => {
        result += this.getPathCount(value);
      });

      // Cache the result so we don't have to calculate it again.
      this.pathMap.set(index, result);
    }

    console.log("getPathCount returning: " + result);

    return result;
  }

}
