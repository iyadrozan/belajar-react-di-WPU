import { useState } from 'react'

function Header({ author }) {
  return <h1>Belajar React bareng {author ? author : 'WPU'} 🚀</h1>
}

function App() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header author="ZAN" />
      <button onClick={handleClick}>Like {likes}</button>
    </>
  )
}

export default App
