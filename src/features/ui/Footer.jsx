import React from 'react';

const Footer = () => {
  return (
    <div className="bg-amber-100 flex items-center justify-between px-8 py-5 sm:flex-row flex-col">
      <div className="font-sm text-sm uppercase mx-3 sm:mr-20 text-nowrap">
        <span className="text-red-600 font-extrabold">18+</span> Bet responsibly
      </div>
      <div className="style text-xs italic sm:max-w-80 md:max-w-2xl font-semibold">
        "To maximize success when using this app, it is recommended to focus on
        playing a single game at a time. Combining multiple games is not
        advised, as it can complicate the staking plan and reduce the
        effectiveness of the strategy."
      </div>
    </div>
  );
};

export default Footer;
