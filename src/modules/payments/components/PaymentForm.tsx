import { PaymentTabs } from "./PaymentTabs";


const PaymentForm = () => {
    return (
        <div className="w-full max-w-[640px] max-h-[762px] bg-white rounded-[30px] border border-stroke px-[64px] py-[40px]">
            <PaymentTabs />
        </div>
    )
}

export default PaymentForm;