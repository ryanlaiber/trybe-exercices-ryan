const { describe, test, expect } = require('@jest/globals');
const { uppercase, getUserName, getRepos } = require('./exc1');

describe('exercício 1 - toUppercase', () => {
  test('passa para uppercase', (done) => {
    uppercase('Jabuticaba Azul', (str) => {
      expect(str).toBe('JABUTICABA AZUL');
      done();
    })
  })
})

describe('exercício 2 - getUserName', () => {
  test('usuário encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((user) =>{
      expect(user).toBe('Mark');
    });
  })
  test('usuário não encontrado', () => {
    expect.assertions(1);
    return getUserName(1).catch((user) =>{
      expect(user).toEqual({ error: 'User with 1 not found.'});
    });
  })
})

describe('exercício 3 - getUserName async/await', () => {
  test('usuário encontrado async/await', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  })
  test('usuário não encontrado async/await', async () => {
    try{
     await getUserName(1); 
    } catch(error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  })
})

const gitHubUrl = 'https://api.github.com/orgs/tryber/repos';

describe('exercício 4 - getRepos', () => {
  test('contem sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
    const namesList = await getRepos(gitHubUrl);
    expect(namesList).toContain('sd-01-week4-5-project-todo-list');
    expect(namesList).toContain('sd-01-week4-5-project-meme-generator');
  })
})