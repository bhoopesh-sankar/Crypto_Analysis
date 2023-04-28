import { useState } from "react";
import back from './images/backarrow.png';

export default function Base64ToImage() {

    const [base64String, setBase64String] = useState('');
    const [base64, setBase64] = useState('');

    const goHome = (e) => {
        window.location.replace("/")
    }

    const hanleBase64String = async (e) => {
        const String = e.target.value;
        setBase64(String);
    }

    const viewImage = (e) => {
        if (base64 === '') {
            alert('Enter base64 string')
        }
        else {
            setBase64String(base64);
        }
    }

    return (
        <div className="grid bg-Bg bg-cover pb-8">
            <div className='px-8 py-2'>
                <button>
                    <img src={back} className="rounded-full w-12 h-12 border-black border-4 " onClick={goHome}></img>
                </button>
            </div>
            <div>
                <h1 className=' text-center text-white text-6xl py-2'>Base64 To Image</h1>
            </div>
            <div className="flex justify-center pt-12">
                <textarea rows='11' cols='100' placeholder="Enter Base64 string to convert into an image" className="border-gray-500 border-4" type='text' onChange={hanleBase64String}></textarea>
            </div>
            <div className='flex justify-center pt-12'>
                <button className='rounded-xl border-2 border-black bg-blue-600 hover:bg-blue-900 w-48 h-10 text-white font-bold' onClick={viewImage}>View Image</button>
            </div>
            <div className="flex justify-center pt-12">
                <img src={base64String} className="h-96"></img>
            </div>
        </div>
    )
}