import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import { Route } from "react-router";
import CollectionPage from "../collection/collection.component";


const ShopPage = ( { match } )=> (

    <div className="shop-page">
           <Route  component={CollectionsOverview} exact path={`${match.path}`} />
            <Route component={CollectionPage} path={`${match.path}/:collectionId`} />

    </div>
    
);


export default ShopPage;