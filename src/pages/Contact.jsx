import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';

import AnimatedText from '../utils/Animationtext';

export default function Contact() {
  return (
    <div className="bg-color3 min-h-screen">
      <NavBar SubNavColor={'bg-slate-200'} NavColor={'bg-slate-200'} />
      <section className="mt-10 text-black">
        <p className=" text-4xl text-center font-Libre_Baskerville leading-relaxed font-medium ">
          International Journal of Multidisciplinary Research in <br />
          <span className=" font-Libre_Baskerville italic ">
            <AnimatedText text={'Science, Engineering, and Technology'} />
          </span>
        </p>
      </section>

      <div className="py-5">
        <h1 className="text-4xl text-center pt-10  font-semibold font-Inter ">CONTACT US</h1>
        <div className="w-[70%] mx-auto py-10 bg-color rounded-md">
          <p className="text-xl text-center pt-10 text-white  font-lora">
            For any queries / clarifications, please write to{' '}
            <span className="underline underline-offset-2">ijmrset@gmail.com</span>.All the queries
            will be solved within 12 hours.
          </p>
          <div className="w-[60%] mt-5 mx-auto py-3 rounded-sm bg-color3 ]">
            <p className="flex flex-col justify-center items-center   text-center gap-4 text-black  font-lora text-lg">
              Dr.R.Sugumar <br />
              The Editor in Chief <br />
              12/41, Venkatesan Street, T.Nagar,
              <br /> Chennai-600017,
              <br />
              Tamilnadu, India
              <br />
              Email: ijmrset@gmail.com.
              <br />
              Mobile : +91 9940572462
              <br />
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <div className="bg-color3 py-4 flex w-full px-5">
        <p className="text-md text-black mx-auto font-Inter">
          Copyright © 2024 IJMRSET All Rights Reserved
        </p>
      </div>
    </div>
  );
}
