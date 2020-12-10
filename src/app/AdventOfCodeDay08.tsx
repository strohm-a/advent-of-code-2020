import { Component, ReactElement } from "react";

export class Day08 extends Component {
  private instructions: InstructionInfo[] = [];
  private instructionsUsed: Set<number> = new Set();
  private accumulator: number = 0;

  private badIndexes: number[] = [];

  private processInstruction (instructionIndex: number): boolean {
    let result: boolean = false;
    let nextInstructionIndex: number = instructionIndex;

    // If we have reached the end of the instrucitn set, return true
    if (instructionIndex >= this.instructions.length) {
      return true;
    }

    // If this instruction has already been processed, we are in a loop, so return false.
    if (this.instructionsUsed.has(instructionIndex)) {
      return false;
    }

    let instruction: InstructionInfo = this.instructions[instructionIndex];

    this.instructionsUsed.add(instructionIndex);

    switch (instruction.command) {
      case "acc":
        this.accumulator = this.accumulator + instruction.offset;

        nextInstructionIndex = instructionIndex + 1;
        result = this.processInstruction(nextInstructionIndex);
        break;

      case "jmp":
        nextInstructionIndex = instructionIndex + instruction.offset;
        result = this.processInstruction(nextInstructionIndex);
        break;

      case "nop":
        nextInstructionIndex = instructionIndex + 1;
        result = this.processInstruction(nextInstructionIndex);
        break;

      default:
        break;
    }

    this.instructionsUsed.delete(instructionIndex);

    return result;
  }

  private testInstruction (instructionIndex: number): boolean {
    // If we have reached the end of the instruction set, return true
    if (instructionIndex >= this.instructions.length) {
      return true;
    }

    // If this instruction has already been processed, we are in a loop, so return false.
    if (this.instructionsUsed.has(instructionIndex)) {
      return false;
    }

    let result: boolean = false;
    let instruction: InstructionInfo = this.instructions[instructionIndex];

    this.instructionsUsed.add(instructionIndex);

    switch (instruction.command) {
      case "acc":
        result = this.testInstruction(instructionIndex + 1);
        break;

      case "jmp":
        // Test this instruction as-is.
        result = this.testInstruction(instructionIndex + instruction.offset);

        if (!result) {
          // The test failed, so change this to a nop and test that.
          console.log("testing jmp as nop");
          result = this.testInstruction(instructionIndex + 1);
          if (result) {
            // Changing this jmp to a nop succeeded, so mark this command as bad.
            this.badIndexes.push(instructionIndex);

            console.log("changing nop to jmp succeeded for index: " + instructionIndex);
          }
          else {
            // Both tests failed, so move on to the next instruction.
          }
        }
        break;

      case "nop":
        // Test this instruction as-is.
        result = this.testInstruction(instructionIndex + 1);
                
        if (!result) {
          // The test failed, so change this to a jmp and test that.
          console.log("testing nop as jmp");
          result = this.testInstruction(instructionIndex + instruction.offset);
          if (result) {
            // Changing this nop to a jmp succeeded, so mark this instruction as bad.
            console.log("changing nop to jmp succeeded");

            this.badIndexes.push(instructionIndex);
          }
          else {
            // Both tests failed, so move on to the next instruction.
          }
        }

        break;

      default:
        break;
    }

    return result;
  }

  render () {
    let solution: ReactElement = (
      <div className="solution">
        <p>Nothing found</p>
      </div>
    );

    let advent: AdventOfCodeDay8 = new AdventOfCodeDay8();
    this.instructions = advent.solve();

    this.badIndexes = [];
    this.instructionsUsed.clear();
    this.testInstruction(0);
    console.log("bad indexes: " + JSON.stringify(this.badIndexes));

    // Change the bad instruction and run the program.
    this.badIndexes.forEach((index: number) => {
      let badInstruction: InstructionInfo = this.instructions[index];
      console.log("bad instruction: " + badInstruction.originalInstruction);
      
      if ("jmp" === badInstruction.command) {
        badInstruction.command = "nop";
      }
      else {
        badInstruction.command = "jmp";
      }
    });

    // Process the first instruction. This will recursively run the subsequent instructions.
    this.instructionsUsed.clear();
    this.processInstruction(0);

    solution = (
      <div className="solution">
        <p>Instructions:</p>
        <p>Accumulator: {this.accumulator}</p>
        <div>
          {this.instructions.map((instruction: InstructionInfo) => {
            return (
              <div className="solution-element">
                Instruction: {instruction.command}
                <br />
                Offset: {instruction.offset}
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div>
        <div className="section">
          <div className="section-header">Day 8</div>
          {solution}
        </div>
      </div>
    );
  }
}

export class AdventOfCodeDay8 {
  private dataExample: string[] = [
    "nop +0",
    "acc +1",
    "jmp +4",
    "acc +3",
    "jmp -3",
    "acc -99",
    "acc +1",
    "jmp -4",
    "acc +6"
  ];

  private dataActual: string[] = [
    "jmp +583",
    "acc +9",
    "jmp +525",
    "jmp +302",
    "jmp +287",
    "jmp +412",
    "acc -16",
    "acc -19",
    "acc -19",
    "jmp +423",
    "acc -4",
    "nop +13",
    "acc -8",
    "jmp +37",
    "acc +0",
    "acc -5",
    "acc +48",
    "acc +0",
    "jmp +232",
    "acc +39",
    "acc +5",
    "jmp +69",
    "acc +31",
    "jmp +425",
    "acc +31",
    "jmp +93",
    "nop +166",
    "acc -7",
    "jmp +192",
    "acc +1",
    "jmp +391",
    "acc +11",
    "acc +20",
    "jmp +1",
    "acc +24",
    "acc +7",
    "acc +27",
    "jmp +162",
    "jmp +580",
    "acc +9",
    "acc +39",
    "acc -18",
    "jmp +283",
    "acc +28",
    "acc -14",
    "nop +464",
    "acc -12",
    "jmp +358",
    "jmp +523",
    "jmp +212",
    "acc +16",
    "acc -13",
    "acc +10",
    "acc +46",
    "jmp +207",
    "jmp +266",
    "jmp +1",
    "acc +36",
    "jmp -19",
    "jmp -3",
    "acc -16",
    "acc +3",
    "jmp +229",
    "acc +44",
    "acc +0",
    "acc -17",
    "acc -14",
    "jmp +132",
    "acc +38",
    "nop -30",
    "acc -12",
    "jmp +506",
    "jmp +511",
    "acc -15",
    "acc +4",
    "acc +29",
    "jmp +129",
    "jmp +419",
    "jmp +1",
    "jmp +45",
    "acc +14",
    "acc +20",
    "acc +11",
    "jmp +153",
    "jmp +78",
    "acc +32",
    "nop +212",
    "acc -7",
    "acc +42",
    "jmp -65",
    "acc -17",
    "jmp +458",
    "acc +10",
    "acc +18",
    "acc -11",
    "acc +8",
    "jmp +215",
    "acc +33",
    "acc +25",
    "jmp -21",
    "nop +92",
    "acc +0",
    "nop +353",
    "jmp +188",
    "acc +43",
    "jmp +82",
    "jmp +399",
    "acc +33",
    "acc +16",
    "acc -3",
    "jmp +174",
    "acc -12",
    "acc -3",
    "nop +171",
    "jmp +73",
    "nop +362",
    "jmp -48",
    "jmp +218",
    "acc +5",
    "jmp +486",
    "acc +43",
    "acc -1",
    "acc +0",
    "jmp +476",
    "acc +21",
    "jmp +44",
    "acc +7",
    "acc -6",
    "jmp +1",
    "acc +3",
    "jmp +95",
    "acc +12",
    "acc +38",
    "jmp +202",
    "acc +17",
    "acc -12",
    "jmp +114",
    "jmp -33",
    "jmp +367",
    "acc +45",
    "acc +40",
    "jmp -81",
    "acc -5",
    "acc +27",
    "acc +6",
    "jmp +374",
    "acc -6",
    "acc +10",
    "acc +19",
    "jmp +1",
    "jmp +171",
    "acc +8",
    "acc +46",
    "acc +12",
    "jmp +234",
    "acc +45",
    "acc +28",
    "jmp +337",
    "acc +8",
    "nop +10",
    "acc +17",
    "jmp +368",
    "acc +2",
    "acc -3",
    "acc +29",
    "jmp -160",
    "acc -7",
    "acc +11",
    "jmp +174",
    "acc +48",
    "acc -3",
    "acc +33",
    "jmp +6",
    "acc +3",
    "acc -10",
    "acc +9",
    "acc -13",
    "jmp +428",
    "acc -13",
    "acc +35",
    "nop -112",
    "jmp -147",
    "acc +13",
    "acc -4",
    "acc +50",
    "acc +46",
    "jmp -118",
    "acc +38",
    "acc +36",
    "jmp +375",
    "nop -3",
    "jmp +93",
    "acc +10",
    "acc -1",
    "jmp +211",
    "acc +6",
    "acc +38",
    "acc -12",
    "jmp -6",
    "jmp +1",
    "acc +41",
    "jmp -117",
    "acc -17",
    "acc -15",
    "jmp -120",
    "acc +17",
    "acc +48",
    "acc +37",
    "acc +0",
    "jmp +139",
    "acc +7",
    "acc -12",
    "acc +0",
    "jmp +98",
    "acc +47",
    "acc +3",
    "acc -18",
    "acc +26",
    "jmp +141",
    "jmp +236",
    "acc +18",
    "jmp +275",
    "acc -10",
    "acc -11",
    "jmp +12",
    "acc -19",
    "acc +17",
    "jmp +300",
    "acc +32",
    "nop +145",
    "jmp +84",
    "jmp +34",
    "acc -17",
    "acc +12",
    "acc +37",
    "jmp +182",
    "acc -7",
    "jmp +154",
    "nop +375",
    "acc -1",
    "jmp +108",
    "jmp +1",
    "acc +16",
    "acc +49",
    "jmp +355",
    "acc -16",
    "acc -19",
    "acc +47",
    "acc +26",
    "jmp -171",
    "jmp +285",
    "jmp +84",
    "acc +28",
    "acc -11",
    "acc +6",
    "jmp -252",
    "nop +228",
    "acc +10",
    "acc -17",
    "acc +42",
    "jmp -221",
    "acc +34",
    "acc +8",
    "jmp +201",
    "jmp -225",
    "acc +45",
    "nop +125",
    "acc +25",
    "acc -7",
    "jmp +318",
    "nop +348",
    "nop +40",
    "acc +42",
    "jmp +284",
    "acc -1",
    "acc +46",
    "jmp +1",
    "acc +41",
    "jmp +231",
    "acc +30",
    "acc +45",
    "acc +10",
    "acc +45",
    "jmp -227",
    "acc +25",
    "acc +13",
    "jmp +219",
    "acc -10",
    "acc +27",
    "acc +45",
    "jmp -186",
    "acc -18",
    "acc +50",
    "acc +31",
    "acc +19",
    "jmp +89",
    "nop -240",
    "jmp +173",
    "nop +65",
    "acc -8",
    "jmp +1",
    "nop -146",
    "jmp -156",
    "acc +27",
    "jmp +106",
    "acc +4",
    "acc +45",
    "jmp +35",
    "acc +44",
    "acc +47",
    "jmp -254",
    "jmp +57",
    "acc +1",
    "jmp -274",
    "acc +32",
    "acc +6",
    "acc +1",
    "nop +179",
    "jmp +122",
    "jmp +1",
    "jmp -310",
    "jmp -273",
    "acc +46",
    "acc +9",
    "jmp -187",
    "acc +36",
    "acc +0",
    "nop +47",
    "acc +17",
    "jmp -137",
    "nop -116",
    "acc -17",
    "acc -6",
    "acc -8",
    "jmp +106",
    "acc +36",
    "acc +50",
    "acc +3",
    "acc +22",
    "jmp +190",
    "acc +48",
    "jmp -336",
    "jmp -164",
    "jmp -32",
    "acc +44",
    "nop +242",
    "jmp -215",
    "jmp +7",
    "acc +36",
    "acc +3",
    "acc +27",
    "acc +24",
    "jmp -8",
    "jmp +156",
    "acc -5",
    "acc +42",
    "nop +37",
    "jmp +107",
    "jmp +247",
    "acc +12",
    "acc +30",
    "jmp +44",
    "jmp -306",
    "acc +36",
    "jmp -354",
    "nop +192",
    "nop +153",
    "jmp -106",
    "jmp -284",
    "jmp +1",
    "acc +33",
    "acc +18",
    "acc +13",
    "jmp +232",
    "acc -4",
    "nop -64",
    "acc +38",
    "acc +29",
    "jmp -349",
    "acc -7",
    "acc +44",
    "acc +4",
    "acc +48",
    "jmp -35",
    "acc +13",
    "jmp -144",
    "acc -7",
    "jmp +196",
    "acc -8",
    "jmp -316",
    "jmp -138",
    "jmp -381",
    "jmp -156",
    "acc +21",
    "jmp +189",
    "acc +30",
    "nop -85",
    "acc +34",
    "acc -13",
    "jmp -326",
    "jmp -7",
    "jmp +1",
    "acc +2",
    "acc +24",
    "jmp -56",
    "jmp +152",
    "acc +42",
    "acc +25",
    "acc -6",
    "jmp +174",
    "jmp -96",
    "jmp -86",
    "jmp +20",
    "acc +23",
    "nop -93",
    "acc +3",
    "jmp -42",
    "acc +0",
    "acc +6",
    "jmp +100",
    "jmp +20",
    "jmp -147",
    "acc +19",
    "nop -367",
    "jmp -80",
    "nop -318",
    "nop -289",
    "acc +45",
    "jmp -321",
    "nop -4",
    "acc +13",
    "jmp +74",
    "acc +0",
    "acc +15",
    "jmp +153",
    "acc -5",
    "acc +24",
    "acc +21",
    "jmp +1",
    "jmp -48",
    "jmp -262",
    "nop -317",
    "jmp +93",
    "acc +20",
    "jmp -32",
    "acc +44",
    "acc +50",
    "jmp -350",
    "acc -19",
    "acc +46",
    "jmp -431",
    "acc -11",
    "nop -227",
    "acc +48",
    "jmp +103",
    "acc +44",
    "acc +31",
    "acc -15",
    "jmp -15",
    "acc +0",
    "acc +34",
    "acc -3",
    "acc +38",
    "jmp +108",
    "acc +28",
    "nop -60",
    "acc +28",
    "acc +26",
    "jmp -20",
    "jmp -440",
    "acc +48",
    "jmp -257",
    "acc +11",
    "acc +8",
    "acc +14",
    "acc +30",
    "jmp +8",
    "acc +47",
    "jmp -323",
    "acc +15",
    "acc +10",
    "acc -15",
    "acc +13",
    "jmp -169",
    "acc -11",
    "acc -12",
    "acc +24",
    "acc +5",
    "jmp +125",
    "acc +34",
    "acc -17",
    "acc +2",
    "acc +32",
    "jmp -83",
    "jmp -120",
    "jmp -11",
    "acc +25",
    "nop -54",
    "jmp +1",
    "jmp -29",
    "acc +13",
    "acc +17",
    "acc +6",
    "acc +31",
    "jmp -420",
    "acc +25",
    "acc +13",
    "jmp +117",
    "jmp -3",
    "nop +68",
    "acc +32",
    "acc -11",
    "acc +31",
    "jmp -374",
    "acc -4",
    "acc +34",
    "acc +38",
    "acc +23",
    "jmp -113",
    "acc -19",
    "acc +50",
    "nop -216",
    "jmp -134",
    "nop -331",
    "acc -7",
    "acc +28",
    "jmp -357",
    "jmp -216",
    "jmp -128",
    "acc +34",
    "acc +16",
    "jmp -54",
    "acc -16",
    "acc +0",
    "jmp -64",
    "acc +7",
    "nop -322",
    "jmp -306",
    "nop -414",
    "acc +38",
    "acc +15",
    "jmp +77",
    "acc +18",
    "jmp +1",
    "acc +0",
    "acc -8",
    "jmp -248",
    "acc +26",
    "jmp -6",
    "acc +17",
    "acc +21",
    "acc +30",
    "jmp -142",
    "acc -13",
    "acc -18",
    "nop -330",
    "jmp +27",
    "acc -14",
    "jmp +60",
    "acc +31",
    "acc -6",
    "acc +49",
    "acc +16",
    "jmp -289",
    "acc +11",
    "acc +0",
    "nop -141",
    "acc +19",
    "jmp -143",
    "acc +44",
    "jmp -286",
    "acc +42",
    "jmp -209",
    "acc +34",
    "acc +10",
    "acc +3",
    "jmp -461",
    "acc +2",
    "jmp -358",
    "acc +42",
    "acc +0",
    "acc +26",
    "jmp -191",
    "acc +16",
    "jmp -230",
    "acc +31",
    "jmp -244",
    "nop -456",
    "acc +16",
    "nop -196",
    "jmp -475",
    "acc +24",
    "jmp -553",
    "acc +42",
    "acc +24",
    "acc +3",
    "jmp -572",
    "acc +31",
    "jmp +7",
    "jmp -144",
    "acc +20",
    "acc +23",
    "acc -14",
    "nop -506",
    "jmp -17",
    "acc +19",
    "nop -428",
    "jmp -286",
    "acc +2",
    "acc +6",
    "acc +28",
    "acc -13",
    "jmp -291",
    "jmp -377",
    "acc -3",
    "acc +32",
    "jmp +1",
    "jmp -205",
    "acc +18",
    "acc +32",
    "nop -523",
    "jmp -79",
    "acc +32",
    "jmp -30",
    "acc +40",
    "acc -17",
    "jmp +1",
    "acc +28",
    "jmp +1"
  ];

  public solve (): InstructionInfo[] {
    // let instructions: InstructionInfo[] = InstructionInfo.parseInstructionSet(this.dataExample);
    let instructions: InstructionInfo[] = InstructionInfo.parseInstructionSet(this.dataActual);

    return instructions;
  }
}

export class InstructionInfo {
  public originalInstruction: string = "";
  public command: string = "";
  public offset: number = 0;

  public static parseInstructionSet (instructionSet: string[]): InstructionInfo[] {
    let instructions: InstructionInfo[] = [];

    instructionSet.forEach((instruction: string) => {
      let instructionParts: string[] = instruction.split(" ");

      let newInstruction: InstructionInfo = new InstructionInfo();
      newInstruction.originalInstruction = instruction;
      newInstruction.command = instructionParts[0];
      newInstruction.offset = parseInt(instructionParts[1]);

      instructions.push(newInstruction);
    });

    return instructions;
  }
}
