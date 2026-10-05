# Megatron | Guia detalhado de artefatos

Projeto de documentação visual para arquitetura e artefatos de negócio/tecnologia. A página consolida uma visão navegável dos principais artefatos utilizados em arquitetura, com explicações de objetivo, método, saída esperada, limites e relação entre os diferentes outputs.

## Visão geral

Este repositório contém uma apresentação estática em HTML que organiza os artefatos de arquitetura em uma navegação lateral, blocos de conteúdo e seções detalhadas. O objetivo é facilitar a leitura e a consulta rápida dos artefatos sem depender de um backend ou framework.

A principal página é:

- [outputs-artefacts.html](outputs-artefacts.html)

Os arquivos de estilo e comportamento estão separados para manter a manutenção mais simples:

- [styles.css](styles.css)
- [script.js](script.js)

## Funcionalidades

- Navegação lateral por seções e artefatos;
- Estrutura visual para apresentação de artefatos de arquitetura;
- Conteúdo em português com foco em documentação e referência;
- Explicação de propósito, método, saídas e limites de cada artefato;
- Interação com blocos expansíveis (`details`/`summary`);
- Layout responsivo para leitura em diferentes tamanhos de tela.

## Estrutura do projeto

```text
architecture-artefacts/
├── README.md
├── outputs-artefacts.html
├── outputs-artefacts-fixed.html
├── rewrite_html.ps1
├── script.js
├── styles.css
└── .gitignore (se existir no repositório)
```

## Como visualizar o projeto

### Opção 1: abrir diretamente no navegador

Basta abrir o arquivo [outputs-artefacts.html](outputs-artefacts.html) em qualquer navegador moderno.

### Opção 2: servir localmente

Se preferir visualizar em um servidor local:

```bash
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```

## Sobre os artefatos documentados

A página cobre temas como:

- Mapa de soluções;
- Mapa de capacidades;
- Benchmark;
- Vendor landscape;
- Estudo de gaps;
- Heatmap;
- Cenários;
- Diagramas de arquitetura;
- Transformações;
- ADR;
- Insight.

## Observações

- O projeto é estático, então não exige instalação de dependências;
- A folha de estilo e o JavaScript foram separados para melhorar organização e manutenção;
- O arquivo [rewrite_html.ps1](rewrite_html.ps1) parece ser um utilitário para reescrever ou ajustar a estrutura do HTML no fluxo de produção/organização.

## Contribuição

Para ajustar o conteúdo, basta editar o HTML principal ou os arquivos de estilo/JS, mantendo a estrutura visual e de navegação original.

## Licença

Este projeto não especifica uma licença no repositório. Verifique com a organização responsável antes de reutilizar o conteúdo em outros contextos.
