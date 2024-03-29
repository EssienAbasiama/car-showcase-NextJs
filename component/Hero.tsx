"use client";
import React from 'react'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book or rent a car -quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experience with our effortless booking process
            </p>
            <CustomButton
            title="Expore Cars"
            containerStyles="bg-primary-bluw text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image/>
            </div>
        </div>
    </div>
  )
}

export default Hero