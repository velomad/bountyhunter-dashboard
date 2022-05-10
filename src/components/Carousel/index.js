import React, { useEffect, useState } from 'react'
import Button from "components/Button"

let count = 0;
const index = ({ images, slides }) => {

    const Componenent1 = () => {

    }

    const Componenent2 = () => {

    }
    const [currentSlide, setCurrentSlide] = useState(0)
    const [paused, setPaused] = useState(false)
    useEffect(() => {

        const sliderInterval = setInterval(() => {
            handleOnNextClick();
        }, 8000);

        return () => {
            console.log("unmountedddd")

            clearInterval(sliderInterval)
        }
    }, [])
    const startSlider = () => {

    }

    const handleOnNextClick = () => {
        count = (count + 1) % slides.length;
        setCurrentSlide(count);
    };
    // const nextSlide = () => {
    //     let newSlide =
    //         currentSlide === CarouselData.length - 1
    //             ? 0
    //             : currentSlide + 1;
    //     setCurrentSlide(newSlide);
    // };

    // const prevSlide = () => {
    //     let newSlide =
    //         currentSlide === 0
    //             ? CarouselData.length - 1
    //             : currentSlide - 1;
    //     setCurrentSlide(newSlide);
    // };
    return (
        <div className=" w-full   relative rounded-lg ">
            {slides.map((Slide, index) => {
                return (
                    index === currentSlide &&
                    <div id="slider" className='slider slide-in'>
                        <Slide key={index} classes="" />
                    </div>
                )
            })}
            <div className="flex justify-center bottom-0 py-2 left-1/2 z-30 space-x-1 -translate-x-1/2" >
                {slides.map((imgName, index) => {
                    return (
                        <div>

                            <button onClick={() => setCurrentSlide(index)} type="button" className={
                                index === currentSlide
                                    ? "h-3 w-3 bg-gray-700 rounded-full  mb-2 cursor-pointer"
                                    : "h-3 w-3 bg-gray-300 rounded-full  mb-2 cursor-pointer"
                            } aria-current="false"  ></button>
                        </div>
                    )
                })}
            </div>
            {/* <div className={`w-full   grid md:grid-cols-12  `}>
                <div className='md:col-span-5  relative '>
                    {images.map((imgName, index) => {
                        return (

                            <img src={imgName} key={index} className={`carousel-image-animation
                                        ${index === currentSlide
                                    ? "block object-cover"
                                    : "hidden "}
                                    `} />
                        )
                    })}
                </div>
                <div className='md:col-span-7  md:px-12 '>
                    <div className='text-xl text-center md:text-left'>
                        Deliver high quality patient care smartly.
                    </div>
                    <div className='grid md:grid-cols-2 px-4 md:px-0  mt-10'>
                        {metaData.map((data) => {
                            return (

                                <div className="flex space-x-4  items-center">
                                    <div className="flex-none">
                                        <img className="h-8 w-8" src={require("assets/icons/checked.svg").default} alt="Tick mark Logo" />
                                    </div>
                                    <div className=' space-y-2'>
                                        <div className='text-base font-semibold'>{data.title}</div>
                                        <div className='text-sm text-gray-500'>{data.description}</div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    <div className='py-2 md:py-4 text-center md:text-left'>
                        <Button classes="" size="large" hoverColor="bg-blue" displayArrow={true} background="bg-blue-light">Lean More </Button>
                    </div>
                    <div className="mt-2 md:mt-10">
                        <div className="text-gray-500 text-center md:text-left">Have a question to ask us?</div>
                        <div className='text-center md:text-left px-4 md:px-0'>Speak to an expert on our <strong className="md:text-xl">toll free # 100 800 800</strong></div>
                    </div>
                </div>

                <div className="flex absolute bottom-0 left-1/2 z-30 space-x-1 -translate-x-1/2" >

                    {images.map((imgName, index) => {
                        return (
                            <div>

                                <button onClick={() => setCurrentSlide(index)} type="button" className={
                                    index === currentSlide
                                        ? "h-3 w-3 bg-gray-700 rounded-full  mb-2 cursor-pointer"
                                        : "h-3 w-3 bg-gray-300 rounded-full  mb-2 cursor-pointer"
                                } aria-current="false"  ></button>

                            </div>


                        )
                    })}
                </div>

            </div> */}
        </div>
    )
}

export default index