
const noChange = (map,OptionValue,nextRow,col) => {
    if (map.has(nextRow)) {
        const array = map.get(nextRow);
        array[col] = OptionValue;
        map.set(nextRow, array);
      } else {
        const array = [];
        array[col] = OptionValue;
        map.set(nextRow, array);
      }
}

export default noChange