document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        currentBalance: document.getElementById('current-balance'),
        totalEntries: document.getElementById('total-entries'),
        totalExits: document.getElementById('total-exits'),
        pixSection: document.getElementById('pix-section'),
        transactionsList: document.getElementById('transactions-list'),
        btnPix: document.getElementById('btn-pix'),
        btnPagar: document.getElementById('btn-pagar'),
        btnInvestir: document.getElementById('btn-investir'),
        pixTabButtons: document.querySelectorAll('.pix-tab-button'),
        pixReceiveForm: document.getElementById('pix-receive-form'),
        pixTransferForm: document.getElementById('pix-transfer-form'),
        receiveKey: document.getElementById('receive-key'),
        receiveAmount: document.getElementById('receive-amount'),
        receiveErrorMessage: document.getElementById('receive-error-message'),
        transferKey: document.getElementById('transfer-key'),
        transferAmount: document.getElementById('transfer-amount'),
        transferErrorMessage: document.getElementById('transfer-error-message')
    };

    const state = {
        balance: 1000.00,
        totalEntries: 0.00,
        totalExits: 0.00,
        transactions: []
    };

    function updateUI() {
        elements.currentBalance.textContent = state.balance.toLocaleString('pt-BR', {minimumFractionDigits: 2});
        elements.totalEntries.textContent = state.totalEntries.toLocaleString('pt-BR', {minimumFractionDigits: 2});
        elements.totalExits.textContent = state.totalExits.toLocaleString('pt-BR', {minimumFractionDigits: 2});

        if (state.transactions.length === 0) {
            elements.transactionsList.innerHTML = '<li class="no-transactions">Não constam transações</li>';
        } else {
            elements.transactionsList.innerHTML = '';
            state.transactions.forEach(transaction => {
                const li = document.createElement('li');
                li.className = transaction.type === 'entry' ? 'transaction-entry' : 'transaction-exit';

                const date = new Date(transaction.timestamp);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

                li.innerHTML = `
                    <div class="transaction-icon">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${transaction.type === 'entry' ? '%23388E3C' : '%23D32F2F'}' d='M${transaction.type === 'entry' ? '5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z' : 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-6-5.08l-2.92-2.92L7.5 11.5 11 15l5-5-1.41-1.42z'}'/%3E%3C/svg%3E" alt="${transaction.type === 'entry' ? 'Entrada' : 'Saída'}">
                    </div>
                    <div class="transaction-details">
                        <strong>${transaction.description}</strong>
                        <span class="date-time">${formattedDate} ${formattedTime}</span>
                        <span class="id">ID: ${transaction.id}</span>
                    </div>
                    <div class="transaction-amount">${transaction.type === 'entry' ? '+' : '-'} R$ ${transaction.amount.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
                `;
                elements.transactionsList.appendChild(li);
            });
        }
    }

    function generateTransactionId() {
        const now = new Date();
        return now.getFullYear() + 
               (now.getMonth()+1).toString().padStart(2, '0') + 
               now.getDate().toString().padStart(2, '0') + 
               now.getHours().toString().padStart(2, '0') + 
               now.getMinutes().toString().padStart(2, '0') + 
               now.getSeconds().toString().padStart(2, '0');
    }

    elements.btnPix.addEventListener('click', function() {
        elements.pixSection.classList.remove('hidden');
    });

    elements.btnPagar.addEventListener('click', function() {
        alert('Sistema indisponível. Tente novamente mais tarde.');
    });

    elements.btnInvestir.addEventListener('click', function() {
        alert('Sistema indisponível. Tente novamente mais tarde.');
    });

    elements.pixTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            elements.pixTabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.pix-form').forEach(form => form.classList.add('hidden'));
            const formId = this.getAttribute('data-form');
            if (formId === 'receive') {
                elements.pixReceiveForm.classList.remove('hidden');
            } else {
                elements.pixTransferForm.classList.remove('hidden');
            }
        });
    });

    elements.pixReceiveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const key = elements.receiveKey.value.trim();
        const amount = parseFloat(elements.receiveAmount.value);
        
        if (!key || isNaN(amount)) {
            elements.receiveErrorMessage.textContent = 'Todos os campos devem ser preenchidos!';
            return;
        }
        
        if (amount <= 0) {
            elements.receiveErrorMessage.textContent = 'O valor deve ser maior que zero!';
            return;
        }
        
        elements.receiveErrorMessage.textContent = '';
        
        state.balance += amount;
        state.totalEntries += amount;
        
        const transaction = {
            id: generateTransactionId(),
            type: 'entry',
            amount: amount,
            description: 'Recebimento via PIX',
            timestamp: new Date()
        };
        state.transactions.unshift(transaction);
        
        updateUI();
        
        elements.receiveKey.value = '';
        elements.receiveAmount.value = '';
        
        alert('Transação realizada com sucesso');
    });

    elements.pixTransferForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const key = elements.transferKey.value.trim();
        const amount = parseFloat(elements.transferAmount.value);
        
        if (!key || isNaN(amount)) {
            elements.transferErrorMessage.textContent = 'Todos os campos devem ser preenchidos!';
            return;
        }
        
        if (amount <= 0) {
            elements.transferErrorMessage.textContent = 'O valor deve ser maior que zero!';
            return;
        }
        
        if (amount > state.balance) {
            elements.transferErrorMessage.textContent = 'Saldo insuficiente!';
            return;
        }
        
        elements.transferErrorMessage.textContent = '';
        
        state.balance -= amount;
        state.totalExits += amount;
        
        const transaction = {
            id: generateTransactionId(),
            type: 'exit',
            amount: amount,
            description: 'Transferência via PIX',
            timestamp: new Date()
        };
        state.transactions.unshift(transaction);
        
        updateUI();
        
        elements.transferKey.value = '';
        elements.transferAmount.value = '';
        
        alert('Transação realizada com sucesso');
    });

    updateUI();

    document.getElementById('current-year').textContent = new Date().getFullYear();
});