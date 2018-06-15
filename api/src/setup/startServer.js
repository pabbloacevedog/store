// App Imports
import models from '../models/index'
import config from '../config/config.json'

// Sincronizando tablas de la base de datos e iniciar servidor
export default function (server) {
  console.info('SETUP - Sincronizando tablas de la base de datos...')

  // Crear tablas
  models.sequelize.sync({})
    .then(() => {
      console.info('INFO  - Base de datos sincronizada correctamente.')

      console.info('SETUP - Iniciando servidor...')

      // Inciar Servidor web
      server.listen(config.port, (error) => {
        if (error) {
          console.error('ERROR - Incapaz de iniciar el servidor.')
        } else {
          console.info(`INFO  - Servidor corriendo en el puerto ${ config.port }.`)
        }
      })
    })
    .catch(() => {
      console.error('ERROR - Incapaz de sincronizar la base de datos.')
      console.error('ERROR - Servidor no iniciado.')
    })
}
