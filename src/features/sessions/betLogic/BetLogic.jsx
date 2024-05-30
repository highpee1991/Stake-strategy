import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTarget } from '../../bankroll/bankrollslice';
import InputControls from '../betInputControls/BetInputControls';
import Button from '../../ui/Button';
import { resetSessionsWin, sessionsWinCount } from './sessionsWinsSlice';

const BetLogic = () => {
  const initialTarget = useSelector(getTarget);
  const dispatch = useDispatch();

  console.log(initialTarget);

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('betData');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [currentOdd, setCurrentOdd] = useState(() => {
    const savedOdd = localStorage.getItem('currentOdd');
    return savedOdd || '';
  });
  const [currentStatus, setCurrentStatus] = useState('');
  const [winHistory, setWinHistory] = useState([]);
  const [isValidOdd, setIsValidOdd] = useState(false);
  const [showContinuePlaying, setShowContinuePlaying] = useState(false);
  const [isCalculated, setIsCalculated] = useState(() => {
    const savedIsCalculated = localStorage.getItem('isCalculated');
    return savedIsCalculated === 'true';
  });
  const [continueClicked, setContinueClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem('currentOdd', currentOdd);
  }, [currentOdd]);

  useEffect(() => {
    localStorage.setItem('betData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('isCalculated', isCalculated);
  }, [isCalculated]);

  useEffect(() => {
    if (initialTarget !== 0 && data.length === 0) {
      setData([
        {
          target: initialTarget,
          odd: null,
          betAmount: 0,
          profit: 0,
          status: '',
        },
      ]);
    }
  }, [initialTarget, data.length]);

  useEffect(() => {
    const pattern = /^\d+\.\d{2}$/;
    setIsValidOdd(pattern.test(currentOdd));
  }, [currentOdd]);

  useEffect(() => {
    if (isValidOdd) {
      setContinueClicked(true);
    }
  }, [isValidOdd]);

  useEffect(() => {
    if (currentStatus === 'loss') {
      setShowContinuePlaying(true);
    } else {
      setShowContinuePlaying(false);
    }
  }, [currentStatus]);

  useEffect(() => {
    if (currentStatus !== '') {
      confirmStatus(currentStatus, data.length - 1);
    }
  }, [currentStatus]);

  // generate unique ID
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  // Add unique IDs to history entries if they don't already have them
  const historyEntriesWithIds = data.map(entry => ({
    ...entry,
    id: entry.id || generateUniqueId(),
  }));

  const calculateBetAmount = () => {
    if (currentOdd !== '' && !isNaN(currentOdd)) {
      const lastEntry = data[data.length - 1];
      const newBetAmount =
        Math.round((lastEntry.target / (parseFloat(currentOdd) - 1)) * 100) /
        100;
      setData(
        data.map((entry, index) =>
          index === data.length - 1
            ? { ...entry, odd: parseFloat(currentOdd), betAmount: newBetAmount }
            : entry,
        ),
      );
      setIsCalculated(true);
    }
  };

  const confirmStatus = (status, index) => {
    setData(prevData => {
      const newData = [...data];
      const profit =
        status === 'won' ? newData[0].target : -newData[index].betAmount;
      newData[index] = { ...newData[index], status, profit };
      return newData;
    });
    setIsCalculated(true);
  };

  const resetInputFields = () => {
    setCurrentOdd('');
    setCurrentStatus('');
    setIsValidOdd(false);
    setShowContinuePlaying(false);
    setIsCalculated(false);
    setContinueClicked(false);
  };

  const continuePlaying = () => {
    setData(prevData => {
      const lastEntry = prevData[prevData.length - 1];
      const newTarget =
        lastEntry.target +
        (lastEntry.status === 'loss' ? lastEntry.betAmount : 0);
      return [
        ...prevData,
        { target: newTarget, odd: null, betAmount: 0, profit: 0, status: '' },
      ];
    });
    resetInputFields();
  };

  const startNewsession = () => {
    if (currentStatus === 'won') {
      dispatch(sessionsWinCount());
      const newWinHistory = [...winHistory, data[data.length - 1]];
      localStorage.setItem('winHistory', JSON.stringify(newWinHistory));
      setWinHistory(newWinHistory);
      const newSessionData = [
        {
          target: initialTarget,
          odd: null,
          betAmount: 0,
          profit: 0,
          status: '',
        },
      ];
      setData(newSessionData);
      localStorage.setItem('betData', JSON.stringify(newSessionData));
      setCurrentOdd('');
      setCurrentStatus('');
      setIsCalculated(false);
    }
  };

  const deleteLastentry = () => {
    if (data.length > 1) {
      setData(data.slice(0, -1));
    }
  };

  const reset = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmReset = confirm('Are you sure you want to reset ?');

    if (confirmReset) {
      const initialData = [
        {
          target: initialTarget,
          odd: null,
          betAmount: 0,
          profit: 0,
          status: '',
        },
      ];
      setData(initialData);
      localStorage.setItem('betData', JSON.stringify(initialData));
      resetInputFields();
      dispatch(resetSessionsWin());
    }
  };

  return (
    <div>
      <InputControls
        currentOdd={currentOdd}
        setCurrentOdd={setCurrentOdd}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
        onCalculate={calculateBetAmount}
        onContinuePlaying={continuePlaying}
        isValidOdd={isValidOdd}
        showContinuePlaying={showContinuePlaying}
        isCalculated={isCalculated}
        continueClicked={continueClicked}
      />
      {currentStatus === 'won' && (
        <div className=" my-3">
          <Button type="small" onClick={startNewsession}>
            Start New Session
          </Button>
        </div>
      )}

      <div className=" my-3 border-amber-100 py-6 px-2 bg-amber-100 max-w-lg ">
        <table className=" ">
          <thead>
            <tr>
              <th className=" pr-4 md:pr-8">Target</th>
              <th className=" pr-4 md:pr-8">Odd</th>
              <th className=" pr-4 md:pr-8">Bet Amount</th>
              <th className=" pr-4 md:pr-8">Profit</th>
              <th>Win/Loss</th>
            </tr>
          </thead>
          <tbody className="">
            {historyEntriesWithIds.map(entry => (
              <tr key={entry.id} className=" mb-5">
                <td className=" pr-8">
                  {Math.round(entry.target * 100) / 100}
                </td>
                <td className=" pr-8">{entry.odd}</td>
                <td className=" pr-8">
                  {Math.round(entry.betAmount * 100) / 100}
                </td>
                <td className=" pr-8">{entry.profit}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" flex my-3">
        <div className=" mr-4">
          <Button type="small" onClick={deleteLastentry}>
            Delete
          </Button>
        </div>
        <div>
          <Button type="small" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BetLogic;
