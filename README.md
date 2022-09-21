# Iniciando projeto de testes com TDD

Flavio Milani

## Tópicos:

<!--ts-->
   * [Introdução ao TDD ](#Introducao)
      * [O que é TDD?](#O-que-TDD)
      * [Abordagem Tradicional Vs TDD](#Abordagem)
      * [Ciclo de TDD](#Ciclo)
   * [Frameworks TDD para JavaScript / Node](#Frameworks)
   * [Pirâmide de Testes](#Piramide)
   * [Iniciar projeto com TDD](#iniciar-projeto)
      * [Uso de comando de execução](#comandos)
      * [Testes de Unidade (Testes Unitários)](#Teste-de-Unidade)
      * [Padrão Triple A (Arrange, Act, Assert)](#Padrao-Triple)
      * [Cobertura de Testes (Coverage)](#Cobertura-Testes)
      * [Teste de Integração](#Teste-Integracao)
      * [Teste de Ponta a Ponta (e2e)](#Teste-e2e)
   * [Demonstrações de cada teste](#Demonstracoes)
<!--te-->

### <h2 id="Introducao">Introdução ao TDD</h2>

Entender como iniciar um projeto TDD, como garantir qualidade de software e códigos limpos, 
conceitos de testes unitários, compreender como implementar e rodar os testes em funcionamento, 
com o resultado esperado ou erros gerados no relatório.

<img style="width: 250px" src="https://feminitech.files.wordpress.com/2017/04/testing-finding-bug.png" alt="Testando e encontrando o bug com uso de lupa em frente do monitor de PC" />

### <h2 id="O-que-TDD">O que é TDD?</h2>

TDD significa <strong>Desenvolvimento Orientado por Testes</strong> (<i>Test Driven Development</i>), e trata-se de uma prática de desenvolvimento de software onde a codificação das funcionalidades começa a partir da escrita de testes unitários. 

Essa técnica foi criada por Kent Beck e é um dos pilares do XP (Extreme Programming).

### <h2 id="Abordagem">Abordagem Tradicional Vs TDD</h2>

<img src="https://miro.medium.com/max/1010/1*CNyX4rGOg3cjYBW6wpMtDQ.png" alt="acabamos tendo feedbacks muito mais rápidos, podendo trabalhar com ciclos muito menores entre as alterações durante o desenvolvimento do nosso projeto." />

### <h2 id="Ciclo">Ciclo de TDD</h2>

<strong>Red</strong>: escreva um pequeno teste automatizado que, ao ser executado, irá falhar;

<strong>Green</strong>: implemente um código que seja suficiente para ser aprovado no teste recém-escrito;

<strong>Refactor</strong>: refatore o código, a fim dele ser melhorado, deixando-o mais funcional e mais limpo.

<img style="width: 450px" src="https://dkrn4sk0rn31v.cloudfront.net/2019/11/04105020/img-tdd.png" alt="Ciclo de TDD - 1. RED - Escreva um teste que falhe. 2. GREEN - Faça o código funcionar. 3 - REFACTOR - Elimine redundância." />

### <h2 id="Frameworks">Frameworks TDD para JavaScript / Node</h2>

<span>
<img style="width: 125px;" src="https://96renato96.files.wordpress.com/2014/10/javascript-logo-png1.png" alt="Logo JavaScript - JS" />
</span>
<span>
<img style="width: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Logo Nodejs" /></span>
<span>
<img style="width: 200px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1K6LjEl4837ZWdIafl4HciVd3hEZMGqr5CxCI-BrAgvW8l3K4CU0ONlOkoeH2MWcrIw&usqp=CAU" alt="Logo Jest" /></span>
<span>
<img style="width: 150px;" src="https://camo.githubusercontent.com/fcca6a233a54a037861c99ab17d255d215807e6c0fcdce7d16a1a67814ede820/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3333383935382f696d616765732f313439363334352f7375706572746573742e706e67" alt="Logo Supertest" /></span>
<span>
<img style="width: 250px;" src="https://www.kindpng.com/picc/m/16-164468_cypress-io-logo-hd-png-download.png" alt="Logo Cypress" /></span>

### <h2 id="Piramide">Pirâmide de Testes</h2>

<img src="https://miro.medium.com/max/640/1*S0yR438zKtJtEEBldSviFA.png" alt="A função da pirâmide de testes é basicamente definir níveis de testes e te dar um norte quanto à quantidade de testes que você deveria ter em cada um desses níveis" />

No topo da pirâmide, temos os testes de ponta a ponta (end to end ou e2e, pra resumir). O objetivo deles é imitar o comportamento do usuário final nas nossas aplicações (seja ele uma pessoa, uma api, ou qualquer outro tipo de cliente).

Na base, temos os testes de unidade, onde verificamos o funcionamento da menor unidade de código testável da nossa aplicação.

Entre essas duas camadas, temos os testes de integração. A ideia deles é verificar se um conjunto de unidades se comporta da maneira correta, só que de forma menos abrangente do que os testes de ponta a ponta.

### <h2 id="iniciar-projeto">Iniciar projeto com TDD</h2>

Escrever um teste que falha

Fazer o teste passar

```
test('should sum the numbers correctly', () => {
    let num1 = 3;
    let num2 = 2;
    result = calculator.sum(num1, num2);
    expect(result).toBe(5);
});

-------------------------------

$ yarn test
yarn run v1.22.17
$ jest
 PASS  unit-tests/tests/calculator.test.js
 PASS  unit-tests/tests/message.test.js
  ● Console

    console.log
      Mensagem enviada com sucesso

      at console.<anonymous> (node_modules/jest-mock/build/index.js:837:25)

 PASS  integration-test/tests/integration/persons.test.js

Test Suites: 3 passed, 3 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.294 s, estimated 2 s
Ran all test suites.
Done in 2.09s.
```

Refatorar o código

### <h2 id="comandos">Uso de comando de execução</h2>

<strong>Rodar teste unitário e de integração:</strong><br />
yarn test
yarn test:watch

<strong>Rodar cobertura de testes:</strong><br />
yarn coverage 

<strong>Rodar teste de ponta a ponta (e2e):</strong><br />
yarn run cypress:open

### <h2 id="Teste-de-Unidade">Testes de Unidade (Testes Unitários)</h2>

<strong>Vantagens de testes de unidade:</strong>

1. Diminuir a quantidade de bugs do sistema;

2. Diminuir a necessidade de testes manuais;

3. Desenvolver uma arquitetura mais eficiente;

4. Facilitar o refactoring e aumentar a confiança.

### <h2 id="Padrao-Triple">Padrão Triple A (Arrange, Act, Assert) - Testes de Unidade</h2>

<strong>Arrange</strong>: Para que o teste possa rodar que inicializa variáveis

<strong>Act</strong>: Executa o código em teste.

<strong>Assert</strong>: Verifica se o resultado é esperado quando o teste passa ou falha.

```
test('should sum the numbers correctly', () => {
    // Arrange (Preparar o teste)
    let num1 = 3;
    let num2 = 2;

    // Act (Rodar o teste)
    result = calculator.sum(num1, num2);

    // Assert (Verificar as asserções)
    expect(result).toBe(5);
});
```

### <h2 id="Cobertura-Testes">Cobertura de Testes (Coverage)</h2>

Abrindo o arquivo gerado em coverage/lcov-report/index.html), faltam alguns testes para garantir o correto funcionamento da aplicação, e por assim uma boa cobertura de testes.

<img src="https://vizir.com.br/wp-content/uploads/2018/07/Screenshot_20180727_211256-1.png" alt="abrindo o arquivo gerado em coverage/lcov-report/index.html), faltam alguns testes para garantir o correto funcionamento da aplicação, e por assim uma boa cobertura de testes." />

<img style="width: 450px" src="https://miro.medium.com/max/1400/1*C4Mqqb1jkeFyKDOrcCXHKA.png" alt="abrindo o arquivo gerado em coverage/lcov-report/index.html), faltam alguns testes para garantir o correto funcionamento da aplicação, e por assim uma boa cobertura de testes." />

### <h2 id="Teste-Integracao">Teste de Integração</h2>

Teste de integração é o teste que é realizado entre módulos diferentes em um sistema.

- Testar o sistema fazendo requisições HTTP (GET, POST, PUT, DELETE)
- Analisar a requisição, verificar o resultado retornado e código de resposta
- Comunicar entre sistema e banco de dados
- Integrar sistema em API

### <h2 id="Teste-e2e">Teste de Ponta a Ponta (end-to-end - e2e)</h2>

Testes end-to-end são úteis para testar grandes fluxos de trabalho, especialmente quando eles são críticos para o seu negócio 
 - Pagamentos
- Criação de contas
- Renderização da aplicação inteira
- Endpoints da API
- Sessões e Cookies
- Navegação entre links diferentes

#### Criar projeto com teste de ponta-a-ponta (e2e):

Documentação de Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

Instalar cypress:

```
yarn add cypress --dev
```

Rodar teste de ponta a ponta (e2e):

```
yarn run cypress:open
```

No arquivo package.json:

```
{
  "devDependencies": {
    "cypress": "^10.8.0",
    "jest": "^29.0.1",
    "supertest": "^6.2.4"
  },
  "scripts": {
    "test": "jest",
	"start": "nodemon integration-test/index.js",
    "test:watch": "jest --watch",
    "coverage": "jest --coverage",
    "cypress:open": "cypress open"
  },
  "dependencies": {
    "express": "^4.18.1",
    "nodemon": "^2.0.20"
  }
}
```
