import React from 'react'

const Front = () => {
    return (
        <>
            <div className='w-full md:w-3/4 lg:w-3/4 justify-between items-center flex flex-col md:flex-row mx-auto mt-7'>
                <div className="flex w-full md:w-1/2 lg:w-1/2 flex-col text-center md:text-left">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-rose-600 mt-14'>
                        Bring everyone together to build better Products
                    </h1>
                    <p className='text-gray-400 my-[30px] -full md:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, at! Maxime aliquam in optio, aut corporis ipsum velit sapiente architecto aliquid laudantium eum voluptas quasi obcaecati aperiam earum neque! Doloribus illum enim exercitationem mollitia maxime at reiciendis nostrum optio? Optio, dolore? Dolorum, maxime! Debitis labore enim molestiae similique dicta obcaecati.</p>
                    <button className='bg-rose-600 px-10 rounded-full text-white font-bold py-2   self-center md:self-start hover:bg-rose-800 transition-all' >
                        Get Started
                    </button>
                </div>
                <div className='w-1/2'>
                    <img width={'100%'} src='https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/illustration-intro.svg' />
                </div>

            </div>

        </>
    )
}

export default Front