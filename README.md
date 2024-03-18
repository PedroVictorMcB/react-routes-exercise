## Objetivo

Este repositório tem como objetivo mostrar como criar rotas usando o  
Browser-Router da lib react-router-dom. Portanto não possui arquivos .css,  
pois o inuito é mostrar a implementação das rotas na SPA.  
  


### Conectando Routes no React

1 - Criar projeto react:  
- npx create-react-app "nome do projeto"    
Aqui criamos o projeto com todas suas dependências e scripts e a pasta root.  
- Não consegui criar passando o npx:  
Use o comando npm i create-react-app para instalar a biblioteca, depois crie  
o projeto com o comando já citado do npx. Lembre-se de entrar dentro do  
diretório que você acabou de criar ao passar o comando npx.  
  
2 - Limpar o projeto para utilizar apenas o essencial:  
Retirei:  
- Arquivos App  
- Index.css  
- logo.svg  
  
3 - Instalar a lib react-router-dom usando npm i react-router-dom  
  
4 - Criar diretórios relacionados aos componentes e páginas:  
- Criei diretório componentes e dentro criei os componentes que serão utilizados  
para compor a SPA(Single Page Application)  
- Criei diretório relacionado a página para receber o componente Layout, que será a main-page.  
  
5 - Implementar Rotas:  
- Criei o ambiente de rotas em index.js.  
- Fiz os importes necessários e usei os compoentens necessário para criar as rotas  
- Processo demonstrado entre as linhas 10:16  
- Em pages/Layout.jsx importei Outlet e usei-o em main  
  
#### Resumo:

Este repositório tem o único intuito de mostrar como criar rotas usando  
o Browser-Router, portanto não possui css.
