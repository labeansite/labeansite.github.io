---
title: Home
---

{% include section.html full=true %}

{% include bgvideo.html %}

{% include section.html %}

# Slogan do grupo

Texto no estilo "quem somos nós" acompanhado de foto do grupo todo. (3 a 5 linhas).

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

{%
  include figure.html
  image="images/site/selecao-brasileira.jpg"
  width="100%"
%}

{% include section.html %}
# Highlights

{% capture text %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include link.html
  link="research"
  text="See what we've published"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/site/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{%
  include link.html
  link="tools"
  text="Browse our tools"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/site/photo.jpg"
  link="resources"
  title="Our Resources"
  flip=true
  text=text
%}

{% capture text %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/site/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
