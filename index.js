 /*
 Write a recursive function called capitalizeFirst. Given an array of strings capitalize the first letter of each string in the array.
 // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(arr){
  for (i=0; i<arr.length; i++){
    arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
  }
  console.log(arr)
}


capitalizeFirst(['car','taco','banana'])