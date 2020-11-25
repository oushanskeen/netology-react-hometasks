export const monthLength = (_year, _month) => new Date(_year, _month, 0).getDate();
export const monthScope = (_year, _month) => {
  const end = monthLength(_year, _month);
  const acc = [];
  const fillTheMonth = (fend, facc) =>
    fend === 0 ? facc.reverse() : fillTheMonth(fend - 1, facc.concat(fend));
  return fillTheMonth(end, acc);
};

export const monthEnd = (_year, _month) => new Date(_year, _month, 0).getDay();

export const monthTailScope = (_year, _month) =>
  monthScope(_year, _month).slice(-monthEnd(_year, _month));

export const modNum = (_num, _mod) => (_num < _mod ? _num : _num % _mod);

export const monthStart = (_year, _month) => new Date(_year, _month - 1, 1).getDay();

export const monthHeadScope = (_year, _month) =>
  monthScope(_year, _month).slice(
    0,
    +modNum(7 - monthStart(_year, _month) + 1, 7)
  );

export const calendarArray = (_year, _month) => [
  ...monthTailScope(_year, _month - 1),
  ...monthScope(_year, _month),
  ...monthHeadScope(_year, _month + 1)
];
