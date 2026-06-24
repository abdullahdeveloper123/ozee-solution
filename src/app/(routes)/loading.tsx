export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-yellow-500">
      <svg aria-label="Loading" className="h-24 w-24 animate-spin" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="22"
          fill="none"
          stroke="white"
          strokeDasharray="44 25 44 25"
          strokeLinecap="butt"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
