import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import Skills from './skills';
import Languages from './Languages';
import SkillCategory from './SkillCategory';
import Profile from './Profile';
import ExperienceDetails from './ExperienceDetails';
import EducationalDetails from './EducationalDetails';
import ProjectsDetails from './ProjectsDetails';
import { useSelector } from 'react-redux';
import Resume from './Resume';
import Resume2 from './Resume2'; 
import { RootState } from '../store';
import { ResumeBuilderProps } from '../Interfaces/ResumeInterface';

const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ selectedTemplate, resumeRef1, resumeRef2 }) => {
  const { personalDetails, educationalDetails, experienceDetails, projectsDetails, extraDetails, skillCategory } = useSelector((state: RootState) => state.resume);

  return (
    <Container maxWidth={false} sx={{ width: '100%', padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxHeight: '100vh', overflowY: 'auto', border: '1px solid #ccc', padding: 3 }}>
            <Box mb={3}>
              <PersonalDetails />
            </Box>
            <Box mb={3}>
              <Skills />
            </Box>
            <Box mb={3}>
              <Languages />
            </Box>
            <Box mb={3}>
              <Profile />
            </Box>
            {selectedTemplate === 'resume2' && (
              <Box mb={3}>
                <SkillCategory />
              </Box>
            )}
            <Box mb={3}>
              <ExperienceDetails />
            </Box>
            <Box mb={3}>
              <EducationalDetails />
            </Box>
            <Box mb={3}>
              <ProjectsDetails />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          {selectedTemplate === 'resume' && (
            <Resume
              ref={resumeRef1}
              personalDetails={personalDetails}
              educationalDetails={educationalDetails}
              experienceDetails={experienceDetails}
              projectsDetails={projectsDetails}
              extraDetails={extraDetails}
            />
          )}
          {selectedTemplate === 'resume2' && (
            <Resume2
              ref={resumeRef2}
              personalDetails={personalDetails}
              educationalDetails={educationalDetails}
              experienceDetails={experienceDetails}
              projectsDetails={projectsDetails}
              skillCategory={skillCategory}
              extraDetails={extraDetails}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeBuilder;