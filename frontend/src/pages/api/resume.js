import PDFDocument from 'pdfkit';
import { portfolioData } from '../../config';

export default function handler(req, res) {
  try {
    const doc = new PDFDocument({ margin: 50 });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${portfolioData.name.replace(/\s+/g, '_')}_Resume.pdf"`);

    doc.pipe(res);

    // Header
    doc.fontSize(24).font('Helvetica-Bold').text(portfolioData.name, { align: 'center' });
    doc.fontSize(12).font('Helvetica').text(portfolioData.headline, { align: 'center' });
    doc.moveDown(0.5);
    
    // Contact Info
    const contactInfo = `${portfolioData.location} | ${portfolioData.email} | GitHub: ${portfolioData.github.split('/').pop()} | LinkedIn: ${portfolioData.linkedin.split('/').pop()}`;
    doc.fontSize(10).fillColor('#666666').text(contactInfo, { align: 'center' });
    doc.moveDown(1.5);
    
    // Reset Color
    doc.fillColor('#000000');

    // Helper for Section Titles
    const drawSectionTitle = (title) => {
      doc.fontSize(14).font('Helvetica-Bold').text(title.toUpperCase());
      doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
      doc.moveDown(0.5);
      doc.fillColor('#000000'); // reset color after stroke
    };

    // Summary
    drawSectionTitle('Professional Summary');
    doc.fontSize(10).font('Helvetica').text(portfolioData.about, { align: 'justify' });
    doc.moveDown(1.5);

    // Education
    drawSectionTitle('Education');
    portfolioData.education.forEach(edu => {
      doc.fontSize(11).font('Helvetica-Bold').text(edu.institution, { continued: true });
      doc.fontSize(10).font('Helvetica').text(` | ${edu.duration}`, { align: 'right' });
      doc.font('Helvetica-Oblique').text(`${edu.degree}${edu.field ? ` in ${edu.field}` : ''}`);
      if (edu.score) {
        doc.font('Helvetica').text(`Score: ${edu.score}`);
      }
      doc.moveDown(0.5);
    });
    doc.moveDown(1);

    // Skills
    drawSectionTitle('Core Skills');
    doc.fontSize(10).font('Helvetica').text(portfolioData.skills.join(' • '));
    doc.moveDown(1.5);

    // Projects
    drawSectionTitle('Featured Projects');
    portfolioData.projects.forEach(proj => {
      doc.fontSize(11).font('Helvetica-Bold').text(proj.name, { continued: true });
      doc.fontSize(10).font('Helvetica-Oblique').text(` | ${proj.tech.join(', ')}`);
      doc.font('Helvetica').text(proj.description);
      doc.moveDown(0.5);
    });
    doc.moveDown(1);

    // Achievements
    drawSectionTitle('Achievements');
    portfolioData.achievements.forEach(ach => {
      doc.fontSize(11).font('Helvetica-Bold').text(`${ach.title} (${ach.year})`);
      doc.fontSize(10).font('Helvetica').text(ach.description);
      doc.moveDown(0.5);
    });

    doc.end();
  } catch (error) {
    console.error('PDF Generation Error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
