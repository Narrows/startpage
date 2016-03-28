import json
import logging
import platform
import os
import string
import argparse

TPLS = {}

def build_tpl(path, data):
    if path is None:
        raise Exception('No path')

    content = ''
    if path in TPLS:
        content = TPLS[path]
    else:
        with open(path) as f:
            content = f.read()
            TPLS[path] = content

    if data is not None:
        content = string.Template(content).substitute(data)

    return content

def parse_links(links_config):
    tt = string.Template(\
    """
    <div class="space1">
        <h3 class="section_title">$name</h3>
        <ul class="link_list">
            $links
        </ul>
    </div>
    """\
    );

    lt = string.Template(\
    """
        <li class="link_item js-action_item">
            <a class="link_item__link" href="$href">
                <span class="link_item__title">$title</span>
                <span class="link_item__href">$href</span>
            </a>
        </li>
    """\
    );

    ba = ''
    for l in links_config:
        b = ''
        for pair in l['data']:
            b += lt.substitute({'href': pair[0], 'title': pair[1]})

        ba += tt.substitute({'name': l['name'], 'links': b})

    return ba


def print_index(config):
    css_data = {
        'fg': '#efefef',
        'body_background': '#333',
    }

    css_content = build_tpl('tpl/styles.css', css_data)

    js_data =  {
        'search_base_url': "'https://www.google.com/search?q='"
    }

    js_content = build_tpl('tpl/page.js', js_data)

    index_data = {
        'title': platform.node(),
        'css': css_content,
        'js': js_content,
        'links': parse_links(config['links'])
    }

    print(build_tpl('tpl/index.html', index_data))

parser = argparse.ArgumentParser()
parser.add_argument("--configpath", help="Config file path, default ./config.json")
args = parser.parse_args()

configpath = args.configpath
if configpath is None:
    configpath = 'config.json'

config = {}
try:
    with open(configpath) as f:
        config = json.loads(f.read())
except e:
    print(e)

print_index(config)
