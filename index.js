 /*
 Write a recursive function called capitalizeFirst. Given an array of strings capitalize the first letter of each string in the array.
 // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(arr, i=0){
  if (i>arr.length-1){return arr}
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  return (capitalizeFirst(arr,i+1))
}

capitalizeFirst(['car','taco','banana'])