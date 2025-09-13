import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './RegistrationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Disable for file uploads
    }),
});

export default store;