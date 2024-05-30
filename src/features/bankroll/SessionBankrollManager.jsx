import React, { useEffect } from 'react';
import { dividbank, targetPerSession } from '../utils/bankrolldivision';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBankroll,
  getTarget,
  getdividedBankroll,
  updateDividedBankroll,
  updateTarget,
} from './bankrollslice';
import { formatCurrency } from '../utils/helper';
import Button from '../ui/Button';
import {
  getSessionWins,
  sessionsWinCount,
} from '../sessions/betLogic/sessionsWinsSlice';

const SessionBankrollManager = () => {
  const bankroll = useSelector(getBankroll);
  const sessionWins = useSelector(getSessionWins);
  const targetPerSessions = useSelector(getTarget);
  const dividedbankroll = useSelector(getdividedBankroll);
  const dispatch = useDispatch();

  useEffect(() => {
    const newDividedBankroll = dividbank(bankroll);
    const newTargetPerSessions = targetPerSession(newDividedBankroll);
    dispatch(updateDividedBankroll(newDividedBankroll));
    dispatch(updateTarget(newTargetPerSessions));
  }, [bankroll, dispatch]);

  useEffect(() => {
    const storedSessionWins = localStorage.getItem('sessionWins');
    if (storedSessionWins) {
      dispatch(sessionsWinCount(parseFloat(storedSessionWins)));
    }
  }, [dispatch]);

  const backButton = bankroll > 0 && (
    <Button to={-1} type="back">
      &larr; Go back
    </Button>
  );

  if (bankroll < 1) {
    return <div>Please add funds to your bankroll to manage sessions.</div>;
  }

  return (
    <div className=" lg:mx-5 ">
      <div className=" mt-3 mb-1 flex items-center">
        {backButton}
        <div className=" ml-6">
          <Button type="back" to="/calculate/bankroll">
            &larr; Move to bankroll
          </Button>
        </div>
      </div>

      <div className="bg-amber-100 py-4 px-4 mt-3 md:w-[35rem]">
        <div className="font-semibold text-amber-800">
          Your bankroll is{' '}
          <span className="text-amber-950">{formatCurrency(bankroll)}</span>
        </div>
        <div className="font-semibold text-amber-800">
          You can only risk total of{' '}
          <span className="text-red-600">
            {formatCurrency(dividedbankroll)}
          </span>{' '}
          per Session
        </div>
        <div className="font-semibold text-amber-800">
          Your Target per session is
          <span className=" text-green-500">
            {' '}
            {formatCurrency(targetPerSessions)}
          </span>
        </div>
        <div className=" text-blue-500">
          Session won: <span className=" font-bold">{sessionWins}</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default SessionBankrollManager;
