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
            .then(() => {
                return childToCreate;
            })
            .catch((error: any) => {
                return error;
            });
    }

    async getChilds(child: string) {
        let data;

        const time = await this.reference.child(child).on('value', (snap) => {
            data = snap.val();
        });

        return data;
    }

    async getChildById(child: string, id: string) {
        let data;

        const time = await this.reference
            .child(child)
            .orderByKey()
            .equalTo(id)
            .on('value', (snap) => {
                data = snap.val();
            });

        return data;
    }

    async getChildByProperties(child: string, prop: string) {
        let data;

        const time = await this.reference
            .child(child)
            .orderByChild(prop)
            .equalTo(prop)
            .on('value', (snap) => {
                data = snap.val();
            });

        return data;
    }
}
