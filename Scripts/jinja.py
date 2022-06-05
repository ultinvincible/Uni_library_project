from re import template
from jinja2 import Environment, select_autoescape
import jinja2

env = Environment(
    loader=jinja2.FileSystemLoader(""),
    autoescape=select_autoescape()
)

template=env.get_template("base.html")

print(template.render(contents="Lorem ipsum"))