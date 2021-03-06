import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});

    
    /* spinner add */
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data));
        setLoading(false);
    }, [id])  // id upre depend kore useEffect abar call hobe 
    return (
<>
{
    loading 
    ?
     (<Spinner></Spinner>)
    :(
    <div className='px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:p-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr />
                    <h1> Coin Name : {coin.name}</h1>
                    <h1> Market Cap : {coin.market_cap_rank}</h1>
                    <h1> Cummunity Score : {coin.community_score}</h1>
                    <h1> Hashing Algorithm : {coin.hashing_algorithm?coin.hashing_algorithm:"Not Found"}</h1>
                    <h1> Developer Score : {coin.developer_score}</h1>
                    <h1> Orgin : {coin.country_origin?coin.country_origin:"Not Found"}</h1>
                    </div>

                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src={coin.image?.large} alt="" />
                </div>
            </div>
        </div>)
}
</>
        
    );
};

export default CoinDetails;