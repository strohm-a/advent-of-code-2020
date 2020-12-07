export class Utils {
  static getCharacterFromOffset (firstChar: string, offset: number): string {
    let result: string = String.fromCharCode(firstChar.charCodeAt(0) + offset);

    return result;
  }
}
