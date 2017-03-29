.PHONY: all
all: node_modules
	@yarn run start

node_modules: yarn.lock
	@yarn
