# Справочник по StarWars

## [StarWars-DB](https://starwars-93745.firebaseapp.com/ 'StarWars-DB')

### Использованы

- Create-react-app;
- Навигация - React Router (BrowserRouter, Route, Switch, NavLink, Redirect);
- API - swapi.co и starwars-visualguide.com;
- Sass-modules;
- Компоненты PlanetsPage и ErrorButton переписаны с использованием React hooks (useState). В компоненте ItemDetails использованы хуки useState и useEffect.
- React Context API;

### Реализовано

- Навигация по разделам: Persons, Planets, Starships;
- Смена источника API с "боевого" на тестовый по кнопке "Change API";
- ErrorBoundary - тест по кнопке "Throw error";
- Вывод списка данных и детального описания в каждом разделе реализованы по разному;
- Подготовка данных, пришедших с API в удобный формат;
- Редирект между страницами Login и Secret в зависимости от значения isLoggedIn;
- Использование React Context API;
- Гамбургер-меню для маленьких экранов (бутстрап и жиквери - позор мне, посыпаю голову пеплом. Когда-нибудь поправлю);
- Адаптив;

### ToDo

- Переписать больше классовых компонентов на хуки;
