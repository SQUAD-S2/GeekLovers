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

import {validatorUser, validatorProduct, validatorComment, validatorAnswer, validatorFavorites, validatorCart, validatorLogin} from '../config/validator'

const router = Router();

router.post('/login', validatorLogin('login')!, authController.login);
router.get('/userInfo', authController.getDetails);

router.post('/user', validatorUser('create')!, userController.create);
router.get('/users', userController.show);
router.get('/user', userController.index);
router.put('/user', validatorUser('update')!, userController.update);
router.put('/update-password', validatorUser('updatePassword')!, userController.updatePassword);
router.delete('/delete-user', userController.destroy);

router.post('/product', validatorProduct('create')!, productController.create);
router.get('/products', productController.read);
router.get('/product', validatorProduct('readProduct')!,  productController.readProduct);
router.get('/user-products', productController.readUser);
router.put('/product', validatorProduct('update')!, productController.update);
router.delete('/delete-product', productController.destroy);

router.post('/cart', cartController.create);
router.get('/user-cart', cartController.readUser);
router.put('/empty-cart', cartController.emptyCart);

router.put('/add-one-product', validatorCart('addProduct')!, productsOnCartController.addProduct);
router.put('/remove-one-product', validatorCart('removeProduct')!, productsOnCartController.removeProduct);
router.put('/remove-product', validatorCart('destroy')!, productsOnCartController.destroy);

router.post('/create-favorite-list', favoriteController.create);
router.put('/favorite-product', validatorFavorites('favoriteProduct')!, favoriteController.favoriteProduct);
router.put('/unfavorite-product', validatorFavorites('unFavoriteProduct')!, favoriteController.unFavoriteProduct);
router.get('/user-favorites', favoriteController.getFavorites);

router.post('/answer', validatorAnswer('create')!, answerController.create);
router.delete('/delete-answer', validatorAnswer('destroy')!, answerController.destroy);

router.post('/comment', validatorComment('create')!, commentController.create);
router.get('/comments', validatorComment('readComments')!, commentController.readComments);
router.delete('/delete-comment', validatorComment('destroy')!, commentController.destroy);

export default router;
