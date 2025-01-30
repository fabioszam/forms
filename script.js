document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[name="contato"]');
    const submitBtn = document.querySelector('.submit-btn');

    // Validação aprimorada
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        Array.from(form.elements).forEach(element => {
            if (element.required && !element.value.trim()) {
                element.focus();
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
        }
    });

    // Correção para selects no iOS
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('focus', () => {
            select.style.backgroundColor = '#fff';
            select.style.transform = 'translateZ(0)'; // Fix para renderização
        });
        
        select.addEventListener('blur', () => {
            select.style.backgroundColor = '';
        });
    });

    // Previne zoom em inputs no iOS
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.fontSize = '16px';
        });
    });
});