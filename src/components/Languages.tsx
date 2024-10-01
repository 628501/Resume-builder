import React, { useEffect, useState } from 'react';
import { TextField, Typography, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateExtraDetails } from '../store/resumeSlice';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import { Language } from '../Interfaces/ResumeInterface';

const Languages: React.FC = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    dispatch(updateExtraDetails({ languages }));
  }, [languages, dispatch]);

  const addLanguage = () => {
    if (language && rating) {
      setLanguages([...languages, { language, rating }]);
      setLanguage('');
      setRating(0);
    }
  };

  const resetForm = () => {
    setLanguages([]); 
    dispatch(updateExtraDetails({ languages: [] }));
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
          Languages
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: <LanguageIcon sx={{ ml: 1 }} />,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: <StarIcon sx={{ ml: 1 }} />,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button 
          onClick={addLanguage} 
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
    </Box>
  );
};

export default Languages;