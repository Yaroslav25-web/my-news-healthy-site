document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.getElementById('news');

    // Пример новостной записи
    const newsItem = document.createElement('article');
    newsItem.innerHTML = `
        <h2>Заголовок новости</h2>
        <p>Описание новости. Здесь будет текст новости.</p>
    `;

    newsSection.appendChild(newsItem);
});
