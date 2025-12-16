import { Field, Submit } from "@/modules/core/components/forms";
import { Formik } from "formik";
import { subscribeValidation } from "../validation";
import { useState } from "react";


const CashToCrypto = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (values: { email: string }) => {
        console.log(values);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
    }
    return (
        <div className="py-[64px]">
            <div className="text-center mb-[32px]">
                <h2 className="text-2xl text-primary font-[500] mb-3">
                    Coming soon!
                </h2>
                <p className="text-base text-[#4F4F4F] font-[400]">
                    Cash to Crypto is almost here.
                </p>
                <p className="text-base text-[#4F4F4F] font-[400]">
                    Enter your email and we’ll let you know the moment it&apos;s live.
                </p>
            </div>

            <div className="">
                <Formik
                    initialValues={{ email: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={subscribeValidation}
                >
                    {()=> (
                        <div className="">
                            <div className="mb-[64px]">
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    disabled={loading}
                                />
                            </div>
                            <Submit
                                title="Update me"
                                loading={loading}
                            />
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CashToCrypto;