TEMPLATE_FILES := $(shell find ./tpl -type f)

all: index.html

index.html : $(TEMPLATE_FILES) startpage.py Makefile
	python3 startpage.py > index.html

custom:
	python3 startpage.py --configpath ~/startpage_config.json > ~/start.html

clean:
	rm index.html

serve:
	python -m SimpleHTTPServer 8080
