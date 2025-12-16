import { PaymentTabs } from "./PaymentTabs";

const PaymentForm = () => {
    return (
        <div className="w-full max-w-[640px] max-h-[762px] bg-white rounded-[20px] sm:rounded-[30px] border border-stroke px-4 py-6 sm:px-8 md:px-[64px] md:py-[40px]">
            <PaymentTabs />
        </div>
    )
}

export default PaymentForm;