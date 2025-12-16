import { CustomSelect, Submit } from "@/modules/core/components/forms";
import { Formik } from "formik";
import PaymentInput from "./PaymentInput";


const PAYMENT_OPTIONS = [
    {
        title: "Metmask",
        value: "metmask",
        icon: "/assets/images/metamask.svg",
    },
    {
        title: "Rainbow",
        value: "rainbow",
        icon: "/assets/images/rainbow.svg",
    },
    {
        title: "WalletConnect",
        value: "walletconnect",
        icon: "/assets/images/wallet-connect.svg",
    },
    {
        title: "Others",
        value: "other",
        icon: "/assets/images/others.svg",
    },
]

const CryptoToCash = () => {
    return (
        <div className="py-[32px]">
            <Formik
                initialValues={{
                    payFrom: "",
                    payTo: "",
                    amount: 1.0,
                    receiveAmount: 1.0,
                    amountCurrency: "",
                    receiveAmountCurrency: "",
                }}
                onSubmit={(values)=> {
                    console.log(values);
                }}
            >
                {()=> (
                    <div className="">
                        <div className="mb-[32px]">
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
                            loading={false}
                        />
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CryptoToCash;