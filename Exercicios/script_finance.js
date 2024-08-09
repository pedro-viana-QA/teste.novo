document.getElementById('finance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const month = document.getElementById('month').value;
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const balance = income - expenses;

    const tableBody = document.querySelector('#finance-table tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${month}</td><td>R$ ${income.toFixed(2)}</td><td>R$ ${expenses.toFixed(2)}</td><td>R$ ${balance.toFixed(2)}</td>`;

    document.getElementById('finance-form').reset();
});