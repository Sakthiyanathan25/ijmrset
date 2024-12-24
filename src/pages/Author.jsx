import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import AnimatedText from '../utils/Animationtext';
import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';
import line from '../assets/line.png';

export default function Author() {
  const list1 = [
    { id: 6, text: 'Research articles' },
    { id: 1, text: 'Review articles' },
    { id: 2, text: 'Informative articles' },
    { id: 3, text: 'Case Studies' },
    { id: 4, text: 'Comparative Studies' },
    { id: 5, text: 'Extended version of conference papers' },
  ];

  return (
    <div className="bg-color3 min-h-screen">
      <NavBar SubNavColor={'bg-slate-200'} NavColor={'bg-slate-200'} />

      <div>
        <section className="mt-10 text-black">
          <p className=" text-4xl text-center font-Libre_Baskerville leading-relaxed font-medium ">
            International Journal of Multidisciplinary Research in <br />
            <span className=" font-Libre_Baskerville italic ">
              <AnimatedText text={'Science, Engineering, and Technology'} />
            </span>
          </p>
          <div className="font-semibold flex items-center justify-center text-center font-lora">
            <img src={Email} className="w-7 h-7 mr-2" alt="Email" />
            <p className="mr-4">ijmrset@gmail.com</p>

            <img src={Impactfactor} className="w-7 h-7 mr-2" alt="Impact Factor" />
            <p className="mr-4">Impact Factor: 7.521</p>

            <img src={Check} className="w-7 h-7 mr-2" alt="Check" />
            <p>Compliant with UGC CARE Journal Norms and Guidelines</p>
          </div>
        </section>

        <div className="py-10 space-y-5">
          <h1 className="font-Inter text-black text-4xl font-bold text-center">AUTHORS</h1>

          <div className=" mx-5 ">
            <ul className=" rounded-lg text-black p-10">
              <li className="text-2xl text-center pt-10  font-semibold font-Inter underline underline-offset-2">
                A. PAPER SUBMISSION
              </li>
              <p className="text-lg font-medium font-lora text-center py-2 ">
                IJMRSET invites authors to submit articles in multidisciplinary areas of Science,
                Engineering, Technology, and their applications in business, industry, and other
                relevant fields. We welcome the following types of contributions:
              </p>
              <li>
                <ul className="py-5">
                  {list1.map((each) => (
                    <li
                      key={each.id}
                      className="flex gap-2 font-lora  items-center pl-[40%] text-lg font-medium"
                    >
                      <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                      <p>{each.text}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-lg font-medium font-lora ">
                  Authors can submit their papers year-round to ijmrset@gmail.com. Submissions must
                  adhere to the following guidelines:
                </p>
                <ul className="pl-[25%] text-lg font-medium font-lora space-y-2 my-2">
                  <li className=" ">1. Papers must be original and not previously published.</li>
                  <li className="">
                    {' '}
                    2. Papers should not be under consideration for publication elsewhere during the
                    evaluation process.
                  </li>
                </ul>
                <p className="text-center text-lg font-medium font-lora underline underline-offset-1">
                  Review and Publication Process:
                </p>
                <ul className="pl-[20%] text-lg font-medium font-lora space-y-2 my-2">
                  <li className=" ">
                    Notifications of acceptance or rejection will be sent to the corresponding
                    author only.
                  </li>
                  <li className="">
                    Accepted papers, after undergoing a thorough review process, will be published
                    online immediately.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className=" rounded-lg text-black p-10">
              <li className="text-2xl text-center pt-10  font-semibold font-Inter underline underline-offset-2">
                B. STRUCTURE OF AN ARTICLE
              </li>
              <p className="text-lg font-medium font-lora text-center py-2 ">
                The article should follow the structure outlined below:
              </p>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className="text-lg font-semibold py-2">I . TITLE (Maximum 120 Characters)</h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6">
                    The title should be specific, informative, and easy to understand.
                  </li>
                  <li className="pl-6">
                    It must clearly reflect the objective of the research paper.
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  text-lg py-2">II . AUTHOR INFROMATION</h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6">
                    Include the Name, Designation, Department, Institute Name, Location (City,
                    State, Country), Email ID, and Mobile Number of each author.
                  </li>
                  <li className="pl-6">
                    It must clearly reflect the objective of the research paper.
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  text-lg py-2">III . ABSTRACT</h1>
                <ul className="space-y-2 ">
                  <li className="pl-6 list-inside list-disc">
                    A concise summary of the research, not exceeding 100 words.
                  </li>
                  <li className="pl-6 ">
                    <li className="py-2 list-inside list-disc">It should highlight:</li>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">The research question or problem.</li>
                      <li className="pl-6">Methods or approach used.</li>

                      <li className="pl-6">Key results and main conclusions.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  text-lg py-2">IV . KEYWORDS</h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6">
                    Include five key terms that define the research domain and specific problem
                    area.
                  </li>
                </ul>
                <ul className="space-y-2 text-left text-md font-medium ml-10 font-lora py-2">
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  text-lg py-2 underline">1. INTRODUCTION</h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">
                        Provide a brief overview (not more than one page) that explains the
                        relevance of your resea{' '}
                      </li>
                      <li className="pl-6">Set the context for your study and its objectives. </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  text-lg py-2 underline">2. LITERATURE SURVEY</h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">
                        Present a short history and background of your research area.{' '}
                      </li>
                      <li className="pl-6">
                        Summarize significant work done by other researchers, identifying gaps that
                        your study addresses.{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  text-lg py-2 underline">
                      3. METHODOLOGY/APPROACH
                    </h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">
                        Explain the methodology or approach used to address the research problem.
                      </li>
                      <li className="pl-6">
                        Include details of tools, techniques, or models employed.{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  text-lg py-2 underline">
                      4. RESULT & DISCUSSION
                    </h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">Present the findings of your research.</li>
                      <li className="pl-6">
                        Use tables, graphs, or figures (where applicable) to illustrate results.
                      </li>
                      <li className="pl-6">
                        Compare your results with previous research and provide interpretations.
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  text-lg py-2 underline">5. CONCLUSION</h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6">
                        Summarize the key findings and their implications concisely.
                      </li>
                      <li className="pl-6">
                        Highlight the overall impact or contribution of your research.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  text-lg py-2">V . REFERENCES</h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6 ">Cite all external sources referred to in your paper. </li>
                  <li className="pl-6">
                    Use a standardized referencing style to ensure proper credit to original
                    contributors.
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className="text-2xl text-center pt-10  font-semibold font-Inter underline underline-offset-2">
                C. PAPER PUBLICATION FLOW
              </li>
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
