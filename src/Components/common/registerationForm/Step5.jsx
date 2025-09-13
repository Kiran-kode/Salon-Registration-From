import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateImages, nextStep } from "../../../redux/RegistrationSlice";

const Step5 = ({ onPrev, canGoPrev }) => {
    const dispatch = useDispatch();
    const { gallery } = useSelector(state => state.registration);
    const [uploadedImages, setUploadedImages] = useState(gallery.uploadedImages || Array(6).fill(null));

    const { handleSubmit } = useForm();

    const handleImageUpload = (e, boxIndex) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload only image files (JPEG, PNG, GIF)');
            return;
        }

        const imageData = {
            file: file,
            preview: URL.createObjectURL(file),
            name: file.name,
            size: file.size
        };

        const updatedImages = [...uploadedImages];
        updatedImages[boxIndex] = imageData;
        setUploadedImages(updatedImages);

        dispatch(updateImages(updatedImages));

        e.target.value = '';
    };
    const onSubmit = () => {
        const filledBoxes = uploadedImages.filter(img => img !== null);
        
        if (filledBoxes.length < 3) {
            alert('Please upload at least 3 images');
            return;
        }

        console.log("Step 5 Data:", {
            totalImages: filledBoxes.length,
            images: filledBoxes
        });
        dispatch(nextStep());
    };

    const getUploadedCount = () => {
        return uploadedImages.filter(img => img !== null).length;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            
            <h1 className="font-semibold text-xl text-gray-700">Upload minimum 3 images of Your Salon</h1>
            <div className="flex flex-wrap gap-3 justify-center">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="relative">
                        <div className="w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition-colors">  
                            {uploadedImages[index] ? (
                                <>
                                    <img
                                        src={uploadedImages[index].preview}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </>
                            ) : (
                                <span className="flex flex-col ">
                                    <p className="text-lg  text-center  text-cyan-700">+</p>
                                </span>
                            )}
                            
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, index)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between gap-3 mt-4">
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
                    disabled={getUploadedCount() < 3}
                    className={`py-3 px-5 rounded-xl font-medium transition-colors ${
                        getUploadedCount() < 3
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

export default Step5;