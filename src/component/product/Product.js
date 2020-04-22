import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import UpdateQuantity from '../UpdateQuantity';

export default (productProp) => {
    const {
        imgUrl,
        imgAlt,
        description,
    } = productProp;
    return(
        <Card className="col-sm-2">
            <CardMedia style={{height: '200px'}} image={imgUrl} title={imgAlt} />
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardActions>
                <UpdateQuantity {...productProp} />
            </CardActions>
        </Card>
    )
}
