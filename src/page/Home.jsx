import React from 'react'
import data from '../data/logements.json'
import Banner from '../component/Banner'
import image from '../assets/header-img.png'
import Card from '../component/Card'

const Home = () => {
  return (
    <div className='home'>
      <Banner img={image} text='Chez vous, partout et ailleurs' />

      <section className='gallery'>
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </section>
    </div>
  )
}

export default Home
