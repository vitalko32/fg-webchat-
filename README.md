# Webchat (with FB login)

ТЗ:
Довести до рабочего вида веб приложение.
Собрался костяк веб-приложения на Next.js c помощью ChatGPT, но оно выкидывает ошибку.

Ниже, описание приложения и
в квадратных скобках написано, что готово.

PWA веб-приложение на Next.js
[к PWA, сделаны манифест и иконка]

1.
Дизайн:
- Использование css-фреймворка Tailwind
- Чистый светлый красивый дизайн
- Responsive, что бы смотрелся на мобильных устройствах
[все сделано, дизайн в файле globals.css]
- Имеет переключатель темного/светлого режима и автоматическую подстройку под настройки браузера или ОС в зависимости от этого.
[сделано, но возможно именно этот код выкидает ошибку]


2.
Next.js Web-приложение имеет два состояния.
Первое состояние приложения - это: 
кнопка входа в систему через Facebook логин, расположенная в центре.
Описание приложения под кнопкой.
Название приложения, которое называется "Dream Interpreter", в заголовке сверху.
[сделано: логин через next-auth, компоненты: LoginButton.js AppTitle.js Description.js]

3.
Второе состояние приложения:
после входа в систему, данные юзера уходят на сервер, кнопка входа исчезает и пользователь видит страницу с чатом
- текстовая область с диалогами
- под текстовой областью с диалогами есть поле для того, чтобы пользователь мог написать в чат.
[сделано: компоненты ChatArea.js ChatInput.js]

4.
Кнопка входа - это Facebook логин, который регистрирует пользователя через Facebook, получая email и интересы пользователя из его аккаунта в Facebook.
[Подключения к Facebook пока не реализовано, код для смены состояния есть в компоненте GetLogin.js который не подключен, надо бы его подключить тестово тоже]

5.
В футере должны быть ссылки на статические страницы: "About", "Privacy", "Contact Us".
[сделано: About.js Privacy.js ContactUs.js]

P.S.
Функционал чата в это ТЗ не входит.
