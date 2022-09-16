const change = (map, OptionValue, nextRow, col) => {
  let array = [OptionValue];
  if (map.has(0)) {
    array = map.get(0);
    array.push(OptionValue);
  }
  nextRow = 0;
  col = array.length - 1;
  map.set(0, array);
  return [nextRow, col];
};

export default change;
