import React from 'react';

const UkAddress = () => {
    return (
        <div className='border p-8 bg-green-100 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h1>Street: 5503 SN Street</h1>
                    <h1>City: London </h1>
                    <h1>Phone: +3872680502</h1>
                    <h1>Email: kahuiga@uk.c.com</h1>
                </div>
                <div className='order-1 md:order-2 flex justify-center items-center'>
                    <h1 className='text-2xl'>UK OFFICE</h1>
                </div>
            </div>
        </div>
    );
};

export default UkAddress;