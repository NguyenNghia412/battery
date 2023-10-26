module.exports = {
    apps: [
      {
        name: 'battery-fe',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './.output/server/index.mjs',
      }
    ]
  }