 
    function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
  
        if (username === 'admin' && password === 'password') {
          sessionStorage.setItem('authToken', 'token_de_autentificare');
  
          window.location.href = './main.html';
        } else {
          document.getElementById('error').textContent = 'Date de autentificare incorecte!';
        }
      }
  
      function checkSession() {
        var authToken = sessionStorage.getItem('authToken');
        if (authToken) {
          window.location.href = './main.html';
        }
      }

      document.addEventListener('keydown', function(event) {
        if (event.key === 'c' || event.key === 'C') {
          window.location.href = './form.html'; 
        }
      });
