# 🐾 Projeto Ong

Um aplicativo móvel desenvolvido especialmente para atender às principais necessidades de ONGs voltadas à adoção de cães. O grande diferencial do projeto é a integração de **leitura biométrica**, que moderniza e agiliza o acesso ao sistema. 📱


##  🚀 Visão Geral

Este projeto tem como objetivo oferecer uma solução digital completa e intuitiva para facilitar o gerenciamento de adoções de cães em organizações sem fins lucrativos. Com foco na experiência do usuário e na eficiência do processo, o app permite:

- Cadastro e visualização de animais disponíveis para adoção
- Gerenciamento de informações de adotantes
- Cadastro completo do adotante para processos de adoção
- Login com **autenticação biométrica**, garantindo mais praticidade e segurança.

---

##  🛠️ Tecnologias Utilizadas

###  Frontend (Mobile)

- **React Native** com **Expo Go**  

- **JavaScript** e **TypeScript**  

###  Backend (API + Banco de Dados)

- **Java (Spring Boot)**  
  Responsável por toda a lógica de negócios e comunicação com o banco de dados.

- **PostgreSQL**  

- **Docker**  
  Utilizado para criar um ambiente containerizado com a API e o banco de dados, garantindo fácil portabilidade e replicação.

###  Ferramentas de Suporte

- **Git**  
  Controle de versão e colaboração em equipe.

- **Postman**  
  Ferramenta usada para testar e documentar a API, assegurando que todos os endpoints funcionem corretamente.

---

## 🌿 Branches do Projeto

O repositório está organizado em 5 branches principais. As duas mais importantes são:

- `develop`: Branch principal de desenvolvimento.
- `develop-mockado`: Ideal para testes sem a necessidade de configurar o backend com Docker.

> ✅ **Recomendado para testes rápidos**: use a branch `develop-mockado`, que já vem com dados de teste (mock), permitindo experimentar o app sem conectar à API real.

---

## ⚠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Expo Go (no celular ou emulador)
- Git

### Passos em ordem

### 1. Clone o repositório
```
git clone https://github.com/JoaoWaselkin/ong.git
```
### 2. Escolha a branch desejada
```
git checkout develop-mockado
```

### 3. Instale as dependências
```
npm install
```

### 4. Inicie o app
```
npx expo start
```

