// Função para mostrar detalhes do personagem
function showCharacterDetails(character) {
    alert("Mostrando detalhes de " + character);
    // Aqui você pode abrir um modal ou página com os detalhes do personagem
}

// Função para mostrar trailer em um modal
function showTrailer(videoUrl) {
    document.getElementById('trailer-frame').src = videoUrl;
    document.getElementById('trailer-modal').style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('trailer-frame').src = "";
    document.getElementById('trailer-modal').style.display = "none";
}

// Função de validação de formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').innerText = "Mensagem enviada com sucesso!";
    } else {
        document.getElementById('form-message').innerText = "Por favor, preencha todos os campos!";
    }
});
