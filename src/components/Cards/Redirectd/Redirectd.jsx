import React, { useEffect } from 'react'
import LoadingScreen from 'react-loading-screen';
import { useSelector } from 'react-redux';
import logo from "../../../assets/img/logo.png"
const Redirectd = () => {
    const token=sessionStorage.getItem('user')
    console.log(token)
    useEffect(() => {
        const timer = () => setTimeout(() =>
            window.location.replace('/admin/dashboard'), 2000)




        const timerId = timer();
        return () => {
            clearTimeout(timerId);
        };
    });
    return (
        <div class="flex justify-center items-center h-screen">
            <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#2E3192'
                textColor='#2E3192'
                logoSrc={logo}
                text='Welcome to Mitr Paisa  Admin Panel'
            >

            </LoadingScreen>

        </div>

    )
}
export default Redirectd

