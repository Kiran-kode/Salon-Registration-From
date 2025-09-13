import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 // UI State
    step: 1,
    isModalOpen: false,
    selectedDay: '',

    // step 1
    personalInfo: {
        ownerName: "",
        ownerPhoto: null,
        salonName: "",
        ownerEmail: "",
        password: "",
        confirmPassword: ""
    },

    // step 2
    contactInfo: {
        aboutSalon: "",
        address: "",
        phone: "",
        location: "",
    },
    //step 3
    availability: {
        mondayFridayStart: '',
        mondayFridayEnd: '',
        saturdayStart: '',
        saturdayEnd: '',
        timeSlots: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: []
        }
    },

    // step 4
    preferences: {
        selectedCategories: [],
        selectedGender: ''
    },
    // step 5
    gallery: {
        uploadedImages: []
    },

    // Step 6
    bankingDetails: {
      bankName: '',
      accountNumber: '',
      reenterAccountNumber: '',
      holderName: '',
      swiftCode: '',
      canceledChequePhoto: null
    }

}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        // Step Navigation
        nextStep: (state) => {
            state.step = Math.min(state.step + 1, 6);
        },
        prevStep: (state) => {
            state.step = Math.max(state.step - 1, 1);
        },

         // Modal Management
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedDay = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedDay = '';
    },

     // Form Data Updates
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    updateContactInfo: (state, action) => {
      state.contactInfo = { ...state.contactInfo, ...action.payload };
    },

     // Time Slots
    addTimeSlot: (state, action) => {
      const { day, slot } = action.payload;
      state.availability.timeSlots[day].push(slot);
    },
    removeTimeSlot: (state, action) => {
      const { day, index } = action.payload;
      state.availability.timeSlots[day].splice(index, 1);
    },

     // Categories & Gender
    toggleCategory: (state, action) => {
      const category = action.payload;
      const categories = state.preferences.selectedCategories;
      
      if (categories.includes(category)) {
        state.preferences.selectedCategories = categories.filter(c => c !== category);
      } else {
        state.preferences.selectedCategories.push(category);
      }
    },
    selectGender: (state, action) => {
      const gender = action.payload;
      state.preferences.selectedGender = 
        state.preferences.selectedGender === gender ? '' : gender;
    },

    // Step 6
    updateBankingDetails: (state, action) => {
      state.bankingDetails = { ...state.bankingDetails, ...action.payload}
    },


    // Images
    updateImages: (state, action) => {
      state.gallery.uploadedImages = action.payload;
    },

    // Add password validation action
        validateStep: (state, action) => {
            const { step, isValid } = action.payload;
            if (!state.stepValidation) {
                state.stepValidation = {};
            }
            state.stepValidation[step] = isValid;
        },
        updateAvailability: (state, action) => {
            state.availability = { ...state.availability, ...action.payload }
        },

        resetRegistration: (state) => {
          return initialState;
        }

    }
});

export const {
    nextStep,
    prevStep,
    openModal,
    closeModal,
    updatePersonalInfo,
    updateContactInfo,
    addTimeSlot,
    removeTimeSlot,
    toggleCategory,
    selectGender,
    updateImages,
    validateStep,
    updateAvailability,
    updateBankingDetails,
    resetRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;
