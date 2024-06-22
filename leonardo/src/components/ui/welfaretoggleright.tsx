import React from 'react';
import welfareImage from '@/assets/welfareison.png';

const WelfareToggleRight = () => {
  return (
    <div className="fixed top-0 right-0 p-4">
      <img src={welfareImage} alt="Welfare is on" className="w-32" />
    </div>
  );


};

export default WelfareToggleRight;
