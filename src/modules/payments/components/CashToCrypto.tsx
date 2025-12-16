import { Field, Submit } from "@/modules/core/components/forms";
import { Formik } from "formik";


const CashToCrypto = () => {
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


            <Formik
                initialValues={{ email: "" }}
                onSubmit={(values)=> {
                    console.log(values);
                }}
            >
                {()=> (
                    <div className="">
                        <div className="mb-[64px]">
                            <Field
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <Submit
                            title="Update me"
                            loading={false}
                            disabled={false}
                        />
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CashToCrypto;