export const SvgStar = () => (
  <li className="star-elem" style={{ display: "inline" }}>
    <svg
      fill="#D3BCA2"
      height="28"
      viewBox="0 0 18 18"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
      <path d="M0 0h18v18H0z" fill="none" />
    </svg>
  </li>
);
export const SimpleStarMapper = ({ num }) => (
  <ul className="card-body-stars" style={{ paddingTop: 150, margin: 0 }}>
    {Array(num)
      .fill(0)
      .map((e, i) => (
        <SvgStar key={i} />
      ))}
  </ul>
);

export const Stars = ({ count = 0 }) =>
  count > 0 &&
  count < 6 &&
  typeof count === "number" && <SimpleStarMapper num={count} />;
