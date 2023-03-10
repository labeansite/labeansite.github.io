---
title: Team
nav:
  order: 5
  tooltip: Meet our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: prof, group: " %} {% include list.html data="members" component="portrait" filters="role: postdoc, group: " %} {% include list.html data="members" component="portrait" filters="role: phd, group: " %} {% include list.html data="members" component="portrait" filters="role: specialist, group: " %} {% include list.html data="members" component="portrait" filters="role: analist, group: " %} {% include list.html data="members" component="portrait" filters="role: labtec, group: " %}{% include list.html data="members" component="portrait" filters="role: devtec, group: " %}{% include list.html data="members" component="portrait" filters="role: intern, group: " %}{% include list.html data="members" component="portrait" filters="role: ic, group: " %}

{% include section.html %}

### Ex-members

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include list.html data="members" component="portrait" style="small" filters= "ex-member: true" %}

{% include section.html background="images/site/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}

  {% include figure.html image="images/photo.jpg" %}
  {% include figure.html image="images/photo.jpg" %}
  {% include figure.html image="images/photo.jpg" %}
  
{% endcapture %}

{% include grid.html style="square" content=content %}
