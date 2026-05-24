const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Знаходимо батьківський контейнер галереї в DOM
const galleryContainer = document.querySelector('.gallery');

// 1. Створюємо HTML-розмітку для всіх карт за допомогою шаблону
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join('');

// 2. Вставляємо згенеровану розмітку в ul.gallery
galleryContainer.innerHTML = galleryMarkup;

// 3. Налаштовуємо делегування подій на контейнер
galleryContainer.addEventListener('click', onGalleryItemClick);

// 4. Функція обробки кліку по галереї
function onGalleryItemClick(event) {
  // Забороняємо браузеру завантажувати або відкривати картинку в новій вкладці
  event.preventDefault();

  // Перевіряємо, що клікнули саме по тегу IMG (ігноруємо кліки по Li чи порожніх місцях)
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Витягуємо посилання на велике зображення та альтернативний текст
  const largeImageUrl = event.target.dataset.source;
  const imageAlt = event.target.alt;

  // Створюємо модальне вікно basicLightbox з налаштуваннями подій
  const instance = basicLightbox.create(
    `
    <div class="modal">
      <img src="${largeImageUrl}" alt="${imageAlt}" width="1112" height="640">
    </div>
    `,
    {
      // Додаємо слухач клавіатури, коли модалка відкриється
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      // Видаляємо слухач клавіатури, коли модалка закривається
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      }
    }
  );

  // Показуємо модальне вікно користувачу
  instance.show();

  // Функція для закриття вікна при натисканні клавіші Escape
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}