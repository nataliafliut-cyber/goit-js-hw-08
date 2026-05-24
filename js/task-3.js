// 1. Знаходимо необхідні елементи в DOM за їхніми ID
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// 2. Додаємо слухача події 'input' на текстове поле
nameInput.addEventListener('input', (event) => {
  // Очищаємо значення від пробілів по краях за допомогою методу trim()
  const trimmedValue = event.currentTarget.value.trim();

  // 3. Перевіряємо, чи інпут не порожній після очищення
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});