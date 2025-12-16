import { CustomSelect, Submit } from "@/modules/core/components/forms";
import { Formik } from "formik";
import PaymentInput from "./PaymentInput";
import { useState } from "react";
import { PAYMENT_OPTIONS } from "../data";
import { cryptoToCashValidation } from "../validation";

type CryptoToCashFormValues = {
    payFrom: string;
    payTo: string;
    amount: string | number;
    receiveAmount: string | number;
    amountCurrency: string;
    receiveAmountCurrency: string;
}

const CryptoToCash = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (values: CryptoToCashFormValues) => {
        console.log(values);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
    }
    return (
        <div className="py-4 sm:py-6 md:py-[32px]">
            <Formik
                initialValues={{
                    payFrom: "",
                    payTo: "",
                    amount: "1.00",
                    receiveAmount: "1.00",
                    amountCurrency: "eth",
                    receiveAmountCurrency: "usdt-celo",
                }}
                onSubmit={handleSubmit}
                validationSchema={cryptoToCashValidation}
            >
                {()=> (
                    <div className="">
                        <div className="mb-6 sm:mb-8 md:mb-[32px]">
                            <PaymentInput
                                name="amount"
                                label="You pay"
                                currencyFieldName="amountCurrency"
                            />
                            <PaymentInput
                                name="receiveAmount"
                                label="You receive"
                                currencyFieldName="receiveAmountCurrency"
                            />
                            <CustomSelect
                                options={PAYMENT_OPTIONS}
                                label="Pay from"
                                placeholder="Select an option to pay from"
                                name="payFrom"
                            />

                            <CustomSelect
                                options={PAYMENT_OPTIONS}
                                label="Pay to"
                                placeholder="Select an option to pay to"
                                name="payTo"
                            />
                        </div>
                        <Submit
                            title="Convert now"
                            loading={loading}
                        />
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CryptoToCash;