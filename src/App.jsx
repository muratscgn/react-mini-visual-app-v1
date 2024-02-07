import { useState } from 'react'

function App() {
  const pictureIds = [200, 201, 202, 203, 204, 206]
  const [imageId, setImageId] = useState(pictureIds[0])

  const getLoremPicsumImg = (id, width = 600, height = 250) => `https://picsum.photos/id/${id}/${width}/${height}`

  function handleClick(id) {
    setImageId(id)
  }

  return (
    <article data-theme="dark">
      <main className='container' data-theme="dark">
        <hgroup>
          <h2>Mini Visual Application V1</h2>
          <p>Image:</p>
        </hgroup>
        <img src={getLoremPicsumImg(imageId)} alt="" style={{ width: "100%" }} />
        <div className="grid" style={{ marginTop: "30px" }}>
          {
            pictureIds.map((item, index) => <div key={index}>
              <img
                onClick={() => handleClick(item)}
                src={getLoremPicsumImg(item, 180, 100)}
                alt="" />
            </div>)
          }

        </div>
      </main>
    </article>
  )
}

export default App
