import React from 'react';
import welfareImage from '@/assets/welfareison1.png';

const WelfareToggleRight = () => {
  return (
    <div className="fixed top-6 right-4 opacity-70">
      <img src={welfareImage} alt="Welfare is on" className="w-[175px]" />
    </div>
  );


};

export default WelfareToggleRight;
