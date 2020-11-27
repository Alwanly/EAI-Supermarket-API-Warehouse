const { pengembalianGetAll } = require('../controllers/pengembalian_produk.controller');

module.exports = ((app)=>{
    const produkController = require('../controllers/produk.controllers');
    const kategoriController = require('../controllers/kategori.controllers');
    const pengembalianController = require('../controllers/pengembalian.controllers');
    const stokController = require('../controllers/stok.controllers');

    app.route('/products').get(produkController.produkAll);
    app.route('/products/:kategori').get(produkController.produkByKategori);
    app.route('/product/:id').get(produkController.produkById);
    app.route('/product/:id/update').put(produkController.updateProduk);
    app.route('/product/:id/delete').delete(produkController.deleteProduk);
    app.route('/product/create').post(produkController.createProduk);
    
    app.route('/categories').get(kategoriController.kategoriGetAll);
    app.route('/category/:id/update').put(kategoriController.updateKategori);
    app.route('/category/:id/delete').delete(kategoriController.deleteKategori);
    app.route('/category/create').post(kategoriController.createKategori);
    
    app.route('/pengembalian').get(pengembalianController.pengembalianGetAll);
    app.route('/pengembalian/:id/update').put(pengembalianController.updatePengembalian);
    app.route('/pengembalian/:id/delete').delete(pengembalianController.deletePengembalian);
    app.route('/pengembalian/create').post(pengembalianController.createPengembalian);
    
    app.route('/stok').get(stokController.stokGetAll);
    app.route('/stok/:id/update').put(stokController.updateStok);
    app.route('/stok/:id/delete').delete(stokController.deleteStok);
    app.route('/stok/create').post(stokController.createStok);

})