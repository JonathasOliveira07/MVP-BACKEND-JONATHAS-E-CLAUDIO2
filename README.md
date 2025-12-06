# MVP da Disciplina BACKEND da Universidade UNIFESO


# Dados dos integrantes da equipe:

Jonathas Barbosa Oliveira, matrícula 0607662.

Claudio Pereira da Costa, matrícula 06010061.

# Escolha da situação-problema:

Circuito Verde Teresópolis.

# Descrição sucinta do MVP.

O presente trabalho trata-se de um Mínimo Produto Viável (MVP) com o objetivo de sanar a dor do tema: Circuito Terê Verde, a fim de permitir uma fácil visualização das fartas possibilidades de trilhas verdes e permitir o cadastramento dessas trilhas ao perfil. 

O sistema oferece ao usuário a possibilidade de inscrição nas principais trilhas de Teresópolis. Além disso, o usuário também poderá interagir com os organizadores da equipe TereTrilhas por meio dos meios de contato e formulários contidos na aplicação e adicionar ao seu perfil. 

Em termos de escalabilidade, o projeto visa ser ampliado para uma rede social interativa, onde os usuários possam conversar com os demais, e acompanhar postagens, notícias, e eventos a serem realizados nas trilhas. Tudo isso com intuito de incentivar a participação dos cidadãos à usufruirem desse grande potencial ofertado pela maravilhosa cidade de Teresópolis e ampliar ao máximo o aproveitamento dessas oportunidades criando, não apenas grupos, mas sim uma comunidade unida e parceira, que seja berço de momentos e relacionamentos bons e duradouros.

# Instruções para executar o MVP localmente (caso necessário):
Sugerimos fazer o download em zip do projeto e:

1- extrair o arquivo zipado numa pasta vazia e separada para essa função.

2- abrir o projeto num IDE ou editor de código de sua preferência, sugerimos o VSCODE. 

3- instalar na máquina o NODE.JS pelo site do NODE.JS na última versão, caso ainda não tenha instalado na máquina

4- Após, abrir o arquivo raiz da aplicação no VSCODE.

5- Dentro da pasta raiz do projeto, abrir o terminal bash e instalar o npm com o código do terminal: "npm i" Uma pasta node será instalada na aplicação.

6- Abrir dois terminais bash. Um deles rodar o terminal com "npm start". Isso irá dorar os arquivos da parte BACKEND da aplicação.

7- No outro terminal Bash aberto, dorar com "npm run dev". Isso irá dorar a parte FRONTEND da aplicação.

8- Abra o navegador e digite http://localhost:5173/   . Isso irá abrir o site da aplicação.

9- Faça um registro e salve o login cadastrado e a senha utilizada. Para texte, pode criar NovoTeste@gmail.com  || senha: 123456Aa  .

10- Faça login com os dados criados. 

11- Navegue livremente pela aplicação. 

# Qualquer informação adicional relevante: 

## Lista de Requisitos Funcionais e Não-funcionais:

## Requisitos Funcionais (RF):

1)	A página de registro deve criar um novo usuário no banco de dados.

2)	A página de registro deve verificar se a senha que o usuário deseja inserir é segura e se atende aos requisitos preestabelecidos pelo sistema. 

3)	A página de registro deve orientar os usuários sobre qual o tipo de senha esperada pelo sistema para conseguir realizar o registro da senha.

4)	A página de login deve coletar os dados no banco de dados de usuários e retornar se aquela pessoa está ou não cadastrada.

5)	A página de login deve conferir se a senha digitada pelo usuário está correta ou não. 

6)	A página de login deve redirecionar o usuário para a tela home. 

7)	A página Home deve mostrar todas as opções de trilhas em forma de cards.

8)	Cada trilha deve ser apresentada pelo sistema em um card. 

9)	A página Home deverá conseguir ler as informações de email e de descrição do banco de dados de cada trilha e retornar para o usuário como informações dentro dos cards.

10)	A página Home deverá conseguir ler as informações de imagens de cada trilha e retornar dentro dos cards.

11)	A página Home deverá ter botões em cada card, um para entrar em contato com os organizadores da trilha e outro para adicionar a trilha ao perfil do usuário logado. 

12)	A página Perfil deverá conseguir ler as informações de cada usuário como nome do usuário logado e mostrar na primeira frase como: Olá, Usuário! Edite suas informações abaixo.

13)	A página Perfil deverá permitir que o usuário edite as informações do seu perfil. 


## Requisitos Não - Funcionais (RNF):

1)	Ter um perfil (usuário) para cada pessoa usuária para que cada pessoa que tenha interesse em participar de trilhas, possa ter um cadastro para interagir com as outras. 

2)	Ter uma página de registro confiável e segura contra ataques.

3)	Ter uma página de login confiável e segura contra ataques.

4)	Ter uma página de Home que permita ao usuário visualizar as trilhas disponíveis na cidade.

5)	Ter uma página de Home que possibilite ver informações de cada trilha, tais como, dificuldades, fácil, média e difícil, e breves descrições das trilhas.

6)	Ter uma página de Perfil que mostre as informações do usuário, tais como nome e trilhas favoritadas.
 

## Escopo:

O escopo do trabalho é criar um ambiente de informação, descoberta e interseção para sanar a dor do tema: Circuito Terê Verde, com vistas a propiciar a descoberta de um estilo de vida desbravador e, principalmente, comunitário no coração da pessoa usuária, estimulando-a a vivenciar as fartas possibilidades de trilhas verdes e todo o benefício que o contato com a natureza e com outras pessoas num ambiente saudável podem lhe proporcionar.

O sistema permite o usuário realizar seu cadastro nas principais trilhas de Teresópolis e também poderá interagir com os organizadores da equipe TereTrilhas por meio dos meios de contato e formulários contidos na aplicação e adicionar ao seu perfil.

O projeto ainda não faz algumas funcionalidades que descreveremos a seguir, mas elas estão em projeto para nossa evolução e escalabilidade desse ecossistema digital. Objetivamos em breve criar uma rede social interativa, onde os usuários possam conversar com os demais, e acompanhar postagens, notícias, e eventos a serem realizados nas trilhas. Tudo isso com intuito de incentivar a participação dos cidadãos à usufruírem desse grande potencial ofertado pela maravilhosa cidade de Teresópolis e ampliar ao máximo o aproveitamento dessas oportunidades criando, não apenas grupos, mas sim uma comunidade unida e parceira, que seja berço de momentos e relacionamentos bons e duradouros.

Portanto, esse é nosso escopo com finalidade de trazer ao cidadão, seja morador ou visitante de Teresópolis, uma melhor experiência de circuito verde para potencializar sua vivência com o meio ambiente e com as pessoas que podem ser encontradas nele, compartilhando esse momento. 
