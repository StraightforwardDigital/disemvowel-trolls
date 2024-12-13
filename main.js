function disemvowel(str) {
  //creates a class of characters (vowels) to reference in the sorting process
  const isVowel = char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
  //Splits the string into an array, filters for characters that aren't vowels and returns a string
  return str.split('').filter(char => !isVowel(char)).join('');
}