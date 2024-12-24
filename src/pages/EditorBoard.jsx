import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';

import AnimatedText from '../utils/Animationtext';
import individuals from './Data';

export default function EditorBoard() {
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
        <h1 className="text-4xl text-center py-5  font-semibold font-Inter ">EDITOR BOARD</h1>
        <div>
          <p className="text-center text-xl font-lora font-medium">Dr. Suresh Kumar</p>
          <p className="text-center text-base font-lora font-medium">India</p>

          <div>
            <h1 className="text-left text-xl font-lora mx-5 pb-5 font-semibold">
              Editorial Board Members:
            </h1>
            <ul className="mx-10 text-xl  font-lora  flex justify-between flex-wrap gap-2 font-medium">
              {individuals.map((each) => (
                <li
                  key={each.id}
                  className={`w-[47%] h-[250px] flex flex-col justify-center  rounded-lg p-5  space-y-1 ${each.color === 'purple' ? 'bg-color text-white' : 'bg-slate-300 text-black'}`}
                >
                  <h1 className="text-xl text-center">{each.name.toUpperCase()}</h1>
                  {each.degree !== '' && <p className="text-lg text-center">{each.degree}</p>}
                  {each.position !== '' && (
                    <p className="text-lg text-center pt-1 ">{each.position}</p>
                  )}
                  {each.institution !== '' && (
                    <p className="text-lg text-center pt-1 ">{each.institution}</p>
                  )}
                  {each.country !== '' && (
                    <p className="text-lg text-center pt-1 ">{each.country}</p>
                  )}
                </li>
              ))}
            </ul>
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
