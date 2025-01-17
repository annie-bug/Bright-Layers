import Navbar from "../components/Navbar"
import rectangle2 from "../assets/rectangle2.png"
import LetsTalkForm from "../components/LetsTalkForm"
import Footer from "../components/Footer"
import BlogSpot from '../components/BlogSpot.jsx'

function LetsTalk() {
  return (
    <div>
        {/* <Navbar/> */}
        <Navbar />

        {/* The Title in the middle  */}
        <div className="w-full mx-auto ">
        <div className="mx-auto text-[clamp(2.0371rem,3vw,3.8194rem)]
                        ">
            <div className=" text-[#313338] mx-auto
                        text-center font-pSans 
                        
                        lg:max-w-[45rem] lg:max-h-[4.81481rem]
                        mac:max-w-[56.25rem] mac:max-h-[6.0185rem]
                        lap:max-w-[60.02931rem] lap:max-h-[6.42288rem]
                        xl:max-w-[63.28125rem] xl:max-h-[6.77081rem]
                        2xl:max-w-[67.5rem] 2xl:max-h-[7.22225rem]
                        3xl:max-w-[84.375rem] 3xl:max-h-[9.02775rem] 
                        lg:mt-[8rem] mac:mt-[10rem] lap:mt-[10.67rem] xl:mt-[11.25rem] 2xl:mt-[12rem] 3xl:mt-[15rem]

             font-medium leading-[118%] lg:tracking-[0.02544rem] mac:tracking-[0.02719rem] lap:tracking-[0.02863rem]">A call is worth 
                      <span className="text-[#F97316]"> 120 seconds </span>
                      of the fastest most definite call to action you can take ツ
            </div>
        </div>
        
        </div>
        

        {/* The form and image div */}
        <div className="flex flex-row w-[90%] mx-auto
        lg:mt-[6.63rem] mac:mt-[8.29rem] lap:mt-[8.84rem] xl:mt-[9.32rem] 2xl:mt-[9.94rem] 3xl:mt-[12.43rem]
        lg:gap-x-[2.52rem] mac:gap-x-[3.15rem] lap:gap-x-[3.36rem] xl:gap-x-[3.54rem] 2xl:gap-x-[3.78rem] 3xl:gap-x-[4.72rem]">
            <div><img className="lg:max-w-[25rem] lg:max-h-[40.03706rem]
                        mac:max-w-[31.25rem] mac:max-h-[50.04631rem]
                        lap:max-w-[33.34963rem] lap:max-h-[53.40875rem]
                        xl:max-w-[35.15625rem] xl:max-h-[56.30206rem]
                        2xl:max-w-[37.5rem] 2xl:max-h-[60.05556rem]
                        3xl:max-w-[46.875rem] 3xl:max-h-[75.06944rem] "
                       src={rectangle2} alt="" /></div>
            <div className="w-full h-auto"><LetsTalkForm/></div>
            
          </div>



        <div className="w-[90%] mx-auto
        lg:mt-[10.22rem] mac:mt-[12.78rem] lap:mt-[13.64rem] xl:mt-[14.58rem] 2xl:mt-[15.56rem] 3xl:mt-[19.17rem]">
        <BlogSpot />

        </div>

       


    <div className="w-[90%] mx-auto h-[100vh] flex flex-col justify-center">

        {/*Reach Out To Us */}
        <div className=" w-[26rem] text-[#303338] text-[clamp(1.83069rem,2vw,3.4325rem)] font-semibold font-['Public Sans'] leading-[3.6456rem] tracking-wide">Reach Out To Us</div>

        {/* SVG Line */}
        <svg xmlns="http://www.w3.org/2000/svg" width="878" height="70" viewBox="0 0 878 2" fill="none"> <path d="M0 1H878" stroke="#545454" strokeWidth="2"/>
        </svg>

        {/* Grid for email,contact and address */}
        <div className=" w-[85%] mt-12 grid grid-cols-2 gap-12">   
                  <div> 
                  <div data-layer="Email Address" className=" w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Email Address</div>
                  <div data-layer="admin@dunk.agency" className="AdminDunkAgency w-[19.4375rem] h-[2.0625rem] text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">admin@dunk.agency</div>
                  </div>


                  <div>
                  <div data-layer="Contact" className=" w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Contact</div> 
                  <div data-layer="+61 450 885 458" className=" w-[19.4375rem] h-[2.0625rem] text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">+61 450 885 458<br/></div>
                  </div>

                  <div>
                  <div data-layer="Address" className="Address w-[12.5625rem] h-[3.4375rem] text-orange-500 text-[1.5625rem] font-bold font-title leading-loose tracking-tight">Address</div>
                  <div data-layer="24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia" className="25AlexFisherDrBurleighHeads4220Australia w-[47.125rem] h-12 text-[#535353] text-[1.5625rem] font-medium font-title leading-loose tracking-tight">24/25 Alex Fisher Dr, Burleigh Heads, 4220, Australia</div>
                  </div>
        </div>
    </div>
    

    <Footer/>

    </div>
  )
}

export default LetsTalk