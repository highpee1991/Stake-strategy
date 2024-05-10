import React, { useEffect } from 'react';
import SessionBankrollManager from '../../bankroll/SessionBankrollManager';
import { useSelector } from 'react-redux';
import { getBankroll } from '../../bankroll/bankrollslice';
import { useNavigate } from 'react-router-dom';
import BetLogic from '../betLogic/BetLogic';
import TutorialDisplay from '../../strategyTutorial/TutorialDisplay';
import TutorialUI from '../../strategyTutorial/TutorialUI';

const UnitUI = () => {
  const navigate = useNavigate();
  const bankroll = useSelector(getBankroll);

  useEffect(() => {
    if (!bankroll) {
      navigate('/');
    }
  }, [bankroll, navigate]);

  return (
    <>
      <div className=" xl:flex justify-center  lg:my-3">
        <SessionBankrollManager />
        <BetLogic />
      </div>
      <div className=" my-4">
        <TutorialUI />
      </div>
    </>
  );
};

export default UnitUI;
