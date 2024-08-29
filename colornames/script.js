function calculateNameValue(name) {
    let total = 0;
    for (let char of name.toUpperCase()) {
        if (char >= 'A' && char <= 'Z') {
            total += char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        }
    }
    return (total * 4) % 256;
}

function convertToColor() {
    const firstName = document.getElementById('first-name').value;
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;

    const r = calculateNameValue(firstName);
    const g = calculateNameValue(middleName);
    const b = calculateNameValue(lastName);

    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    document.getElementById('color-display').style.backgroundColor = hex;
    document.getElementById('color-info').innerText = `RGB(${r}, ${g}, ${b})\nHex: ${hex}`;
}

function saveAsImage() {
    const container = document.getElementById('capture'); // Select the container to capture
    html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png'); // Change to 'image/jpeg' for JPEG format
        link.download = 'name_color_code.png'; // Change to 'name_color_code.jpeg' for JPEG format
        link.click();
    });
}