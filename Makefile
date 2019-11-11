TAG=firstdraft

.PHONY: build
build:
	docker build -t $(TAG) .

.PHONY: run
run:
	docker run --rm -p 8080:80 $(TAG)
