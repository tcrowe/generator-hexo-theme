{% extends 'includes/layout.swig' %}

{% block body %}
  {% include 'includes/recent-posts.swig' %}
  {% paginator() %}
{% endblock %}
