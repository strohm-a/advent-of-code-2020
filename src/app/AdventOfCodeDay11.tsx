import React, { Component } from "react";

export class Day11 extends Component {
  render () {
    let advent: AdventOfCodeDay11 = new AdventOfCodeDay11();

    return (
      <div>
        <div className="section">
          <div className="section-header">Day 11</div>
          <div className="solution-element">
            Occupied seats: {advent.occupiedSeats}
            <br />
            Empty seats: {advent.emptySeats}
          </div>
        </div>
      </div>
    );
  }
}

class AdventOfCodeDay11 {
  public static dataExample: string[] = [
    "L.LL.LL.LL",
    "LLLLLLL.LL",
    "L.L.L..L..",
    "LLLL.LL.LL",
    "L.LL.LL.LL",
    "L.LLLLL.LL",
    "..L.L.....",
    "LLLLLLLLLL",
    "L.LLLLLL.L",
    "L.LLLLL.LL"
  ];

  public static dataActual: string[] = [
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLL.LLLL.LLLL.LLLLLLLLLL.LLLLLL.LLLLL",
    "LLLLL.LLLL.LLLLL.LLLLL.L.LLLLLL.LLLL.LLLLLL.LL....LLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLL.LL.LLLLLL.L.",
    "LLLLLLLLLL.LLL...LLLLL.LLLLLLLL.L.LLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL..LLLL.LLLL.LL...LLLLLLLLLL.LLLLLL.LLLLL",
    "LL.LLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.L.LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    ".L...L...LLLL..LLL......L.LLL.L.L.....L...L..L.L................L...L...L.LLLL.......LLL....",
    "L..LLLLLLL.LLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL..LLLLL.LLLL.LLLLLL.LLL.L",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLL.LLL.L",
    "LLL.LLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLL....LL",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.LL.LLLL.L.L.LLL",
    "LLLLLL.LLL.L.LL.LL.LLL.LLLLLLLL.LLLL.LLLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLLLLL.LL.LL.LLLLL.LLLL.LLLLLLLLLLLLLLL..LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL",
    ".LL.....LLLL.L..L..L..L...L.L..L..L.L....LL..L...LLL...LL.....L..LL....L...LLL..L...LLL..LLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLL.L.LLLL.LLLLLLLL..LLLLL.LLLLL.L.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLL",
    "LLLLLLLLLLLL.LLL.LLL.LL.LLLLLLL.LLLL.LLLLLLLLL..LLLL.LLLLLLLLLLLL.LL.LLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLL..LLLLLLLLLLLLLLL.LLLLL.LLLL.LLLLL.LLL.LL.LLLLL",
    "LLLLLL.L..LLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLL.LLLL.LLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLL..LLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLLLL..LLLL.LLLLL.LLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLL.L..LL.LL.LLLLLL.LLLL.LLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLL.LLL.LLL.LLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL.L.LL.LLLLLLLLLLLLLLLLLL",
    "L.LLLLLLLL.LLL.LL.LL.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLLL.LLLLL.LLLLL",
    "L..LL...L.L..L..L.L..L.L.L..L.LL.L....LL....LL.L...L..LL..LLL....L...LL...L..L.L....L....LLL",
    "LLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL..LLL.L.LLLLLLLLLL.LLLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLL.LLLLL.LLLL.LLLLL.L",
    "LLLLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.L.LLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLL.LLLLL.L.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL",
    ".LL......LLL....LL.L....LLL.L.L....L.LLL....L....L..L...L.......LL.....L...L.L..L.LLLL......",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.L.LL.LLLLLLLLLLLLLLL.LLLLLLL.LL.LLLLLLL.L.LL.LL.LLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.L.LLL.LLLLLL.L.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLL.L..LLLLLLLLLLLLLLL..LLL.LL.LLLLLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLL..LLL.LLLLLLLLL.LLLLL.LLLLLLLLLL.LLLL.LLLL.LLLLL.LLL.LL.L.LLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LL.LLLL.LLLLLL.LL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL",
    "LLLLLLL.LL.LLLLL.LLLLL.L.LLLL.L.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLL.LLLL.LLLLL.LLLLL.LLLLLLLLL.LLL..LLLLL.LLLLLLLLLLLL",
    "LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLL.L.LLLL.LLLLL",
    "L...L.L...L...L.LL.........LL..........LLL.....LLL.....L...L.L..LL......L.L..LL.LL...L.L....",
    ".LLLLLLLLL.LLL.L.LLLL..L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LL..LLLL.LL.L.LLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLL..LLLLLLLLLLLL.LLLLL",
    "LLLLLLL.LLLLLLLL.LLLLL.LLL.LLLL.LLLL.L.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLL.LL..LLLL",
    "LLLLLLLLLLLLLLLL.LL.LLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "LLL.LLL.LL.LLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL..LLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL",
    ".L.LLLLLLL.LL.LL.LLL.L.LLLLLLLL..LLL..LL.LLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    ".LLLLLLLLL..LLLLL.LLL..LLLLLLLL.LLL..LLLLLLLLLLLLLLLLLLLLL.LLLLLLLL..LLLL.LLLLLLLLLLLL..LLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLL..LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "L...L..L.....LL.L...........L...........LL.....L.L.L..L.........LLLLL...L.L..LL..L..L......L",
    "LLLLLLLLLLLLLLLL.LL.LL.LLLLLLLL.LLLL.LLLLL..LLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL..LLLL.LL.LL.L.LLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLL.LL.LLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL.LLL.L",
    "LLLLLLLLLL.L.LL.LLLLLLLLLLLLLLL.LLLL..LLLLLLLL.LLLLL.LLLLL.LLLLLLLLL..LLL.LLLLLLLLLLLL.LLL.L",
    "L.LLLLLLLL.LLL.L.LLLLLLLLLLL.LL.LLLLLLLLLLLLLL.LLL.L.LLLLL.L.LLLLLLL.LLLLLLLLLL.LLLLLL.LLLLL",
    "LLLLLLLL.L.LLLLL.LLLLL...LL.LLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLL.LLLL",
    "LLLLL.LL..LLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL.LLL.LLLLL.L.LLL.LLLLLLLLL.LLLL.LLLLL..L.LLL.LLLLL",
    "LL...L.L..L.L....LL...LLLL..L...............L...........L.L.LL..L..L.LLL...LL......LLL..L..L",
    "LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLL.LLLLL",
    ".LL.LLLLLLLLLLLLLLLLL.L.LLLLLLL.LLL.LLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLL...LLLL.LLLLLLLLLLLL",
    ".LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLL.LLLL.LLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLL.LLL..LLLL.LL.L.LLLLLLLLLLLLLLL.LLLLLLLLL.LL",
    "LLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.L.LL.LL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLL.LL.LLLLLLLLLLL.LL.LL.LLLLLLLL..LLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLL",
    "LL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLL.LLLLLLLLLL.L.LLLLL",
    "...L.L.....L.L..LL.LL..L.L...LLLL.......L.LLL...LL..L.L.L..L...L..L......LLL...L.L...L...L..",
    "LL.LLLLLL..LLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLL..LLLLLLLLLLL.LLLLL",
    "LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLL..LLLLLLLL.LL.L.LLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LL..LLLLLLLLLLLLLLLL.LLLLL.LL.LLLLLL.LLLL.LLL.L.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLL",
    "L.LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L..L.LLLLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLL.LL.LL.LLLLLLL..LL.L.LLLLLL.LL.LLLLLLLLLLL..LLLLLLLL.LLLLLLLLLL.LLLLL..LLLLL",
    "LLLLLLLLLLLLLLLL.LLLLL.LLLLLLL..LLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLL",
    "LLLL.LLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.L..LLL.LLLLL",
    "L.LL.....LLLL.LL.LLL..L....LLL.L..LLL.....L.L.L...L.L.L..L.L......L.....LL..LL..L..LL.....L.",
    "LLLLLLLLLL.LLLL.LLLLLL.LLLLLLLL.LLLL.LLLL.LLLLLLLLLL.LLLLL.LLLLL.L.L.LLLLLLLLLLLLLLLLL.LLLLL",
    "LLLLL.LL...LLLLLLLLLLL.LL.LLLLL.L.LLLLLLLLLLLL.LLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLL..LLLLLLLLLL.LLLL.LLL.L.LLLL.LLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL",
    "LLL.LLLLLL.LLLLLLLLLLLLL.LLLLLL.LLL..LL.LLLLLLLLLL.L.LLLLL.LLLLLL.L...LLL.LLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLL.LLLLLLLLLL.LLLLLLL.L.LLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLL",
    "LLLLLLLLLLLLLL...LLLLLL.LLLLLLLLLLLL.LLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL",
    "L.......LL.L...LL...L......LL.L.....LL..L...L..L.LL........L.L..L.L.LL...L..L...LL..L.LLLL..",
    "LLLLLLLLLL.LLLLL.L.LLLLLLLLLLLL..LLL.LLLLLLLLL.LLLLL.LLLLL.LLLLL.LLL.LLLL.LLLLL.LLLLLLLL.LLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLL.LLLLLLL.LLLLLLLL.LL.L.LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL",
    "LLLL.LLLL.LLLLLL.LLL.L.LLLLLLL..LLLL.LLLLLLLLLLLLLLL.LLLLL.L.LLLLLLL.LLLLLLLLLL.LLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L",
    "LLLLLL.LLL.LLLLL.L.LLL.LLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLL.L.LLL",
    "LLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLL",
    "LL.LLLLLLL.LLLLL..LLLL..LLLLLLL.LLLL.LLLLLLLLLLLLL.L.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLL",
    ".L.L.L.LL..L.L.......L.....LLLL.L.....L.L.L...L.L..L.L..L..L.....LL.LL.L.......LL.L.L.....LL",
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLLL.LLLLLLLLLLL",
    "LLLLLLLLLL.LL.LL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL..LLLLLLLLLLLLLLL.LLLLL",
    "LLLLLLLLLLLL.LLLLLLLLLLLLLLLL.L.LLLL.LL.LLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLL",
    "LLLLLLLLLLLL.LLL.LLLLL.LLLL.LLL.LLLL.LLLL.LLLL.LLLLL..L.LLLLL.LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL",
    "L.LLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL..LLLLLLLL.LLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL..LLLLL.LLLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL..LLL.L.LLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LL.LLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLL.LLL.LLLLLLLL"
  ];

  private seatData: string[][] = [];
  public emptySeats: number = 0;
  public occupiedSeats: number = 0;

  constructor () {
    // Get the data
    let dataInput: string[];
    dataInput = AdventOfCodeDay11.dataExample;
    dataInput = AdventOfCodeDay11.dataActual;

    // dataInput is an array of strings. Convert this to a two-dimensional array.
    dataInput.forEach((element: string, index: number) => {
      let stringArray: string[] = [];

      stringArray = Array.from(element);
      // console.log(JSON.stringify(stringArray));

      this.seatData.push(stringArray);
    });

    let equal: boolean = false;
    let counter: number = 0;
    while (!equal && counter < 50) {
      console.log("\n\nseats: ");
      AdventOfCodeDay11.printSeats(this.seatData);

      let seatCopy: string[][] = this.fillSeats(this.seatData);

      // Compare the two arrays to see if anything changed.
      equal = AdventOfCodeDay11.areEqual(seatCopy, this.seatData);
      console.log("equal: " + equal);

      this.seatData = AdventOfCodeDay11.deepCopy(seatCopy);
    }

    this.analyzeSeats();

    counter++;
  }

  private analyzeSeats () {
    this.occupiedSeats = 0;
    this.emptySeats = 0;

    this.seatData.forEach((element: string[]) => {
      element.forEach((seat: string) => {
        if ("#" === seat) {
          this.occupiedSeats++;
        }
        else if ("L" === seat) {
          this.emptySeats++;
        }
      });
    });
  }

  private static printSeats (seatData: string[][]) {
    for (let yIndex = 0; yIndex < seatData.length; yIndex++) {
      let xArray = seatData[yIndex];
      let outputString: string = "";
      xArray.forEach((element: string) => {
        outputString += element;
      });

      console.log(outputString);
    }
  }

  private static areEqual (arr1: string[][], arr2: string[][]): boolean {
    for (let index1 = 0; index1 < arr1.length; index1++) {
      if (!this.arrayEquals(arr1[index1], arr2[index1])) {
        return false;
      }
    }

    return true;
  }

  private static arrayEquals (arr1: string[], arr2: string[]): boolean {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
      return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    return false;
  }

  private static deepCopy (dataInput: string[][]): string[][] {
    let dataOutput: string[][] = [];

    // Make a deep copy of the array.
    dataOutput = dataInput.map((array: string[]) => {
      return array.slice();
    });

    return dataOutput;
  }

  private fillSeats (dataInput: string[][]): string[][] {
    let dataOutput: string[][] = [];

    // Make a deep copy of the array.
    dataOutput = AdventOfCodeDay11.deepCopy(dataInput);

    for (let yIndex = 0; yIndex < dataInput.length; yIndex++) {
      let xArray = dataInput[yIndex];
      // console.log("testing: " + JSON.stringify(xArray));
      for (let xIndex = 0; xIndex < xArray.length; xIndex++) {
        let element: string = xArray[xIndex];

        // console.log("character at [" + xIndex + "][" + yIndex + "] = " + element);
        // Don't test floor elements.
        if ("." !== element) {
          let adjacents: number;
          adjacents = this.testImmediateAdjacents(xIndex, yIndex);
          adjacents = this.testAllAdjacents(xIndex, yIndex);
          // console.log("number of adjacents for [" + xIndex + "][" + yIndex + "] = " + adjacents);

          // If the seat is empty (L), it becomes occupied (#) if there are no occupied seats adjacent to it.
          if ("L" === dataOutput[yIndex][xIndex]) {
            if (0 === adjacents) {
              dataOutput[yIndex][xIndex] = "#";
            }
          }
          else if ("#" === dataOutput[yIndex][xIndex]) {
            if (adjacents >= 5) {
              dataOutput[yIndex][xIndex] = "L";
            }
          }
        }
      }
    }

    return dataOutput;
  }

  private testAllAdjacents (x: number, y: number): number {
    let adjacents: number = 0;

    adjacents += this.testN(x, y);
    adjacents += this.testS(x, y);
    adjacents += this.testE(x, y);
    adjacents += this.testW(x, y);
    adjacents += this.testNE(x, y);
    adjacents += this.testSW(x, y);
    adjacents += this.testSE(x, y);
    adjacents += this.testNW(x, y);

    /* 
    for (let yIndex = y - 1; yIndex <= y + 1; yIndex++) {
      for (let xIndex = x - 1; xIndex <= x + 1; xIndex++) {
        // Don't test this element
        if (!(y - yIndex === 0 && x - xIndex === 0)) {
          let isOccupied: boolean = this.isOccupied(xIndex, yIndex);
          if (isOccupied) {
            adjacents++;
          }
          // console.log("tested [" + xIndex + "][" + yIndex + "]: " + isOccupied);
        }
      }
    }
 */
    return adjacents;
  }

  /* y-- */
  private testN (x: number, y: number): number {
    let yOffset: number = y;
    for (let index = 1; yOffset >= 0; index++) {
      yOffset = y - index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][x]) {
          continue;
        }

        if (this.isOccupied(x, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x-- */
  private testW (x: number, y: number): number {
    let xOffset: number = x;
    for (let index = 1; xOffset >= 0; index++) {
      xOffset = x - index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[y][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, y)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x-- */
  private testE (x: number, y: number): number {
    let xOffset: number = x;

    for (let index = 1; xOffset < this.seatData[y].length; index++) {
      xOffset = x + index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[y][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, y)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* y++ */
  private testS (x: number, y: number): number {
    let yOffset: number = y;
    for (let index = 1; yOffset < this.seatData.length; index++) {
      yOffset = y + index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][x]) {
          continue;
        }

        if (this.isOccupied(x, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x--, y-- */
  private testNW (x: number, y: number): number {
    let xOffset: number = x;
    let yOffset: number = y;
    for (let index = 1; yOffset >= 0 && xOffset >= 0; index++) {
      yOffset = y - index;
      xOffset = x - index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x++, y-- */
  private testNE (x: number, y: number): number {
    let xOffset: number = x;
    let yOffset: number = y;
    for (let index = 1; yOffset >= 0 && xOffset < this.seatData[y].length; index++) {
      yOffset = y - index;
      xOffset = x + index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x--, y++ */
  private testSW (x: number, y: number): number {
    let xOffset: number = x;
    let yOffset: number = y;
    for (let index = 1; yOffset < this.seatData.length && xOffset >= 0; index++) {
      yOffset = y + index;
      xOffset = x - index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  /* x++, y++ */
  private testSE (x: number, y: number): number {
    let xOffset: number = x;
    let yOffset: number = y;
    for (let index = 1; yOffset < this.seatData.length && xOffset < this.seatData[y].length; index++) {
      yOffset = y + index;
      xOffset = x + index;

      try {
        // Ignore floors spots
        if ("." === this.seatData[yOffset][xOffset]) {
          continue;
        }

        if (this.isOccupied(xOffset, yOffset)) {
          return 1;
        }
        else {
          return 0;
        }
      } catch (e) {}
    }

    return 0;
  }

  private testImmediateAdjacents (x: number, y: number): number {
    let adjacents: number = 0;

    /* 
    -1/-1|+0/-1|+1/-1
    -1/+0|+0/+0|+1/+0
    -1/+1|+0/+1|+1/+1

    Don't test +0/+0 because that is the element being tested.
    */

    for (let yIndex = y - 1; yIndex <= y + 1; yIndex++) {
      for (let xIndex = x - 1; xIndex <= x + 1; xIndex++) {
        // Don't test this element
        if (!(y - yIndex === 0 && x - xIndex === 0)) {
          let isOccupied: boolean = this.isOccupied(xIndex, yIndex);
          if (isOccupied) {
            adjacents++;
          }
          // console.log("tested [" + xIndex + "][" + yIndex + "]: " + isOccupied);
        }
      }
    }

    return adjacents;
  }

  private isOccupied (x: number, y: number): boolean {
    // console.log("testing [" + x + "][" + y + "]");

    let result: boolean = false;
    try {
      // console.log("Character being tested: " + this.seatData[x][y]);
      // console.log("testing [" + x + "][" + y + "] = " + this.seatData[y][x]);

      result = this.seatData[y][x] === "#" ? true : false;
      // console.log(result);
    } catch (e) {
    } finally {
      return result;
    }
  }
}
