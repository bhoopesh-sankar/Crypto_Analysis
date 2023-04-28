import { useState } from "react";
import back from './images/backarrow.png';
import copy from 'copy-to-clipboard';
import copybtn from './images/copybtn.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {encode} from 'base58-universal'

export default function ImageToBase58() {

    const [image, setImage] = useState(null)
    const [base64, setBase64] = useState('')
    const [viewBase58String, setViewBase58String] = useState('')

    const goHome = (e) => {
        window.location.replace("/")
    }

    const handleImage = async (e) => {
        const image = e.target.files[0];
        setImage(image);
        const base64 = await imageToBase64(image);
        setBase64(base64);
        alert('Ready to convert')
    }

    const imageToBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            const url = fileReader.readAsDataURL(imageFile);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const covertBase64ToBase58 = async (e) => {
        if (image === null) {
            alert('Choose an image to convert')
        }
        else {
            alert('converting...Please wait a moment')
            const encoded = new TextEncoder().encode(base64);
            const base58String = encode(encoded);
            setViewBase58String(base58String);
        }
    }
   
    const copyToClipboard = (e) => {
        if (viewBase58String === '') {
            alert('Nothing to copy')
        }
        else {
            copy(viewBase58String);
            toast("Copying...")
        }
    }

    return (
        <div className="grid bg-Bg bg-cover pb-24 ">
            <div className='px-8 py-2'>
                <button>
                    <img src={back} className="rounded-full w-12 h-12 border-black border-4 " onClick={goHome}></img>
                </button>
            </div>
            <div>
                <h1 className=' text-center text-white text-6xl py-12'>Image To Base58</h1>
            </div>
            <div className="flex justify-center">
                <input type='file' onChange={handleImage} className="rounded-lg text-white border-white border-2"></input>
            </div>
            <div className='flex justify-center pt-12'>
                <button className='rounded-xl border-2 border-black bg-blue-600 hover:bg-blue-900 w-48 h-10 text-white font-bold' onClick={covertBase64ToBase58}>
                    Convert
                </button>
            </div>
            <div className="flex pt-12">
                <h4 className="text-white text-lg pl-96">Base58 String</h4>
                <div className="ml-96 pl-56">
                    <button onClick={copyToClipboard}>
                        <img src={copybtn} className="w-9 h-8"></img>
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <textarea rows='11' cols='100' className="border-gray-500 border-4" value={viewBase58String} readOnly></textarea>
            </div>
            <ToastContainer />
        </div>
    )
}