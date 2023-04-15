type StatusProps = {
  speed?: string;
  amount?: string;
};

export const Status = ({ speed, amount = "" }: StatusProps) => {
  return (
    <div className="badge badge-outline">
      speed: {speed}, amount: {amount}
    </div>
  );
};
