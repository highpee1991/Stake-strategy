import React, { useEffect } from 'react';
import SessionBankrollManager from '../../bankroll/SessionBankrollManager';
import { useSelector } from 'react-redux';
import { getBankroll } from '../../bankroll/bankrollslice';
import { useNavigate } from 'react-router-dom';
import BetLogic from '../betLogic/BetLogic';

const UnitUI = () => {
  const navigate = useNavigate();
  const bankroll = useSelector(getBankroll);

  useEffect(() => {
    if (!bankroll) {
      navigate('/');
    }
  }, [bankroll, navigate]);

  return (
    <div className="">
      <SessionBankrollManager />
      <BetLogic />
    </div>
  );
};

export default UnitUI;
