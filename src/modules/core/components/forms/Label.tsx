import React from "react";

interface LabelProps {
    label:        string;
    name:         string;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ label, name, className }) => {
    return (
        <label
            className={`label text-base leading-base font-medium mb-2.5 block text-primary ${className}`}
            id={name}
        >
            { label }
        </label>
    )
}

export default Label;