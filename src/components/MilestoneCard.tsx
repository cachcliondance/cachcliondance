import React, { useState, useEffect } from 'react';
import MilestoneCheckbox from './MilestoneCheckbox';
import MilestoneLog from './MilestoneLog';

interface MilestoneCardProps {
    className?: string; 
    milestone: string;
}

const MilestoneCard : React.FC<MilestoneCardProps> = ({ className , milestone}) => {
  const [date, setDate] = useState<string>('');
  const[note, setNote] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleNoteSubmit = (submittedNote: string, submittedDate: string) => {
    setNote('Notes: ' + submittedNote);  // Update the note when submitted from MilestoneLog
    setDate(submittedDate);
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <MilestoneCheckbox onNoteSubmit={handleNoteSubmit} />
        <h1>Milestone: {milestone}</h1>
      </div>
      <p>Acheived On:<br></br>{date || "Not yet achieved"}</p>
      <p>{note}</p>
    </div>
  );
}

export default MilestoneCard;