install:
	yarn

start:
	yarn start

start-docker: 
	docker-compose up

start-docker-clean: cleanup
	docker-compose up

cleanup: cleanup-node-modules cleanup-dist

cleanup-node-modules:
	find . -name 'node_modules' -type d -prune -exec sudo rm -rf '{}' +

cleanup-dist:
	find . -name 'dist' -type d -prune -exec sudo rm -rf '{}' +