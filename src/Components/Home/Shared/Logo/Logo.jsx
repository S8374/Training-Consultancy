// Logo Component (separate file)
export function Logo({ size = "md" }) {
  const dimensions = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 }
  };

  return (
    <svg 
      fill="none" 
      height={dimensions[size].height} 
      viewBox="0 0 32 32" 
      width={dimensions[size].width}
      className="text-blue-600 dark:text-blue-400"
    >
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}