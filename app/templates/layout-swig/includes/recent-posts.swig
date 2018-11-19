
{% if page.posts.length > 0 %}
  <div id="recent-posts">
    <h1>All Posts</h1>
    {% for postItem in page.posts.toArray() %}
      <div class="recent-post-item">
        <a href="{{ url_for(postItem.path) }}">{{ postItem.title }}</a>
        <time datetime="{{ postItem.date.toJSON() }}">
          {{ date(postItem.date) }}
        </time>
      </div>
    {% endfor %}
  </div>
{% endif %}
