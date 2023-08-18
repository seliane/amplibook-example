// @ts-check
import {initSchema} from '@aws-amplify/datastore';
import {schema} from './schema';


const {ProfileImage, User, Post} = initSchema(schema);

export {
    ProfileImage,
    User,
    Post
};