import React from 'react';

const FormHeader = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center w-full my-4 gap-2 text-center text-gray-700">
            <h1 className="font-semibold text-2xl">{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
};

export default FormHeader;