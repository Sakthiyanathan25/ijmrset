import React from 'react';
import MaleAvatar from '../assets/maleavatar.jpeg';
import FemaleAvatar from '../assets/Femaleavatar.jpeg';

export default function RecentPapers() {
  const list = [
    {
      id: 1,
      img: MaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 1',
    },
    {
      id: 2,
      img: FemaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 2',
    },
    {
      id: 3,
      img: FemaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 3',
    },
    {
      id: 4,
      img: MaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 4',
    },
    {
      id: 5,
      img: MaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 5',
    },
    {
      id: 6,
      img: FemaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 6',
    },
    {
      id: 7,
      img: FemaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 7',
    },
    {
      id: 8,
      img: MaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 8',
    },
    {
      id: 9,
      img: FemaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 9',
    },
    {
      id: 10,
      img: MaleAvatar,
      title: 'Machine Learning Approach to Chronic Kidney Disease Detection 10',
    },
  ];

  return (
    <div
      className="slider py-10 "
      style={{
        '--width': '300px',
        '--height': '350px',
        '--minheight': '400px',
        '--quantity': list.length,
      }}
    >
      <div className="list ">
        {list.map((eachList) => (
          <div
            className="item bg-color py-10 px-2 flex flex-col justify-center items-center gap-5"
            key={eachList.id}
            style={{ '--position': eachList.id }}
          >
            <div className=" bg-cyan-300 h-[100px] w-[100px] rounded-full mx-auto flex justify-center items-center">
              <img src={eachList.img} alt="Avatar" className="mx-auto" />
            </div>

            <h1 className="text-md font-lora text-white text-center">
              {eachList.title}
            </h1>
            <div className="flex gap-2 mt-auto mb-0">
              <button className="bg-white shadow-lg text-black p-3 rounded-md space-y-2 font-semibold font-lora">
                View Paper
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
