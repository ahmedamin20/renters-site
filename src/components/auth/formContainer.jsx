import React from 'react'
import { cn } from '../../utils/cn'

function FormContainer({ className, children }) {
    return (
        <div className={cn('flex flex-col justify-center gap-[20px]  p-[25px] dark:bg-darkPrimary bg-white md:w-[40%] m-auto md:mt-[6%] rounded-lg shadow-md', className)}>
            {children}
        </div>
    )
}

export default FormContainer