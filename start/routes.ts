import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//STOCK OPNAME
Route.group(() => {
  Route.get('/depo', 'OpnameController.depo')
  Route.get('/obat', 'OpnameController.barang')
  Route.post('/store', 'OpnameController.store')
  Route.post('/pemutihan', 'PemutihanController.edit')
}).prefix('/api/opname')

//Setting
  Route.get('/api/settings', 'SettingsController.index')