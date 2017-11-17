.PHONY: all clean package

all: package

package:
	name=text-reflow-we-$$(jshon -e version -u < manifest.json).zip && \
	7z a -tzip $$name '-xr!*~' -'xr!.*' '-xr!*.zip' '-xr!Makefile' . && \
	7z l $$name

clean:
	-rm *.zip
