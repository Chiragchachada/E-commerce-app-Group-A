import '../component/Homepage.css'
import {useNavigate} from "react-router-dom";

export default function Homepage(){
    let navigate = useNavigate();

    function goToService(){
        navigate("/products")

    }
    return(
        <div className="main justify-center mb-20 ">
              <div class="section-content flex  ">


              <div class="central-content p-40 w-3/6  ">
                <div class="font-semibold text-5xl">Welcome to our E-Commerce App</div>
                {/* <div  class="mt-3.5 text-2xl font-semibold">We are flexible and delicated Logistics Service Partner. We work with you to design custom solutions that add value to your business </div> */}
                <div class="button-section border-4 rounded-3xl w-40 p-2   mt-4 	ml-32">
                    <button class="button text-xl font-black font-bold	" onClick={()=>goToService()}>Shop Now</button>
                </div>

            </div>


            <div class=" flex flex-col justify-center m-8 ">
             <img  src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?t=st=1648990416~exp=1648991016~hmac=9f4b7726e27b3147d800b6e2b4affde644cd13a73071df1cdf0d28588a6d471c&w=740" alt="group-chat" class=" m-4  mt-0" />
             <a href="https://www.freepik.com/vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>
            </div>

           
        </div>

        

        </div>
    )
}