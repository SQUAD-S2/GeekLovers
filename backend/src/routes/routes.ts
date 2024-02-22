import { Router } from 'express';
import userController from '../controllers/userController';
// import productController from '../controllers/productController';
// import purchaseController from '../controllers/purchaseController';
import authController from '../controllers/authController';
// import cartController from '../controllers/cartController';
import favoriteController from '../controllers/favoriteController';
import commentController from '../controllers/commentController';
// import answerController from '../controllers/answerController';

const router = Router();

router.post('/login', authController.login);
router.get('/userInfo', authController.getDetails);

router.post('/user', userController.create);
router.get('/users', userController.show);
router.get('/user/:id', userController.index);
router.put('/user/:id', userController.update);
router.put('/update-password/:id', userController.updatePassword);
router.delete('/user-delete/:id', userController.destroy);

// router.post('/product', productController.create);
// router.get('/products', productController.read);
// router.get('/products', productController.read);
// router.get('/user-products', productController.readUser);
// router.put('/product', productController.update);
// router.delete('/delete-product', productController.destroy);

router.post('/create-favorite-list', favoriteController.create);
router.put('/favorite-product', favoriteController.favoriteProduct);
router.put('/unfavorite-product', favoriteController.unFavoriteProduct);
router.get('/user-favorites', favoriteController.getFavorites);

router.post('/comment', commentController.create);
router.delete('/delete-comment', commentController.destroy);


export default router;
