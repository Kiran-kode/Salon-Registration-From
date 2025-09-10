import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { prevStep } from '../../redux/RegistrationSlice';
import FormHeader from '../../Components/common/registerationForm/FormHeader';
import ProgressStepper from '../../Components/common/registerationForm/ProgressStepper';
import Step1 from '../../Components/common/registerationForm/Step1';
import Step2 from '../../Components/common/registerationForm/Step2';
import Step3 from '../../Components/common/registerationForm/Step3';
import Step4 from '../../Components/common/registerationForm/Step4';
import Step5 from '../../Components/common/registerationForm/Step5';
import Step6 from '../../Components/common/registerationForm/Step6';


const RegisterFormNew = () => {
    const dispatch = useDispatch();
    const { step } = useSelector(state => state.registration);

    const handlePrevStep = () => {
        dispatch(prevStep());
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Step1 
                        onPrev={handlePrevStep}
                        canGoPrev={step > 1}
                    />
                );
            case 2:
                return (
                    <Step2 
                    onPrev={handlePrevStep}
                    canGoPrev={step > 1}
                    />
                )

            

            case 3:
                return (
                    <Step3
                    onPrev={handlePrevStep}
                    canGoPrev={step > 1}
                    />
                )
            case 4:
                return (
                    <Step4 
                        onPrev={handlePrevStep}
                        canGoPrev={step > 1}
                    />
                )
            case 5:
                return (
                    <Step5 
                        onPrev={handlePrevStep}
                        canGoPrev={step > 1}
                    />
                )
            case 6:
                return (
                    <Step6
                        onPrev={handlePrevStep}
                        canGoPrev={step > 1}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <section className="w-full h-full flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-[95%] flex flex-col items-center px-3  md:w-[60%] rounded-2xl shadow-lg lg:w-[50%] lg:px-6 py-4 ">
                
                <FormHeader 
                    title="Salon Registration"
                    subtitle="Enter your details and complete your registration."
                />

                <ProgressStepper currentStep={step} />

                <div className="w-full">
                    {renderStep()}
                </div>

            </div>
        </section>
    );
};

export default RegisterFormNew;