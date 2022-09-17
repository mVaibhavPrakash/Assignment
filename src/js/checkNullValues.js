//Function for updating array empty values with <span></span>

const checkNullValues = (nextRow, map, startIndexOfNullValues, col) => {
  for (let i = startIndexOfNullValues; i < col; i++) {
    map[nextRow][i] = (
      <span className="coin-span coin-x" key={`${nextRow}${i}`}>
        {' '}
      </span>
    );
  }
};

export default checkNullValues;
