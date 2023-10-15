import { useGlobalContext } from './context'

import { FaBars } from 'react-icons/fa'

export const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>

      <button type="button" className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  )
}
