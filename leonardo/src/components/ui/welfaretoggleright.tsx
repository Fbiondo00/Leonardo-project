import React from 'react';
import welfareImage from '@/assets/welfareison1.png';

const WelfareToggleRight = () => {
  return (
    <div className="fixed top-0 right-0">
      <img src={welfareImage} alt="Welfare is on" className="w-[200px]" />
    </div>
  );


};

export default WelfareToggleRight;
