import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [timeSlots, setTimeSlots] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  // for modal
  const {
    register: modalRegister,
    handleSubmit: modalHandleSubmit,
    formState: { errors: modalErrors },
    reset: modalReset
  } = useForm();


  useEffect(() => {
    Object.keys(timeSlots).forEach(day => {
      setValue(`timeSlots.${day}`, JSON.stringify(timeSlots[day]));
    });
  }, [timeSlots, setValue])
  

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    nextStep();
  };

  const progressPercentage = ((step - 1) / 5) * 100;

  // Modal functions
  const openModal = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay('');
    modalReset(); // Reset modal form
  };

  const addTimeSlot = (data) => {
    const newSlot = {
      startTime: data.startTime,
      maxBookings: data.slotLimit || 1
    };

    setTimeSlots(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newSlot]
    }));

    closeModal();
  };

  const removeTimeSlot = (day, index) => {
    setTimeSlots(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  // Modal Component using Portal
  const Modal = () => {
    if (!isModalOpen) return null;

    return createPortal(
      <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add Time Slot for {selectedDay}</h2>
          </div>

          <form onSubmit={modalHandleSubmit(addTimeSlot)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Select Time</label>
              <input
                type="time"
                {...modalRegister("startTime", { required: "Time is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              />
              {modalErrors.startTime && (
                <p className="text-red-500 text-sm mt-1">{modalErrors.startTime.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Slot Limit</label>
              <select
                {...modalRegister("slotLimit", { required: "Slot limit is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
              </select>
              {modalErrors.slotLimit && (
                <p className="text-red-500 text-sm mt-1">{modalErrors.slotLimit.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors"
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

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="Parent w-[95%] flex flex-col items-center px-3 border border-zinc-700 md:w-[60%] rounded-2xl shadow lg:w-[50%] py-4 ">

        {/* Heading */}
        <div className="flex flex-col items-center w-full my-4 gap-2 text-center text-gray-700 ">
          <h1 className="font-semibold text-2xl">Salon Registration</h1>
          <p>Enter your details and complete your registration.</p>
        </div>

        {/* Stepper */}
        <div className="relative flex justify-between items-center w-full max-w-2xl mx-auto mb-8">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-cyan-700 z-0 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${step >= num ? "bg-cyan-700 text-white" : "bg-gray-300 text-black"
                  }`}
              >
                {num}
              </div>
            </div>
          ))}
        </div>

        {/* Step 1 Form */}
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <div>
              <label>Salon Owner's Name</label>
              <input
                type="text"
                placeholder="Enter Salon Owner Name"
                {...register("ownerName", { required: "Name is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.ownerName && (
                <p className="text-red-500 text-sm">{errors.ownerName.message}</p>
              )}
            </div>

            <div>
              <label>Owner Photo</label>
              <input
                type="file"
                {...register("ownerPhoto", { required: "Photo is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.ownerPhoto && (
                <p className="text-red-500 text-sm">{errors.ownerPhoto.message}</p>
              )}
            </div>

            <div>
              <label>Salon Name</label>
              <input
                type="text"
                placeholder="Enter Salon Name"
                {...register("salonName", { required: "Salon Name is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.salonName && (
                <p className="text-red-500 text-sm">{errors.salonName.message}</p>
              )}
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: "Confirm Password is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex justify-between gap-3 mt-4">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`py-3 px-5 rounded-xl ${step === 1 ? 'bg-cyan-800 cursor-not-allowed' : 'bg-cyan-800 text-white'
                  }`}
              >
                Previous
              </button>
              <input
                type="submit"
                value="Next"
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl cursor-pointer"
              />
            </div>
          </form>
        )}

        {/* Step 2 Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <div>
              <label>About Salon</label>
              <textarea
                placeholder="Describe Your Salon"
                {...register("aboutSalon", { required: "This field is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.aboutSalon && (
                <p className="text-red-500 text-sm">{errors.aboutSalon.message}</p>
              )}
            </div>

            <div>
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Salon Address"
                {...register("address", { required: "Address is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label>Salon Location</label>
              <input
                type="text"
                placeholder="Enter Location"
                {...register("location", { required: "Location is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location.message}</p>
              )}
              <button type="button" className="w-full bg-gray-400 rounded-lg py-2 mt-1">
                Fetch Location
              </button>
            </div>

            <div>
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                {...register("phone", { required: "Phone Number is required" })}
                className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex justify-between gap-3 mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl"
              >
                Previous
              </button>
              <input
                type="submit"
                value="Next"
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl cursor-pointer"
              />
            </div>
          </form>
        )}

        {/* Step 3 Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <h1 className="font-semibold text-gray-600">Set Availability of your salon</h1>

            <div>
              <label className="font-semibold text-gray-600">Monday-Friday</label>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  {...register("mondayFridayStart", { required: "Start time is required" })}
                  className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
                />
                <p>To</p>
                <input
                  type="time"
                  {...register("mondayFridayEnd", { required: "End time is required" })}
                  className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
                />
              </div>
              {errors.mondayFridayStart && (
                <p className="text-red-500 text-sm">{errors.mondayFridayStart.message}</p>
              )}
              {errors.mondayFridayEnd && (
                <p className="text-red-500 text-sm">{errors.mondayFridayEnd.message}</p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-600">Saturday</label>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  {...register("saturdayStart", { required: "Saturday start time is required" })}
                  className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
                />
                <p>To</p>
                <input
                  type="time"
                  {...register("saturdayEnd", { required: "Saturday end time is required" })}
                  className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full"
                />
              </div>
              {errors.saturdayStart && (
                <p className="text-red-500 text-sm">{errors.saturdayStart.message}</p>
              )}
              {errors.saturdayEnd && (
                <p className="text-red-500 text-sm">{errors.saturdayEnd.message}</p>
              )}
            </div>

            <div>
              <h1 className="font-semibold">Add booking slots by week days</h1>
              <p className="text-sm text-gray-500">
                If you have added only 2 slots for Monday, then customers can select from those 2 slots for Monday.
              </p>
            </div>


            {/* VISIBLE SLOT MANAGEMENT */}
            <div className="flex flex-col gap-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div key={day}>
                  <div className="flex items-center justify-between">
                    <p>{day}</p>
                    <button
                      type="button"
                      onClick={() => openModal(day)}
                      className="bg-cyan-700 rounded-lg py-1 px-3 text-white hover:bg-cyan-800 transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  {/* Display existing time slots */}
                  {timeSlots[day].length > 0 && (
                    <div className="mt-2 ml-4">
                      {timeSlots[day].map((slot, index) => (
                        <div key={index} className="flex items-center text-gray-500 justify-between bg-gray-100 p-2 rounded mb-1">
                          <span className="text-sm">
                            Time: {slot.startTime}, Limit: {slot.maxBookings}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeTimeSlot(day, index)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-3 mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-3 px-5 rounded-xl"
              >
                Previous
              </button>
              <input
                type="submit"
                value="Next"
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl cursor-pointer"
              />
            </div>
          </form>
        )}

        {/* Step 4 Form */}
        {step === 4 && (
          <div className="w-full flex flex-col mt-4 space-y-3">
            <div>
              <h2 className="font-semibold text-gray-600 mb-3">Categories You Serve</h2>
              <div className="flex gap-3 flex-wrap mb-3">
                {['Tattoo', 'Kosmetik', 'Make-Up', 'Tonen', 'Wachsen', 'Massage', 'Friseur', 'Nagelpfleg'].map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 cursor-pointer text-center border-black border rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white transition-colors"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-600 mb-3">Genders You Serve</h2>
              <div className="flex gap-3 flex-wrap mb-3">
                {['Female', 'Male', 'Other'].map((gender) => (
                  <div
                    key={gender}
                    className="px-4 py-2 cursor-pointer text-center border-black border rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white transition-colors"
                  >
                    {gender}
                  </div>
                ))}
              </div>
            </div>

            {/* Add Navigation Buttons */}
            <div className="flex justify-between gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-3 px-5 rounded-xl"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5 Form */}
        {step === 5 && (
          <div>
            <h1>Upload minimum 3 images of your salon</h1>
            <div className="flex gap-4 flex-wrap my-3 w-full justify-center ">
{['img1', 'img2', 'img3', 'img4', 'img5', 'img6'].map((img) => (
                  <input 
          key={img}
          type="file"
          accept="image/*"
          className="w-45 h-30 cursor-pointer text-center border-dashed border-2  px-2 content-center rounded-lg text-gray-500"
          placeholder={img}
        />
                ))}
            </div>
            {/* Add Navigation Buttons */}
            <div className="flex justify-between gap-3  w-full">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-3 px-5 rounded-xl"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-cyan-800 text-white py-3 px-5 rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 6 Form */}
        {step === 6 && (
          <form action="" onSubmit={handleSubmit(onSubmit)}>

          </form>
        )}

      </div>

      {/* Modal using React Portal */}
      <Modal />


    </section>
  );
};
export default RegisterForm;