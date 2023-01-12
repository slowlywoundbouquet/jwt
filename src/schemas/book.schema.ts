import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop()
    public authors: string;

    @Prop()
    public favorite: string;

    @Prop()
    public fileCover: string;
    //@Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    // user: User;
    //
    // @Prop(raw({
    //     latitude: { type: Number },
    //     longitude: { type: Number }
    // }))
    // public location: Location;
}

export const BookSchema = SchemaFactory.createForClass(Book);