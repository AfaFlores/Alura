let friendCount = 0;

function addFriendInput() {
    if (friendCount < 10) {
        const container = document.getElementById('inputsContainer');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Apellido y Nombre del amigo ${friendCount + 1}`;
        container.appendChild(input);
        friendCount++;
    } else {
        alert('Ya has introducido 10 amigos.');
    }
}

function chooseSecretFriend() {
    const inputs = document.querySelectorAll('#inputsContainer input');
    const friends = [];
    inputs.forEach(input => friends.push(input.value));

    if (friends.length < 10) {
        alert('Por favor, introduce el nombre de 10 amigos.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];
    document.getElementById('result').innerText = `Tu amigo secreto es: ${secretFriend}`;
}

