function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="https://www.w3.org/TR/SVG2/"
			width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            {/* Brain shape - left hemisphere */}
            <path d="M8 3a4 4 0 0 0-4 4v2H3a3 3 0 0 0 0 6h1v2a4 4 0 0 0 4 4" />
            {/* Brain shape - right hemisphere */}
            <path d="M16 3a4 4 0 0 1 4 4v2h1a3 3 0 0 1 0 6h-1v2a4 4 0 0 1-4 4" />
            {/* Neuron nodes */}
            <circle cx="8" cy="10" r="1" />
            <circle cx="16" cy="10" r="1" />
            <circle cx="8" cy="14" r="1" />
            <circle cx="16" cy="14" r="1" />
            {/* Connections (synapses) */}
            <line x1="8" y1="11" x2="8" y2="13" />
            <line x1="16" y1="11" x2="16" y2="13" />
		</svg>
	);
}
function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="https://www.w3.org/TR/SVG2/"
			width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="2" x2="10" y2="22" />
		</svg>
	);
}

function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="https://www.w3.org/TR/SVG2/"
			width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M12 2L4 5v6c0 5.25 3.5 10 8 11 4.5-1 8-5.75 8-11V5l-8-3z" />
            <rect x="9" y="11" width="6" height="5" rx="1" ry="1" />
            <path d="M10 11V9a2 2 0 1 1 4 0v2" />
		</svg>
	);
}

function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="https://www.w3.org/TR/SVG2/"
			width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            {/* Mobile phone outline */}
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            {/* Phone screen bottom button */}
            <line x1="12" y1="18" x2="12" y2="18" />
            
            {/* Code brackets inside the phone */}
            <polyline points="9 8 7 12 9 16" />
            <polyline points="15 8 17 12 15 16" />
		</svg>
	);
}

function ExtraSkillIcon(props) {
	return (
		<svg
			{...props}
			xmlns="https://www.w3.org/TR/SVG2/"
			width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head - virtual assistant */}
      <circle cx="12" cy="7" r="4" />

      {/* Shoulders / body */}
      <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />

      {/* Gear symbol for digital tools */}
      <circle cx="19" cy="5" r="2" />
      <line x1="19" y1="1" x2="19" y2="3" />
      <line x1="19" y1="7" x2="19" y2="9" />
      <line x1="16.5" y1="5" x2="14.5" y2="5" />
      <line x1="21.5" y1="5" x2="23.5" y2="5" />

      {/* Message box / chat bubble */}
      <path d="M4 12h6l2 2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2z" />
		</svg>
	);
}


export {
  ActivityIcon,
  CodepenIcon,
  WebhookIcon,
  MobileIcon,
  ExtraSkillIcon,
};