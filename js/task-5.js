function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Знаходимо необхідні елементи в DOM
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

// 2. Додаємо слухач події кліку на кнопку
button.addEventListener('click', () => {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();

  // 3. Змінюємо колір фону body через інлайн-стиль
  body.style.backgroundColor = newColor;

  // 4. Записуємо значення кольору в текстовий вміст span
  colorSpan.textContent = newColor;
});