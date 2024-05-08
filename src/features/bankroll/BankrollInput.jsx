import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getBankroll, updateBankroll } from './bankrollslice';
import { useNavigate } from 'react-router-dom';

const BankrollInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bankroll = useSelector(getBankroll);

  const [bankrolInput, setBankrolInput] = useState('');

  useEffect(() => {
    if (bankroll) {
      setBankrolInput(bankroll);
    }
  }, [bankroll]);

  console.log('bankroll', bankrolInput);

  const handleChange = e => {
    setBankrolInput(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const parsedInput = parseFloat(bankrolInput);
    if (parsedInput > 0) {
      dispatch(updateBankroll(parsedInput));
      localStorage.setItem('bankroll', parsedInput);
      setBankrolInput('');
      navigate('/unit');
    } else {
      alert('invalid input');
      setBankrolInput('');
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="my-4 flex justify-center items-center flex-col"
    >
      <div className="text-sm font-medium capitalize pb-3">
        Calculate How much to risk from your Bankroll
      </div>
      <input
        className="appearance-none border border-gray-300 rounded-lg py-2 px-4 mb-3  text-gray-700 leading-tight focus:outline-none focus:border-amber-200 w-[40vw]"
        type="number"
        name="bankrolInput"
        value={bankrolInput !== null ? bankrolInput : ''}
        id="bankrolInput"
        onChange={handleChange}
        placeholder="input your bankroll"
        required
      />
      {!Number(bankrolInput) && Number(bankrolInput < 1) ? (
        ''
      ) : (
        <Button type="small">Calculate</Button>
      )}
    </form>
  );
};

export default BankrollInput;
