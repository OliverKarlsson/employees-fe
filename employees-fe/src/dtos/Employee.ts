interface Employee {
  name: string;
  email: string;
  phoneNumber: string | null;
  office: string | null;
  manager: string | null;
  orgUnit: string;
  // string of HTML
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
  published: boolean;
  primaryRole: string | null;
  secondaryRole: string | null;
  area: string | null;
}

export default Employee;
