import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { userSignUp, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        //* sign up
        userSignUp(email, password)
            .then(res => {
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
                handleEmailVerification();
                toast.success('verify your email before login.')
                console.log(res.user)
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })

    };
    const handleCheckBox = (e) => {
        setAccept(e.target.checked)
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile);
    };
    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {
            toast.success('email verification message sent!')
        })
    }
    return (
        <div>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className="text-danger">{error}</p>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckBox} type="checkbox" label={<>Accept <Link>Terms & Conditions</Link></>} />
                </Form.Group>

                <Button disabled={!accept} variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;