// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
      default: {
        deployTo: '~/var/pokemon-project',
        repositoryUrl: 'https://github.com/sebastien-lb/shipit-test.git',
        key: '~/.ssh/MyKeyPair.pem',
      },
      staging: {
        servers: 'ubuntu@18.188.202.190',
      },
    })

    shipit.blTask('install package and build', async () => {
        await shipit.remote('npm install && npm run build')
    })
  }