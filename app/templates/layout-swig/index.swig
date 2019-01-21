{% extends 'includes/layout.swig' %}

{% block body %}
  {% include 'includes/recent-posts.swig' %}
  <div id="paginator">
    {{ paginator() }}
  </div>
{% endblock %}
