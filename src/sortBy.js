export default function (thisState) {
  return function sortBy(by) {
    let { sort } = thisState.state;
    if (by === sort || by === sort.slice(1 - sort.length)) {
      const firstCharMinus = sort.slice(0, 1) === "-";
      sort = firstCharMinus ? by : `-${by}`;
    } else {
      sort = by;
    }
    thisState.setState({ sort }, () => thisState.loadData());
  };
}
