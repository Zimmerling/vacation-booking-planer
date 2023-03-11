type Apartment = {
  name: string;
  maxPersons: number;
  color: string;
};

type Booking = {
  id: string;
  preName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
  totalCosts: number;
  persons: number;
  apartment: Apartment;
};

type Item = {
  id: string;
  startDate: Date;
  endDate: Date;
  title: String;
  style: string;
};

type Selection = {
  selectionStart: Date;
  selectionEnd: Date;
};

export { Booking, Selection, Apartment, Item };
