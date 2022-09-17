import checkNullValues from './checkNullValues';

const noChange = (map, OptionValue, nextRow, col) => {
  if (map[nextRow]) {
    const array = map[nextRow];
    array[col] = (
      <span className="coin-span" key={`${nextRow}${col}`}>
        {OptionValue}
      </span>
    );
    map[nextRow] = array;
  } else {
    const array = [];
    array[col] = (
      <span className="coin-span" key={`${nextRow}${col}`}>
        {OptionValue}
      </span>
    );
    map[nextRow] = array;
  }
  checkNullValues(nextRow, map);
};

export default noChange;
