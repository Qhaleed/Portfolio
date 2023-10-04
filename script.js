document.getElementById('loginForm').addEventListener('submit',
 function (event){
    event.preventDefault();


    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    const state = document.getElementById('state');

     if (username === 'Qhal' && password === 'Pass') {
         state.innerHTML = 'Log-in succesfully';
         window,location.href = 'http://127.0.0.1:5500/universe.html';
    } else {
    state.innerHTML = 'Invalid username or password.'
    }


 });

 