import React from "react";
import business from '../assets/business.png'
import flyer from '../assets/flyer.png'
import laminate from '../assets/laminate.png'

const Cards = () => {
    return (
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={business} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Business Cards</h2>
                <p className='text-center text-4xl font-bold'>Starting $10</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>$10 for 50 counts</p>
                    <p className='py-2 border-b mx-8'>$15 for 100 counts</p>
                    <p className='py-2 border-b mx-8'>For bulks, price competitive</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={flyer} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Flyers</h2>
                <p className='text-center text-4xl font-bold'>Starting $35</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>$35 for 100 counts</p>
                    <p className='py-2 border-b mx-8'>$69 for 250 counts</p>
                    <p className='py-2 border-b mx-8'>$129+ for 1000 counts</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={laminate} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Signage</h2>
                <p className='text-center text-4xl font-bold'>$450 with installation</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Plywood $250</p>
                    <p className='py-2 border-b mx-8'>Neon/Glass $4000-$5000</p>
                    <p className='py-2 border-b mx-8'>Metal Signs $450+</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Cards;