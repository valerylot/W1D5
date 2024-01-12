/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo", "something", "idk", 2];
  const vals1 = [42, "wassup", true, 56, "dog", "cat"];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  const keys2 = [];
  const vals2 = [];
  const expected2 = {};
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {

    // code here
    let result = {}
    let length = Math.min(keys.length, values.length)
    for (var i=0; i<length; i++){
        let string = keys[i]
        console.log("this is a string:",string)
        let convert = string.toString()
        console.log("this is the convert:", convert)
        result[convert]=values[i];
        console.log("this is the result[convert]:", result[convert])
        console.log("this is the result:", result)
    }
    return result
  }
  
  console.log(zipArraysIntoMap(keys1, vals1))
  console.log(zipArraysIntoMap(keys2, vals2))
  /*****************************************************************************/