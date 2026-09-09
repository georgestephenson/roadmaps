export default function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button 
        type="button"
        className="counter"
        onClick={onClick}>
      Clicked {count} times
    </button>
  );
}