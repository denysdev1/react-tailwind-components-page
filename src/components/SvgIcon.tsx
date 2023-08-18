type Props = {
  className?: string;
};

export const SvgIcon: React.FC<Props> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M25.9298 8.87334L21.8173 20.1264L17.7048 8.87334H14.8404L20.6101 23.4H23.0244L28.7942 8.87334H25.9298Z"
      fill="#FD5359"
    />
    <path
      d="M4.06451 21.1266L8.17698 9.8736L12.2895 21.1266L15.1539 21.1266L9.38413 6.59999L6.96984 6.59999L1.2001 21.1266L4.06451 21.1266Z"
      fill="#FD5359"
    />
  </svg>
);
