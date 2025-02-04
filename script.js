document.addEventListener('DOMContentLoaded', () => {
    // Controle do campo "Outros"
    const interestSelect = document.getElementById('interest');
    const outrosContainer = document.getElementById('outros-container');
    
    interestSelect.addEventListener('change', () => {
        outrosContainer.style.display = interestSelect.value === 'outros' ? 'block' : 'none';
    });

    // Máscara automática do WhatsApp
    const phoneInput = document.getElementById('whatsapp');
    
    phoneInput.addEventListener('input', function(e) {
        let numbers = e.target.value.replace(/\D/g, '');
        let formatted = '';
        
        numbers = numbers.substring(0, 11);
        
        if (numbers.length > 2) {
            formatted += `(${numbers.substring(0,2)}) `;
            numbers = numbers.substring(2);
        }
        
        if (numbers.length > 5) {
            formatted += `${numbers.substring(0,5)}-${numbers.substring(5)}`;
        } else {
            formatted += numbers;
        }
        
        e.target.value = formatted;
    });

    // Prevenção de caracteres não numéricos
    phoneInput.addEventListener('keydown', (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        if (isNaN(parseInt(e.key)) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    // Loading no envio do formulário
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.submit-btn');
    
    form.addEventListener('submit', () => {
        submitBtn.classList.add('loading');
    });
});
