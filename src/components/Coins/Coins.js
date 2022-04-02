import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';
import Contacts from '../Contacts/Contacts';

const Coins = () => {

    /* spinner add */
    const [loading, setLoading] = useState(false);



    const [coins, setCoins] = useState([]);
    useEffect(() => {
        setLoading(true);  // for spinner it's start 
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => setCoins(data))

        setLoading(false);  // for spinner it's turn off 
    }, [])

    return (
        <>
            {loading
                ?
              (<Spinner></Spinner>)
                :
                (<div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 bg-cyan-200'>
                    <p className='text-center text-3xl font-bold text-gray'>
                        Available Cypto Currencies
                    </p>
                    <p className='text-center mt-4 mb-12 text-xl font-normal text-gray-500'>
                        Total Coins :{coins.length}
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4'>
                        {
                            coins.map(coin => <CoinCard key={coin.key} coin={coin}></CoinCard>)
                        }
                    </div>
                </div>)
            }
        </>
    );
};

export default Coins;