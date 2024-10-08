import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NavbarProps } from '../Interfaces/ResumeInterface';

const Navbar: React.FC<NavbarProps> = ({ onTemplateChange, selectedTemplate, resumeRef1, resumeRef2 }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (template: string) => {
    onTemplateChange(template);
    setAnchorEl(null);
  };

  const handleDownload = () => {
    const resumeRef = selectedTemplate === 'resume' ? resumeRef1 : resumeRef2;
    if (resumeRef.current) {
      const scale = 5;
      
      html2canvas(resumeRef.current, { scale }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const widthScale = pdfWidth / imgWidth;
        const heightScale = pdfHeight / imgHeight;
        const finalScale = Math.min(widthScale, heightScale);
        const x = (pdfWidth - imgWidth * finalScale) / 2;
        const y = (pdfHeight - imgHeight * finalScale) / 2;
  
        pdf.addImage(imgData, 'PNG', x, y, imgWidth * finalScale, imgHeight * finalScale);
        pdf.save(`${selectedTemplate}.pdf`);
      });
    }
  };  

  return (
    <AppBar position="static" sx={{ backgroundColor: 'LightGrey', height: '70px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src='build.png' alt='logo' style={{ height: '50px', marginTop: "15px" }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            color="inherit" 
            onClick={handleDownload} 
            sx={{ marginRight: 2 }}
          >
            <DownloadIcon sx={{ color: "black" }} />
          </Button>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleMenuClose('resume')}>Template 1</MenuItem>
          <MenuItem onClick={() => handleMenuClose('resume2')}>Template 2</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;