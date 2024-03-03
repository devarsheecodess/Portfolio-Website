import React from 'react';
import './Home.css';
import image from './assets/home-image.png';

function Home(){
    return(
        <div className='Home'>
            <div className="home-text-upper">
                <div className="home-heading">
                    <h1>Hi, I am <p>Devarshee Gaunekar</p></h1>
                    <h5>A Frontend Developer</h5>
                </div>
                <div className="header-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo aperiam maiores placeat saepe magni amet cum voluptate sapiente magnam reprehenderit hic ea quod laudantium, voluptatibus reiciendis quisquam? Vero facilis amet, sed aut dignissimos molestiae explicabo incidunt. Nihil alias doloremque nisi, saepe ab, asperiores enim eos id repellendus maiores nulla eius hic pariatur perferendis natus corporis, sit assumenda! A est unde voluptatum temporibus dolor soluta earum beatae vitae pariatur veniam! Blanditiis eius beatae commodi deserunt, incidunt quae quibusdam in eos voluptas fuga fugiat accusantium suscipit at molestiae voluptatibus mollitia quas inventore quis labore facilis autem voluptate odio consectetur sapiente. Voluptas.
                    </p>
                </div>
            </div>
            <div className="home-img">
                <img src={image}></img>
            </div>
            <div class="custom-shape-divider-bottom-1709497579">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Home;