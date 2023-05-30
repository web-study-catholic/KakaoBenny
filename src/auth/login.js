import {KAKAO_AUTH_URL} from './authlogin'
import React from 'react'

const login = () =>{
 return(
    <a href={KAKAO_AUTH_URL}>
        <img src = "https://developers.kakao.com/docs/static/image/ko/m/kakaologin.png" alt="img"/>
    </a>

 )
}

export default login

