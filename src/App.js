import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ValidationPage from './components/validation_page';
import ImageToBase64 from './components/imageToBase64';
import Base64ToImage from './components/base64ToImage';
import ImageToBase58 from './components/imageToBase58';
import GoogleAuth from './components/googleAuth';
import Base58ToImage from './components/base58ToImage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<GoogleAuth />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/addressvalidator' element={<ValidationPage />} />
        <Route path='/imagetobase64' element={<ImageToBase64 />} />
        <Route path='/base64toimage' element={<Base64ToImage />} />
        <Route path='/imagetobase58' element={<ImageToBase58 />} />
        <Route path='/base58toimage' element={<Base58ToImage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
