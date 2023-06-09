declare module foundry {
    module documents {
        /** The Wall embedded document model. */
        class BaseWall<TParent extends BaseScene | null = BaseScene | null> extends abstract.Document {
            static override get schema(): typeof data.WallData;

            static override get metadata(): WallMetadata;

            /** Is a user able to update an existing Wall? */
            protected static _canUpdate(user: BaseUser, doc: BaseWall, data: data.WallData): boolean;

            light: WallSenseType;
            move: WallSenseType;
            sight: WallSenseType;
            sound: WallSenseType;
        }

        interface BaseWall<TParent extends BaseScene | null = BaseScene | null> {
            readonly data: data.WallData<this>;
            readonly parent: TParent;
        }

        interface WallMetadata extends abstract.DocumentMetadata {
            name: "Wall";
            collection: "walls";
            label: "DOCUMENT.Wall";
            isEmbedded: true;
            permissions: {
                create: "ASSISTANT";
                update: (typeof documents.BaseWall)["_canUpdate"];
                delete: "ASSISTANT";
            };
        }
    }
}
