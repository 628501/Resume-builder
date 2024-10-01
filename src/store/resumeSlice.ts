import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResumeState, PersonalDetailsForm, EducationalDetail, ExperienceDetail, Project, Language, ExtraDetails, SkillCategoryForm } from '../Interfaces/ResumeInterface';

const initialState: ResumeState = {
  personalDetails: {} as PersonalDetailsForm,
  educationalDetails: [],
  experienceDetails: [],
  projectsDetails: [],
  extraDetails: {
    skills: [],
    languages: [],
    profile: '',
  },
  skillCategory: {
    communicationSkills: [],
    nonTechnicalSkills: [],
  },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalDetails: (state, action: PayloadAction<PersonalDetailsForm>) => {
      state.personalDetails = action.payload;
    },
    resetPersonalDetails: (state) => {
      state.personalDetails = {} as PersonalDetailsForm;
    },
    addEducationalDetail: (state, action: PayloadAction<EducationalDetail>) => {
      state.educationalDetails.push(action.payload);
    },
    removeEducationalDetail: (state, action: PayloadAction<EducationalDetail[]>) => {
      state.educationalDetails = action.payload;
    },
    addExperienceDetail: (state, action: PayloadAction<ExperienceDetail>) => {
      state.experienceDetails.push(action.payload);
    },
    removeExperienceDetail: (state, action: PayloadAction<ExperienceDetail[]>) => {
      state.experienceDetails = action.payload;
    },
    addProjectDetail: (state, action: PayloadAction<Project>) => {
      state.projectsDetails.push(action.payload);
    },
    removeProjectsDetail: (state, action: PayloadAction<Project[]>) => {
      state.projectsDetails = action.payload;
    },
    addLanguage: (state, action: PayloadAction<Language>) => {
      state.extraDetails.languages.push(action.payload);
    },
    updateExtraDetails: (state, action: PayloadAction<Partial<ExtraDetails>>) => {
      state.extraDetails = { ...state.extraDetails, ...action.payload };
    },
    updateSkillCategory: (state, action: PayloadAction<Partial<SkillCategoryForm>>) => {
      state.skillCategory = { ...state.skillCategory, ...action.payload };
    },
    resetSkillCategory: (state) => {
      state.skillCategory = {
        communicationSkills: [],
        nonTechnicalSkills: [],
      };
    },
  },
});

export const {
  updatePersonalDetails,
  resetPersonalDetails,
  addEducationalDetail,
  removeEducationalDetail,
  addExperienceDetail,
  removeExperienceDetail,
  addProjectDetail,
  removeProjectsDetail,
  addLanguage,
  updateExtraDetails,
  updateSkillCategory,
  resetSkillCategory,
} = resumeSlice.actions;

export default resumeSlice.reducer;