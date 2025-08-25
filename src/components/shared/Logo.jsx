import * as React from 'react';

export function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 16.2c-2.4 2.4-5.8 4.3-9 4.3-3.2 0-6.6-1.9-9-4.3" />
      <path d="M20 12.2c-2.4 2.4-5.8 4.3-9 4.3-3.2 0-6.6-1.9-9-4.3" />
      <path d="M4 8.8c2.4 2.4 5.8 4.3 9 4.3 3.2 0 6.6-1.9 9-4.3" />
      <path d="M12 2a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.2-1.8-4-4-4z" />
      <path d="M12.1 6.2c-2.4 2.4-5.8 4.3-9 4.3" />
    </svg>
  );
}
