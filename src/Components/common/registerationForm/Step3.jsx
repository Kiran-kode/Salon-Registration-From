import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateAvailability,
    nextStep,
    addTimeSlot,
    removeTimeSlot,
    openModal,
    closeModal,
} from '../../../redux/RegistrationSlice'

import TimeSlotModal from './TimeSlotModal'

const Step3 = ({ onPrev, canGoPrev }) => {
    const dispatch = useDispatch();
    const { availability, isModalOpen, selectedDay } = useSelector(state => state.registration)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            mondayFridayStart: availability.mondayFridayStart,
            mondayFridayEnd: availability.mondayFridayEnd,
            saturdayStart: availability.saturdayStart,
            saturdayEnd: availability.saturdayEnd
        }
    });

    useEffect(() => {
        Object.keys(availability.timeSlots).forEach(day => {
            setValue(`timeSlots.${day}`, JSON.stringify(availability.timeSlots[day]))
        })
    }, [availability.timeSlots, setValue])

    const onSubmit = (data) => {
        console.log("Step 3 data: ", data);
        dispatch(updateAvailability(data));
        dispatch(nextStep())
    };

    const handleOpenModal = (day) => {
        dispatch(openModal(day))
    };

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleAddTimeSlot = (data) => {
        console.log("Adding time slot:", data);
        const newSlot = {
            startTime: data.startTime,
            maxBookings: parseInt(data.slotLimit) || 1 // Convert to number
        };
        dispatch(addTimeSlot({ day: selectedDay, slot: newSlot }));
        dispatch(closeModal())
    };

    const handleRemoveSlot = (day, index) => {
        dispatch(removeTimeSlot({ day, index }))
    }

    return (
        <>
            {/* ✅ Main Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
                <h1 className="font-semibold text-gray-600">Set Availability of your salon</h1>

                {/* Monday-Friday Section */}
                <div>
                    <label className="font-semibold text-gray-600">Monday-Friday</label>
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <input
                                type="time"
                                {...register("mondayFridayStart", { required: "Start time is required" })}
                                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            {errors.mondayFridayStart && (
                                <p className="text-red-500 text-sm mt-1">{errors.mondayFridayStart.message}</p>
                            )}
                        </div>
                        <p className="text-gray-600">To</p>
                        <div className="flex-1">
                            <input
                                type="time"
                                {...register("mondayFridayEnd", { required: "End time is required" })}
                                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            {errors.mondayFridayEnd && (
                                <p className="text-red-500 text-sm mt-1">{errors.mondayFridayEnd.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-gray-600">Saturday</label>
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <input
                                type="time"
                                {...register("saturdayStart", { required: "Saturday start time is required" })}
                                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            {errors.saturdayStart && (
                                <p className="text-red-500 text-sm mt-1">{errors.saturdayStart.message}</p>
                            )}
                        </div>
                        <p className="text-gray-600">To</p>
                        <div className="flex-1">
                            <input
                                type="time"
                                {...register("saturdayEnd", { required: "Saturday end time is required" })}
                                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            {errors.saturdayEnd && (
                                <p className="text-red-500 text-sm mt-1">{errors.saturdayEnd.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-semibold">Add booking slots by week days</h1>
                    <p className="text-sm text-gray-500">
                        If you have added only 2 slots for Monday, then customers can select from those 2 slots for Monday.
                    </p>
                </div>

                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <input
                        key={`${day}-slots`}
                        type="hidden"
                        {...register(`timeSlots.${day}`)}
                    />
                ))}

                <div className="flex flex-col ">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <div key={day} className=" rounded-lg bg-gray-50">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-medium text-gray-700">{day}</p>
                                <button
                                    type="button" // 
                                    onClick={() => handleOpenModal(day)}
                                    className="bg-cyan-800 text-white py-2 px-4 rounded-lg text-sm hover:bg-cyan-900 transition-colors"
                                >
                                    Add
                                </button>
                            </div>

                            {availability.timeSlots[day] && availability.timeSlots[day].length > 0 ? (
                                <div className="space-y-1">
                                    {availability.timeSlots[day].map((slot, index) => (
                                        <div key={index} className="flex items-center justify-between bg-white p-2 rounded  ">
                                            <div className="flex ">
                                                <span className="text-xs text-gray-500">
                                                    Time {slot.startTime},
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    Limit {slot.maxBookings}
                                                </span>
                                            </div>
                                            <button
                                                type="button" // 
                                                onClick={() => handleRemoveSlot(day, index)}
                                                className=" text-red-500 py-1 px-2 rounded text-xs"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
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

            <TimeSlotModal
                isOpen={isModalOpen}
                selectedDay={selectedDay}
                onClose={handleCloseModal}
                onAddSlot={handleAddTimeSlot}
            />
        </>
    )
}

export default Step3