import { useState } from 'react';
import DOC_GIF from '../assets/doc.gif';

export default function IssuesSection() {
  const [currentIssue, setCurrentIssue] = useState('2024');
  const [currentSpecialIssue, setSpecialCurrentIssue] = useState('2024');

  const issues = {
    2024: [
      { id: 1, issue: 'VOLUME 7, ISSUE 1, JANUARY 2024' },
      { id: 2, issue: 'VOLUME 7, ISSUE 2, FEBRUARY 2024' },
      { id: 3, issue: 'VOLUME 7, ISSUE 3, MARCH 2024' },
      { id: 4, issue: 'VOLUME 7, ISSUE 4, APRIL 2024' },
      { id: 5, issue: 'VOLUME 7, ISSUE 5, MAY 2024' },
      { id: 6, issue: 'VOLUME 7, ISSUE 6, JUNE 2024' },
      { id: 7, issue: 'VOLUME 7, ISSUE 7, JULY 2024' },
      { id: 8, issue: 'VOLUME 7, ISSUE 8, AUGUST 2024' },
      { id: 9, issue: 'VOLUME 7, ISSUE 9, SEPTEMBER 2024' },
      { id: 10, issue: 'VOLUME 7, ISSUE 10, OCTOBER 2024' },
      { id: 11, issue: 'VOLUME 7, ISSUE 11, NOVEMBER 2024' },
    ],

    2023: [
      { id: 12, issue: 'VOLUME 6, ISSUE 1, JANUARY 2023' },
      { id: 13, issue: 'VOLUME 6, ISSUE 2, FEBRUARY 2023' },
      { id: 14, issue: 'VOLUME 6, ISSUE 3, MARCH 2023' },
      { id: 15, issue: 'VOLUME 6, ISSUE 4, APRIL 2023' },
      { id: 16, issue: 'VOLUME 6, ISSUE 5, MAY 2023' },
      { id: 17, issue: 'VOLUME 6, ISSUE 6, JUNE 2023' },
      { id: 18, issue: 'VOLUME 6, ISSUE 7, JULY 2023' },
      { id: 19, issue: 'VOLUME 6, ISSUE 8, AUGUST 2023' },
      { id: 20, issue: 'VOLUME 6, ISSUE 9, SEPTEMBER 2023' },
      { id: 21, issue: 'VOLUME 6, ISSUE 10, OCTOBER 2023' },
      { id: 22, issue: 'VOLUME 6, ISSUE 11, NOVEMBER 2023' },
      { id: 23, issue: 'VOLUME 6, ISSUE 12, DECEMBER 2023' },
    ],

    2022: [
      { id: 24, issue: 'VOLUME 5, ISSUE 1, JANUARY 2022' },
      { id: 25, issue: 'VOLUME 5, ISSUE 2, FEBRUARY 2022' },
      { id: 26, issue: 'VOLUME 5, ISSUE 3, MARCH 2022' },
      { id: 27, issue: 'VOLUME 5, ISSUE 4, APRIL 2022' },
      { id: 28, issue: 'VOLUME 5, ISSUE 5, MAY 2022' },
      { id: 29, issue: 'VOLUME 5, ISSUE 6, JUNE 2022' },
      { id: 30, issue: 'VOLUME 5, ISSUE 7, JULY 2022' },
      { id: 31, issue: 'VOLUME 5, ISSUE 8, AUGUST 2022' },
      { id: 32, issue: 'VOLUME 5, ISSUE 9, SEPTEMBER 2022' },
      { id: 33, issue: 'VOLUME 5, ISSUE 10, OCTOBER 2022' },
      { id: 34, issue: 'VOLUME 5, ISSUE 11, NOVEMBER 2022' },
      { id: 35, issue: 'VOLUME 5, ISSUE 12, DECEMBER 2022' },
    ],

    2021: [
      { id: 36, issue: 'VOLUME 4, ISSUE 1, JANUARY 2021' },
      { id: 37, issue: 'VOLUME 4, ISSUE 2, FEBRUARY 2021' },
      { id: 38, issue: 'VOLUME 4, ISSUE 3, MARCH 2021' },
      { id: 39, issue: 'VOLUME 4, ISSUE 4, APRIL 2021' },
      { id: 40, issue: 'VOLUME 4, ISSUE 5, MAY 2021' },
      { id: 41, issue: 'VOLUME 4, ISSUE 6, JUNE 2021' },
      { id: 42, issue: 'VOLUME 4, ISSUE 7, JULY 2021' },
      { id: 43, issue: 'VOLUME 4, ISSUE 8, AUGUST 2021' },
      { id: 44, issue: 'VOLUME 4, ISSUE 9, SEPTEMBER 2021' },
      { id: 45, issue: 'VOLUME 4, ISSUE 10, OCTOBER 2021' },
      { id: 46, issue: 'VOLUME 4, ISSUE 11, NOVEMBER 2021' },
      { id: 47, issue: 'VOLUME 4, ISSUE 12, DECEMBER 2021' },
    ],

    2020: [
      { id: 48, issue: 'VOLUME 3, ISSUE 1, JANUARY 2020' },
      { id: 49, issue: 'VOLUME 3, ISSUE 2, FEBRUARY 2020' },
      // Add remaining issues for 2020...
    ],

    2019: [
      { id: 60, issue: 'VOLUME 2, ISSUE 1, JANUARY 2019' },
      { id: 61, issue: 'VOLUME 2, ISSUE 2, FEBRUARY 2019' },
      // Add remaining issues for 2019...
    ],

    2018: [
      { id: 72, issue: 'VOLUME 1, ISSUE 1, JANUARY 2018' },
      { id: 73, issue: 'VOLUME 1, ISSUE 2, FEBRUARY 2018' },
    ],
  };

  const specialIssues = {
    2024: [
      { id: 99, issue: 'NCISTMBM 2024' },
      { id: 100, issue: 'ICRDET 2024' },
      { id: 101, issue: 'ICIT 2024' },
      { id: 102, issue: 'NCMREI 2024' },
    ],
  };

  const IssueList = ({ issues }) => {
    const initialVisibleCount = 4;

    const displayedIssues =
      issues.length < initialVisibleCount ? issues : issues.slice(0, initialVisibleCount);

    return (
      <ul className="flex flex-col gap-4 py-4 min-h-32 pl-[5%]">
        {displayedIssues.map(({ id, issue }) => (
          <li key={id} className="flex  items-center">
            <img src={DOC_GIF} alt="document gif" className="w-[100px] h-[30px] object-cover" />
            <p className="pt-2 -translate-x-6 text-black font-Libre_Baskerville ">{issue}</p>
          </li>
        ))}
        <li className="pt-2 pl-[50px] font-medium text-black font-Libre_Baskerville">
          View More ...
        </li>
      </ul>
    );
  };

  const YearButtons = ({ years, onClick }) => (
    <ul className="flex gap-5 my-6 justify-center items-center flex-wrap">
      {years.map((year) => (
        <li key={year}>
          <button
            className="bg-[#000080] py-2 px-3 rounded-md text-white text-lg font-medium"
            onClick={() => onClick(year)}
          >
            {year}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1 className="py-5 font-lora text-xl font-semibold text-center">
        Note: Last Date of Submission is <br />{' '}
        <span className="underline-offset-2 underline">DECEMBER 30 @2024</span>
      </h1>
      <div className="flex justify-center items-center gap-6">
        {/* Main Issues Section */}

        <div className="w-[50%] bg-white/25  rounded-xl shadow-xl min-h-[370px]  border-black my-5 px-5">
          <h1 className="text-black font-lora text-xl font-semibold text-center">CURRENT ISSUES</h1>
          <YearButtons years={Object.keys(issues)} onClick={(year) => setCurrentIssue(year)} />
          <IssueList issues={issues[currentIssue] || []} />
        </div>

        <div className="w-[30%] ">
          <div className="bg-white/25 rounded-xl shadow-xl min-h-[370px]  ">
            <h1 className="text-black font-lora text-xl font-semibold text-center">
              SPECIAL ISSUES
            </h1>
            <YearButtons
              years={Object.keys(specialIssues)}
              onClick={(year) => setSpecialCurrentIssue(year)}
            />
            <IssueList issues={specialIssues[currentSpecialIssue] || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
