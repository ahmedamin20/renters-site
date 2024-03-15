import { cn } from "../../utils/cn";

function FormContainer({ className, children }) {
    return (
        <div  className="bg-white opacity-95 rounded shadow overflow-hidden w-[50%] md:w-[50%] sm:w-[90%] h-[60%] mt-20 mx-auto p-4 relative">
            {children}
        </div>
    );
}

export default FormContainer;