import React from "react";
import { type FormikValues, useFormikContext } from "formik";

import Input from "./Input";
import Error from "./Error";
import Label from "./Label";

interface FieldProps {
    name:               string;
    type?:              string;
    label:              string;
    disabled?:          boolean,
    placeholder?:       string;
    isStringArr?:       boolean;
    parentName?:        string;
    index?:             number;
    customHandleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({ name, parentName, isStringArr, index, type = "text", label, placeholder, customHandleChange, disabled=false, ...otherProps }) => {
    const { errors, touched, handleChange, values } = useFormikContext<FormikValues>();
    
    return (
        <div className="form-field mb-5">
            <Label 
                name={name}
                label={label}
            />
            <Input 
                name={name}
                type={type}
                placeholder={placeholder || ""}
                error={errors?.[name] as string | undefined}
                visible={!!touched?.[name]}
                handleChange={customHandleChange ? customHandleChange : handleChange}
                disabled={disabled}
                value={(isStringArr && parentName) ? values[parentName][index || 0] : values[name] || ""}
                {...otherProps}
            />

            <Error 
                error={errors?.[name] as string | undefined}
                visible={!!touched?.[name]}
            />

        </div>
    )
}

export default Field;