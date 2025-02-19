import React from "react";
import Heading from "../../common/Heading";
import "./ChildWelfare.css"; // Ensure this file is correctly linked

const childWelfareData = [
  { cover: "path/to/icon1.png", name: "Active Cases", total: "1500" },
  { cover: "path/to/icon2.png", name: "Children Found", total: "1200" },
  { cover: "path/to/icon3.png", name: "Monthly Progress", total: "75%" },
  { cover: "path/to/icon4.png", name: "New Cases", total: "50" },
];

const ChildWelfare = () => {
  return (
    <>
      <section className='child-welfare background'>
        <div className='container'>
          <Heading title='Child Welfare Committee' subtitle='Our Efforts and Achievements' />

          <div className='content grid5 mtop'>
            {childWelfareData.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <h4>{item.name}</h4>
                <label>{item.total}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildWelfare;
