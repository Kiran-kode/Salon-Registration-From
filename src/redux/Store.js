import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './RegistrationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  // ✅ Simple approach - disable serializableCheck completely for development
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Disable for file uploads
    }),
});

export default store;