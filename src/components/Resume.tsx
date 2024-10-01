import React, { forwardRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";
import { Phone, Email, Public, LocationOn } from "@mui/icons-material";
import { Resume1Props } from "../Interfaces/ResumeInterface";

const Resume = forwardRef<HTMLDivElement, Resume1Props>(({
  personalDetails,
  educationalDetails,
  experienceDetails,
  projectsDetails,
  extraDetails,
}, ref) => {
  const detailsToRender = Array.isArray(educationalDetails) ? educationalDetails : [];

  return (
    <Container
      maxWidth={false}
      ref={ref}
      sx={{
        border: "1px solid whitesmoke",
        padding: 4,
        position: "relative",
        width: "210mm",
        height: "297mm",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Box
        textAlign="center"
        mb={4}
        sx={{
          backgroundColor: "black",
          padding: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
          {personalDetails.name || "Your Name"}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {personalDetails.jobTitle || "Your Job Title"}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 7 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Phone sx={{ mr: 1 }} />
            <Typography>{personalDetails.mobile || "Your Phone"}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Email sx={{ mr: 1 }} />
            <Typography>{personalDetails.email || "Your Email"}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Public sx={{ mr: 1 }} />
            <Typography>{personalDetails.globalEmail || "Your Website"}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ mr: 1 }} />
            <Typography>{personalDetails.location || "Your Address"}</Typography>
          </Box>
          <hr style={{ border: "1px dotted black", margin: "16px 0" }} />

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Skills
          </Typography>
          {extraDetails.skills && extraDetails.skills.length > 0 ? extraDetails.skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography variant="body1">• {skill}</Typography>
            </Box>
          )) : (
            <Typography>No skills listed.</Typography>
          )}
          <hr style={{ border: "1px dotted black", margin: "16px 0" }} />

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Education
          </Typography>
          {detailsToRender.map((edu, index) => (
            edu.degree ? (
              <Box key={index} mb={1}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2">{edu.institution}</Typography>
                <Typography variant="body2">{edu.year}</Typography>
              </Box>
            ) : null
          ))}
          <hr style={{ border: "1px dotted black", margin: "16px 0" }} />

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Languages
          </Typography>
          {extraDetails.languages && extraDetails.languages.length > 0 ? extraDetails.languages.map((language, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography variant="body1">• {language.language}</Typography>
              <LinearProgress
                variant="determinate"
                sx={{
                  backgroundColor: "white",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "black",
                  },
                }}
                value={(language.rating / 5) * 100}
              />
            </Box>
          )) : (
            <Typography>No languages listed.</Typography>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Profile
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {extraDetails.profile || "Write your profile here."}
          </Typography>
          <hr style={{ border: "1px dotted black", margin: "16px 0" }} />

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Work Experience
          </Typography>
          {experienceDetails.map((experience, index) => (
            experience.jobTitle ? (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  • {experience.jobTitle} at {experience.company}{" "}
                  <span style={{ fontWeight: 400, fontSize: 15 }}>
                    [{experience.years}]
                  </span>
                </Typography>
                <Typography variant="body2">
                  {experience.description}
                </Typography>
              </Box>
            ) : null
          ))}
          <hr style={{ border: "1px dotted black", margin: "16px 0" }} />

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Projects
          </Typography>
          {projectsDetails.map((project, index) => (
            project.title ? (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  • {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </Box>
            ) : null
          ))}
        </Grid>
      </Grid>

      <hr style={{ border: "1px dotted black", margin: "16px 0" }} />
    </Container>
  );
});

export default Resume;