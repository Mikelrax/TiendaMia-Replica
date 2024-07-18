import React, { useState } from 'react';
import style from './CodeDiscount.module.css';

const CodeDiscount = () => {
    const [couponCode, setCouponCode] = useState('');
    const [couponStatus, setCouponStatus] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCode(event.target.value);
        if(couponCode.length === 6){
            setCouponStatus(true);
        }
    };

    return (
        <div className={style.coupon}>
            <p style={{marginBottom:'10px'}}>¿Tienes un cupón de descuento?</p>
            <input type="text" placeholder="Digita el código de tu cupón aquí" value={couponCode} onChange={handleInputChange} />
            <p style={{marginBottom:'10px', color:"#03C04A"}}>{couponStatus ? 'Código aplicado' : ''}</p>
            <button style={{marginTop:'10px'}}>aplicar</button>
        </div>
    );
}

export default CodeDiscount;