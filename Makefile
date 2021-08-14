all:
	rm -rf build
	python build.py
	cp -r public/* build
