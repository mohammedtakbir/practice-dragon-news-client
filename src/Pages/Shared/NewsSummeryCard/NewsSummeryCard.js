import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { author, details, image_url, rating, title, total_view, _id } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='py-3 d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author.img} roundedCircle style={{ height: '50px' }} className='me-3' />
                        <div>
                            <p className='mb-0 h5 mb-2'>{author.name}</p>
                            <p className='mb-0'>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <span className='me-2'><FaRegBookmark /></span>
                        <span><FaShareAlt /></span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <div>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p> :
                                <p>{details}</p>
                        }
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>
                            <span style={{ color: 'gold', fontSize: '20px' }} className='me-2'><FaStar /></span>
                            <span>{rating.number}</span>
                        </p>
                        <p className='mb-0'>
                            <span className='me-2'><FaEye /></span>
                            <span>{total_view}</span>
                        </p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;