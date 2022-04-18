export function MonthToWord(month_num) {
  const months = [
    { Num: 1, Word: "Enero", ShortWord: "Ene." },
    { Num: 2, Word: "Febrero", ShortWord: "Feb." },
    { Num: 3, Word: "Marzo", ShortWord: "Mar." },
    { Num: 4, Word: "Abril", ShortWord: "Abr." },
    { Num: 5, Word: "Mayo", ShortWord: "May." },
    { Num: 6, Word: "Junio", ShortWord: "Jun." },
    { Num: 7, Word: "Julio", ShortWord: "Jul." },
    { Num: 8, Word: "Agosto", ShortWord: "Ago." },
    { Num: 9, Word: "Septiembre", ShortWord: "Sep." },
    { Num: 10, Word: "Octubre", ShortWord: "Oct." },
    { Num: 11, Word: "Noviembre", ShortWord: "Nov." },
    { Num: 12, Word: "Diciembre", ShortWord: "Dic." },
  ];
  let month_word = months.filter((months)=>months.Num===month_num)[0].Word

  return month_word;
}
