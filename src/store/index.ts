import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import resumeReducer from './resumeSlice';
import { ResumeState } from '../Interfaces/ResumeInterface';

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export type RootState = {
  resume: ResumeState;
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();

export default store;