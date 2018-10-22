const largestSubarray = (arr, subLength) => {
  /* edge cases */
  if (arr.length <= subLength) return arr // return the whole array if subarray length is large
  if (subLength <= 0) return [] // return empty array if subarray length is zero or negative

  /* use reduce to accumulate the largest subarray with given params */
  return arr.reduce((accumulator, element, index) => {
    /* take a slice of specified size starting from the current array index */
    const subarray = arr.slice(index, index + subLength)
    if (subarray.length < subLength) return accumulator // only return slices of specified length

    /* get the average of that slice and compare it to the accumulated one */
    const sliceAvg = subarray.reduce((a, b) => a + b) / subLength
    const accAvg = accumulator.length && accumulator.reduce((a, b) => a + b) / subLength

    /* replace the accumulated value if its average is lower than the new slice's average */
    return sliceAvg > accAvg ? subarray : accumulator
  }, [])
}

console.log(largestSubarray([9999, 9998, 912321, -1, -12321, Number.MAX_SAFE_INTEGER], 3))
