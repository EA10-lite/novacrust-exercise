import { PaymentForm } from "./modules/payments"
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafaf8] py-4 px-4 sm:py-8">
      <PaymentForm />
    </div>
  )
}

export default App