import React from 'react';
import leoimg from '@/assets/leonardo.png';

const WelfareToggleLeft = () => {
  return (
    <div className="fixed md:top-4 md:left-4 p-0 m-0 ">
      <img src={leoimg} alt="Welfare is on" className="w-[225px]" />
    </div>
  );


};

export default WelfareToggleLeft;
