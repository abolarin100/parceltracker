import React from 'react'
import '../css/payment.css'
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
    
        navigate('/parcel-details');
      };
    return (
       <div className='div'>

       <section className='container'>
        
        <form className='' action="">
            {/* <h3>Make Payment</h3> */}

            <div className="inputbox">
                <span>class of delivery</span>
                <select name="" id="">
                    <option value="select class" selected disabled> select class</option>
                    <option value="select class"> first class</option>
                    <option value="select class"> second class</option>
                    <option value="select class"> third class</option>
                    <option value="select class"> fourth class</option>
                </select>
                {/* <input type="text" maxLength="16" className='card-number-input' /> */}
            </div>
            <div className="inputbox">
                <span>card number</span>
                <input type="text" maxLength="16" className='card-number-input' />
            </div>
            <div className="flexbox">
                <div className="inputbox">
                    <span>exp date</span>
                    <input type="text" maxLength="5" />
                </div>
                <div className="inputbox">
                    <span>cvv</span>
                    <input type="text" maxLength="3" className='cvv-input' />
                </div>
                <div className="inputbox">
                    <span>card pin</span>
                    <input type="password" maxLength="4" />
                </div>
            </div>
            <button onClick={handleButtonClick} className='submit-btn'>Pay now</button>
        </form>
       </section>
       
       
       </div>
    )
}

export default Payment
