import './style.css';
export function Header() {

    return (
        <div>
            <header className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <h1 className="navbar-brand">DAW Loja</h1>

                    <nav>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}