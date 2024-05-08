import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const navigate = useNavigate();

  const base =
    'inline-block text-sm rounded-full bg-amber-600 font-semibold uppercase  tracking-widest text-stone-800 transition-colors duration-300 hover:bg-amber-600  focus:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-600 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
    small: base + ' px-4 py-2  md:px-5 md:py-2.5 text-xs',
    xtraSmall: base + ' px-2 py-1.5  text-[9px] whitespace-nowrap',
    rounded: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm rounded-full  font-semibold uppercase  tracking-widest text-stone-400 border-2 border-stone-300 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    back: 'text-sm text-blue-500 hover:text-blue-600 hover:underline',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (to === '-1')
    return (
      <button className={styles[type]} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
