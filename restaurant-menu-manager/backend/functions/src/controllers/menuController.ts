import { Request, Response } from 'express';
import admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export class MenuController {
    async updatePrice(req: Request, res: Response) {
        const { id, newPrice } = req.body;
        try {
            await db.collection('menu').doc(id).update({ price: newPrice });
            res.status(200).send('Price updated successfully');
        } catch (error) {
            res.status(500).send('Error updating price: ' + error.message);
        }
    }

    async addItem(req: Request, res: Response) {
        const { name, price, category } = req.body;
        try {
            await db.collection('menu').add({ name, price, category });
            res.status(201).send('Item added successfully');
        } catch (error) {
            res.status(500).send('Error adding item: ' + error.message);
        }
    }

    async deleteItem(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await db.collection('menu').doc(id).delete();
            res.status(200).send('Item deleted successfully');
        } catch (error) {
            res.status(500).send('Error deleting item: ' + error.message);
        }
    }
}