type StatusProps = {
  speed?: string;
  amount?: string;
};

export const Status = ({ speed, amount = "" }: StatusProps) => {
  return (
    <div className="badge">
      speed: {speed}, amount: {amount}
    </div>
  );
};
