import React from 'react'
import './css/home.css'
import Product from './Product'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {



    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }


    return (
        <div className='home'>

            {/* home image */}
            {/* 
            <img
                src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt=""
                className='home-image'
            /> */}


            {/* start */}
            <Slider {...settings} >
                <div className='home-image'>
                    <img
                        src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt=""
                        className='home-image'
                    />
                </div>
                <div >
                    <img
                        src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt=""
                        className='home-image'
                    />
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt=""
                        className='home-image'
                    />
                </div>

            </Slider>
            {/* end */}



            <div className="home-row">

                <Product
                    id='12376745'
                    title='The best choice to make'
                    price={219.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71eMQCrUH9L._AC_UL320_.jpg'
                />
                <Product
                    id='64376245'
                    title='The best choice to make'
                    price={319.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_UL320_.jpg'
                />

            </div>

            <div className="home-roww">

                <Product
                    id='643768761'
                    title='The best choice to make'
                    price={69.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_UL320_.jpg'
                />
                <Product
                    id='928765245'
                    title='The best choice to make'
                    price={399.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/518H7mXhEJL._AC_SY200_.jpg'
                />
                <Product
                    id='90636242'
                    title='The best choice to make'
                    price={449.99}
                    rating={5}
                    image='
                    https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_UL320_.jpg'
                />
                {/* ===== */}
                <Product
                    id='12376222'
                    title='The best choice to make'
                    price={149.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/71X3TQXiaxL._AC_UL320_.jpg'
                />
                <Product
                    id='153658242'
                    title='The best choice to make'
                    price={219.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61iqA22VMYL._AC_UY218_.jpg'
                />
                <Product
                    id='2437544'
                    title='The best choice to make'
                    price={149.99}
                    rating={3}
                    image='
                    https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UL320_.jpg'
                />
                <Product
                    id='09376242'
                    title='The best choice to make'
                    price={59.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/61YXjNrrHEL._AC_UL320_.jpg'
                />
                <Product
                    id='133752456'
                    title='The best choice to make'
                    price={199.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/81ucLK-qmUL._AC_UL320_.jpg'
                />
                <Product
                    id='34376467'
                    title='The best choice to make'
                    price={349.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UL320_.jpg'
                />

            </div>

            <div className="home-row">

                <Product
                    id='19376230'
                    title='The best choice to make'
                    price={549.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61tFPHYDB4L._AC_UL320_.jpg'
                />
                <Product
                    id='93276242'
                    title='The best choice to make'
                    price={119.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/41-H87u5MKL._AC_SY200_.jpg'
                />

            </div>

            <div className="home-roww">


                <Product
                    id='01976242'
                    title='The best choice to make'
                    price={449.99}
                    rating={5}
                    image='
                    https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_UL320_.jpg'
                />

                <Product
                    id='90376241'
                    title='The best choice to make'
                    price={299.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UL320_.jpg'
                />

                <Product
                    id='93076244'
                    title='The best choice to make'
                    price={59.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61YXjNrrHEL._AC_UL320_.jpg'
                />

                <Product
                    id='89276241'
                    title='The best choice to make'
                    price={449.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61iqA22VMYL._AC_UY218_.jpg'
                />
                <Product
                    id='89476212'
                    title='The best choice to make'
                    price={219.99}
                    rating={3}
                    image='
                    https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UL320_.jpg'
                />

                <Product
                    id='02372891'
                    title='The best choice to make'
                    price={69.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_UL320_.jpg'
                />
                <Product
                    id='92326242'
                    title='The best choice to make'
                    price={399.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/518H7mXhEJL._AC_SY200_.jpg'
                />

                <Product
                    id='64383941'
                    title='The best choice to make'
                    price={199.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/81ucLK-qmUL._AC_UL320_.jpg'
                />


                <Product
                    id='64387341'
                    title='The best choice to make'
                    price={149.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/71X3TQXiaxL._AC_UL320_.jpg'
                />

            </div>
        </div>
    )
}

export default Home