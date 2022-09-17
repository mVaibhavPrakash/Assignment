const checkNullValues = (nextRow, map) => {
  for (let i = 0; i < map[nextRow].length; i++) {
    console.log(map);
    if (map[nextRow][i] === undefined) {
      map[nextRow][i] = (
        <span className="coin-span coin-x" key={`${nextRow}${i}`}>
          {' '}
        </span>
      );
    }
  }
};

export default checkNullValues;
