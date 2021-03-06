import { Component, ReactElement } from 'react';

export class Day01 extends Component {
  render() {
    let adventDay1: AdventOfCodeDay1 = new AdventOfCodeDay1();
    let numbers: number[] = [];

    let day1Solution1: ReactElement = <div>No match found</div>;
    numbers = adventDay1.solvePart1();
    if (numbers.length > 0) {
      day1Solution1 = (
        <div className="solution">
          <p>
            Numbers are: {numbers[0]} + {numbers[1]} = {numbers[0] + numbers[1]}
          </p>
          <p>Product = {numbers[0] * numbers[1]}</p>
        </div>
      );
    }

    let day1Solution2: ReactElement = <div>No match found</div>;
    numbers = adventDay1.solvePart2();
    if (numbers.length > 0) {
      day1Solution2 = (
        <div className="solution">
          <p>
            Numbers are: {numbers[0]} + {numbers[1]} + {numbers[2]} = {numbers[0] + numbers[1] + numbers[2]}
          </p>
          <p>Product = {numbers[0] * numbers[1] * numbers[2]}</p>
        </div>
      );
    }

    return (
      <div>
        <div className="section">
          <div className="section-header">Day 1 - Problem 1</div>
          {day1Solution1}
        </div>

        <div className="section">
          <div className="section-header">Day 1 - Problem 2</div>
          {day1Solution2}
        </div>
      </div>
    );
  }
}

export class AdventOfCodeDay1 {
  /**
   * day1
   */
  private numbers: number[] = [
    1472,
    1757,
    1404,
    1663,
    1365,
    1974,
    1649,
    1489,
    1795,
    1821,
    1858,
    1941,
    1943,
    1634,
    1485,
    1838,
    817,
    1815,
    1442,
    639,
    1182,
    1632,
    1587,
    1918,
    1040,
    1441,
    1784,
    1725,
    1951,
    1285,
    285,
    1224,
    1755,
    1748,
    1488,
    1374,
    1946,
    1771,
    1809,
    1929,
    1621,
    1462,
    2001,
    1588,
    1888,
    1959,
    1787,
    1690,
    1363,
    1567,
    1853,
    1990,
    1819,
    1904,
    1458,
    1882,
    1348,
    1957,
    1454,
    1557,
    1471,
    332,
    1805,
    1826,
    1745,
    1154,
    1423,
    1852,
    1751,
    1194,
    1430,
    1849,
    1962,
    1577,
    1470,
    1509,
    1673,
    1883,
    1479,
    1487,
    2007,
    1555,
    1504,
    1570,
    2004,
    978,
    1681,
    1631,
    1791,
    1267,
    1245,
    1383,
    1482,
    1355,
    1792,
    1806,
    1376,
    1199,
    1391,
    1759,
    1474,
    1268,
    1942,
    1936,
    1766,
    1233,
    1876,
    1674,
    1761,
    1542,
    1468,
    1543,
    1986,
    2005,
    1689,
    1606,
    1865,
    1783,
    1807,
    1779,
    1860,
    1408,
    1505,
    1435,
    1205,
    1952,
    1201,
    1714,
    1743,
    1872,
    1897,
    1978,
    1683,
    1846,
    858,
    1528,
    1629,
    1510,
    1446,
    1869,
    1347,
    685,
    1478,
    1387,
    687,
    1964,
    1968,
    1429,
    1460,
    1777,
    1417,
    1768,
    1672,
    1767,
    1400,
    1914,
    1715,
    1425,
    1700,
    1756,
    1835,
    1926,
    1889,
    1568,
    1393,
    1960,
    1540,
    1810,
    1401,
    1685,
    830,
    1789,
    1652,
    1899,
    796,
    1483,
    1261,
    1398,
    1727,
    1566,
    1812,
    1937,
    1993,
    1286,
    1992,
    1611,
    1825,
    1868,
    1870,
    1746,
    1361,
    1418,
    1820,
    1598,
    1911,
    1428,
    1734,
    1833,
    1436,
    1560
  ];

  public solvePart1(): number[] {
    let result: number[] = this.findSum(2020);

    return result;
  }

  public solvePart2(): number[] {
    for (let index1 = 1; index1 < this.numbers.length; index1++) {
      let currentNumber: number = this.numbers[index1];
      let result: number[] = this.findSum(2020 - currentNumber);
      if (result.length > 0) {
        let combinedResults: number[] = [];
        combinedResults.push(currentNumber);
        combinedResults = combinedResults.concat(result);
        return combinedResults;
      }
    }

    return [];
  }

  private findSum(sum: number): number[] {
    for (let index1 = 1; index1 < this.numbers.length; index1++) {
      let test: number = this.numbers[index1];
      for (let index2 = 0; index2 < this.numbers.length; index2++) {
        let next: number = this.numbers[index2];

        let total: number = test + next;

        if (sum === total) {
          let returnNumbers: number[] = [];
          returnNumbers.push(test);
          returnNumbers.push(next);
          return returnNumbers;
        }
      }
    }

    return [];
  }
}
