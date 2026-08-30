export default function Sparkline() {
  return (
    <svg
      viewBox="0 0 80 30"
      className="h-6 w-20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <polyline points="2,26 16,20 30,22 44,12 58,14 78,2" />
      <circle cx="78" cy="2" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
