const change = (map, OptionValue, nextRow, col) => {
  let array = map[0] ? map[0] : [];
  array.push(
    <span className="coin-span" key={`${nextRow}${col}`}>
      {OptionValue}
    </span>
  );
  nextRow = 0;
  col = array.length - 1;
  map[0] = array;
  return [nextRow, col];
};

export default change;
