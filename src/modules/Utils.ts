export function filterAndSortObjectsByName(searchString: string, array: {name: string}[]) {
  let filteredArray = array.filter(obj => obj.name.includes(searchString));
  
  filteredArray.sort((a, b) => {
      return a.name.indexOf(searchString) - b.name.indexOf(searchString);
  });
  
  return filteredArray.slice(0, 5);
}

export function formatNumber(input: string | number): number {
  let value: number;

  if (typeof input === 'string') {
    if (input.includes('.')) {
      value = parseFloat(input);
    } else {
      value = parseInt(input, 10);
    }
  } else {
    value = input;
  }

  if (Number.isInteger(value)) {
    return value;
  } else {
    return Number(value.toFixed(2));
  }
}