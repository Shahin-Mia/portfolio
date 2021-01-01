import React from 'react';

const BlogCards = (props) => {
    return (
        <div className="col mb-5">
            <div className="card" data-aos="zoom-in">
                <img src={props.blog.img} className="card-img-top" style={{ height: 200 }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.blog.about}</h5>
                    <a href={props.blog.link} className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;