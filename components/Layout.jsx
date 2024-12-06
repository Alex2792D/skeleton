const React = require('react');

function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/css/js.js" defer></script>
        <script src="/script.js" defer></script>
        <title>{title}</title>
      </head>
      <body>
        {user ? (
          <>
            <nav>
              <div className="container">
                <a href="/" className="navbar-brand">My site</a>
                <div className="navbar-nav">
                  <span>Hello, {user.name}</span>
                  <a href="/store/logout">Logout</a>
                </div>
              </div>
            </nav>
            <button id="addSomethingButton">ADD</button>
            <div id="inputContainer"></div>
          </>
        ) : (
          <nav>
            <div className="container">
              <a href="/" className="navbar-brand">My site</a>
              <div className="navbar-nav">
                <a href="/store/signup">Signup</a>
                <a href="/store/signin">Signin</a>
              </div>
            </div>
          </nav>
        )}
        <div className="centered-content">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;