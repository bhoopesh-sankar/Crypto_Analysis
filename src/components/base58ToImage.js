import { useState } from "react";
import back from './images/backarrow.png';
import { decode } from 'base58-universal'

export default function Base58ToImage() {

    const [base64String, setBase64String] = useState('');
    const [base58, setBase58] = useState('')

    const goHome = (e) => {
        window.location.replace("/")
    }

    const hanleBase58String = async (e) => {
        const String = e.target.value;
        setBase58(String);
    }

    const viewImage = (e) => {
        if (base58 === '') {
            alert('Enter base64 string')
        }
        else {
            const idecode = decode(base58)
            const decoded = new TextDecoder().decode(idecode);
            setBase64String(decoded);
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
                <h1 className=' text-center text-white text-6xl py-2'>Base58 To Image</h1>
            </div>
            <div className="flex justify-center pt-12">
                <textarea rows='11' cols='100' placeholder="Enter Base58 string to convert into an image" className="border-gray-500 border-4" type='text' onChange={hanleBase58String}></textarea>
            </div>
            <div className='flex justify-center pt-12'>
                <button className='rounded-xl border-2 border-black bg-blue-600 hover:bg-blue-900 w-48 h-10 text-white font-bold' onClick={viewImage}>View Image</button>
            </div>
            <div className="flex justify-center pt-12 ">
                <img src={base64String} className="h-96"></img>
            </div>
        </div>
    )
}