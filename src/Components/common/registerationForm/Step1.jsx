import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonalInfo, nextStep } from '../../../redux/RegistrationSlice'

const Step1 = ({ onPrev, canGoPrev }) => {
    const dispatch = useDispatch();
    const personalInfo = useSelector(state => state.registration.personalInfo);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: personalInfo
    });

    useEffect(() => {
        Object.keys(personalInfo).forEach(key => {
            setValue(key, personalInfo[key]);
        });
    }, [personalInfo, setValue]);

    const onSubmit = (data) => {

        dispatch(updatePersonalInfo(data));
        console.log(data);

        dispatch(nextStep());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salon Owner's Name
                </label>
                <input
                    type="text"
                    placeholder="Enter Salon Owner Name"
                    {...register("ownerName", { required: "Name is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.ownerName && (
                    <p className="text-red-500 text-sm mt-1">{errors.ownerName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner Email
                </label>
                <input
                    type="email"
                    placeholder="Enter Owner Email"
                    {...register("ownerEmail", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address"
                        }
                    })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.ownerEmail && (
                    <p className="text-red-500 text-sm mt-1">{errors.ownerEmail.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner Photo
                </label>
                <input
                    type="file"
                    accept="image/*"
                    {...register("ownerPhoto", { required: "Photo is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.ownerPhoto && (
                    <p className="text-red-500 text-sm mt-1">{errors.ownerPhoto.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salon Name
                </label>
                <input
                    type="text"
                    placeholder="Enter Salon Name"
                    {...register("salonName", { required: "Salon Name is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.salonName && (
                    <p className="text-red-500 text-sm mt-1">{errors.salonName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must be at least 8 characters" },
                    })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: "Confirm Password is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
            </div>

            <div className="flex justify-between gap-3 mt-4">
                <button
                    type="button"
                    onClick={onPrev}
                    disabled={!canGoPrev}
                    className={`py-3 px-5 rounded-xl font-medium transition-colors ${!canGoPrev
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                        }`}
                >
                    Previous
                </button>
                <button
                    type="submit"
                    className="bg-cyan-800 text-white py-3 px-5 rounded-xl font-medium hover:bg-cyan-900 transition-colors"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default Step1;