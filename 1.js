function tinhToan(pheptoan) {
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;

    if (!isNumeric(a) || !isNumeric(b)) {
        alert("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập số!");
        return;
    }

    let result;
    switch (pheptoan) {
        case 'SUM':
            result = parseFloat(a) + parseFloat(b);
            break;
        case 'SUBTRACT':
            result = parseFloat(a) - parseFloat(b);
            break;
        case 'MULTIPLY':
            result = parseFloat(a) * parseFloat(b);
            break;
        case 'DIVIDE':
            if (parseFloat(b) === 0) {
                alert("Lỗi chia cho 0!");
                return;
            }
            result = parseFloat(a) / parseFloat(b);
            break;
    }

    document.getElementById('result').textContent = `Kết quả: ${result}`;
}

function reset() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').textContent = '';
}

function isNumeric(value) {
    return /^-?\d*\.?\d+$/.test(value);
}
