import { useState, useEffect } from 'react'
import '../styles/Meme.css'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/grr.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState([])

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const fetchedData = await response.json()
      setAllMemeImages(fetchedData.data.memes)
    }
    getMemes()
  }, [])

  function handleClick() {
    const randomNum = Math.floor((Math.random() * allMemeImages.length))
    const url = allMemeImages[randomNum].url

    setMeme(prevMemeImage => ({
      ...prevMemeImage,
      randomImage: url
    }))
  }

  function handleChange(e) {
    const {name, value} = e.target
    setMeme(prevMeme =>  ({...prevMeme, [name]: value}))
  }

  return(
    <>
      <main>
        <div className="form">
          <input 
              className='top-text' 
              type="text" 
              placeholder='Top text'
              onChange={handleChange}
              name='topText'
              value={meme.topText}
            />
          <input 
              className='bottom-text' 
              type="text" 
              placeholder='Bottom text'
              onChange={handleChange}
              name='bottomText'
              value={meme.bottomText}
            />
          <button onClick={handleClick} className='meme-button'>Get a new meme image</button>
        </div>

        <div className="meme-image-container">
          <img className='meme-image' src={meme.randomImage} />
          <div className='meme-text top-text'>{meme.topText}</div>
          <div className='meme-text bottom-text'>{meme.bottomText}</div>
        </div>
      </main>
    </>
  )
}