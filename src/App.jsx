import { useState } from 'react'
import { TodoMain } from './components/todoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <TodoMain />
    </section>
  )
}

export default App
