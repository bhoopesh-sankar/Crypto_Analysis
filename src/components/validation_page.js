import { useState } from 'react';
import key from './images/key.png';
import back from './images/backarrow.png'
var WalletValidator = require('wallet-validator-js');

export default function ValidationPage() {
    const [address, setAddress] = useState('');
    const [validETH, setValidETH] = useState(false);
    const [validbtc, setValidbtc] = useState(false);
    const [validdoge, setValiddoge] = useState(false);
    const [validdash, setValiddash] = useState(false);
    const [validxmr, setValidxmr] = useState(false);
    const [inValid, setInValid] = useState(false);

    const goHome = (e) => {
        window.location.replace("/")
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setValidETH(false);
        setValidbtc(false);
        setValiddoge(false);
        setValiddash(false);
        setValidxmr(false);
    }

    const validateAddress = (e) => {
        if (address === '') {
            alert('Enter address')
        }
        else {
            console.log(address);
            var ValidateAddress = WalletValidator.validate(address, 'ETH');
            if (ValidateAddress) {
                console.log(address, 'is a valid Ethereum address');
                setValidETH(true);
            }
            else {
                var ValidateAddress = WalletValidator.validate(address, 'BTC');
                if (ValidateAddress) {
                    console.log(address, "is a valid Bitcoin address");
                    setValidbtc(true);
                }
                else {
                    var ValidateAddress = WalletValidator.validate(address, 'doge');
                    if (ValidateAddress) {
                        console.log(address, "is a valid Doge Coin address")
                        setValiddoge(true);
                    }
                    else {
                        var ValidateAddress = WalletValidator.validate(address, 'dash');
                        if (ValidateAddress) {
                            console.log(address, "is a valid Dash address")
                            setValiddash(true);
                        }
                        else {
                            var ValidateAddress = WalletValidator.validate(address, 'xmr');
                            if (ValidateAddress) {
                                console.log(address, "is a valid Monero address")
                                setValidxmr(true);
                            }
                            else {
                                console.log(address, "is not a valid address")
                                setInValid(true);
                            }
                        }
                    }
                }
            }
        }
    }

    const ethValidationSuccess = (e) => {
        return (
            <div>
                <div style={{
                    display: validETH ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is a <a className='text-red-600'>valid Ethereum</a> Address</h4>
                </div>
            </div>
        )
    }
    const btcValidationSuccess = (e) => {
        return (
            <div>
                <div style={{
                    display: validbtc ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is a <a className='text-red-600'>valid Bitcoin</a> Address</h4>
                </div>
            </div>
        )
    }
    const dogeValidationSuccess = (e) => {
        return (
            <div>
                <div style={{
                    display: validdoge ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is a <a className='text-red-600'>valid Doge Coin</a> Address</h4>
                </div>
            </div>
        )
    }
    const dashValidationSuccess = (e) => {
        return (
            <div>
                <div style={{
                    display: validdash ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is a <a className='text-red-600'>valid Dash Coin</a> Address</h4>
                </div>
            </div>
        )
    }
    const moneroValidationSuccess = (e) => {
        return (
            <div>
                <div style={{
                    display: validxmr ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is a <a className='text-red-600'>valid Monero</a> Address</h4>
                </div>
            </div>
        )
    }

    const validationFailed = (e) => {
        return (
            <div>
                <div style={{
                    display: inValid ? '' : 'none'
                }}>
                    <h4 className='text-white text-center text-xl'>The address "{address}" is not a valid Address</h4>
                </div>
            </div>
        )
    }

    return (
        <div className="grid bg-Bg bg-cover pb-4">
            <div className='px-8 py-2'>
                <button>
                    <img src={back} className="rounded-full w-12 h-12 border-black border-4 " onClick={goHome}></img>
                </button>
            </div>
            <div>
                <h1 className=' text-center text-white text-6xl py-2'>Address Validator</h1>
            </div>
            <div className='pt-16'>
                <div className='flex justify-center pt-32'>
                    <div className='relative flex '>
                        <img src={key} className="w-12 h-12" alt="key" />
                        <input className='w-96 h-12 ' type='text' placeholder='Enter the address' name='address' value={address} onChange={handleAddress} ></input>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-12'>
                <button className='rounded-xl border-2 border-black bg-blue-600 hover:bg-blue-900 w-48 h-10 text-white font-bold' onClick={validateAddress}>Validate Address</button>
            </div>
            <div className='pt-8'>
                {ethValidationSuccess()}
                {btcValidationSuccess()}
                {dogeValidationSuccess()}
                {dashValidationSuccess()}
                {moneroValidationSuccess()}
                {validationFailed()}
            </div>
            <div className='py-32'></div>
        </div>
    )
}

