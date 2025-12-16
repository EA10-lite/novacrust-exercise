import * as Yup from "yup";


export const cryptoToCashValidation = Yup.object().shape({
    amount: Yup.number().required("Amount is required"),
    receiveAmount: Yup.number().required("Receive amount is required"),
    payFrom: Yup.string().required("Pay from is required"),
    payTo: Yup.string().required("Pay to is required"),
});


export const subscribeValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
});