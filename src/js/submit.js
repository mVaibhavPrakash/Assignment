import change from './change';
import noChange from './noChange';
import result from './result';

const Submit = (e, arg1, arg2) => {
  e.preventDefault();
  if (arg1[0] !== 'none') {
    const [OptionValue, LastSelectedCoin] = arg1;
    const [setOptionValue, setLastSelectedCoin, setAns, setMssg] = arg2;

    //Resetting Validation Massg
    setMssg('');

    const map =
      LastSelectedCoin.Result === null ? new Map() : LastSelectedCoin.Result;
    let nextRow = LastSelectedCoin.index.rowNum + 1;
    let col = LastSelectedCoin.index.colNum;

    if (OptionValue === LastSelectedCoin.lastSelectedCoin) {
      noChange(map, OptionValue, nextRow, col);
    } else if (OptionValue === 'H' || 'T') {
      [nextRow, col] = change(map, OptionValue, nextRow, col);
    }

    const obj = {
      Result: map,
      lastSelectedCoin: OptionValue,
      index: { rowNum: nextRow, colNum: col },
    };
    setLastSelectedCoin(obj);
    result(setAns, map);

    // Setting the OptionValue again to default
    setOptionValue('none');
  } else {
    arg2[3]('Please select value from dropdown');
  }
};

export default Submit;
