
let vinculocategorias = document.querySelector(".categorias");

vinculocategorias.innerHTML =`
    <a href="https://github.com/eeordonezz/placa-madre"> 
        <button class="github">GitHub</button>  
    </a>
    <button class="descargar">Descargar PDF</button>
`;


/* pdf */

 document.querySelector(".descargar").addEventListener("click", () => {
    // Selecciona la sección que deseas convertir a PDF
    let seccion3 = document.querySelector("#seccion3");

    // Usa html2pdf para convertir la sección a PDFa
    html2pdf().from(seccion3).save('Informacion de los componentes.pdf');
});








/* ------------------------------------------------- */

/* jpg */
/*  document.querySelector(".descargar").addEventListener("click", () => {
    const seccion3 = document.querySelector("#seccion3");

    // Usa html2canvas para tomar una captura de pantalla de la sección
    html2canvas(seccion3).then(canvas => {
        // Convierte el canvas a una imagen JPG
        const imgData = canvas.toDataURL('image/jpeg');

        // Crea un enlace para descargar la imagen
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'seccion3.jpg';
        link.click();
    });
}); 
*/



/* ----------------------------------------- */


/* png */
/* document.querySelector(".descargar").addEventListener("click", () => {
    const seccion3 = document.querySelector("#seccion3");

    // Usa html2canvas para tomar una captura de pantalla de la sección
    html2canvas(seccion3).then(canvas => {
        // Convierte el canvas a una imagen PNG
        const imgData = canvas.toDataURL('image/png');
        
        // Crea un enlace para descargar la imagen
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'seccion3.png';
        link.click();
    });
});
 */

