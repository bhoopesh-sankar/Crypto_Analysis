import { useState } from "react";
import back from './images/backarrow.png';
import copy from 'copy-to-clipboard';
import copybtn from './images/copybtn.png';
import { ToastContainer, toast } from 'react-toastify';

export default function ImageToBase64() {

  const [base64, setBase64] = useState('')
  const [viewBase64, setViewBase64] = useState('')

  const goHome = (e) => {
    window.location.replace("/")
  }

  const handleImage = async (e) => {
    const image = e.target.files[0];
    const base64 = await imageToBase64(image);
    setBase64(base64);
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

  const viewBase64String = (e) => {
    if (base64 === '') {
      alert('Choose an image')
    }
    else {
      setViewBase64(base64);
    }
  }

  const copyToClipboard = (e) => {
    if (viewBase64 === '') {
      alert('Nothing to copy')
    }
    else {
      copy(viewBase64);
      toast('copying...')
    }
  }
  return (
    <div className="grid bg-Bg bg-cover pb-24">
      <div className='px-8 py-2'>
        <button>
          <img src={back} className="rounded-full w-12 h-12 border-black border-4 " onClick={goHome}></img>
        </button>
      </div>
      <div>
        <h1 className=' text-center text-white text-6xl py-12'>Image To Base64</h1>
      </div>
      <div className="flex justify-center">
        <input type='file' onChange={handleImage} className="rounded-lg text-white border-white border-2"></input>
      </div>
      <div className='flex justify-center pt-12'>
        <button className='rounded-xl border-2 border-black bg-blue-600 hover:bg-blue-900 w-48 h-10 text-white font-bold' onClick={viewBase64String}>
          Convert
        </button>
      </div>
      <div className="flex pt-12">
        <h4 className="text-white text-lg pl-96">Base64 String</h4>
        <div className="ml-96 pl-56">
          <button onClick={copyToClipboard}>
            <img src={copybtn} className="w-9 h-8"></img>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <textarea rows='11' cols='99' className="border-gray-500 border-4" value={viewBase64} readOnly></textarea>
      </div>
        <ToastContainer />
    </div>
  )
}
