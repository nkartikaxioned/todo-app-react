import { useState } from 'react'
import { TodoMain } from './components/todoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="w-full min-h-screen flex justify-center align-middle">
      <TodoMain />
    </section>
  )
}

export default App
