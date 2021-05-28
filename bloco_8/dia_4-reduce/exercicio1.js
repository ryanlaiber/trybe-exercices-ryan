// 1-------------
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce( (acc, curr) => acc.concat(curr) );
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// 2-3-4-array------------
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2---------------------------
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const pushName = (acc, curr) => {
      return `${acc + curr.author.name}, `
  };
  return books.reduce(pushName, '' ).slice(0, -2) + '.';
};

assert.strictEqual(reduceNames(), expectedResult);

// 3-----------------------------------
const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const somaIdade = (acc, curr) => acc + (curr.releaseYear - curr.author.birthYear) ;
  return books.reduce(somaIdade, 0)/books.length ;
};

assert.strictEqual(averageAge(), expectedResult3);

// 4------------------------------------
function longestNamedBook() {
    // escreva seu código aqui
    const comparaNomes = (acc, curr) => {
        if ( acc.name.length > curr.name.length ) {
            return acc;
        }
        return curr;
    };

    return books.reduce(comparaNomes).name ;
};
  


// 5---------------------------
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.map( (element) => element.toLowerCase().split('a').length - 1 ).reduce( (acc, curr) => acc + curr ) ;
}

assert.deepStrictEqual(containsA(), 20);

// 6---------------------------------
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const media = grades.map( (element) => element.reduce( (acc, curr) => acc + curr ) / element.length ) ;
  const listaEstudantes = (element, elementIndex) => { return {name: element, average: media[elementIndex]} };
  return students.map(listaEstudantes);
};

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);