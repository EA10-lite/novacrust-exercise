import * as Yup from "yup";

const amountValidation = Yup.string()
    .test("is-valid-number", "Please enter a valid amount", (value) => {
        if (!value || value.trim() === "") return false;
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue > 0;
    })
    .test("is-positive", "Amount must be greater than 0", (value) => {
        if (!value) return false;
        const numValue = parseFloat(value);
        return numValue > 0;
    });

export const cryptoToCashValidation = Yup.object().shape({
    amount: amountValidation
        .required("Please enter the amount you want to pay"),
    receiveAmount: amountValidation
        .required("Please enter the amount you want to receive"),
    amountCurrency: Yup.string()
        .required("Please select a currency for the amount you're paying"),
    receiveAmountCurrency: Yup.string()
        .required("Please select a currency for the amount you're receiving"),
    payFrom: Yup.string()
        .required("Please select a payment method to pay from"),
    payTo: Yup.string()
        .required("Please select a payment method to pay to"),
});

export const subscribeValidation = Yup.object().shape({
    email: Yup.string()
        .required("Please enter your email address")
        .email("Please enter a valid email address"),
});