import React from 'react';

const BdAddress = () => {
    return (
        <div className='border p-8 bg-blue-100 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h1>Street: 17/4 Brahmanbaria.</h1>
                    <h1>City: Brahmanbaria</h1>
                    <h1>Phone: +823976359836</h1>
                    <h1>Email: asybhabd@bd.com</h1>
                </div>
                <div className='order-1 md:order-2 flex justify-center items-center'>
                    <h1 className='text-2xl'>BANGLADESH OFFICE</h1>
                </div>
            </div>
        </div>
    );
};

export default BdAddress;