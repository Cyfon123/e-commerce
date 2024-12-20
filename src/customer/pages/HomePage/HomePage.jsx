import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from './mens_kurta'
import { sareePage1 } from './sareePage1'
import { mens_pant } from './mens_pant'
import { mens_shirt } from './mens_shirt'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
    
      <div className='py-5 space-y-10 flex flex-col px-5 lg:px-10'>
          {mens_kurta.length > 0 ? (
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        ) : (
          <p>No kurtas available at the moment.</p> // Handling empty state
        )}
         {sareePage1.length > 0 ? (
          <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
        ) : (
          <p>No kurtas available at the moment.</p> // Handling empty state
        )}
        <HomeSectionCarousel data={mens_pant} sectionName={"Men's Jeans"} />
        <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"} />
      
      </div>
        
      </div>
  )
}

export default HomePage;
