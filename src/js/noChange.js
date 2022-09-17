import checkNullValues from './checkNullValues';

// When Previous and New selected values are same then we will add new Coin below the previous coin
const noChange = (map, OptionValue, nextRow, col) => {
  // Check and intialize array if nextRow index row already exists or not
  const array = map[nextRow] ? map[nextRow] : [];

  let startIndexOfNullValues = array.length;
  array[col] = (
    <span className="coin-span" key={`${nextRow}${col}`}>
      {OptionValue}
    </span>
  );
  map[nextRow] = array;

  //Remove the blank space created in nextRow row due to new entry
  checkNullValues(nextRow, map, startIndexOfNullValues, col);
};

export default noChange;
