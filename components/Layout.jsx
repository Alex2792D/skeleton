const React = require('react');

function Layout({ children, title, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <script src="/css/js.js" defer></script>
        <script src="/script.js" defer></script>
        <title>{title}</title>
      </head>
      <body>
        {user ? (
          <>
            <nav>
              <div className="container">
                <a href="/" className="navbar-brand">Мой Сайт</a>
                <div className="navbar-nav">
                  <span>Привет, {user.name}</span>
                  <a href="/store/logout">Выйти</a>
                </div>
              </div>
            </nav>
            <button id="addSomethingButton">Добавить что-то</button>
            <div id="inputContainer"></div>
          </>
        ) : (
          <nav>
            <div className="container">
              <a href="/" className="navbar-brand">Мой Сайт</a>
              <div className="navbar-nav">
                <a href="/store/signup">Зарегистрироваться</a>
                <a href="/store/signin">Войти</a>
              </div>
            </div>
          </nav>
        )}
        <div>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;