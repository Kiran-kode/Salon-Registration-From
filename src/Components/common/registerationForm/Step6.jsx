import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateBankingDetails, nextStep } from '../../../redux/RegistrationSlice';

const Step6 = ({ onPrev, canGoPrev }) => {
    const dispatch = useDispatch();
    const { bankingDetails } = useSelector(state => state.registration);
    const [chequePreview, setChequePreview] = useState(null);
    const fileInputRef = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm({
        defaultValues: bankingDetails
    });
    const accountNumber = watch("accountNumber");
    useEffect(() => {
        Object.keys(bankingDetails).forEach(key => {
            if (bankingDetails[key] && key !== 'canceledChequePhoto') {
                setValue(key, bankingDetails[key]);
            }
        });
    }, [bankingDetails, setValue]);
    const handleChequeUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.type.startsWith('image/')) {
            const preview = URL.createObjectURL(file);
            setChequePreview(preview);
        } else {
            setChequePreview(file.name);
        }

        dispatch(updateBankingDetails({ canceledChequePhoto: file }));
    };

    const handleRemoveCheque = () => {
        setChequePreview(null);
        dispatch(updateBankingDetails({ canceledChequePhoto: null }));

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const onSubmit = (data) => {
        console.log("Step 6 Data:", data);

        dispatch(updateBankingDetails(data));
        dispatch(nextStep());
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-4 space-y-3">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Name
                </label>
                <input
                    type="text"
                    placeholder="bank name"
                    {...register("bankName", { required: "Bank name is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.bankName && (
                    <p className="text-red-500 text-sm mt-1">{errors.bankName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                </label>
                <input
                    type="number"
                    placeholder="account number"
                    {...register("accountNumber", { required: "Account number is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.accountNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.accountNumber.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Re-enter Account Number
                </label>
                <input
                    type="number"
                    placeholder="re enter account number"
                    {...register("reenterAccountNumber", {
                        required: "Please re-enter account number",
                        validate: value =>
                            value === accountNumber || "Account numbers do not match"
                    })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.reenterAccountNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.reenterAccountNumber.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Holder's Name
                </label>
                <input
                    type="text"
                    placeholder="holder name"
                    {...register("holderName", { required: "Holder name is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.holderName && (
                    <p className="text-red-500 text-sm mt-1">{errors.holderName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Swift Code
                </label>
                <input
                    type="number"
                    placeholder="swift code"
                    {...register("swiftCode", { required: "Swift code is required" })}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.swiftCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.swiftCode.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Canceled Cheque Photo
                </label>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleChequeUpload}
                    className="mt-1 px-3 py-2 rounded-lg border border-zinc-500 w-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />

                {chequePreview && (
                    <div className="mt-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Uploaded Cheque:</span>
                            <button
                                type="button"
                                onClick={handleRemoveCheque}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Remove
                            </button>
                        </div>

                        {typeof chequePreview === 'string' && chequePreview.startsWith('blob:') ? (
                            <img
                                src={chequePreview}
                                alt="Cheque preview"
                                className="w-full h-32 object-cover rounded border"
                            />
                        ) : (
                            <div className="flex items-center space-x-2 p-2 bg-white rounded border">
                                <span className="text-2xl">📄</span>
                                <span className="text-sm text-gray-600">{chequePreview}</span>
                            </div>
                        )}
                    </div>
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
                    className="bg-green-600 text-white py-3 px-5 rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                    Complete Registration
                </button>
            </div>
        </form>
    );
};

export default Step6;