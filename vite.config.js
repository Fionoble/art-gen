import { defineConfig } from 'vite'

export default defineConfig(({command}) => {
  console.log('Running:', command)
  switch(command) {
    case 'build':
      console.log("Build")
      return {
        build: {
          outDir: './docs'
        }
      }
  }
})