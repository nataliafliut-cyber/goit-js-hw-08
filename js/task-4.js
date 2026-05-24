// 1. Знаходимо форму в DOM-дереві за її класом
const loginForm = document.querySelector('.login-form');

// 2. Додаємо слухач події 'submit'
loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  // 3. Запобігаємо перезавантаженню сторінки при відправці
  event.preventDefault();

  // 4. Отримуємо доступ до елементів форми через деструктуризацію властивості elements
  const { email, password } = event.currentTarget.elements;

  // Очищаємо значення від пробілів по краях для точної перевірки та подальшого використання
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // 5. Перевіряємо, чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return; // Перериваємо виконання функції, якщо хоча б одне поле порожнє
  }

  // 6. Якщо валідація пройдена, збираємо дані в об'єкт
  const formData = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };

  // 7. Виводимо об'єкт із даними в консоль
  console.log(formData);

  // 8. Очищаємо поля форми
  event.currentTarget.reset();
}