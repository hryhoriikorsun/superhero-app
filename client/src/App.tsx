import { Outlet } from 'react-router-dom';
import { Container } from './components/Container';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-gray-200'>
        <div>sdfvrdb</div>
      </header>

      <main className='flex-1 bg-gray-100'>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className='bg-gray-200'>
        vvs
      </footer>
    </div>
  )
}

export default App
