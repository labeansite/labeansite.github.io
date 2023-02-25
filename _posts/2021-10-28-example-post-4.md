---
title: Post Teste/Tutorial
tags:
author: Thiago
member:
---

## Markdown

#### Títulos

# Top level heading
## Secondary heading
### Very specific heading
#### Even more specific heading

Para quebrar o parágrafo é preciso separar as linhas por uma linha vazia

Linha 1
Linha 2 <- Sem linha vazia

Linha 1

Linha 2 <- Com linha vazia

#### Modificação no texto

_texto itálico_

**texto negrito**

~~texto cortado~~

#### Listas

- Item a
- Item b
- Item c

1. Item a
2. Item b
3. Item c

#### Centralizando

Texto não centralizado: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Texto centralizado: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{:.center}

#### Links

Link externo [Texto para o usuário](https://www.google.com/)

{% include section.html %} 

## Seções

As seções tem cores alternadas.

{% include section.html %} 

Texto após uma quebra de seção

{% include section.html %} 

Texto após outra quebra de seção

{% include section.html %} 

## Figuras

{%
  include figure.html
  image="images/posts/example-post-4/img.png"
  caption="Legenda da foto"
%}

{% include section.html %}

## Vídeo

{% 
    include ytvideo.html
    id="Ttl8Gg-P-Ao"
%}
