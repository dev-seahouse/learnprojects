###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration
###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

activate :blog do |blog|
  blog.name = 'videos'
  blog.prefix = 'videos'
  blog.permalink = "{title}"
  blog.new_article_template = "source/article-templates/video-template.erb"
end

activate :blog do |blog|
  blog.name = 'text'
  blog.permalink = "{title}"
  blog.prefix = 'text'
end

set :css_dir , 'stylesheets'
set :js_dir, 'javascripts'
set :image_dir, 'images'

activate :directory_indexes

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
