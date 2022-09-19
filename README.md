# Iniciando projeto de testes com TDD

Flavio Milani

## Tópicos:

<!--ts-->
   * [Introdução ao TDD ](#Introducao)
      * [Abordagem Tradicional Vs TDD](#Abordagem)
      * [Ciclo de TDD](#Ciclo)
   * [Frameworks TDD para JavaScript / Node](#Frameworks)
   * [Pirâmide de Testes](#Piramide)
   * [Iniciar projeto com TDD](#iniciar-projeto)
      * [Testes de Unidade (Testes Unitários)](#Teste-de-Unidade)
      * [Cobertura de Testes](#Cobertura-de-Testes)
      * [Teste de Integração](#Teste-de-Integracao)
      * [Teste de Ponta a Ponta (e2e)](#Teste-e2e)
   * [Demonstrações de cada teste](#Demonstracoes)
<!--te-->

### <h2 id="Introducao">Introdução ao TDD</h2>

Entender como iniciar um projeto TDD, como garantir qualidade de software e códigos limpos, 
conceitos de testes unitários, compreender como implementar e rodar os testes em funcionamento, 
com o resultado esperado ou erros gerados no relatório.

<img style="width: 250px" src="https://feminitech.files.wordpress.com/2017/04/testing-finding-bug.png"/>

### <h2 id="Abordagem">Abordagem Tradicional Vs TDD</h2>

<img src="https://miro.medium.com/max/1010/1*CNyX4rGOg3cjYBW6wpMtDQ.png" alt="acabamos tendo feedbacks muito mais rápidos, podendo trabalhar com ciclos muito menores entre as alterações durante o desenvolvimento do nosso projeto." />

### <h2 id="Ciclo">Ciclo de TDD</h2>

<span>Red</span>: escreva um pequeno teste automatizado que, ao ser executado, irá falhar;

Green: implemente um código que seja suficiente para ser aprovado no teste recém-escrito;

Refactor: refatore o código, a fim dele ser melhorado, deixando-o mais funcional e mais limpo.

<img style="width: 450px" src="https://dkrn4sk0rn31v.cloudfront.net/2019/11/04105020/img-tdd.png" alt="Ciclo de TDD - 1. RED - Escreva um teste que falhe. 2. GREEN - Faça o código funcionar. 3 - REFACTOR - Elimine redundância." />

Demonstração - Teste de Unidade

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/1i6HsYBv1L3lqfPgIC8i7EdOq779eAw0x/preview)
