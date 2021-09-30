import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss"
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
         {
            collections.map(({id, ...ohterCollectionProps})=>( 
                <CollectionPreview key={id} {...ohterCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default  connect(mapStateToProps, null) (CollectionsOverview);