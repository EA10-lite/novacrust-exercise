import { Label } from "@/modules/core/components/forms";
import { type FormikValues, useFormikContext } from "formik";
import { CurrencyDropdown } from "./CurrencyDropdown";

type PaymentInputProps = {
    name: string;
    label: string;
    currencyFieldName?: string;
}

const PaymentInput = ({
    name,
    label,
    currencyFieldName,
}: PaymentInputProps) => {
    const { values, setFieldValue } = useFormikContext<FormikValues>();
    const currencyName = currencyFieldName || `${name}Currency`;
    return (
        <div className="mb-5">
            <div className="rounded-[24px] border border-[#E0E0E0] p-[24px]">
                <Label
                    name={name}
                    label={label}
                    className="text-[#828282]"
                />

                <div className="flex items-center gap-2 justify-between">
                    <input
                        className="flex-1 text-black text-2xl font-[600]"
                        type="text"
                        value={values[name]}
                        onChange={(e) => setFieldValue(name, e.target.value)}
                    />

                    <CurrencyDropdown
                        value={values[currencyName]}
                        onChange={(value) => setFieldValue(currencyName, value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentInput;