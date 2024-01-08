const darkBtn = document.querySelector('.dark-btn');
// const body = document.getElementById('body');

// const storedTheme = localStorage.getItem('theme');
// if (storedTheme) {
//     body.classList.add(storedTheme);
// }

// darkBtn.addEventListener('click', function () {
//     body.classList.toggle('night');
//     const theme = body.classList.contains('night') ? 'night' : '';
//     localStorage.setItem('theme', theme);
// });


function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  // Function to get the cookie value
  function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }
  
  // Check if the user has a preferred theme stored in a cookie
  const storedTheme = getCookie('theme');
  if (storedTheme) {
    body.classList.add(storedTheme);
  }
  
  darkBtn.addEventListener('click', function () {
    body.classList.toggle('night');
    const theme = body.classList.contains('night') ? 'night' : '';
    setCookie('theme', theme, 365);
  });

