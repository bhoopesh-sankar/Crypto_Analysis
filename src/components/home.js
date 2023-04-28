import wallet from './images/wallet.png'
import base58 from './images/base58.png'
import iTob from './images/imageToBase64.jpg'
import bToi from './images/base64ToImage.jpg'

export default function Home() {

    const addressValidator = () => {
        window.location.replace("/addressvalidator");
    }
    const imagetobase64 = () => {
        window.location.replace("/imagetobase64");
    }
    const base64toimage = () => {
        window.location.replace("/base64toimage");
    }
    const imagetobase58 = () => {
        window.location.replace("/imagetobase58");
    }
    const base58toimage = () => {
        window.location.replace("/base58toimage");
    }
    return (
        <div className="bg-Bg bg-cover">
            <div>
                <div>
                    <h1 className="text-white font-serif text-7xl text-center py-28 font-bold">CRYPTO ANALYSIS</h1>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <button className='rounded-lg border-4 border-white' onClick={imagetobase64}>
                        <img src={iTob} className='w-60 h-64 '></img>
                        <p className='text-white bg-blue-600 hover:bg-blue-800 h-7 font-bold'>Image to Base64</p>
                    </button>
                    <button className='rounded-lg border-4 border-white' onClick={base64toimage}>
                        <img src={bToi} className='w-60 h-64'></img>
                        <p className='text-white bg-blue-600 hover:bg-blue-800 h-7 font-bold'>Base64 to Image</p>
                    </button>
                    <button className='rounded-lg border-4 border-white' onClick={addressValidator}>
                        <img src={wallet} className='w-60 h-64'></img>
                        <p className='text-white bg-blue-600 hover:bg-blue-800 h-7 font-bold'>Address Validator</p>
                    </button>
                    <button className='rounded-lg border-4 border-white' onClick={imagetobase58}>
                        <img src={base58} className='w-60 h-64'></img>
                        <p className='text-white bg-blue-600 hover:bg-blue-800 h-7 font-bold'>Image To Base58</p>
                    </button>
                    <button className='rounded-lg border-4 border-white' onClick={base58toimage}>
                        <img src={base58} className='w-60 h-64'></img>
                        <p className='text-white bg-blue-600 hover:bg-blue-800 h-7 font-bold'>Base58 to Image</p>
                    </button>
                </div>
                <button></button>
                <div className="py-20"></div>
            </div>
        </div>

    )
}