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
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin onSuccess={signInSuccess} onError={signInError} shape='circle' width='12' />
            </GoogleOAuthProvider>
        </div>
    )
}