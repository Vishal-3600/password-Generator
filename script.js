function generatePassword(length) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const special = '!@#$%^&*()_+[]{}|;:,.<>?';
  const numbers = '0123456789';

  const allCharacters = lowercase + uppercase + special + numbers;

  let password = '';

  // Ensure at least one of each required character
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += special[Math.floor(Math.random() * special.length)];
  
  // Fill the rest of the password length with random characters
  for (let i = password.length; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Shuffle the password to randomize order
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}

// Event listener for button
document.getElementById('generate').addEventListener('click', () => {
  const lengthInput = document.getElementById('length');
  const resultContainer = document.getElementById('result');
  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 8 || length > 32) {
    resultContainer.innerText = 'Please enter a valid length between 8 and 32.';
    resultContainer.style.color = 'red';
  } else {
    const password = generatePassword(length);
    resultContainer.innerText = `Generated Password: ${password}`;
    resultContainer.style.color = 'white';
    resultContainer.style.backgroundColor='red'
  }
});