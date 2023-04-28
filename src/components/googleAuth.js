import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function GoogleAuth() {
    const signInSuccess = () => {
        window.location.replace("/home")
    }
    const signInError = () => {
        alert('Login Failed');
    }
    return(
        <div className='bg-Bg bg-cover flex justify-center pt-80 pb-96 '>
            <GoogleOAuthProvider clientId='593844356138-j8fv8s4red4dncvhc9f5esfjagadf2ml.apps.googleusercontent.com'>
                <GoogleLogin onSuccess={signInSuccess} onError={signInError} shape='circle' width='12' />
            </GoogleOAuthProvider>
        </div>
    )
}