import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Typography, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateSkillCategory, resetSkillCategory } from '../store/resumeSlice';
import WorkIcon from '@mui/icons-material/Work';
import { SkillCategoryForm } from '../Interfaces/ResumeInterface';

const SkillCategory: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<SkillCategoryForm>();
  const dispatch = useDispatch();

  const onSubmit = (data: SkillCategoryForm) => {
    dispatch(
      updateSkillCategory({
        communicationSkills: data.communicationSkills,
        nonTechnicalSkills: data.nonTechnicalSkills,
      })
    );
  };

  const resetForm = () => {
    reset();
    dispatch(resetSkillCategory());
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
          Extra Skills
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="communicationSkills"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <TextField
                {...field}
                label="Communication Skills (comma separated)"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <WorkIcon />,
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value.split(',').map(skill => skill.trim()));
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="nonTechnicalSkills"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <TextField
                {...field}
                label="Non-Technical Skills (comma separated)"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <WorkIcon />,
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value.split(',').map(skill => skill.trim()));
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
          style={{ marginRight: '8px' }}
        >
          Add
        </Button>
        <Button onClick={resetForm} variant="contained" color="error">
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default SkillCategory;