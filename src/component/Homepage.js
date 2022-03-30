import '../component/Homepage.css'
import {useNavigate} from "react-router-dom";

export default function Homepage(){
    let navigate = useNavigate();

    function goToService(){
        navigate("/products")

    }
    return(
        <div className="main justify-center  ">
              <div class="section-content flex  ">


              <div class="central-content p-40 w-3/6  ">
                <div class="font-semibold text-5xl">Welcome to our E-Commerce App</div>
                {/* <div  class="mt-3.5 text-2xl font-semibold">We are flexible and delicated Logistics Service Partner. We work with you to design custom solutions that add value to your business </div> */}
                <div class="button-section border-4 rounded-3xl w-40 p-2   mt-4 	ml-32">
                    <button class="button text-xl font-black font-bold	" onClick={()=>goToService()}>Shop Now</button>
                </div>

            </div>


            <div class="w-1/2 flex justify-center m-8 ">
             <img  src="https://res.cloudinary.com/dcqew2kqy/image/upload/v1647325584/letter-initial-e-shopping-bag-for-online-digital-retail-e-commerce-shop-store-market-supermarket-company-brand-mobile-app-simple-creative-flat-logo-2G41XFC_cnofab.jpg" alt="group-chat" class=" m-4 h-2/3 mt-20" />
            </div>

           
        </div>

        

        </div>
    )
}