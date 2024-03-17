# ⭐ \[PI\] Avalia Unicap
Projeto da disciplina de Projeto Integrador IV lecionada pelo Prof. Iago Rodrigues. Este software busca solucionar pendências da comissão de avaliação da Universidade Católica de Pernambuco. Este repositório contém a parte funcional do sistema.

## Descrição
Esse sistema "backend" provê as seguintes funcionalidades:
- [ ] um usuário pode se cadastrar como Aluno (Student);
- [ ] um Administrador (Admin) pode cadastrar outro Administrador ou atualizar um Aluno para Administrador;
- [ ] um usuário pode logar em sua conta;
- [ ] um usuário pode avaliar as matérias disponíveis no seu curso (no campus que cursa, no período que está cursando) respondendo formulários com campos estáticos de avaliação (1 - 5) e um campo estático opcional de comentário;
- [ ] um usuário pode registrar as matérias em um período manualmente (apenas as disponíveis no seu curso, no seu campus);
- [ ] um usuário Administrador pode registrar um novo campus;
- [ ] um usuário Administrador pode registrar um novo curso relacionado a um campus existente;
- [ ] um usuário Administrador pode registrar uma nova matéria relacionada a um curso;
- [ ] um usuário pode, manualmente, adicionar e configurar um novo período;
- [ ] um usuário pode, manualmente, alternar o período que está cursando para um dos que registrou anteriormente;
- [ ] um usuário pode visualizar um histórico das avaliações por este efetuadas;
- [ ] um usuário Administrador pode visualizar dados estatísticos de um curso numa relação: matéria - avaliações registradas na matéria - usuários Alunos registrados na matéria - usuários Alunos que avaliaram a matéria.

## Requisitos funcionais
Para efetuar o "deploy" da aplicação, utiliza-se o serviço *Railway*.
Para a persistência dos dados, utiliza-se o banco de dados *Postgres*, provido pelo serviço *Neon Tech*.
Para a codifigação do "software", utiliza-se o "framework" *Nest.js*, na linguagem *typescript*.

## Erguendo a aplicação em modo de desenvolvimento
Para erguer a aplicação em modo de desenvolvimento, será necessário:
- ter Node.js instalado na versão >=20;
- ter Docker instalado.

### Instalação
Baixe o código fonte. No terminal, no diretório raiz, utilize o comando:
```bash
$ npm install
```

### Rodando a aplicação
```bash
# erguendo os serviços dos quais a aplicação depende
$ docker compose up -d
```

```bash
# desenvolvimento
$ npm run start

# modo "watch"
$ npm run start:dev

# produção / "deploy"
$ npm run start:prod
```

## Derrubando a aplicação
Ao terminar o desenvolvimento, utilize o comadno abaixo para derrubar os containers dockers e liberar o espaço utilizado no disco:
```bash
docker compose down --rmi all
```

Para mais informações, pesquise **como limpar containers e imagens em desuso no Docker**.