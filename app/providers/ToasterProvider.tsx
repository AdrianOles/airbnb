'use client'
//Required because the package is used client side
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster />
    );
}

export default ToasterProvider;