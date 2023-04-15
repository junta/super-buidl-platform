type StatusProps = {
  speed?: string;
  amount?: string;
};

export const Status = ({ speed, amount = "" }: StatusProps) => {
  return (
    <div className="badge badge-outline">
      Payment(Wage): {speed} DAI/hour, Total Paid Amount: {amount} DAI
    </div>
  );
};
