import Navbar from '../components/Navbar.jsx';
import home1 from '../assets/home1.jpg';
import image from "../assets/image.png";
import rectangleMobile from "../assets/rectangleMobile.png";
import rectangle from '../assets/rectangle.png'
import DropDown from '../functions/DropDown.jsx'
import {AnimatedLogo}  from '../functions/AnimatedLogo.jsx';
import ContactForm from '../pages/ContactForm.jsx'
import Features from '../components/Features.jsx';
import PeopleSaying from '../components/PeopleSaying.jsx';
import InfiniteCarousel from '../components/InfiniteCarousel.jsx';

function Home() {
  return (
    <div className="w-full h-auto bg-[#ecf0f1] z-[-1]">
      <div className="w-full h-[12rem] flex justify-center items-center md:px-20 md:justify-between ">
        <Navbar />
      </div>

      <section className="flex w-full justify-center">
        <div className="w-[20.25rem] h-[7.75rem] md:w-[50.28125rem] md:h-[22.125rem] text-center mb-[7rem]">
          <span className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.59831rem] md:tracking-[0.03438rem] tracking-[0.00975rem]">
            We are Bright Layers, a dynamic social media agency since 2019,
            dedicated to elevating brands through creative content and strategic
            digital marketing
          </span>
          <span className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.59831rem] md:tracking-[0.03438rem] tracking-[0.00975rem]">
            {" "}
          </span>
          <span className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.59831rem] md:tracking-[0.03438rem] tracking-[0.00975rem]">
            ツ
          </span>
        </div>
      </section>

      <div className="max-w-[80rem] ">
        <img
          src={home1}
          alt=""
          className="w-[21.29731rem] h-[6rem] float-right mb-[4.7rem]"
        />
      </div>

      <div className="w-full md:h-[20.25rem] flex flex-col justify-center items-center">
        <div
          className="w-[13.0625rem] h-[1.1875rem] md:w-[53.938rem] md:h-[1.188rem] text-center md:text-left  text-[#da5428] 
                          md:text-[1.5625rem] text-[1rem] font-semibold font-pSans capitalize md:leading-[1.8438rem] leading-[1.18rem] md:tracking-[0.01563rem] tracking-[0.01rem] mx-auto "
        >
          What Do We Do?
        </div>

        <div
          className="w-[20.625rem] h-[13.8125rem] md:w-[53.9375rem] md:h-[22.75rem]
                          text-[#535353] md:text-[1.5625rem] 
                            md:font-medium font-title md:leading-[2.03494rem] 
                            md:tracking-[0.01563rem] md:text-left  md:mt-4

                            text-center
                            items-center text-[0.77269rem] font-semibold
                            leading-[1.00631rem] tracking-[0.00775rem] mt-[1.71rem]"
        >
          In the last 5 years, the country has seen trendsetting marketing
          campaigns — but what&apos;s missing is &quot;the beyonds&quot; of a
          campaign. Does it end after a post, a hoarding, an ad? So we just want
          likes & comments? Maybe an app download? No. That can&apos;t be all.
          <br />
          <br />
          There&apos;s more to your brand than this — and we want to bring that
          to the front too. Beyond just campaigns. Just like our name, we are
          here to brighten up your social media presence with a layered approach
          that works exclusively for you.
        </div>

        <div className="flex justify-end">
          <a
            href="#examples"
            className=" w-[9.4375rem] h-[1.8125rem] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4 md:block hidden"
          >
            check examples
          </a>
        </div>
      </div>

      <div className="max-w-[80rem] mb-[5.18rem] mt-[4.7rem] md:mt-40">
        <img
          src={image}
          alt="assets"
          className="md:w-full md:h-[10.875rem]  w-[21.125rem] h-[5.76138rem] float-left md:mb-[10rem]"
        />
      </div>

      <div className="w-full md:h-[20.25rem] flex flex-col justify-center items-center">
        <div
          className="md:text-left text-center md:w-[53.938rem] md:h-[1.188rem] text-[#da5428] 
                        md:text-[1.5625rem] font-semibold font-pSans capitalize md:leading-[1.8438rem] md:tracking-tight mx-auto
                        
                        w-[13.0625rem] h-[1.1875rem] text-[1rem] leading-[1.18rem] tracking-[0.01rem] mt-[5.18rem] "
        >
          How Do We Do It?
        </div>

        <div
          className="md:w-[53.9375rem] md:h-[22.75rem] text-[#535353] 
                    md:text-[1.5313rem] md:font-medium font-title md:leading-9 md:tracking-tight 
                    md:text-left md:mt-4
                    mx-auto shrink-0
                    w-[21.87994rem] h-[5.44181rem] leading-[1.00144rem] text-[0.76894rem] tracking-[0.00769rem]
                    mt-[1.62rem] text-center font-semibold"
        >
          Our approach is different - a boutique-style agency that prioritizes
          understanding our clients as intimately as our own business. This
          approach has not only made us experts in our field but has allowed us
          to build genuine partnerships.
        </div>

        <div className="flex justify-end">
          <a
            href="#examples"
            className="w-[9.4375rem] h-[9.75rem] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4 hidden md:block "
            id="service"
          >
            check services
          </a>
        </div>
      </div>

      <div className="md:hidden w-full h-[13.875rem] flex justify-end mt-36">
        <img src={rectangleMobile} alt="" className="w-full" />
      </div>

      <div className="md:block flex flex-col items-center justify-center">
        <div className="w-[15.996rem] h-[3.98444rem] md:text-left text-center text-[1.43756rem] font-semibold leading-[1.69631rem] tracking-[0.01438rem] md:w-[34.375rem] md:h-[8.5625rem] text-[#303338] md:text-[2.8125rem] md:font-semibold font-pSans md:leading-4 md:tracking-tight mt-20 md:mt-10 md:ml-[9.125rem]">
          Service We Provide For Your Brand
          <span className="text-[#303338] md:text-[4.125rem] md:font-medium font-pSans md:leading-[4.8675rem] md:tracking-wide">
            {" "}
          </span>
          <span className="text-[#303338] md:text-[2.9375rem] md:font-bold font-pSans md:leading-[3.6138rem] md:tracking-wide">
            ツ
          </span>
          <AnimatedLogo />
        </div>
      </div>

      <div className='flex md:items-center md:justify-between'>
          <DropDown />
            <div className='hidden md:flex md:-my-24'>
                  <img src={rectangle} alt="image" className='md:mr-[5rem]' />
            </div>
      </div>

      <div>
        <ContactForm />
      </div>


      <div className='w-full flex justify-center mt-[3.08rem]'>  
              <div className="md:w-[71.1875rem] md:h-[19.5625rem]  md:leading-snug md:tracking-tight md:text-[1.5625rem]
                              text-center text-[#535353] font-semibold font-title
                              w-[20.74813rem] leading-[0.94181rem] tracking-[0.00725rem] text-[0.72313rem]
                  ">
                    Our ideal customer personas are small to medium-sized business
                    owners, marketing managers, and ad moguls  looking to make their
                    brand be seen. They value the power of strategy with creativity, and
                    believe in results, rather than buzz. <br />
                    <br />
                    If you&apos;re that persona looking to navigate the digital
                    marketing scene and give your brand the visibility it deserves,
                    you&apos;re the one for us. Hope we&apos;re the one for you too.
              </div>
      </div>    

      <div>
        <Features />
      </div>


      <div>
        <PeopleSaying />
      </div>

      <div>
        <InfiniteCarousel />
      </div>

      </div>
  );
}

export default Home;