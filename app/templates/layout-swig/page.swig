{% extends 'includes/layout.swig' %}

{% block body %}
  <article id="page">
    <h1>{{ page.title }}</h1>
    {% autoescape false %}{{page.content }}{% endautoescape %}
  </article>

  <div id="paginator">
    {{ paginator() }}
  </div>
{% endblock %}
