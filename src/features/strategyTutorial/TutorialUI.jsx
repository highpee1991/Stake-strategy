import React, { useState } from 'react';
import TutorialDisplay from './TutorialDisplay';
import Button from '../ui/Button';

const TutorialUI = () => {
  const [displayTutorial, setDisplayTutorial] = useState(false);

  const toggleTutorial = () => {
    setDisplayTutorial(pre => !pre);
  };

  return (
    <div className=" mt-3">
      <h1 className="font-bold text-lg uppercase">Strategy Tutorial</h1>

      <div className=" mb-5">
        <Button type="small" onClick={toggleTutorial}>
          {displayTutorial ? 'Hide tutorial' : 'Show tutorial'}
        </Button>
        {displayTutorial && <TutorialDisplay />}
      </div>
    </div>
  );
};

export default TutorialUI;
