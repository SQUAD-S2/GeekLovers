import { Router } from 'express';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
// import purchaseController from '../controllers/purchaseController';
import authController from '../controllers/authController';
import cartController from '../controllers/cartController';
import productsOnCartController from '../controllers/productsOnCartController';
import favoriteController from '../controllers/favoriteController';
import commentController from '../controllers/commentController';
import answerController from '../controllers/answerController';

const router = Router();

router.post('/login', authController.login);
router.get('/userInfo', authController.getDetails);

router.post('/user', userController.create);
router.get('/users', userController.show);
router.get('/user', userController.index);
router.put('/user', userController.update);
router.put('/update-password', userController.updatePassword);
router.delete('/delete-user', userController.destroy);

router.post('/product', productController.create);
router.get('/products', productController.read);
router.get('/user-products', productController.readUser);
router.put('/product', productController.update);
router.delete('/delete-product', productController.destroy);

router.post('/cart', cartController.create);
router.get('/carts', cartController.read);
router.get('user-cart', cartController.readUser);
router.put('/empty-cart', cartController.emptyCart);

router.put('/add-one-product', productsOnCartController.addProduct);
router.put('/remove-one-product', productsOnCartController.removeProduct);
router.put('/remove-product', productsOnCartController.destroy);

router.post('/create-favorite-list', favoriteController.create);
router.put('/favorite-product', favoriteController.favoriteProduct);
router.put('/unfavorite-product', favoriteController.unFavoriteProduct);
router.get('/user-favorites', favoriteController.getFavorites);

router.post('/answer', answerController.create);
router.get('/answers', answerController.readProduct);
router.delete('/delete-answer', answerController.destroy);

router.post('/comment', commentController.create);
router.delete('/delete-comment', commentController.destroy);


export default router;
