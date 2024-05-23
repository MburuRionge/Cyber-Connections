function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (email && password) {
        alert('Sign In Successful');
        // Perform your sign-in logic here
    } else {
        alert('Please fill in all fields');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login Successful');
        // Perform your login logic here
    } else {
        alert('Please fill in all fields');
    }
}