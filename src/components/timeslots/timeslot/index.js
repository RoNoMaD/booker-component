import { h } from 'preact';

export default function TimeSlot({ slot, onSlotClick }) {
  const onClick = () => {
    onSlotClick(slot);
  };
  return (
    <button onClick={onClick}>
      {new Date(slot.startDateTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}
    </button>
  );
}
