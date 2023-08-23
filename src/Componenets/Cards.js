import './Cards.css';
import Card1 from './Images/Document_File.jpg';
import Card2 from './Images/Document_Storage.jpg';

function Cards() {
    return (
        <>


            <body>
                <div className="cards-all">
                    <div className="card-1">
                        <img src={Card1} alt="pic" />
                        <h3>Card-1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestias!</p>
                    </div>
                    <div className="card-2">
                        <img src={Card2} alt="pic" />
                        <h3>Card-2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestias!</p>
                    </div>
                    <div className="card-3">
                        <img src={Card1} alt="pic" />
                        <h3>Card-3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestias!</p>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Cards;