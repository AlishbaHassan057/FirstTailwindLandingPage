import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="flex w-full md:w-3/4 mx-auto mt-10 mb-3 flex-col md:flex-row gap-10 ">
                <div className="flex flex-col w-1/2 gap-3">
                    <h1 className='text-4xl font-bold w-full md:w-3/4 text-rose-600 capitalize'> what's different about manage?</h1>
                    <p className='text-gray-400 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, qui obcaecati nisi enim rerum nihil tenetur dicta unde commodi fugiat sunt magnam? Dolores fugiat delectus totam harum. Earum assumenda eius non inventore quam eos? Perferendis fugit minima hic necessitatibus ab?</p>
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex gap-5 w-full md:max-w-[450px] text-justify">
                        <div className="bg-rose-600 rounded-full p-4 text-white font-bold self-start">01</div>
                        <div className="flex flex-col gap-3">
                            <h1 className='text-1xl font-bold'>Track company wide progress</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus dolorum est adipisci velit at sequi, mollitia debitis ut nisi eligendi asperiores. Unde quo impedit totam veniam sunt cupiditate fugiat? Asperiores expedita dolores vel tempore et a consequatur quasi facere?</p>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full md:max-w-[450px] text-justify">
                        <div className="bg-rose-600 rounded-full p-4 text-white font-bold self-start">02</div>
                        <div className="flex flex-col gap-3">
                            <h1 className='text-1xl font-bold'>Track company wide progress</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus dolorum est adipisci velit at sequi, mollitia debitis ut nisi eligendi asperiores. Unde quo impedit totam veniam sunt cupiditate fugiat? Asperiores expedita dolores vel tempore et a consequatur quasi facere?</p>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full md:max-w-[450px] text-justify">
                        <div className="bg-rose-600 rounded-full p-4 text-white font-bold self-start">03</div>
                        <div className="flex flex-col gap-3">
                            <h1 className='text-1xl font-bold'>Track company wide progress</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus dolorum est adipisci velit at sequi, mollitia debitis ut nisi eligendi asperiores. Unde quo impedit totam veniam sunt cupiditate fugiat? Asperiores expedita dolores vel tempore et a consequatur quasi facere?</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero