import { Collection } from './components/Collection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Brands } from './components/Brands';
import { Products } from './components/Products';
import { useEffect, useState } from 'react';
import { Product } from './components/@types';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    // TODO: Carregue do Server os Dados de produto
    axios.get('http://localhost:3333/products')
    .then(prods => {
      console.log(prods.data)
      setProducts(prods.data)
    })
    .catch(error => {
      console.log('ERRO', error.data)
    })
  }, [])


  const brands = [
    {alt: 'brand1', source: 'assets/images/brand1.png'},
    {alt: 'brand2', source: 'assets/images/brand2.png'},
    {alt: 'brand3', source: 'assets/images/brand3.png'},
    {alt: 'brand4', source: 'assets/images/brand4.png'},
  ];

  const productsTeste = [
    {id: 1, name: 'Conjunto de casaco e calça preta', description: '', price: 600, likes: 2, photo: 'produtc1.jpg' },
    {id: 2, name: 'Conjunto de casaco e calça jean', description: '', price: 600, likes: 2, photo: 'produtc2.jpg' }
  ];

  return ( 
    <div>
      <Header />
      <main>
        <div className="container">
          <Collection />
          <Products items={products} />
        </div>
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <p>Assine nossa newsletter para receber atualizações sobre ofertas especiais,
              novos produtos ou informações de descontos. </p>
            <form>
              <input type="text" placeholder="Informe o seu e-mail" className="form-control form-control-lg" />
              <button className="btn btn-primary btn-lg">Inscreva-se</button>
            </form>
          </div>

        </div>
        <div className="container">
          <Brands items={brands}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
