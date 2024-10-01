import React, { useState } from "react";
import { TextField, Typography, Button, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addExperienceDetail, removeExperienceDetail } from "../store/resumeSlice";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkIcon from "@mui/icons-material/Work";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';
import { ExperienceDetail } from "../Interfaces/ResumeInterface";

const ExperienceDetails: React.FC = () => {
  const { experienceDetails } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();

  const [experiences, setExperiences] = useState<ExperienceDetail[]>([
    { id: uuidv4(), jobTitle: "", company: "", years: "", description: "" },
  ]);

  const addExperience = () => {
    if (experiences.length < 3) {
      setExperiences((prev) => [
        ...prev,
        { id: uuidv4(), jobTitle: "", company: "", years: "", description: "" },
      ]);
    }
  };

  const removeExperience = (id: string) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);

    const updatedExperienceDetails = experienceDetails.filter(exp => exp.id !== id);
    dispatch(removeExperienceDetail(updatedExperienceDetails));
  };

  const handleChange = (id: string, field: keyof ExperienceDetail, value: string) => {
    setExperiences((prevState) => {
      return prevState.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      );
    });
  };

  const onSubmit = () => {
    dispatch(removeExperienceDetail([]));
    experiences.forEach((exp) => {
      dispatch(addExperienceDetail(exp));
    });
  };

  const resetForm = () => {
    setExperiences([{ id: uuidv4(), jobTitle: "", company: "", years: "", description: "" }]);
    dispatch(removeExperienceDetail([]));
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
          Experience Details
        </Typography>
      </Box>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <Button
          onClick={addExperience}
          variant="outlined"
          color="success"
          style={{ marginBottom: "8px", marginRight: "8px" }}
        >
          +
        </Button>
        {experiences.map((exp) => (
          <Box key={exp.id} mt={3}>
            {experiences.length > 1 && (
              <Button
                onClick={() => removeExperience(exp.id)}
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
                  label="Job Title"
                  fullWidth
                  value={exp.jobTitle}
                  onChange={(e) => handleChange(exp.id, 'jobTitle', e.target.value)}
                  InputProps={{
                    endAdornment: <BusinessCenterIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company"
                  fullWidth
                  value={exp.company}
                  onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                  InputProps={{
                    endAdornment: <WorkIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Years of Experience"
                  fullWidth
                  value={exp.years}
                  onChange={(e) => handleChange(exp.id, 'years', e.target.value)}
                  InputProps={{
                    endAdornment: <DateRangeIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Experience Description"
                  fullWidth
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                  InputProps={{
                    endAdornment: <DescriptionIcon />,
                  }}
                  sx={{
                    "& .MuiInputBase-root": { height: "56px" },
                    "& .MuiInputBase-input": {
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    },
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

export default ExperienceDetails;