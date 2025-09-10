import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { 
    toggleCategory, 
    selectGender, 
    nextStep 
} from '../../../redux/RegistrationSlice';

const Step4 = ({ onPrev, canGoPrev }) => {
    const dispatch = useDispatch();
    const { preferences } = useSelector(state => state.registration);
    
    const { handleSubmit } = useForm();

    const categories = [
        'Tattoo', 
        'Kosmetik', 
        'Make-Up', 
        'Tonen', 
        'Wachsen', 
        'Massage', 
        'Friseur', 
        'Nagelpfleg'
    ];

    const genders = ['Female', 'Male', 'Other'];

    const handleCategoryToggle = (category) => {
        dispatch(toggleCategory(category));
    };

    const handleGenderSelect = (gender) => {
        dispatch(selectGender(gender));
    };

    const onSubmit = () => {
        if (preferences.selectedCategories.length === 0) {
            alert('Please select at least one category');
            return;
        }
        if (!preferences.selectedGender) {
            alert('Please select a gender preference');
            return;
        }

        console.log("Step 4 Data:", {
            categories: preferences.selectedCategories,
            gender: preferences.selectedGender
        });
        
        dispatch(nextStep());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-4">
            
            <div>
                <h2 className="font-semibold text-xl  text-gray-600 mb-3">Categories You Serve</h2>
                
                <div className="flex gap-3 flex-wrap mb-3">
                    {categories.map((category) => (
                        <div
                            key={category}
                            onClick={() => handleCategoryToggle(category)}
                            className={`px-4 py-2 cursor-pointer text-center border rounded-lg transition-all duration-200 hover:shadow-md ${
                                preferences.selectedCategories.includes(category)
                                    ? 'bg-cyan-700 text-white border-cyan-700 shadow-md'
                                    : 'border-gray-400 text-gray-500 hover:bg-gray-100 hover:border-gray-500'
                            }`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                
                {preferences.selectedCategories.length > 0 && (
                    <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                        <p className="text-sm text-cyan-700 font-medium mb-2">
                            Selected Categories ({preferences.selectedCategories.length}):
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {preferences.selectedCategories.map((category) => (
                                <span 
                                    key={category}
                                    className="bg-cyan-600 text-white px-2 py-1 rounded text-xs"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                
                {preferences.selectedCategories.length === 0 && (
                    <p className="text-red-500 text-sm"> Please select at least one category</p>
                )}
            </div>

            <div>
                <h2 className="font-semibold text-gray-600 mb-3">Genders You Serve</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Choose which gender(s) your salon serves
                </p>
                
                <div className="flex gap-3 flex-wrap mb-3">
                    {genders.map((gender) => (
                        <div
                            key={gender}
                            onClick={() => handleGenderSelect(gender)}
                            className={`px-6 py-3 cursor-pointer text-center border rounded-lg transition-all duration-200 hover:shadow-md min-w-[100px] ${
                                preferences.selectedGender === gender
                                    ? 'bg-cyan-700 text-white border-cyan-700 shadow-md'
                                    : 'border-gray-400 text-gray-500 hover:bg-gray-100 hover:border-gray-500'
                            }`}
                        >
                            {gender}
                        </div>
                    ))}
                </div>
                
                {preferences.selectedGender && (
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <p className="text-sm text-green-700 font-medium">
                            ✅ Serving: <span className="font-semibold">{preferences.selectedGender}</span> customers
                        </p>
                    </div>
                )}
                
                {!preferences.selectedGender && (
                    <p className="text-red-500 text-sm">⚠️ Please select a gender preference</p>
                )}
            </div>

            {preferences.selectedCategories.length > 0 && preferences.selectedGender && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-700 mb-2">Summary</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                        <p>
                            <strong>Services:</strong> {preferences.selectedCategories.join(', ')}
                        </p>
                        <p>
                            <strong>Target Customers:</strong> {preferences.selectedGender}
                        </p>
                    </div>
                </div>
            )}

            <div className="flex justify-between gap-3 mt-6">
                <button
                    type="button"
                    onClick={onPrev}
                    disabled={!canGoPrev}
                    className={`py-3 px-5 rounded-xl font-medium transition-colors ${
                        !canGoPrev 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                    }`}
                >
                    Previous
                </button>
                <button
                    type="submit"
                    disabled={preferences.selectedCategories.length === 0 || !preferences.selectedGender}
                    className={`py-3 px-5 rounded-xl font-medium transition-colors ${
                        preferences.selectedCategories.length === 0 || !preferences.selectedGender
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-cyan-800 text-white hover:bg-cyan-900'
                    }`}
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default Step4;