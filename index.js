const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const splitElements = tutorials.map(word => word.split(' '));
//   const capSplitWords = splitElements.map(words => words.map((word)=>word.charAt(0).toUpperCase()+word.slice(1)));
//   // const rejoinElements = capSplitWords.map(sentences => sentences.join(' '));
//   return tutorials = capSplitWords.map(sentences => sentences.join(' '));
// }
const titleCased = () => {
  const splitElements = tutorials.map(title => {
    // * splitting each sentence string into individual word strings
    const words = title.split(' ');
    // * capitalizing the first word of each string
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // * rejoin each word string into it's original sentence string
    return capitalizedWords.join(' ');
  });
  return splitElements;
};
const splitElements = titleCased();
// !found 👆🏻 with help from chatGPT
// const titleCased = () => {
//   const words = tutorials.map(tutorial.split(' ')); // Split the string into words
//   const capitalizedWords = words.map(function (word) {
//     // Capitalize the first letter of each word
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizedWords.join(' '); // Join the words back into a single string
// };
