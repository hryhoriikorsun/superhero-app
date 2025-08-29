import { Outlet } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Container>
        <Header />
      </Container>

      <main className='flex-1 bg-gray-100'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default App
