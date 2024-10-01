import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Typography, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updatePersonalDetails, resetPersonalDetails } from '../store/resumeSlice';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone'; 
import WorkIcon from '@mui/icons-material/Work'; 
import { PersonalDetailsForm } from '../Interfaces/ResumeInterface';

const PersonalDetails: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<PersonalDetailsForm>();
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: PersonalDetailsForm) => {
    const formData = {
      ...data,
      image: imagePreview,
    };
    dispatch(updatePersonalDetails(formData));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const resetForm = () => {
    reset();
    setImagePreview(null);
    dispatch(resetPersonalDetails()); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ backgroundColor: '#1167B1', padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          Personal Details
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <AccountCircle />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <EmailIcon />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="globalEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Global Email"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <EmailIcon />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Location"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <LocationOnIcon />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="mobile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Mobile"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <PhoneIcon />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="jobTitle"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Job Title"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: <WorkIcon />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            component="label"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Button>
        </Grid>
      </Grid>

      {imagePreview && (
        <Box sx={{ marginTop: '16px', textAlign: 'left' }}>
          <Typography variant="subtitle1">Image Preview:</Typography>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: '100px', height: '100px', borderRadius: '8px' }}
          />
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button type="submit" variant="contained" color="success" style={{ marginRight: '8px' }}>
          Add
        </Button>
        <Button onClick={resetForm} variant="contained" color="error">
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default PersonalDetails;