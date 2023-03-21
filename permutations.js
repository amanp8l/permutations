//permutations is the final function, you can pass any array and get responses of all possible permutations of arrays

const arr = [1, 2, 3]; //input array

//permutation function
const permutations = (arr = []) => {
  let ans = [];
  const flag = (arr2) => {
    if (arr2.length == arr.length) return ans.push(arr2);
    for (let e of arr) if (!arr2.includes(e)) flag([...arr2, e]);
  };
  flag([]);
  return ans;
};
console.log(permutations(arr));


