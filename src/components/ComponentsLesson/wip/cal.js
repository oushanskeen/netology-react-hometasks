//const hello = (x:string):string => x;
//const now = new Date(2020, 11, 25);
const now = new Date();
//const now1 = new Date(2019, 3, 8);
//const now2 = new Date(2020, 4, 8);
//const now3 = new Date(2021, 5, 8);
//const now4 = new Date(2022, 6, 8);
//console.log("now: ", now);
//console.log("month: ", now.getMonth());

const outputFunction = date => {

  const thisMonth = () => `${date.getMonth()+1}`;

  const prevMonth = () => `${+thisMonth() - 1}`;

  const nextMonth = () => `${+thisMonth() + 1}`;

  const year = () => `${date.getYear()}`;
  const monthScope = (end, acc) =>
    end == 0 ? acc.reverse() : monthScope(end - 1, acc.concat(end));
  const monthLength = (year, month) => {
    const out = new Date(year, month, 0).getDate();
    return out;
  };

  const monthTail = (_monthLength, _tail) => {
    const out = monthScope(_monthLength, []).slice(_tail);
    return out;
  };
  const monthHead = (_monthLength, _head) =>
    monthScope(_monthLength, []).slice(0, _head);
  const tail = (year, month) => -new Date(year, month, 0).getDay();
  const head = (year, month) => new Date(year, month, 0).getDay();
  const yearMonth = [year(), thisMonth()];

  const $ = {
    tailLength: () => tail(year(), prevMonth()), //-6

    headLength: () => head(year(), nextMonth()), //6

    prevMonthTail: () =>
      monthTail(+monthLength(year(), prevMonth()), $.tailLength()),

    thisMonthLength: () => monthScope(+monthLength(year(), thisMonth()), []),

    nextMonthHead: () =>
      monthHead(+monthLength(year(), nextMonth()), $.headLength()),

    wholeMonth: () => [
      ...$.prevMonthTail(),
      ...$.thisMonthLength(),
      ...$.nextMonthHead()
    ]
  };
  return $.wholeMonth();
};
outputFunction(now);
//outputFunction(now1);
//outputFunction(now2);
//outputFunction(now3);
//outputFunction(now4);
