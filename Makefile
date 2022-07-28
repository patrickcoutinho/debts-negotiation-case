cleanup:
	find . -name 'node_modules' -type d -prune -exec sudo rm -rf '{}' +
	find . -name 'dist' -type d -prune -exec sudo rm -rf '{}' +