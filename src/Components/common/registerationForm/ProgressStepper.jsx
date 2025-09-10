import React from 'react';

const ProgressStepper = ({ currentStep, totalSteps = 6 }) => {
    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

    return (
        <div className="relative flex justify-between items-center w-full max-w-2xl mx-auto mb-8">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-300 z-0"></div>

            <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-cyan-700 z-0 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
            ></div>

            {Array.from({ length: totalSteps }, (_, index) => {
                const stepNumber = index + 1;
                const isCompleted = currentStep >= stepNumber;

                return (
                    <div key={stepNumber} className="relative z-10 flex flex-col items-center">
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors ${isCompleted
                                    ? "bg-cyan-700 text-white"
                                    : "bg-gray-300 text-black"
                                }`}
                        >
                            {stepNumber}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressStepper;