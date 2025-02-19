import React from "react";

const ChildWelfareCard = ({ data }) => {
  return (
    <>
      <div className='content grid5 mtop'>
        {data.map((item, index) => (
          <div className='box' key={index}>
            <img src={item.cover} alt='' />
            <h4>{item.name}</h4>
            <label>{item.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChildWelfareCard;
