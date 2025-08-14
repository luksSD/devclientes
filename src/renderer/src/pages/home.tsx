import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div className='text-white'>
            <h1>Pagina Home!! carai xablau</h1>
            <h3>Teste</h3>

            <Link to="/create">Novo Cliente</Link>
        </div>
    )
}