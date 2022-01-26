import React from 'react'
import img1 from '../../assets/Vector 2.svg'
function Home() {
    return (
        <div className="text-black">

            <div className="border-2 grid grid-cols-3   h-auto  xl:mx-40  mx-60 p-3 text-black mt-8">
                <div className="flex flex-cols">
                    <img className=" mb-4 mt-4 ml-4" src={img1} />
                    <p className="font-semibold ml-4 mt-4">Bridal Shower</p>
                </div>
                <div className="text-center mt-4">nhn</div>
                <div className="text-right mt-4">Not Viewed </div>
            </div>

            <div className="border-2 grid grid-cols-3   h-auto  xl:mx-40  mx-60 p-3 text-black mt-8">
                <div className="flex flex-cols">
                    <img className=" mb-4 mt-4 ml-4" src={img1} />
                    <p className="font-semibold ml-4 mt-4">Wedding Eve</p>
                </div>
                <div className="text-center mt-4">nhn</div>
                <div className="text-right mt-4">Not Viewed</div>
            </div>

            <div className="border-2 grid grid-cols-3   h-auto  xl:mx-40  mx-60 p-3 text-black mt-8">
                <div className="flex flex-cols">
                    <img className="mb-4 mt-4 ml-4" src={img1} />
                    <p className="font-semibold ml-4 mt-4">wedding Day</p>
                </div>
                <div className="text-center mt-4">nhn</div>
                <div className="text-right mt-4">Not Viewed</div>
            </div>

        </div>
    )
}

export default Home
