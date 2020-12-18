export class Utils {
  static getCharacterFromOffset (firstChar: string, offset: number): string {
    let result: string = String.fromCharCode(firstChar.charCodeAt(0) + offset);

    return result;
  }

  static rotatePoint (cx: number, cy: number, x: number, y: number, angle: number): number[] {
    let radians: number = Math.PI / 180 * angle;
    let cos: number = Math.cos(radians);
    let sin: number = Math.sin(radians);
    let nx: number = Math.round(cos * (x - cx) + sin * (y - cy) + cx);
    let ny: number = Math.round(cos * (y - cy) - sin * (x - cx) + cy);

    return [
      nx,
      ny
    ];
  }
}
