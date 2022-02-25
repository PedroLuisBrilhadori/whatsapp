import * as admin from 'firebase-admin';
import { Reference } from '@firebase/database-types';
import { CreateChild, GetChild } from './models';

export class FirebaseApp<T> {
    private reference: Reference;

    private child: string;

    constructor(child: string) {
        this.child = child;
        this.reference = admin.database().ref().child(this.child);
    }

    createChild(childToCreate: CreateChild<T>) {
        return this.reference
            .child(childToCreate.id)
            .set(childToCreate.data)
            .then(() => {
                return childToCreate;
            })
            .catch((error: any) => {
                return error;
            });
    }

    async getChilds() {
        let data;

        const time = await this.reference.on('value', (snap) => {
            data = snap.val();
        });

        return data;
    }

    async getChildById(id: string) {
        let data;

        const time = await this.reference
            .orderByKey()
            .equalTo(id)
            .on('value', (snap) => {
                data = snap.val();
            });

        return data;
    }

    async getChildByProperties(prop: string) {
        let data;

        const time = await this.reference
            .orderByChild(prop)
            .equalTo(prop)
            .on('value', (snap) => {
                data = snap.val();
            });

        return data;
    }
}
