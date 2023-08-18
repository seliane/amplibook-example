/***************************************************************************
 Overwritten version of the Amplify component
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {Post} from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {Collection} from "@aws-amplify/ui-react";
import {MyCommentCard} from "../ui-components";
import {useUserImage, useUserName} from "../services/userService";

export default function MyPostCollectionOverwrite(props) {
    const {items: itemsProp, overrideItems, userID, overrides, isVisible, ...rest} = props;
    const itemsFilterObj = {
        field: "userID",
        operand: userID,
        operator: "eq",
    };
    const itemsFilter = createDataStorePredicate(itemsFilterObj);
    const [items, setItems] = React.useState(undefined);
    const itemsDataStore = useDataStoreBinding({
        type: "collection",
        model: Post,
        criteria: itemsFilter,
    }).items;
    React.useEffect(() => {
        if (itemsProp !== undefined) {
            setItems(itemsProp);
            return;
        }
        setItems(itemsDataStore);
    }, [itemsProp, itemsDataStore]);

    const navigateToPost = (post) => useNavigateAction({
        type: "url",
        url: `${"/post/"}${post?.id}`,
    });
    if (isVisible) {
        return (
            <Collection
                type="grid"
                searchPlaceholder="Search..."
                templateColumns="1fr 1fr"
                autoFlow="row"
                alignItems="stretch"
                justifyContent="stretch"
                items={items || []}
                {...getOverrideProps(overrides, "MyPostCollectionOverwrite")}
                {...rest}
            >
                {(item, index) => (

                    <MyCommentCard
                        name={useUserName(item.userID)}
                        image={useUserImage(item.userID)}
                        onClick={navigateToPost(item)}
                        post={item}
                        key={item.id}
                        {...(overrideItems && overrideItems({item, index}))}
                    ></MyCommentCard>
                )}
            </Collection>
        );
    }
}
