import React, { forwardRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Divider,
  LinearProgress,
} from "@mui/material";
import { Phone, Email, Public, LocationOn } from "@mui/icons-material";
import { Resume2Props } from "../Interfaces/ResumeInterface";

const Resume2 = forwardRef<HTMLDivElement, Resume2Props>(({
  personalDetails = {},
  educationalDetails = [],
  extraDetails = { skills: [], languages: [], profile: "" },
  experienceDetails = [],
  projectsDetails = [],
  skillCategory = { communicationSkills: [], nonTechnicalSkills: [] },
}, ref) => {
  const renderEducation = () =>
    educationalDetails.length > 0 ? (
      educationalDetails.map((edu, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#565656" }}>
            {edu.degree}
          </Typography>
          <Typography variant="body2" sx={{ color: "#565656" }}>
            {edu.institution}
          </Typography>
          <Typography variant="body2" sx={{ color: "#565656" }}>
            {edu.year}
          </Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No education details available.
      </Typography>
    );

  const renderSkills = () =>
    extraDetails.skills.length > 0 ? (
      extraDetails.skills.map((skill, index) => (
        <Typography key={index} variant="body1" sx={{ color: "#565656" }}>
          • {skill}
        </Typography>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No skills listed.
      </Typography>
    );

  const renderLanguages = () => {
    const languages = Array.isArray(extraDetails.languages) ? extraDetails.languages : [];
    return languages.length > 0 ? (
      languages.map((lang, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ color: "#565656" }}>
            • {lang.language}
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#703BDB",
              },
            }}
            value={(lang.rating / 5) * 100}
          />
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No languages listed.
      </Typography>
    );
  };

  const renderExperience = () =>
    experienceDetails.length > 0 ? (
      experienceDetails.map((exp, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#703BDB" }}>
            {exp.jobTitle} at {exp.company}
          </Typography>
          <Typography variant="body2" sx={{ color: "#565656" }}>
            {exp.description}
          </Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No work experience listed.
      </Typography>
    );

  const renderProjects = () =>
    projectsDetails.length > 0 ? (
      projectsDetails.map((project, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#703BDB" }}>
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#565656" }}>
            {project.description}
          </Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No projects listed.
      </Typography>
    );

  const renderCommunicationSkills = () =>
    skillCategory.communicationSkills.length > 0 ? (
      skillCategory.communicationSkills.map((skill: any, index: number) => (
        <Box key={index} mb={2}>
          <Typography variant="body1" sx={{ color: "#565656" }}>
            • {skill}
          </Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No communication skills listed.
      </Typography>
    );

  const renderNonTechnicalSkills = () =>
    skillCategory.nonTechnicalSkills.length > 0 ? (
      skillCategory.nonTechnicalSkills.map((skill: any, index: number) => (
        <Box key={index} mb={2}>
          <Typography variant="body1" sx={{ color: "#565656" }}>
            • {skill}
          </Typography>
        </Box>
      ))
    ) : (
      <Typography variant="body2" sx={{ color: "#565656" }}>
        No non-technical skills listed.
      </Typography>
    );

  return (
    <Container
      ref={ref}
      sx={{
        width: "210mm",
        height: "297mm",
        margin: "0 auto",
        padding: 3,
        border: "1px solid lightgray",
        position: "relative",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={4} sx={{ bgcolor: "#F4F4F4", padding: 2, height: "297mm" }}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={personalDetails.image || ""}
              alt="Profile Picture"
              sx={{
                width: 150,
                height: 150,
                margin: "0 auto",
                backgroundColor: "skyblue",
                border: "5px solid #703BDB",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#703BDB" }}>
              {personalDetails.name || "Your Name"}
            </Typography>
            <Typography variant="body1" sx={{ color: "#565656" }}>
              {personalDetails.jobTitle || "Your Job Title"}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Phone sx={{ mr: 1, color: "#703BDB" }} />
              <Typography>{personalDetails.mobile || "Your Phone"}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Email sx={{ mr: 1, color: "#703BDB" }} />
              <Typography>{personalDetails.email || "Your Email"}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Public sx={{ mr: 1, color: "#703BDB" }} />
              <Typography>{personalDetails.globalEmail || "Your Website"}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <LocationOn sx={{ mr: 1, color: "#703BDB" }} />
              <Typography>{personalDetails.location || "Your Address"}</Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3, borderColor: "#703BDB" }} />

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#703BDB" }}>
            Education
          </Typography>
          {renderEducation()}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#703BDB" }}>
            Skills
          </Typography>
          {renderSkills()}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#703BDB" }}>
            Languages
          </Typography>
          {renderLanguages()}
        </Grid>

        <Grid item xs={8} sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, bgcolor: "#F4F4F4", p: 1 }}>
            Profile
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#565656" }}>
            {extraDetails.profile || "A brief profile summary goes here."}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, bgcolor: "#F4F4F4", p: 1 }}>
            Communication Skills
          </Typography>
          {renderCommunicationSkills()}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, bgcolor: "#F4F4F4", p: 1 }}>
            Non-Technical Skills
          </Typography>
          {renderNonTechnicalSkills()}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, bgcolor: "#F4F4F4", p: 1 }}>
            Work Experience
          </Typography>
          {renderExperience()}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, bgcolor: "#F4F4F4", p: 1 }}>
            Projects
          </Typography>
          {renderProjects()}
        </Grid>
      </Grid>
    </Container>
  );
});

export default Resume2;