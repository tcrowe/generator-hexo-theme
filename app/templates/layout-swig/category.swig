{% extends 'includes/layout.swig' %}

{% block body %}
  <div id="category">
    <h1>{{ page.category }}</h1>
    {% for postItem in page.posts.toArray() %}
      <div class="category-item">
        <a href="{{ url_for(postItem.path) }}">
          {{ postItem.title }}
        </a>
        <time datetime="{{ date_xml(postItem.date) }}">
          {{ date(postItem.date) }}
        </time>
      </div>
    {% endfor %}
  </div>

  <div id="paginator">
    {{ paginator() }}
  </div>
{% endblock %}
