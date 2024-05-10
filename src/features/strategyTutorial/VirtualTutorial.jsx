import React from 'react';

const VirtualTutorial = () => {
  return (
    <div>
      <h1 className=" font-bold">Virtual Draw Pick</h1>
      <div className=" py-3">
        <h4 className=" font-semibold">Drawing on Season Statistics:</h4>
        <p>
          Given that most teams tend to conclude their season with approximately
          25% of draws or at least 5 draws, We will seek out a team that:
          Registers 0, 1, or 2 draws by the end of the 17th week. Lower draw
          counts are preferred.
        </p>
      </div>

      <div className=" py-3">
        <h4 className=" font-semibold">Standing Considerations: </h4>
        <p>
          The selected team should neither rank in the top four nor the bottom
          four positions of the league standings.
        </p>
      </div>

      <div className=" py-3">
        <h4 className=" font-semibold">Avoiding Powerhouses: </h4>
        <p>
          It's advisable to avoid selecting teams with significant strengths
          like Arsenal, Manchester United, Liverpool, Chelsea, Manchester City,
          or Tottenham. These teams typically perform exceptionally well and are
          more likely to conclude the season with only 5 draws. This
          recommendation holds true across various leagues.
        </p>
      </div>

      <div className=" py-3">
        <h4 className=" font-semibold">Effective Selection Criteria: </h4>
        <p>
          These three guidelines prove to be effective when choosing the team
          for implementation within this system.
        </p>
      </div>

      <div className=" py-3">
        <h4 className=" font-semibold">Timing Note: </h4>
        <p>
          Timing Note: The 17th week will commence approximately every XX:25 (25
          minutes past each hour).
        </p>
      </div>
    </div>
  );
};

export default VirtualTutorial;
