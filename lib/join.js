/**
 * What is .join()?
 * * concatenates the elements of an array using a [separator] into a string
 *
 * Syntax:
 * * <arrayName>.join(['separator'])
 *
 * Syntax Breakdown:
 * * <arrayName> -> The name of your array you want to join
 * * .join() -> The required method name
 * * [Parameter] -> Separator value like ',' '|' '/' '-' ''
 *
 * Returns:
 * * The elements in your array with a separator in string format
 *
 * Keep In Mind:
 * * By default the array elements will be joined with a comma (,)
 * * The parameter is case sensitive
 *
 */

// Example 1: Default Comma Separator
export function exOne() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a.join());
  // Output: 1,2,3,4,5,6
}

// Example 2: No Space Separator
export function exTwo() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a.join(""));
  // Output: 123456
}

// Example 3: One Space Separator
export function exThree() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a.join(" "));
  // Output: 1 2 3 4 5 6
}

// Example 4: Unique Separator |
export function exFour() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a.join("|"));
  // Output: 1|2|3|4|5|6
}

// Example 5: Unique Separator ||
export function exFive() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a.join("~"));
  // Output: 1~2~3~4~5~6
}
