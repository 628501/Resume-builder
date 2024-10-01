import React, { useState } from "react";
import { TextField, Typography, Button, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addEducationalDetail, removeEducationalDetail } from "../store/resumeSlice";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';
import { EducationalDetail } from "../Interfaces/ResumeInterface";

const EducationalDetails: React.FC = () => {
  const { educationalDetails } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();

  const [educations, setEducations] = useState<EducationalDetail[]>([{ id: uuidv4(), degree: "", institution: "", year: "" }]);

  const addEducation = () => {
    if (educations.length < 3) {
      setEducations((prevState) => [
        ...prevState,
        { id: uuidv4(), degree: "", institution: "", year: "" },
      ]);
    }
  };

  const removeEducation = (id: string) => {
    const updatedEducation = educations.filter(edu => edu.id !== id);
    setEducations(updatedEducation);

    const updatedExperienceDetails = educationalDetails.filter((_, index: number) => index !== educations.findIndex(edu => edu.id === id));
    dispatch(removeEducationalDetail(updatedExperienceDetails));
  };

  const handleChange = (id: string, field: keyof EducationalDetail, value: string) => {
    setEducations((prevState) => {
      return prevState.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      );
    });
  };

  const onSubmit = () => {
    const newEducations = educations.map((edu) => ({
      id: edu.id,
      degree: edu.degree,
      institution: edu.institution,
      year: edu.year,
    }));

    dispatch(removeEducationalDetail([]));

    newEducations.forEach((edu) => {
      dispatch(addEducationalDetail(edu));
    });
  };

  const resetForm = () => {
    setEducations([{ id: uuidv4(), degree: "", institution: "", year: "" }]);
    dispatch(removeEducationalDetail([]));
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
          Educational Details
        </Typography>
      </Box>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <Button
          onClick={addEducation}
          variant="outlined"
          color="success"
          style={{ marginBottom: "8px", marginRight: "8px" }}
        >
          +
        </Button>
        {educations.map((edu) => (
          <Box key={edu.id} mt={3}>
            {educations.length > 1 && (
              <Button
                onClick={() => removeEducation(edu.id)}
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
                  label="Degree"
                  fullWidth
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                  InputProps={{
                    endAdornment: <SchoolIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Institution"
                  fullWidth
                  value={edu.institution}
                  onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                  InputProps={{
                    endAdornment: <BusinessIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Year"
                  fullWidth
                  value={edu.year}
                  onChange={(e) => handleChange(edu.id, 'year', e.target.value)}
                  InputProps={{
                    endAdornment: <CalendarTodayIcon />,
                  }}
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
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

export default EducationalDetails;