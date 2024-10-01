import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import ResumeBuilder from './components/ResumeBuilder';

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('resume');
  const resumeRef1 = useRef<HTMLDivElement | null>(null);
  const resumeRef2 = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar 
        selectedTemplate={selectedTemplate} 
        onTemplateChange={setSelectedTemplate} 
        resumeRef1={resumeRef1}
        resumeRef2={resumeRef2}
      />
      <ResumeBuilder 
        selectedTemplate={selectedTemplate} 
        resumeRef1={resumeRef1} 
        resumeRef2={resumeRef2}
      />
    </>
  );
};

export default App;