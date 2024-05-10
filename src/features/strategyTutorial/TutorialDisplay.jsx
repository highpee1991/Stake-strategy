import React, { useState } from 'react';
import Button from '../ui/Button';
import VirtualTutorial from './VirtualTutorial';
import OverTwoTutorial from './OverTwoTutorial';

const TutorialDisplay = () => {
  const [tutorialLogicId, setTutorialLogicId] = useState(null);

  const tutorialData = [
    { id: 'a', header: 'Virtual', content: <VirtualTutorial /> },
    { id: 'b', header: 'Over 2.5', content: <OverTwoTutorial /> },
  ];

  const handleTutorialClick = id => {
    setTutorialLogicId(id); // Set the ID of the clicked tutorial
  };

  return (
    <>
      <div className="flex flex-col py-2">
        <div className="flex">
          {tutorialData.map(data => (
            <div key={data.id} onClick={() => handleTutorialClick(data.id)}>
              <div className=" mr-3">
                <Button type="smaller">{data.header}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        {/* Conditionally render the content based on the tutorialLogicId */}
        {tutorialData.find(data => data.id === tutorialLogicId)?.content}
      </div>
    </>
  );
};

export default TutorialDisplay;
