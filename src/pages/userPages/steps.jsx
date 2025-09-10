import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
const steps = () => {
  return (
    <>
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
                className={`py-3 px-5 rounded-xl ${step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 text-white'
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

        {/* Step 3 Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <h1>Set Availability of your salon</h1>

            <div>
              <label>Monday-Friday</label>
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
              <label>Saturday</label>
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
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-1">
                          <span className="text-sm">
                            {slot.startTime} - {slot.endTime} ({slot.maxBookings} slots)
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
    </>
  )
}

export default steps