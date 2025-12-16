import React from "react";
import { cn } from "@/modules/core/lib/utils";

interface LabelProps {
    label:        string;
    name:         string;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ label, name, className }) => {
    return (
        <label
            className={cn("label text-base leading-base font-medium mb-2.5 block text-primary", className)}
            id={name}
        >
            { label }
        </label>
    )
}

export default Label;