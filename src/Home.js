import './Home.css';
import React from 'react';
import Product from './Product';

//Banner below container
function Home() {
    return ( 
    <div className="home">
        <div className="home__container">
            <img
                className="home__image"
                src="https://image.freepik.com/free-vector/geometric-shapes-background-eighties-style_23-2148249866.jpg"
                alt=""
            />
            <div className="home__carusel">
                  {/*CARUSEL/AD IMAGES*/}
            </div>
                 <div className="home__row">
                <Product 
                id = "0000000001"
                title ="Funny Gummies (CBD)" 
                price={19.99}
                image="https://media.hempbombs.com/site-content/hb/media/2020/06/cbd_gummies_original_8ct_hb_front.jpg"
                /> 
                <Product 
                id = "0000000002"
                title ="Funny Gummies (CBD)" 
                price={29.99}
                image="https://cdn.shopify.com/s/files/1/1721/5079/products/BOLT-CBD-GUMMIE-BAG-150-MG-15-COUNT-679x800.jpg?v=1610478527"
                />
            </div>
            
            <div className="home__row">
                <Product 
                id = "0000000003"
                title ="Funny Gummies (CBD)" 
                price={25.99}
                image="https://nxm3s2s7mdp1kt8af1gr4vc8-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/25294852_web1_M1-JSJ-20210526-Holistic-Greens-CBD-Gummies-1280.jpeg"
                /> 
                <Product 
                id = "0000000004"
                title ="Funny Gummies (CBD)" 
                price={39.99}
                image="https://edensherbals.com/assets/images/1000mggumfront.jpg"
                /> 
                <Product 
                id = "0000000005"
                title ="Funny Gummies (CBD)" 
                price={15.99}
                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2021%2F05%2F04%2FCornbread-Hemp-Gummies-1.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id = "0000000006"
                title ="Funny Gummies (CBD)" 
                price={69.99}
                image="https://media.hempbombs.com/site-content/hb/media/2020/06/cbd_gummies_high_potency_100ct_hb_front.jpg"
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
