{% extends 'includes/layout.swig' %}

{% block body %}
  <div id="tag">
    <h1>{{ page.tag }}</h1>
    {% for article in page.posts.toArray() %}
      <div class="tag-item">
        <a href="{{ url_for(article.path) }}">
          {{ article.title }}
        </a>
        <time datetime="{{ date_xml(article.date) }}">
          {{ date(article.date) }}
        </time>
      </div>
    {% endfor %}
  </div>

  <div id="paginator">
    {{ paginator() }}
  </div>
{% endblock %}
