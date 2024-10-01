import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Typography, Button, Box, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateExtraDetails } from "../store/resumeSlice";
import WorkIcon from "@mui/icons-material/Work";
import { SkillsForm } from "../Interfaces/ResumeInterface";

const Skills: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<SkillsForm>();
  const dispatch = useDispatch();

  const onSubmit = (data: SkillsForm) => {
    dispatch(
      updateExtraDetails({
        skills: data.skills.split(",").map((skill) => skill.trim()),
      })
    );
  };

  const resetForm = () => {
    reset();
    dispatch(updateExtraDetails({ skills: [] }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          bgcolor: "#1167B1",
          color: "white",
          p: "16px",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Skills
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="skills"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Skills (comma separated)"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <WorkIcon />,
                }}
              />
            )}
          />
        </Grid>
      </Grid>
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
  );
};

export default Skills;