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
            className="form-btn bg-primary flex items-center gap-3 justify-center rounded-[30px] py-[20px] px-[40px] text-white whitespace-nowrap cursor-pointer text-base leading-base font-[700] w-full"
            type="submit"
            onClick={()=> handleSubmit()}
            disabled={disabled ? disabled : loading}
        >
            { loading && <LuLoaderCircle className="animate-spin delay-[150ms] ease-in text-lg" />}
            <span> { title } </span>
        </button>
    )
}

export default Submit;