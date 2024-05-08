import React from 'react';
import logo from '../../images/strategy.png';
import Button from './Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 bg bg-amber-100">
      <div className="">
        <Button to="/">
          <img src={logo} alt="logo px-0" className="h-[5rem]" />
        </Button>
      </div>
      <div className="hidden md:block">Welcome TI</div>
    </header>
  );
};

export default Header;
