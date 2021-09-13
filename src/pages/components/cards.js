import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const Cards = (props) => {
    return (
        <>
            <div className="custom-card">
                <div className="container">
                    <div className="row">
                        {props?.img && props.img.map(
                            (el, idx) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 mx-auto" key={idx}>
                                        <div className="card">
                                            <div className="box">
                                                <div className="content">
                                                    <img src={el.url} alt="Img" />
                                                    {ReactHtmlParser(props.text[idx].html)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards