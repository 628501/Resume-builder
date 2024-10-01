import React, { useState } from "react";
import { TextField, Typography, Button, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProjectDetail, removeProjectsDetail } from "../store/resumeSlice";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../Interfaces/ResumeInterface";
import { RootState } from "../store";

const ProjectsDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { projectsDetails = [] } = useSelector((state: RootState) => state.resume);

  const [projects, setProjects] = useState<Project[]>([
    { id: uuidv4(), title: "", company: "", description: "" },
  ]);

  const addProject = () => {
    if (projects.length < 3) {
      setProjects((prev) => [
        ...prev,
        { id: uuidv4(), title: "", company: "", description: "" },
      ]);
    }
  };

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);

    const updatedProjectsDetails = projectsDetails.filter((project: Project) => project.id !== id);
    dispatch(removeProjectsDetail(updatedProjectsDetails));
  };

  const handleChange = (id: string, field: keyof Project, value: string) => {
    setProjects((prevState) => {
      return prevState.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      );
    });
  };

  const onSubmit = () => {
    dispatch(removeProjectsDetail([]));
    projects.forEach((project) => {
      dispatch(addProjectDetail(project));
    });
  };

  const resetForm = () => {
    setProjects([{ id: uuidv4(), title: "", company: "", description: "" }]);
    dispatch(removeProjectsDetail([]));
  };

  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Box
        sx={{
          bgcolor: "#1167B1",
          color: "white",
          p: "16px",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Projects Developed
        </Typography>
      </Box>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <Button
          onClick={addProject}
          variant="outlined"
          color="success"
          style={{ marginBottom: "8px" }}
        >
          +
        </Button>
        {projects.map((project) => (
          <Box key={project.id} mt={3}>
            {projects.length > 1 && (
              <Button
                onClick={() => removeProject(project.id)}
                variant="outlined"
                color="error"
                style={{ marginBottom: "8px" }}
              >
                -
              </Button>
            )}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Project Title"
                  fullWidth
                  value={project.title}
                  onChange={(e) => handleChange(project.id, 'title', e.target.value)}
                  InputProps={{
                    endAdornment: <DescriptionIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company"
                  fullWidth
                  value={project.company}
                  onChange={(e) => handleChange(project.id, 'company', e.target.value)}
                  InputProps={{
                    endAdornment: <BusinessCenterIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Project Description"
                  fullWidth
                  value={project.description}
                  onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                  InputProps={{
                    endAdornment: <DescriptionIcon />,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            style={{ marginRight: "8px" }}
          >
            Add
          </Button>
          <Button
            onClick={resetForm}
            variant="contained"
            color="error"
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProjectsDetails;