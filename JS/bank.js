document.getElementById('login-submit').addEventListener
    ('click', function () {
        // get user email
        const emailField = document.getElementById('user-email');
        const emailValue = emailField.value;
        //get password
        const passworField = document.getElementById('user-password');
        const passwordValue = passworField.value;
        //check email & password
        if (emailValue == 'user@gmail.com' && passwordValue == 'secret') {
            console.log('Valid User');
            window.location.href = 'banking.html';
        }
    })