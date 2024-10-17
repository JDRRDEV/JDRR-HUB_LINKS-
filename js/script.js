// Cambiar tema claro/oscuro
document.getElementById('changeColor').addEventListener('click', function() {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
});

// Cambiar imagen de perfil
document.getElementById('uploadImage').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.querySelector('.profile-pic').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

// Cambiar color de fondo
document.getElementById('bgColorPicker').addEventListener('input', function(event) {
    document.body.style.backgroundColor = event.target.value;
});

// Manejo de usuario y contraseña
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        document.getElementById('loginMessage').textContent = 'Account created successfully!';
    } else {
        document.getElementById('loginMessage').textContent = 'Please fill in all fields.';
    }
});

// Agregar enlace personalizado
document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const linkName = document.getElementById('linkName').value;
    const linkURL = document.getElementById('linkURL').value;
    const linkImage = document.getElementById('linkImage').value;

    const linkContainer = document.getElementById('linkContainer');
    const newLink = document.createElement('a');

    newLink.href = linkURL;
    newLink.className = 'link';
    newLink.target = '_blank'; // Abrir en una nueva pestaña
    newLink.innerHTML = `<img src="${linkImage}" alt="${linkName}" class="link-image" style="width:30px;height:30px;margin-right:10px;"> ${linkName}`;

    linkContainer.appendChild(newLink);

    // Limpiar los campos después de agregar el enlace
    document.getElementById('linkForm').reset();
});
