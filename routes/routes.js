module.exports = ((app)=>{
    const produkController = require('../controllers/produk.controllers');
    const kategoriController = require('../controllers/kategori.controllers');
    const statusController = require('../controllers/status.controllers');

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

    app.route('/status').get(statusController.statusGetAll);
    app.route('/status/:id/update').put(statusController.updateStatus);
    app.route('/status/:id/delete').delete(statusController.deleteStatus);
    app.route('/status/create').post(statusController.createStatus);

})