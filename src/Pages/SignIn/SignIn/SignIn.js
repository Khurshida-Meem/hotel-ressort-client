import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const { firebaseContext } = useAuth();
    const { user, signInUsingGoogle, setIsLoading } = firebaseContext;
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from?.pathname || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <Container className="d-flex justify-content-center my-5 page-size">
            {
                !user ?
                    <div className="text-center">
                        <button className="btn btn-primary py-2 rounded  fw-bold mb-3" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Sign In Using Google</button>
                    </div> :
                    <h3 className="pb-5">Wellcome to Hotel Ressort {user.displayName}</h3>
            }

        </Container>

    );
};

export default SignIn;