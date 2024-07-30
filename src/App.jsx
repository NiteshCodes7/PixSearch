import { useEffect, useState } from 'react'
import ImageCard from './Components/ImageCard'
import './App.css'
import Search from './Components/Search'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading('false')
    })
    .catch(error => console.log(error))
  }, [term])
  
  return (
    <>
    <h1 className='text-center text-gray-500 font-semibold mb-7 mx-auto text-5xl underline'>PixSearch</h1>
    <div className='container mx-auto'>
      <Search search={(text) => setTerm(text)} />
      {isLoading && images.length===0 &&  <h1 className='text-6xl text-center mx-auto mt-32'>Image Not Found...</h1>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {!isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
