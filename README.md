## Desafio de Frontend

O objetivo desse desafio é avaliar as habilidades do candidato com HTML, CSS, Javascript, responsividade, boas práticas de código e lógica.

O candidato deverá desenvolver um app de chat utilizando a API existente no diretório `backend` deste repositório. As instruções de como rodar a API estão no README.

O layout do app deve estar de acordo com este style guide: https://www.figma.com/file/NsAdklBdDOIi719nLAGpiI/Engineering---Chat-room.

Para que possamos avaliar, o candidato deverá forkar o repositório atual, implementar a solução no diretório `frontend` e enviar o link do seu repositório para o responsável pela avaliação.


### Requisitos obrigatórios

- Utilizar React (com ou sem Typescript)
- Ser fiel ao layout definido
- Impedir que usuários com mesmo nome acessem o chat ao mesmo tempo
- As mensagens devem ser enviadas ao clicar no botão ou ao apertar `ENTER` no campo de texto
- As mensagens devem estar ordenadas
- README explicando como configurar e executar o projeto


### Bônus

- Criar rotas com React Router DOM
- Manter o usuário "logado" entre atualizações da página
- Carregamento parcial (lazy) quando o histórico de mensagens torna-se muito longo
- Atualização em tempo real do chat quando usado por múltiplos usuários
- Layout responsivo
- Testes automatizados
