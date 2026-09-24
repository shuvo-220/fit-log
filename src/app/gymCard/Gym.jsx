import React from 'react'
import GymCard from './GymCard';

const Gym = async () => {

    const getData = await fetch('https:/api.abcz.workers.dev/api/fitlog');
    const datas = await getData.json();


    return (
        <div className='py-15'>
            <h1 className='text-lg'>THE LIBRARY</h1>
            <p className='text-gray-300 font-light'>Twelve lifts covering every major muscle group.</p>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    datas.map((data) => {
                        return <GymCard key={data.id} data={data} />
                    })
                }
            </div>
        </div>
    )
}

export default Gym