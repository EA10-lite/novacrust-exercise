"use client";
import React, { useRef } from "react";

interface InputProps {
    name: string;
    placeholder?: string;
    type: string; 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    visible: boolean;
    disabled?: boolean;
    value: string | number;
    Icon?: React.ElementType;
    handleIconClick?: ()=> null;
}

const Input: React.FC<InputProps> = ({ Icon, handleIconClick, name, placeholder, type, visible, error, value, handleChange, disabled=false, ...otherProps }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current && !inputRef.current.classList.contains("active-input")) {
            inputRef.current.classList.add("active-input");
        }
    };
    const handleBlur = () => {
        if (inputRef.current) {
            inputRef.current.classList.remove("active-input");
        }
    };

    return (
        <div className="form-input relative">
            <input
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={`bg-transparent w-full rounded-[20px] sm:rounded-[30px] text-black placeholder:text-[#828282] text-left text-sm sm:text-base leading-base font-[500] px-4 py-3 sm:px-6 sm:py-4 md:px-[24px] md:py-[16px] border ${
                    error && visible ? "border-error text-error bg-opacity-50 text-black error-input" : "border-[#E0E0E0]"
                }`}
                disabled={disabled}
                ref={inputRef}
                {...otherProps}
            />

            {Icon && (
                <div className="absolute right-4 sm:right-[18px] top-0 bottom-0 z-50 flex items-center justify-center" onClick={handleIconClick}>
                    <Icon className="text-base sm:text-lg text-primary cursor-pointer" />
                </div>
            )}
        </div>
    )
}

export default Input;