const imgBox = document.getElementById('imgbox');
const qrImage = document.getElementById('qr-image');
const qrText = document.getElementById('qr-text');
const button = document.getElementById('btn');


function generateQR(){
  if(qrText.value.length > 0){
    qrImage.src ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
  }else{
    qrText.classList.add('error');
    setTimeout(()=>{
      qrText.classList.remove('error');
    },1000)
  }
}

button.addEventListener('click',()=>{
  generateQR();

  imgBox.classList.add('show-img');
})
