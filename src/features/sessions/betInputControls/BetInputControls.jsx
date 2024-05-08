import { useEffect, useState } from 'react';
import Button from '../../ui/Button';

// InputControls component is now independent of the data state
const InputControls = ({
  currentOdd,
  setCurrentOdd,
  currentStatus,
  setCurrentStatus,
  onCalculate,
  onContinuePlaying,
  isValidOdd,
  showContinuePlaying,
  isCalculated,
  continueClicked,
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { width, height } = windowDimensions;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {currentStatus !== 'won' ? (
        <div className=" mt-4 flex   items-center ">
          <input
            className=" border-none outline-none bg-amber-100 rounded-xl py-2 px-4 font-semibold mr-3 sm:w-auto w-24"
            type="number"
            placeholder='Enter odd "e.g 2.00"'
            value={currentOdd}
            onChange={e => setCurrentOdd(e.target.value)}
            required
            step="0.01"
            disabled={isValidOdd && continueClicked}
          />
          <div className=" flex items-center">
            {isValidOdd && currentStatus === '' && (
              <div className=" mr-3">
                <Button
                  type={width > 640 ? 'small' : 'xtraSmall'}
                  onClick={onCalculate}
                >
                  Calculate Bet Amount
                </Button>
              </div>
            )}
            <div>
              {isCalculated && currentStatus === '' && (
                <select
                  className=" rounded-xl px-2 py-1.5 text-[12px] sm:px-4 sm:py-2 sm:text-lg outline-none border-none bg-amber-100"
                  value={currentStatus}
                  onChange={e => setCurrentStatus(e.target.value)}
                >
                  <option value="">Select status</option>
                  <option value="won">Won</option>
                  <option value="loss">Loss</option>
                </select>
              )}
            </div>
            {showContinuePlaying && (
              <div className=" my-4">
                <Button type="small" onClick={onContinuePlaying}>
                  Continue Playing
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className=" uppercase text-green-500 font-bold mt-4">
          Congratulation you won this session. <br />
          You can keep going
        </div>
      )}
    </>
  );
};

export default InputControls;
