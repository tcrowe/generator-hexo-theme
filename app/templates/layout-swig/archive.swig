{% extends 'includes/layout.swig' %}

{% block body %}
  {% set categoriesList = list_categories({ show_count: false }) %}
  {% set tagsList = list_tags({ show_count: false }) %}
  {% set archivesList = list_archives({ show_count: false }) %}

  {% if !is_year() %}
    <div id="archive">
      <h1>Archives</h1>
      {% if theme.atom %}
        <p>
          The feed is available via
          <a href="{{ theme.atom }}">atom</a>.
        </p>
        <br>
      {% endif %}

      {% if config.atom %}
        <p>
          The feed is available via
          <a href="{{ config.atom }}">atom</a>.
        </p>
        <br>
      {% endif %}

      <aside>
        <h2>Categories</h2>
        {% if categoriesList %}
          {% autoescape false %}{{ categoriesList }}{% endautoescape %}
        {% else %}
          <p>None.</p>
        {% endif %}
      </aside>
      <br>

      <aside>
        <h2>Tags</h2>
        {% if tagsList %}
          {% autoescape false %}{{ tagsList }}{% endautoescape %}
        {% else %}
          <p>None.</p>
        {% endif %}
      </aside>
      <br>

      <aside>
        <h2>Archives</h2>
        {% if archivesList %}
          {% autoescape false %}{{ archivesList }}{% endautoescape %}
        {% else %}
          <p>None.</p>
        {% endif %}
      </aside>
    </div>
  {% else %}
    <h1>{{ page.month + '/' + page.year }}</h1>
    {% for postItem in page.posts.toArray() %}
      <div class="archive-item">
        <a href="{{ url_for(postItem.path) }}">
          {{ postItem.title }}
        </a>
        <time datetime="{{ date_xml(postItem.date) }}">
          {{ date(postItem.date) }}
        </time>
      </div>
    {% endfor %}
    <div id="paginator">
      {{ paginator() }}
    </div>
  {% endif %}

{% endblock %}
