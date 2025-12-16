import { type FormikValues, useFormikContext } from "formik";
import React from "react";
import { LuLoaderCircle } from "react-icons/lu";

interface SubmitProps {
    title: string;
    loading: boolean;
    disabled?: boolean;
}

const Submit: React.FC<SubmitProps> = ({ title, loading, disabled }) => {
    const { handleSubmit } = useFormikContext<FormikValues>();

    return (
        <button
            className="form-btn bg-primary flex items-center gap-2 sm:gap-3 justify-center  rounded-[30px] py-4 px-6 sm:py-5 sm:px-8 md:py-[20px] md:px-[40px] text-white whitespace-nowrap cursor-pointer text-sm sm:text-base leading-base font-[700] w-full"
            type="submit"
            onClick={()=> handleSubmit()}
            disabled={disabled ? disabled : loading}
            style={{
                opacity: disabled || loading ? 0.5 : 1,
                cursor: disabled || loading ? "not-allowed" : "pointer",
            }}
        >
            { loading && <LuLoaderCircle className="animate-spin delay-[150ms] ease-in text-base sm:text-lg" />}
            <span> { title } </span>
        </button>
    )
}

export default Submit;