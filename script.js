function validateMessage(message) {
    const regex = /^[a-z\s]*$/;
    return regex.test(message);
}

function togglePlaceholder(show) {
    const placeholderImage = document.getElementById('placeholderImage');
    const secondaryImage = document.getElementById('secondaryImage');
    const copyButton = document.getElementById('copyButton');
    if (show) {
        placeholderImage.style.display = 'block';
        secondaryImage.style.display = 'block';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        secondaryImage.style.display = 'none';
        copyButton.style.display = 'block';
    }
}

function encryptMessage() {
    const message = document.getElementById('inputMessage').value;
    if (message) {
        if (validateMessage(message)) {
            const encryptedMessage = btoa(message); // Encriptar usando Base64
            document.getElementById('outputMessage').value = encryptedMessage;
            alert('Mensaje encriptado correctamente.');
            togglePlaceholder(false);
        } else {
            alert('El mensaje solo puede contener letras minúsculas sin acentos.');
        }
    } else {
        alert('Por favor, escribe un mensaje para encriptar.');
    }
}

function decryptMessage() {
    const message = document.getElementById('inputMessage').value;
    if (message) {
        try {
            const decryptedMessage = atob(message); // Desencriptar usando Base64
            if (validateMessage(decryptedMessage)) {
                document.getElementById('outputMessage').value = decryptedMessage;
                alert('Mensaje desencriptado correctamente.');
                togglePlaceholder(false);
            } else {
                alert('El mensaje desencriptado contiene caracteres inválidos.');
            }
        } catch (e) {
            alert('El mensaje no es válido para desencriptar.');
        }
    } else {
        alert('Por favor, escribe un mensaje para desencriptar.');
    }
}

function copyMessage() {
    const outputMessage = document.getElementById('outputMessage').value;
    if (outputMessage) {
        navigator.clipboard.writeText(outputMessage).then(() => {
            alert('Mensaje copiado al portapapeles.');
        }).catch(err => {
            alert('Error al copiar el mensaje: ' + err);
        });
    } else {
        alert('No hay mensaje para copiar.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const outputMessage = document.getElementById('outputMessage').value;
    togglePlaceholder(!outputMessage);
});