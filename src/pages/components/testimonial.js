import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-bootstrap';

const Testimonial = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="testimonial">
                <div className="container">
                    <div className="row">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {props.img.map(
                                (el, idx) => {
                                    return (
                                        <Carousel.Item>
                                            <div className="carousel-caption">
                                                <Carousel.Caption>
                                                    <p>{ReactHtmlParser(props.text[idx].html)}</p>
                                                    <img
                                                        src={el.url}
                                                        alt="Img"
                                                    />
                                                </Carousel.Caption>
                                            </div>
                                        </Carousel.Item>)
                                }
                            )}
                        </Carousel>
                        {/* {props.img.map(
                            (el, idx) => {
                                return (
                                        <div id="demo" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="carousel-caption">
                                                        <p>{ReactHtmlParser(props.text[idx].html)}</p> 
                                                        <img src={el.url} />
                                                        <div id="image-caption">Nick Doe</div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <a className="carousel-control-prev" href="#demo" data-slide="prev"> <i className='fas fa-arrow-left'></i> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <i className='fas fa-arrow-right'></i> </a>
                                        </div>
                                )
                            }
                        )} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial