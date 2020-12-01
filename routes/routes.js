
module.exports = ((app,router)=>{
    const produkController = require('../controllers/produk.controllers');
    const kategoriController = require('../controllers/kategori.controllers');
    const statusController = require('../controllers/status.controllers');
    const pengembalianController = require('../controllers/pengembalian_produk.controller');
    const stokController = require('../controllers/stok.controller');
    const pencatatanProdukController = require ('../controllers/pencatatan.produk.controller')

    
    router.get('/products',produkController.produkAll);
    router.get('/products/:kategori',produkController.produkByKategori);
    router.get('/product/:id',produkController.produkById);
    router.put('/product/:id/update',produkController.updateProduk);
    router.delete('/product/:id_produk/delete',produkController.deleteProduk);
    router.post('/product/create',produkController.createProduk);
    
    router.get('/notes',pencatatanProdukController.pencatatanProdukGetAll);
    router.put('/note/:id/update',pencatatanProdukController.updatePencatatan);
    router.delete('/note/:id/delete',pencatatanProdukController.deletePencatatan);
    router.post('/note/create',pencatatanProdukController.createPencatatanProduk);
    
    router.get('/categories',kategoriController.kategoriGetAll);
    router.put('/category/:id/update',kategoriController.updateKategori);
    router.delete('/category/:id/delete',kategoriController.deleteKategori);
    router.post('/category/create',kategoriController.createKategori);
        
    router.get('/pengembalian',pengembalianController.pengembalianGetAll);
    router.put('/pengembalian/:id/update',pengembalianController.updatePengembalian);
    router.delete('/pengembalian/:id/delete',pengembalianController.deletePengembalian);
    router.post('/pengembalian/create',pengembalianController.createPengembalian);

    router.get('/stok',stokController.stokGetAll);
    router.put('/stok/:id/update',stokController.updateStok);
    router.delete('/stok/:id/delete',stokController.deleteStok);
    router.post('/stok/create',stokController.createStok);

    router.get('/status',statusController.statusGetAll);
    router.put('/status/:id/update',statusController.updateStatus);
    router.delete('/status/:id/delete',statusController.deleteStatus);
    router.post('/status/create',statusController.createStatus);

    app.use('/api/v1/',router);
})