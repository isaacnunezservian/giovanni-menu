import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { MenuController } from './controllers/menuController';

admin.initializeApp();

const menuController = new MenuController();

export const updatePrice = functions.https.onRequest((request, response) => {
    menuController.updatePrice(request, response);
});

export const addItem = functions.https.onRequest((request, response) => {
    menuController.addItem(request, response);
});

export const deleteItem = functions.https.onRequest((request, response) => {
    menuController.deleteItem(request, response);
});