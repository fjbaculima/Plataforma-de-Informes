function loadImage(url) {
    return new Promise (resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true)
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res)
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send()
    })
}


let signaturePad = null;

window.addEventListener('load', async() => {

    const canvas= document.querySelector('canvas');
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();


    let curso = document.getElementById('curso').value;
    let nombres = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;

        generatePDF(curso, nombres, apellidos, email, direccion, telefono);
    })


})


async function generatePDF(curso, nombres, apellidos, email, direccion, telefono) {

    const signatureImage = signaturePad.toDataURL();
    
    const image = await loadImage("formulario.jpg");
    const pdf = new jsPDF('p', 'pt', 'legal');
    pdf.addImage(image, 'PNG', 0 ,0, 615, 970);
    pdf.addImage(signatureImage, 'PNG', 200,765,400,50);
    pdf.setFontSize(12);
    pdf.text(curso, 285, 152);
    pdf.text(nombres,176, 262);
    pdf.text(apellidos, 176, 546)
    pdf.save('example.pdf')

}