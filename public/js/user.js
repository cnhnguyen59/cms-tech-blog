const login = async (event) => {
    event.preventDefault()

    const email = $('#email').val()
    const password = $('#password').val()

    if (email && password) {

        console.log(`login info client: ${email}, ${password}`)
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          window.location.href = '/';
        } else {
          alert('Failed to log in.');
        }
    }
}

const createAccount = async (event) => {
    event.preventDefault()

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (firstName && lastName && email && username && password){
        const response = await fetch('/api/user/new-user', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, username, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up.');
          }
        }
}

const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out.');
  }
};


/* document.querySelector('#logout').addEventListener('click', logout); */