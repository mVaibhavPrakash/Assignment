const result = (setAns, Result) => {
  let array = [];

  // Key for <p> element
  let pcount = 0;
  let values = Result.values();
  for (let value of values) {
    pcount++;
    let arr = [];

    //Key for <span> element
    let scount = 0;

    for (let i of value) {
      scount++;
      if (i === undefined) {
        arr.push(
          <span className="coin-span coin-x" key={scount}>
            {' '}
          </span>
        );
      } else {
        arr.push(
          <span className="coin-span" key={scount}>
            {i}
          </span>
        );
      }
    }
    array.push(
      <p className="coin-p" key={pcount}>
        {arr}
      </p>
    );
  }
  setAns(array);
};

export default result;
