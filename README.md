# GeekLovers
 
**Status do Projeto** : Em desenvolvimento 

![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
 
## Tabela de Conteúdo

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Download](#download)
 3. [Instalação](#instalação)
 4. [Configuração](#configuração)
 5. [Uso](#uso)
 6. [Arquitetura](#arquitetura)
 7. [Autores](#autores)
 
## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

 - Node.js
 - React
 - Expo
 - Prisma


## Download 

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta git. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:

``` bash
$ git clone https://github.com/SQUAD-S2/GeekLovers.git
```

## Instalação 
Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta back, quanto da pasta front. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

``` bash
$ cd geeklovers
$ rm -r .git
```

# Na pasta back
Abra o seu terminal e execute o comando para instalar as dependências da pasta back.

``` bash
$ cd back
$ npm install -g lemon-pie-cli
```

# Na pasta front
Agora, execute os comandos abaixo para instalar as dependências da pasta front.

``` bash
$ cd ..
$ cd front
$ npm install -g expo-cli
```

## Configuração
Após a instalação, algumas preparações anteriores devem ser realizadas na pasta `back`.

A partir dos comandos abaixo, será feita a configuração da pasta `back`:

``` bash
$ cd ..
$ cd back
$ npx prisma migrate dev geeklovers -- init
```
 
## Uso
Ainda na pasta `back`, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
npm run dev ou npm start
```

Com as configurações feitas, mude a seguir para a pasta `front`, para a execução do aplicativo utilizando o **Expo** utilizando os seguintes comandos:


``` bash
cd ..
cd front
npx expo start

```
## Arquitetura
- [Figma](https://www.figma.com/file/pQdUKhVCMwUCGiyJ6mREhb/Squad-2?type=design&node-id=0%3A1&mode=design&t=AI2OaMsU6zahIkfD-1)
- [Modelagem]()

## Autores
* Gerente - Lorenna e Vitoria
* Tech Lead - Lucas Stefano
* Dev Front-end - Bruna
* Dev Front-end - Emilly
* Dev Back-end - Gabriel
* Dev Back-end - Gustavo

## Última atualização: 08/02/2024



