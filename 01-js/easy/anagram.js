/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 
  if(str1.length !== str2.length){
    return false;
  }

  const map1 = new Map();
  const map2 = new Map(); 
  for(let val of str1){
    if(!map1.has(val)){
      map1.set(val, 1);
    }else{
      map1.set(val,map1.get(val) + 1);
    }
  }

  for(let val of str2){
    if(!map2.has(val)){
      map2.set(val, 1);
    }else{
      map2.set(val,map2.get(val) + 1);
    }
  }


  console.log(map1);
  console.log(map2);


   for(let [key,value] of map1){
    if(value !== map2.get(key)){
      return false;
    }
   }
return true;
}
console.log("result : ",isAnagram('gmapg','pgam'));

module.exports = isAnagram;
