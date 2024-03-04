import React from 'react';
import styled from 'styled-components';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NewsLetterComponentProps {
    onClose: () => void;
  }
const NewsLetter: React.FC<NewsLetterComponentProps> = ({ onClose: onClose }) => {
    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event && event.target === event.currentTarget) {
            onClose();
        }
      };

    const handleSumbit = () => {
        toast.success('Subscribed successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
       setTimeout(() => {
        onClose();
       }, 3000);
    }
  return (
    <Model>
    <ToastContainer />

    <div className='newsletter-container'>
        <div className='newsletter-content'>
            <div className='close-btn' onClick={handleClose}>X</div>
            <div className='bg-img'></div>
            <div className="row text-center">Subscribe to our newsletter and stay up to date with the latest events and offers.</div>
            <div className="row subs-form">
                <div className="col-8">
                    <input 
                        className="form-control  rounded-pill"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="col-4">
                    <button className='btn btn-primary rounded-pill' onClick={handleSumbit} type='submit'>Submit</button>
                </div>
            </div>
            
        </div>
    </div>
    </Model>
  );
}

export default NewsLetter;

const Model = styled.div`
.newsletter-container{
    background: rgba(0, 0, 0, .8) ;
    width:100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
}
.newsletter-content{
    display: flex;
    flex-direction: column;
    max-width: 800px;
    max-height: 600px;
    width: 80%;
    height: 80%;
    background: white;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 101;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.bg-img{
    background: url(/newletter.jpg) no-repeat center center/cover;
    width: 100%;
    height: 80%;
}
.close-btn{
    cursor: pointer;
}
subs-form{
    width: 100%;
    margin-top: 20px;
}
.subs-form input{
    width: 100%;
    margin-left:20px;
    margin-top: 10px;

}
.subs-form button{
    width: 100%;
    margin-right:20px;
    margin-top: 10px;
}
.text-center{
    text-align: center;
    margin: auto;
}

`
