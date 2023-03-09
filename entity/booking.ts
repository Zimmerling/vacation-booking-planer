type Booking = {
  id: string;
  startDate: Date;
  endDate: Date;
  totalCosts: number;
  title: string;
};

type Selection = {
  selectionStart: Date;
  selectionEnd: Date;
};

export { Booking, Selection };
