type StatusProps = {
  speed?: string;
  amount?: string;
};

export const Status = ({ speed, amount = "" }: StatusProps) => {
  return (
    <div className="badge badge-outline">
      current speed of payment: {speed} eth/min, amount of payment: {amount} eth
    </div>
  );
};
