# Wyless Starter Template

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="22%"><code>npm i</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>npm start</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Сборка проекта с оптимизацией изображений</td>
    </tr>
  </tbody>
</table>

Предполагается, что все команды вы выполняете в bash (для OSX и Linux это самый обычный встроенный терминал, для Windows это, к примеру, Git Bash). В Windows установку пакетов (`npm i`) нужно выполять в терминале, запущенном от имени администратора.

## Как начать новый проект c этим репозиторием

1. Клонировать этот репозиторий в новую папку (`git clone https://github.com/semioys/wyless-starter-template`) и зайти в неё (`cd new-project`).
2. Стереть историю разработки этого репозитория (`rm -rf .git`), инициировать новый (`git init`), создать удалённый репозиторий и привязать его (`git remote add origin АДРЕС`).
3. Отредактировать `README.md`, `package.json` (название проекта, автор, лицензия, сторонние пакеты и пр.).
4. Установить зависимости (`npm i`).
5. Запустить сервер разработки (`npm start`).

## Разметка

Используется [pug](https://pugjs.org/api/getting-started.html). HTML никак не обрабатывается.

По умолчанию используются [наследование шаблонов](https://pugjs.org/language/inheritance.html), разметка каждого блока описываеться отдельным файлом (в `./src/templates/sections`). Все блоки подлючаються в один файл(см. `./src/templates/index.pug`).

## Стили

Подключение всех стилей происходит в (`./src/scss/main.scss`). Стилизация каждого блока описываеться отдельным файлом (в `./src/templates/sections`).

По умолчанию в проект подключена библиотека Normalize.css

Используемый постпроцессинг:

1. [autoprefixer](https://github.com/postcss/autoprefixer)
2. [csso](https://github.com/css/csso)

## Назначение папок

```bash
build/          # Папка сборки, здесь работает сервер автообновлений.
src/            # Исходные файлы.
  js/           # - js файлы (входной файл main.js)
  sass/         # - стили (входной файл main.scss)
    global/     # - базовая стилизация, библиотеки, переменные и т.д.
      mixins/   # - миксины
    sections/   # - стилизация конкретного блока
  fonts/        # - шрифты проекта (будут автоматически скопированы в папку сборки).
  img/          # - добавочные картинки
    svg/        # - svg иконки для сборки в спрайт
  pug/          # - шаблоны pug.
    layout/     # - основной шаблон разметки (master.pug)
    mixins/     # - миксины
    sections/   # - шаблон для конкретного блока
    index.pug   # - главная страница проекта.
```
