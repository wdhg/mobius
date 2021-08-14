import toml
import os
from jinja2 import Environment, FileSystemLoader

INPUT_FILE = 'template.html'
OUTPUT_FILE = 'build/index.html'

file_loader = FileSystemLoader('.')
env = Environment(loader=file_loader)
template = env.get_template('template.html')
parsed_toml = toml.load('sites.toml')
output = template.render(sites=parsed_toml['sites'])

# makes build/ if it doesn't exist
if not os.path.exists(os.path.dirname(OUTPUT_FILE)):
    os.makedirs(os.path.dirname(OUTPUT_FILE))

with open(OUTPUT_FILE, 'w') as f:
    f.write(output)
    f.close()
