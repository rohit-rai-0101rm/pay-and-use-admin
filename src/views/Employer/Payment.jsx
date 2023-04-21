import axios from 'axios'
import React, { useState } from 'react'
import { useAlert } from "react-alert";


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
const __DEV__ = document.domain === 'localhost'

const Payment = () => {
    const alert=useAlert()
    const amount=parseInt(localStorage.getItem('netPayableAmount'))
    console.log("amount",amount)
    console.log(typeof(amount))
const [name, setName] = useState('Rohit')
const[loading,setLoading]=useState(false)
const[razorpayResponse,setRazorpayResponse]=useState('')
console.log("razorpayResponse",razorpayResponse)
    async function displayRazorpay() {
        setLoading(true)
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const { data } = await axios.post(`http://localhost:1337/razorpay`,{
     amount
    },
    )

		console.log(data)

		const options = {
			key:'rzp_test_SIiMmC0cHbyTnz',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id:data.id,
			name: 'Paisa hi Paisa hoga',
			description: 'Paisa hi Paisa hoga',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
                setRazorpayResponse(response)
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
                setRazorpayResponse(response)

			},
			prefill: {
				name,
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
  
    return (
        <div className="App">
        <header className="App-header">
           
            <a
                className="App-link"
                onClick={displayRazorpay}
                target="_blank"
                rel="noopener noreferrer"
            >
                Pay {amount}
            </a>
            {
                razorpayResponse.razorpay_signature&&
                <div>
                    <h1>Payment Successful</h1>
                    </div>
            }
        </header>
    </div>
  )
}

export default Payment