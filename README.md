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
      * [Testes de Unidade (Testes Unitários)](#Teste-de-Unidade)
      * [Padrão Triple A (Arrange, Act, Assert)](#Padrao-Triple)
      * [Cobertura de Testes (Coverage)](#Cobertura-Testes)
      * [Teste de Integração](#Teste-de-Integracao)
      * [Teste de Ponta a Ponta (e2e)](#Teste-e2e)
   * [Demonstrações de cada teste](#Demonstracoes)
<!--te-->

### <h2 id="Introducao">Introdução ao TDD</h2>

Entender como iniciar um projeto TDD, como garantir qualidade de software e códigos limpos, 
conceitos de testes unitários, compreender como implementar e rodar os testes em funcionamento, 
com o resultado esperado ou erros gerados no relatório.

<img style="width: 250px" src="https://feminitech.files.wordpress.com/2017/04/testing-finding-bug.png"/>

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

### <h2 id="Piramide">Pirâmide de Testes</h2>

<img src="https://miro.medium.com/max/640/1*S0yR438zKtJtEEBldSviFA.png" alt="A função da pirâmide de testes é basicamente definir níveis de testes e te dar um norte quanto à quantidade de testes que você deveria ter em cada um desses níveis" />

No topo da pirâmide, temos os testes de ponta a ponta (end to end ou e2e, pra resumir). O objetivo deles é imitar o comportamento do usuário final nas nossas aplicações (seja ele uma pessoa, uma api, ou qualquer outro tipo de cliente).

Na base, temos os testes de unidade, onde verificamos o funcionamento da menor unidade de código testável da nossa aplicação.

Entre essas duas camadas, temos os testes de integração. A ideia deles é verificar se um conjunto de unidades se comporta da maneira correta, só que de forma menos abrangente do que os testes de ponta a ponta.

### <h2 id="Teste-de-Unidade">Testes de Unidade (Testes Unitários)</h2>

<strong>Vantagens de testes de unidade:</strong>

Diminuir a quantidade de bugs do sistema;

Diminuir a necessidade de testes manuais;

Desenvolver uma arquitetura mais eficiente;

Facilitar o refactoring e aumentar a confiança.

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
