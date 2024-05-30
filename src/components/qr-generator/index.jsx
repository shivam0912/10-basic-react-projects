import { useState } from "react"
import QRCode from "react-qr-code";
import "./style.css"
export default function QRGenrator(){
    const [qrCode,setQrCode] = useState("")
    const [input,setInput]=useState("")    
    
    function handleGenerateQr(){
        setQrCode(input);
        setInput('');
    }
    function handleKeyPress(e){
        if(e.key==="Enter")
            handleGenerateQr();
    }
    return(
        <div className="container">
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e)=>setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value here"
                    />
                <button
                    disabled={input && input.trim()!==""?false:true}
                    onClick={handleGenerateQr}>
                    Generate
                </button>
            </div>
            <div>
                <QRCode id="qr-code" value={qrCode}
                size={400}
                bgColor="#fff"
                />
            </div>
        </div>
    )
}