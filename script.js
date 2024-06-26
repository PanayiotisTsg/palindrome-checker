const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.getElementById('result');
const icon = document.querySelector('#icon');
const definition = document.querySelector('.definition');

function hasValue() {
  return !!textInput.value;
}

function getAlphanumeric(input) {
  const newWord = input.replace(/[^a-z0-9]/gi, '');
  return newWord;
}

function checkPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function showResult(isPal, word) {
  return `${word} is ${isPal ? '' : 'not'} a palindrome`;
}

function showResultColor(isPal) {
  result.style.backgroundColor = isPal ? 'green' : 'red';
}

function toggleDefinition() {
  definition.classList.toggle('show');
}

checkBtn.addEventListener('click', () => {
  if (!hasValue()) {
    alert('Please input a value');
    return;
  };

  const initialWord = textInput.value;
  const modifiedWord = getAlphanumeric(initialWord).toLowerCase();
  const isPalindrome = checkPalindrome(modifiedWord);

  console.log(modifiedWord);

  result.textContent = showResult(isPalindrome, initialWord);
  showResultColor(isPalindrome);
  result.style.opacity = '1';
});

icon.addEventListener('click', () => {
  toggleDefinition();
  icon.classList.toggle('on');
});

definition.addEventListener('click', () => {
  toggleDefinition();
  icon.classList.toggle('on');
});