'use client'
import React from 'react'
import { useState } from 'react';

export const Profile = () => {
    const [number, setNumber] = useState('0')
    const prizes = ['1 million', '500 K', '250 k', '100 k', '50k'];
    const probabilities = [0.01, 0.03, 0.06, 0.3, 0.6];
    function getRandomNumber() {
        const random = Math.random();
        let cumulativeProbability = 0;
        for (let i = 0; i < prizes.length; i++) {
            cumulativeProbability += probabilities[i];
            if (random < cumulativeProbability) {
                setNumber(prizes[i])
                return prizes[i];
            }
        }
    }

    return (
        <section className='py-10'>
            <div className="container  flex items-center ">
                <div className='flex gap-10 '>
                    <p className="text-4xl" >`Вы выиграли: ${number}`</p>

                    <button className='inline-block bg-red-600 transition-all duration-300 px-10 py-3 hover:bg-green-600 focus:bg-green-600' onClick={getRandomNumber} type="button">Go</button>
                </div></div>
        </section>
    )
}
