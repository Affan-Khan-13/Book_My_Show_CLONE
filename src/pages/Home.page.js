import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component'
import PremierComponent from '../components/Premier/Premier.component'

const HomePage = () => {
  return (
    <>
    <div className='container mx-auto px-4'>
        <h1 className='text-2xl font bold text-gray-800 py-3 pt-5'>
             The best of Entertainment
        </h1>
      <EntertainmentCardSlider/>
      <h1 className='text-2xl font bold text-gray-800 py-3 pt-5'>
             The best of Entertainment
        </h1>
      <PremierComponent/>
    </div>
    </>
  )
}

export default HomePage
