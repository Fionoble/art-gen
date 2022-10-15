const packagejson = `{
  "name": "art-gen",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite --port 4000",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^2.9.0"
  },
  "dependencies": {
    "@fionoble/art-gen": "latest"
  }
}`

module.exports = packagejson