import { useRef } from "react";
import { type FormikValues, useFormikContext } from "formik"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/modules/core/components/ui/select"
import Error from "./Error";
import Label from "./Label"

interface Option {
    value: string;
    title: string;
    icon?: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    label: string;
    name: string;
    disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder, label, name }) =>{
    const inputRef = useRef<HTMLButtonElement>(null);
    const { errors, touched, setFieldValue, values } = useFormikContext<FormikValues>();

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
        <div className="form-field mb-4 sm:mb-5">
            { label && (
                <Label
                    name={name}
                    label={label}
                />
            )}
            <Select value={values[name]} onValueChange={(e)=> setFieldValue(name, e)} >
                <SelectTrigger
                    className={`
                        select-btn bg-white w-full rounded-[30px] text-black text-left text-xs sm:text-sm leading-base font-[500] border
                        ${ errors[name] && touched[name] ? "border-error text-error bg-opacity-50 text-black error-input" : "border-[#E0E0E0]" }
                    `}
                    style={{
                        padding: "24px",
                    }}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <SelectValue
                        defaultValue={values[name]}
                        placeholder={placeholder}
                        className="text-secondary text-left text-xs sm:text-sm leading-base font-[500]"
                    />
                </SelectTrigger>
                <SelectContent 
                    className="w-[98%] mx-auto bg-white border border-[#E0E0E0] top-[40px]"
                    style={{
                        boxShadow: "none"
                    }}
                >
                    <SelectGroup>
                        { options?.map((option, index) => (
                            <SelectItem
                                value={option?.value}
                                key={index}
                                className="p-2.5 sm:p-[12px]"
                            >
                                <div className="flex items-center gap-2">
                                    { option?.icon && <img src={option?.icon} alt={option?.title} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> }
                                    <span className="text-xs sm:text-sm">{ option?.title }</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Error
                error={errors?.[name] as string | undefined}
                visible={!!touched?.[name]}
            />
        </div>
    )
}

export default CustomSelect;