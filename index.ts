function countSetsOfThree(numbers: number[], threshold: number): number {
  const tree = {};
  let count = 0;
  numbers.forEach((firstNumber, index) => {
    numbers.slice(index, numbers.length).forEach((secondNumber, nextIndex) => {
      numbers
        .slice(nextIndex, numbers.length)
        .forEach((thirdNumber, finalIndex) => {
          if (
            !!firstNumber &&
            !!secondNumber &&
            !!thirdNumber &&
            firstNumber + secondNumber + thirdNumber >= threshold
          ) {
            count++;
            debugger;
          }
        });
    });
  });
  return count;
}

append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(
  `countSetsOfThree([1,2,3,4,5], 7)`,
  countSetsOfThree([1, 2, 3, 4, 5], 7),
  2
);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement("div");
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector("#results").append(item);
}
