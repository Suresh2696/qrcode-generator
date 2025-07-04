const qrtext=document.getElementById("qr-text");
const qr=document.getElementById("qr");
const img=document.getElementById("img");
function qrGenerator(){
    if(qrtext.value.trim()==""){
        alert("Enter Text or Url to Generate QR code!");
        return;
    }
    else{
    qr.style.display="flex";
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    }
}


