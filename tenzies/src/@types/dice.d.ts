export type DieProps = {
  isHolding: boolean;
  value: number;
  id: string;
  holdDice: () => void;
};

export type Dice = {
  id: string;
  isHolding: boolean;
  value: number;
};
