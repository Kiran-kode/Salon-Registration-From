import React from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

const TimeSlotModal = ({ isOpen, selectedDay, onClose, onAddSlot }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleClose = () => {
        reset();
        onClose();
    };

    const onSubmit = (data) => {
        console.log("Modal Form Data:", data); 
        onAddSlot(data);
        reset();
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Add Time Slot for {selectedDay}
                    </h2>
                    <button
                        type="button" 
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        ×
                    </button>
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-4"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select Time
                        </label>
                        <input
                            type="time"
                            {...register("startTime", { required: "Time is required" })}
                            className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                        {errors.startTime && (
                            <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Slot Limit
                        </label>
                        <select
                            {...register("slotLimit", { required: "Slot limit is required" })}
                            className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        >
                            <option value="">Select limit</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                        </select>
                        {errors.slotLimit && (
                            <p className="text-red-500 text-sm mt-1">{errors.slotLimit.message}</p>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button" 
                            onClick={handleClose}
                            className="py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit" 
                            className="bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-900 transition-colors"
                        >
                            Add Slot
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default TimeSlotModal