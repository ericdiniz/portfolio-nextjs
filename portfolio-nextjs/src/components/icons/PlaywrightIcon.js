const PlaywrightIcon = ({ size = 40, color = "#000000" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <rect width="256" height="256" rx="60" fill="white" />
            <path
                d="M128 40c-45 0-76 32-76 72 0 31 18 56 42 69-6 7-12 18-16 29-3 8 3 17 12 17 8 0 14-6 14-13 0-4-2-8-6-10 3-8 7-15 12-21 11 4 23 6 35 6 45 0 76-32 76-72 0-40-31-72-76-72zm0 16c37 0 60 26 60 56 0 31-23 56-60 56-37 0-60-25-60-56 0-30 23-56 60-56z"
                fill={color}
            />
            <circle cx="94" cy="102" r="14" fill="white" />
            <circle cx="162" cy="102" r="14" fill="white" />
            <path
                d="M94 112c-4 0-8 4-8 8 0 5 4 8 8 8s8-3 8-8c0-4-4-8-8-8zm68 0c-4 0-8 4-8 8 0 5 4 8 8 8s8-3 8-8c0-4-4-8-8-8z"
                fill={color}
            />
        </svg>
    );
};

export default PlaywrightIcon;
