# Справочник по StarWars

## [StarWars-DB](https://starwars-93745.firebaseapp.com/ 'StarWars-DB')

### Использованы

- Create-react-app;
- Навигация - React Router (BrowserRouter, Route, Switch, NavLink, Redirect);
- API - swapi.co и starwars-visualguide.com;
- Sass-modules;
- Компонент PlanetsPage переписан с использованием React hooks (useState);
- React Context API;

### Реализовано

- Навигация по разделам: Persons, Planets, Starships;
- Смена источника API с "боевого" на тестовый по кнопке "Change API";
- ErrorBoundary - тест по кнопке "Throw error";
- Вывод списка данных и детального описания в каждом разделе реализованы по разному;
- Подготовка данных, пришедших с API в удобный формат;
- Редирект между страницами Login и Secret в зависимости от значения isLoggedIn;
- Использование React Context API;

### ToDo

- Переписать больше классовых компонентов на хуки;
- Привести в порядок стили, добавить адаптив;
- Добавить гамбургер-меню для маленьких экранов;
