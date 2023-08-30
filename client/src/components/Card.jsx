import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    return (
        <Link className="link" to={`/post/${post.id}`}>
            <div className="card">
                <span className="title">{post.title}</span>
                <img src={post.img} alt="" className="img" />
                <p className="desc">{post.desc}</p>
                <button className="cardButton">Read More</button>
            </div>
        </Link>
    );
};

export default Card;
