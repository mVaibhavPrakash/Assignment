import checkNullValues from './checkNullValues';

const change = (map, OptionValue, nextRow, col) => {
  let array = [
    <span className="coin-span" key={`${nextRow}${col}`}>
      {OptionValue}
    </span>,
  ];
  if (map[0]) {
    array = map[0];
    array.push(
      <span className="coin-span" key={`${nextRow}${col}`}>
        {OptionValue}
      </span>
    );
  }
  nextRow = 0;
  col = array.length - 1;
  map[0] = array;
  checkNullValues(nextRow, map);
  return [nextRow, col];
};

export default change;
