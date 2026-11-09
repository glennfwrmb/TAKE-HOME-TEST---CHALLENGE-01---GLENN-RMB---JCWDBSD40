'use client';

import { useState } from 'react';

// Data awal domino
const source = [
  [6, 1], [4, 3], [5, 1], [3, 4],
  [1, 1], [3, 4], [1, 2],
];

export default function Home() {
  const [dominoes, setDominoes] = useState<number[][]>(source);

  // Menghitung angka domino yang sama
  const double = dominoes.filter(([a, b]) => a === b).length;

  // Mengurutkan domino dari jumlah terkecil
  const sortAsc = () => {
    setDominoes([...dominoes].sort((a, b) =>
      a[0] + a[1] - (b[0] + b[1]) || a[0] - b[0]
    ));
  };

  // Mengurutkan domino dari jumlah terbesar
  const sortDesc = () => {
    setDominoes([...dominoes].sort((a, b) =>
      b[0] + b[1] - (a[0] + a[1]) || b[0] - a[0]
    ));
  };

  // Membalik angka atas dan bawah
  const flip = () => {
    setDominoes(dominoes.map(([a, b]) => [b, a]));
  };

  // Mengembalikan data awal
  const reset = () => setDominoes(source.map((d) => [...d]));

  const buttons = [
    { label: 'Sort (ASC)', action: sortAsc },
    { label: 'Sort (DESC)', action: sortDesc },
    { label: 'Flip', action: flip },
    { label: 'Reset', action: reset },
  ];

  return (
    <main className="min-h-screen bg-[#0B192C] px-6 py-12 text-orange-500 md:px-40">
      <h1 className="mb-2 text-2xl font-bold">Dominoes</h1>

      {/* Source */}
      <div className="mb-1 min-h-20 rounded bg-yellow-500 p-4 text-black">
        <h2 className="font-bold">Source</h2>
        <p className="break-all">{JSON.stringify(dominoes)}</p>
      </div>

      {/* Double Numbers */}
      <div className="mb-5 min-h-20 rounded bg-yellow-500 p-4 text-black">
        <h2 className="font-bold">Double Numbers</h2>
        <p>{double}</p>
      </div>

      {/* Kartu Domino */}
      <div className="mb-5 flex flex-wrap gap-2">
        {dominoes.map(([a, b], index) => (
          <div key={index} className="flex w-9 flex-col items-center rounded-xl border border-red-600 p-1 py-5">
            <span>{a}</span>
            <div className="my-1 w-full border-t border-green-500" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap gap-2">
        {buttons.map((button) => (
          <button key={button.label} onClick={button.action}
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-black hover:bg-gray-200">
            {button.label}
          </button>
        ))}
      </div>
    </main>
  );
}
