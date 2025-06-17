//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// PDF Generation Function
async function generatePDF() {
    try {
        // Show loading indicator
        const button = document.querySelector('.btn-outline-light');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating PDF...';
        button.disabled = true;

        // Get the PDF container
        const pdfContainer = document.getElementById('pdf-container');
        
        // Temporarily show the container for capture
        pdfContainer.classList.remove('d-none');
        pdfContainer.style.display = 'block';
        pdfContainer.style.position = 'absolute';
        pdfContainer.style.top = '-9999px';
        pdfContainer.style.left = '-9999px';

        // Wait for fonts and images to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Capture the PDF container
        const canvas = await html2canvas(pdfContainer, {
            width: 794, // A4 width in pixels at 96 DPI (210mm)
            height: 1123, // A4 height in pixels at 96 DPI (297mm)
            scale: 2, // Higher resolution
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false
        });

        // Hide the container again
        pdfContainer.classList.add('d-none');
        pdfContainer.style.display = 'none';

        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Add the canvas as image to PDF
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

        // Download the PDF
        const fileName = 'Tomas_Jurica_CV.pdf';
        pdf.save(fileName);

        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;

    } catch (error) {
        console.error('Error generating PDF:', error);
        
        // Reset button on error
        const button = document.querySelector('.btn-outline-light');
        button.innerHTML = '<i class="fas fa-download me-2"></i>Download PDF';
        button.disabled = false;
        
        alert('Sorry, there was an error generating the PDF. Please try again.');
    }
}
