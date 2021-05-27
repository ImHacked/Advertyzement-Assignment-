import React from 'react';
import style from "./card.module.css";


function UserCard({fname,lname,email,image}) {
    return (
        <div className={style.card}>

            <p><span className={style.one}>Name:  </span>{fname}<span></span></p>
            <p><span className={style.one}>Last Name:  </span><span>{lname}</span></p>
            <p><span className={style.one}>Email:  </span><span>{email}</span></p>
           
            
            
            <img className={style.image} src={image}alt="avatar" />
        </div>
    );
}

export default UserCard
