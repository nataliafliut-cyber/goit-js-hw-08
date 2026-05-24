// 1. Знаходимо всі елементи лі-ітеми всередині головного списку
const categoriesList = document.querySelectorAll('#categories .item');

// 2. Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// 3. Перебираємо кожну категорію за допомогою методу forEach()
categoriesList.forEach(category => {
  // Знаходимо текст заголовка h2 для поточної категорії
  const categoryTitle = category.querySelector('h2').textContent;
  
  // Знаходимо всі вкладені елементи li всередині поточної категорії
  const elementsCount = category.querySelectorAll('ul li').length;
  
  // Виводимо дані в консоль у потрібному форматі
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});