const report = () => {
    //let nombre = document.querySelector('#name')

    let userName = document.querySelector('#name')
    let userSenescyt = document.querySelector('#senescytCode')

    const elTexto = {
        content: [
            'Que seja feita a vontade de Deus!♥',
            `Este es un saludo de ${userName.value} que tiene como registro de senescyt el ${userSenescyt.value}`
        ]
    }

    pdfMake.createPdf(elTexto).open();

}

export default report 

