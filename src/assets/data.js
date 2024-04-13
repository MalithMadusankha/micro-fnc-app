const NEXT_COLLECTIONS = [
  {
    date: "2024-03-04",
    isOverDue: true,
    amount: 2300,
    jobId: "JOB0005",
  },
  {
    date: "2024-03-10",
    isOverDue: false,
    amount: 1500,
    jobId: "JOB0007",
  },
  {
    date: "2024-03-15",
    isOverDue: false,
    amount: 1000,
    jobId: "JOB0009",
  },
];

export const LEANDING_COLLECTION = [
  {
    lend_date: "2023-12-20",
    close_date: "2024-01-20",
    jobId: "LGN00012",
    type: "monthly",
    rate: 10,
    name: "Jwellery",
    amount: 25000,
    status: "Closed",
    returnTotal: 27500,
    installement: 5500,
    transaction: [
      { date: "2024-01-05", retun: 5500 },
      { date: "2024-02-05", retun: 4000 },
      { date: "2024-03-05", retun: 5000 },
      { date: "2024-04-05", retun: 7000 },
      { date: "2024-05-05", retun: 6000 },
    ],
    creditor: {
      name: "Priyasoma Jayanthi",
      address: "No 02, Eksath Mawatha, Ganemulla",
      mobile: "0712314568",
      home: "0112319568",
      nic: "95575521V",
    },
  },
  {
    lend_date: "2024-02-30",
    close_date: "2024-08-05",
    jobId: "LGN00022",
    type: "monthly",
    rate: 10,
    amount: 15000,
    status: "Open",
    returnTotal: 0,
    installement: 4000,
    transaction: [
      { date: "2024-03-05", retun: 0 },
      { date: "2024-04-05", retun: 0 },
      { date: "2024-05-05", retun: 0 },
      { date: "2024-06-05", retun: 0 },
      { date: "2024-07-05", retun: 0 },
      { date: "2024-08-05", retun: 0 },
    ],
    creditor: {
      name: "Samantha Baddegama",
      address: "No 20, Nadun Mawatha, Ganemulla",
      mobile: "0712314568",
      home: "0112319568",
      nic: "95575521V",
    },
  },
  {
    lend_date: "2024-01-20",
    close_date: "2024-06-20",
    jobId: "LGN00041",
    type: "mothly",
    rate: 10,
    amount: 50000,
    status: "Procrssing",
    returnTotal: 22500,
    installement: 12500,
    transaction: [
      { date: "2024-02-05", retun: 12500 },
      { date: "2024-03-05", retun: 10000 },
      { date: "2024-04-05", retun: 0 },
      { date: "2024-05-05", retun: 0 },
      { date: "2024-06-05", retun: 0 },
      { date: "2024-07-05", retun: 0 },
    ],
    creditor: {
      name: "Naya Kumari",
      address: "No 02, Kandy Road, Kadwatha",
      mobile: "0712314568",
      home: "0112319568",
      nic: "95575521V",
    },
  },
];

export const COLLECTIONS = [
  {
    date: "2024-03-05",
    customer: "Nadeesha Lakmal",
    amount: 2300,
    return: 2000,
    product: "Land",
    collectionId: "COL0005",
  },
  {
    date: "2024-03-10",
    customer: "Danushka Madushan",
    amount: 1500,
    return: 1500,
    product: "Vechicle",
    collectionId: "COL0007",
  },
  {
    date: "2024-03-12",
    customer: "Malith Madusankha",
    amount: 1000,
    return: 800,
    product: "Mobile",
    collectionId: "COL0009",
  },
];

export const INCOME = [
  {
    date: "2024-03-03",
    amount: 230000,
    note: "Sell necklace",
    type: "Jewellery",
    incomeId: "OI00002",
  },
  {
    date: "2024-03-15",
    amount: 150000,
    note: "Sell chain",
    type: "Jewellery",
    incomeId: "OI00007",
  },
  {
    date: "2024-03-20",
    amount: 10000,
    note: "Other thing",
    type: "Other",
    incomeId: "OI00009",
  },
];

export default NEXT_COLLECTIONS;
