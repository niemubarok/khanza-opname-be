import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PemutihanController {

  public async edit({ response }: HttpContextContract) {

    //update stok barang yang tidak di stok opname menjadi 0

    const whereNotIn = await Database.from('gudangbarang')
      .whereNotIn(['kode_brng', 'kd_bangsal'],
        Database.from('opname').select('kode_brng', 'kd_bangsal').where({
          tanggal: "2021-12-26"
        }))

    console.log(whereNotIn);
  }
}
