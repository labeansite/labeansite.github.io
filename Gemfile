source "https://rubygems.org"

# jekyll
gem "jekyll"
gem "minima", "~> 2.5"
gem "webrick", "~> 1.7"

# gem "github-pages", "~> 228", group: :jekyll_plugins

# plugins
group :jekyll_plugins do
  gem "jekyll-redirect-from"
  gem "jekyll-feed"
  gem "jekyll-sitemap"

  # other potentially useful plugins
  # gem "jekyll-github-metadata"
  # gem "jekyll-avatar"
  # gem "jekyll-gist"
  # gem "jekyll-mentions"
  # gem "jekyll-relative-links"
  # gem "jemoji"
end

# Windows stuff
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
# gem "eventmachine", "1.2.7", git: "git@github.com:eventmachine/eventmachine", tag: "v1.2.7" if Gem.win_platform? # https://github.com/oneclick/rubyinstaller2/issues/96

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

