// @ts-ignore
import {
    __modelMeta__,
    LazyLoading,
    LazyLoadingDisabled,
    ManagedIdentifier,
    ModelInit,
    MutableModel
} from "@aws-amplify/datastore";


type EagerProfileImage = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<ProfileImage, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly userID: string;
    readonly image: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

type LazyProfileImage = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<ProfileImage, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly userID: string;
    readonly image: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

export declare type ProfileImage = LazyLoading extends LazyLoadingDisabled ? EagerProfileImage : LazyProfileImage

export declare const ProfileImage: (new (init: ModelInit<ProfileImage>) => ProfileImage) & {
    copyOf(source: ProfileImage, mutator: (draft: MutableModel<ProfileImage>) => MutableModel<ProfileImage> | void): ProfileImage;
}

type EagerUser = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<User, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly userID: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

type LazyUser = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<User, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly userID: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
    copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPost = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<Post, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly userID: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

type LazyPost = {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<Post, 'id'>;
        readOnlyFields: 'createdAt' | 'updatedAt';
    };
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly userID: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
    copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}