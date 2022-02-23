import * as admin from 'firebase-admin';
import { Reference } from '@firebase/database-types';
import { CreateChild, GetChild } from './models';

export class FirebaseApp<T> {
    private reference: Reference;

    constructor() {
        this.reference = admin.database().ref();
    }

    createChild(childToCreate: CreateChild<T>) {
        return this.reference
            .child(childToCreate.name)
            .child(childToCreate.id)
            .set(childToCreate.data)
            .then((child) => {
                return childToCreate;
            })
            .catch((error) => {
                return error;
            });
    }

    async getChilds(child: string) {
        let data;

        let time = await this.reference.child(child).on('value', (snap) => {
            data = snap.val();
        });

        return data;
    }
}
