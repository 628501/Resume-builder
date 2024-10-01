import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Typography, Button, Box, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateExtraDetails } from "../store/resumeSlice";
import PersonIcon from "@mui/icons-material/Person";
import { ProfileForm } from "../Interfaces/ResumeInterface";

const Profile: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<ProfileForm>();
  const dispatch = useDispatch();

  const onSubmit = (data: ProfileForm) => {
    dispatch(updateExtraDetails({ profile: data.profile }));
  };

  const resetForm = () => {
    reset();
    dispatch(updateExtraDetails({ profile: '' }));
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
          Profile
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="profile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Profile Description"
                fullWidth
                InputProps={{
                  endAdornment: <PersonIcon sx={{ ml: 1 }} />,
                  sx: {
                    "& .MuiInputBase-root": { height: "56px" },
                  },
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

export default Profile;