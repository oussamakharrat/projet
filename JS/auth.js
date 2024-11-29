function login(e) {
    e.preventDefault(); 
    
    let user1 = {
        username: 'admin',
        password: 'password'
    };
    let user2 = {
        username: 'user',
        password: 'user'
    };

    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    let messageElement = document.getElementById('loginMessage');

    if ((inputUsername === user1.username && inputPassword === user1.password) || (inputUsername === user2.username && inputPassword === user2.password)) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
   
        window.location.href = '../HTML/main/index.html'; 
    } else {
        messageElement.textContent = 'Invalid username or password. Please try again.';
        messageElement.style.color = 'red';
    }
}

function logout(e){
    e.preventDefault();
    let logout =confirm('Are you sure you sure want to logout?');
        if(logout){
            window.location.href = '../login.html';
        }
}
