// Your code here
function mapToNegativize(array) {
    return array.map(x => x * -1);
  }

  function mapToNoChange(array) {
      return array.map(x => x)
  }

  function mapToDouble(array) {
    return array.map(x => x * 2);
  }

  function mapToSquare(array) {
    return array.map(x => x ** 2);
  }

  function reduceToTotal(array, start = 0) {
    let total = start
    for(let element of array){
        total += element
    }
return total
}

function reduceToAllTrue(arr) {
    for (let element of arr) {
        if (!element) return false;
    }
    return true;
}

function reduceToAnyTrue(arr) {
    for (let element of arr) {
        if (element) return true;
    }
    return false;
}