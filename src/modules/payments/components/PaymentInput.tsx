import { Error, Label } from "@/modules/core/components/forms";
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
    const { values, setFieldValue , errors, touched } = useFormikContext<FormikValues>();
    const currencyName = currencyFieldName || `${name}Currency`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || inputValue === ".") {
            setFieldValue(name, inputValue);
            return;
        }
        const regex = /^\d*\.?\d*$/;
        if (regex.test(inputValue)) {
            setFieldValue(name, inputValue);
        }
    };

    return (
        <div className="mb-4 sm:mb-5">
            <div className={`rounded-[16px] sm:rounded-[24px] border p-4 sm:p-6 md:p-[24px] ${errors[name] && touched[name] ? "border-error" : " border-[#E0E0E0]"}`}>
                <Label
                    name={name}
                    label={label}
                    className="text-[#828282] mb-0"
                />

                <div className="flex items-center gap-2 sm:gap-3 justify-between mt-2">
                    <input
                        className="flex-1 text-black text-xl sm:text-2xl font-[600] min-w-0"
                        type="text"
                        inputMode="decimal"
                        value={values[name]}
                        onChange={handleChange}
                        placeholder="0.00"
                        step="0.01"
                    />

                    <CurrencyDropdown
                        value={values[currencyName]}
                        onChange={(value) => setFieldValue(currencyName, value)}
                    />
                </div>
            </div>

            <Error
                error={errors[name] as string | undefined}
                visible={!!touched[name]}
            />
        </div>
    )
}

export default PaymentInput;