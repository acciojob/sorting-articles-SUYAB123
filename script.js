const bands = [
  'The Plot in You', 
  'The Devil Wears Prada', 
  'Pierce the Veil', 
  'Norma Jean', 
  'The Bled', 
  'Say Anything', 
  'The Midway State', 
  'We Came as Romans', 
  'Counterparts', 
  'Oh, Sleeper', 
  'A Skylit Drive', 
  'Anywhere But Here', 
  'An Old Dog'
];

function sortBands(bands) {
  const ignoreWords = ['a', 'an', 'the'];

  return bands.sort((a, b) => {
    const cleanName = (name) => {
      let words = name.toLowerCase().split(' '); 
      while (ignoreWords.includes(words[0])) { 
        words.shift();
      }
      return words.join(' ');  
    };

    // Compare the cleaned names
    if (cleanName(a) < cleanName(b)) return -1;
    if (cleanName(a) > cleanName(b)) return 1;
    return 0;
  });
}
const sortedBands = sortBands(bands);

const bandList = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');  
  li.textContent = band;  
  bandList.appendChild(li); 
});

