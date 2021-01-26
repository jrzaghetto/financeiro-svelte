import { writable } from "svelte/store";

export const INITIAL_STATE = {
  movies: [],
  wasSearched: false,
};

export const INITIAL_STATE_TRANSACTIONS = [
    {
      description: "Mobile Connection",
      type: "Services",
      card: "**** 0990",
      date: "Today, 12:43",
      amount: "40"
    },
    {
      description: "Nike T-Shirt",
      type: "Shopping",
      card: "**** 1442",
      date: "Today, 15:13",
      amount: "15,87"
    },
    {
      description: "iFood",
      type: "Fast Food",
      card: "**** 1442",
      date: "Today, 18:55",
      amount: "67,87"
    },
    {
      description: "Emily",
      type: "Transfer",
      card: "**** 0990",
      date: "11 Jan, 08:08",
      amount: "250"
    },
    {
      description: "Aaron",
      type: "Transfer",
      card: "**** 1442",
      date: "11 Jan, 08:15",
      amount: "400"
    },
    {
      description: "Julia",
      type: "Transfer",
      card: "**** 0990",
      date: "11 Jan, 13:44",
      amount: "1.158,00"
    },
    {
      description: "iFood",
      type: "Fast Food",
      card: "**** 1442",
      date: "11 Jan, 16:38",
      amount: "45,17"
    },
    {
      description: "Mobile Connection",
      type: "Services",
      card: "**** 0990",
      date: "10 Jan, 16:25",
      amount: "40"
    },
    {
      description: "Nike T-Shirt",
      type: "Shopping",
      card: "**** 1442",
      date: "10 Jan, 19:13",
      amount: "15,87"
    },
    {
      description: "Julia",
      type: "Transfer",
      card: "**** 0990",
      date: "10 Jan, 22:33",
      amount: "1.458,00"
    }
  ];

export const store = writable({ ...INITIAL_STATE });

export const transactions = writable( [...INITIAL_STATE_TRANSACTIONS ]);