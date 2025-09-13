import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { updateContactInfo, nextStep } from '../../../redux/RegistrationSlice'

const Step2 = ({onPrev, canGoPrev}) => {
    const dispatch = useDispatch();
    const contactInfo = useSelector(state => state.registration.contactInfo);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: contactInfo
    })


    useEffect(() => {
        Object.keys(contactInfo).forEach(key => { 
            if(contactInfo[key]) {
                setValue(key, contactInfo[key]);
            }
        })
    }, [contactInfo, setValue]);

    const onSubmit =(data) => {
console.log("Step2 Data: ", data);
dispatch(nextStep())

    }

  return (
   <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <h1 className="font-semibold text-gray-600">Contact Information</h1>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    About Salon
                </label>
                <textarea
                    placeholder="Describe Your Salon"
                    {...register("aboutSalon", { required: "This field is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 min-h-[100px]"
                />
                {errors.aboutSalon && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutSalon.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                </label>
                <input
                    type="text"
                    placeholder="Enter Salon Address"
                    {...register("address", { required: "Address is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salon Location
                </label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    {...register("location", { required: "Location is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
                <button
                    type="button"
                    className="w-full mt-1 bg-gray-500 text-white py-2 px-3 rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={() => {
                        alert('Location fetching feature coming soon!');
                    }}
                >
                    Fetch Location
                </button>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                </label>
                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    {...register("phone", { 
                        required: "Phone Number is required",
                        pattern: {
                            value: /^[0-9+\-\s()]*$/,
                            message: "Invalid phone number format"
                        }
                    })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
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
                    className="bg-cyan-800 text-white py-3 px-5 rounded-xl font-medium hover:bg-cyan-900 transition-colors"
                >
                    Next
                </button>
            </div>
        </form>
  )
}

export default Step2