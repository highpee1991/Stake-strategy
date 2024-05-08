import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import { getBankroll } from '../bankroll/bankrollslice';

const Home = () => {
  const bankroll = useSelector(getBankroll);
  return (
    <div className="flex flex-col items-center text-xs py-3 md:text-sm">
      <div>
        <div className="text-amber-600 font-semibold text-xl">
          {' '}
          Quick Start Guide to{' '}
          <span className="text-amber-800 font-extrabold">
            StrategyStake V1
          </span>{' '}
        </div>

        <div className="py-2">
          Welcome to StrategyStake! This quick tutorial will help you get
          started with our sports strategy app in no time.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 1: Set Up Your Bankroll</p>
          Enter the amount of money you have available for betting. The app will
          divide it into units. The app will suggest the target amount per unit
          based on your bankroll.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 2: Choose Your Game</p>
          Select a game with (odds between 2 and 4) prefarably a single game.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 3: Determine Your Target</p>
          Decide on the amount you want to win for each bet. This will be your
          target amount and it will be suggested by the app.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 4: Calculate Your Bet</p>
          Use the app to calculate the amount you need to bet to achieve your
          target.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 5: Place Your Bet</p>
          Once calculated, place your bet on your selected game.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 6: Track Your Progress</p>
          Keep a record of your wins and losses using the logging sheet
          provided. Follow the staking plan guidelines for adjusting your target
          and bet amounts based on your outcomes.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 7: Stay Focused</p>
          To maximize success, stick to betting on a single game at a time.
          Combining games is not recommended.
        </div>

        <div className="py-2">
          <p className="text-amber-700">Step 8: Enjoy the Results</p>
          Watch as your bankroll grows with each successful bet using our proven
          strategy! That's it! You're now ready to start using StrategyStake and
          increase your winnings with confidence. Happy betting!
        </div>
      </div>

      <div className="pt-4">
        {bankroll && bankroll !== '' ? (
          <Button type="primary" to="/unit">
            Move to unit
          </Button>
        ) : (
          <Button type="primary" to="/calculate/bankroll">
            Get started
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
