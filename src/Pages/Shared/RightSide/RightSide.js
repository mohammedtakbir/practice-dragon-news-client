import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaTwitch, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const RightSide = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
        })
        .catch(err => console.error(err))
    }
    return (
        <>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FcGoogle /> Login with Google</Button>
                <Button variant='outline-dark'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <div>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaLinkedin /> Linkedin</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <BrandCarousel />
        </>
    );
};

export default RightSide;