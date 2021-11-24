import imgCollection1 from '../../assets/images/collection1.jpg';
import imgCollection2 from '../../assets/images/collection2.jpg';
import imgCollection3 from '../../assets/images/collection3.jpg';
import imgCollection4 from '../../assets/images/collection4.jpg'
import './style.css';

export function Collection() {
    
    return (
        <div className="collection">
            <div className="card">
                <img src={imgCollection1} />
                <div className="card-body">
                    <h5>Coleção</h5>
                    <h4>Feminina</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card">
                <img src={imgCollection2} />
                <div className="card-body">
                    <h5>Coleção</h5>
                    <h4>Feminina</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card">
                <img src={imgCollection3} />
                <div className="card-body">
                    <h5>Coleção</h5>
                    <h4>Feminina</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card">
                <img src={imgCollection4} />
                <div className="card-body">
                    <h5>Coleção</h5>
                    <h4>Feminina</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}