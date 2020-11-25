import { monthLength } from "./calFace";
import { monthScope } from "./calFace";
import { monthEnd } from "./calFace";
import { monthTailScope } from "./calFace";
import { modNum } from "./calFace";
import { monthStart } from "./calFace";
import { monthHeadScope } from "./calFace";
import { calendarArray } from "./calFace";

const novemberCalendar = [26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6];
const decemberCalendar = [30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3];
const octoberCalendar = [28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1];
const septemberCalendar = [31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4];

const thisJan = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
];
const thisFeb = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29
];
const thisMar = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
];

const now = (_date = new Date()) => ({
  weekday: _date.getDay(),
  date: _date.getDate(),
  month: _date.getMonth() + 1,
  year: _date.getYear()
});

describe("month length tests", () => {
  it("2020 january length == 31", () => {
    expect(monthLength(120, 1)).toEqual(31);
  });
  it("2020 february length == 29", () => {
    expect(monthLength(120, 2)).toEqual(29);
  });
  it("2019 february length == 28", () => {
    expect(monthLength(119, 2)).toEqual(28);
  });
  it("2020 march length == 31", () => {
    expect(monthLength(120, 1)).toEqual(31);
  });
});

describe("month scope arrays", () => {
  it("january scope is [1..31]", () => {
    expect(monthScope(2020, 1)).toEqual(thisJan);
  });
  it("feb scope is [1..29]", () => {
    expect(monthScope(2020, 2)).toEqual(thisFeb);
  });
  it("march scope is [1..31]", () => {
    expect(monthScope(2020, 3)).toEqual(thisMar);
  });
});

describe("month last days", () => {
  it("october 2020 last day == saturday", () => {
    expect(monthEnd(2020, 10)).toEqual(6);
  });
  it("november 2020 last day == monday", () => {
    expect(monthEnd(2020, 11)).toEqual(1);
  });
  it("december 2020 last day == thursday", () => {
    expect(monthEnd(2020, 12)).toEqual(4);
  });
  it("september 2020 last day == wednesday", () => {
    expect(monthEnd(2020, 9)).toEqual(3);
  });
});

describe("month tail scopes", () => {
  it("october 2020 tail scope [-6,31]", () => {
    expect(monthTailScope(2020, 10)).toEqual([26, 27, 28, 29, 30, 31]);
  });
  it("november 2020 tail scope [31]", () => {
    expect(monthTailScope(2020, 11)).toEqual([30]);
  });
  it("december 2020 tail scope [-4,31]", () => {
    expect(monthTailScope(2020, 12)).toEqual([28, 29, 30, 31]);
  });
  it("september 2020 tail scope [-3,31]", () => {
    expect(monthTailScope(2020, 9)).toEqual([28, 29, 30]);
  });
});

describe("module by number", () => {
  it("1", () => expect(modNum(1,7)).toEqual(1));
  it("7", () => expect(modNum(0,7)).toEqual(0));
  it("8", () => expect(modNum(1,7)).toEqual(1));
  it("9", () => expect(modNum(2,7)).toEqual(2));
  it("14", () => expect(modNum(14,12)).toEqual(2));
  it("11", () => expect(modNum(11,12)).toEqual(11));
  it("10", () => expect(modNum(10,12)).toEqual(10));
  it("12", () => expect(modNum(12,12)).toEqual(0));
  it("13", () => expect(modNum(13,12)).toEqual(1));
});

describe("month first days", () => {
  it("october 2020 first day == saturday", () => {
    expect(monthStart(2020, 10)).toEqual(4);
  });
  it("november 2020 first day == sunday", () => {
    expect(monthStart(2020, 11)).toEqual(0);
  });
  it("december 2020 first day == tuesday", () => {
    expect(monthStart(2020, 12)).toEqual(2);
  });
  it("september 2020 first day == tuesday", () => {
    expect(monthStart(2020, 9)).toEqual(2);
  });
});

describe("month head scopes", () => {
  it("october 2020 head scope [1..4]", () => {
    expect(monthHeadScope(2020, 10)).toEqual([1, 2, 3, 4]);
  });
  it("november 2020 head scope [1]", () => {
    expect(monthHeadScope(2020, 11)).toEqual([1]);
  });
  it("december 2020 head scope [1,2,3,4,5,6]", () => {
    expect(monthHeadScope(2020, 12)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("september 2020 tail scope [1,2,3,4,5,6]", () => {
    expect(monthHeadScope(2020, 9)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("whole month face for calendar", () => {
  it("november calendar", () => {
    expect(calendarArray(2020, 11)).toEqual(novemberCalendar);
  });
  it("december calendar", () => {
    expect(calendarArray(2020, 12)).toEqual(decemberCalendar);
  });
  it("october calendar", () => {
    expect(calendarArray(2020, 10)).toEqual(octoberCalendar);
  });
  it("september calendar", () => {
    expect(calendarArray(2020, 9)).toEqual(septemberCalendar);
  });
});



