export const cutMonthToWeeks = (_pool, _acc) => {
  _pool.length > 7
    ? (() => {
        _acc.push(_pool.slice(0, 7));
        cutMonthToWeeks(_pool.slice(7), _acc);
      })()
    : _acc.push(_pool);
  return _acc;
};
