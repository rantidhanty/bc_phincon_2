document.getElementById("registrasion-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("Name").value;
    const kelas = document.getElementById("class").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const birthday = document.getElementById("birthday").value;
    const education = document.getElementById("pdd").value;
    const jurusan = document.getElementById("jrss").value;

    const resultDiv = document.getElementById('hasil2');
    resultDiv.insertAdjacentHTML('beforeend', 
        `<tr>
            <td>${name}</td>
            <td>${kelas}</td>
            <td>${gender}</td>
            <td>${birthday}</td>
            <td>${education}</td>
            <td>${jurusan}</td>
        </tr>
        `
    )
});
