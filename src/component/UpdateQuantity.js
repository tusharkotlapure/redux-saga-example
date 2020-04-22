import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export default (props) => {
    const [count, setCount] = useState(props.count || 0);
    return(
        <div className="mt-2">
            <Button variant="contained" color="primary" disabled={!count} className="mr-2" onClick={() => { setCount(count - 1); props.removeProductFromCart(props.id, count - 1); }}>-</Button>
            <span>{count}</span>
            <Button variant="contained" color="primary" className="ml-2" onClick={() => { setCount(count + 1); props.addProductToCart({ ...props, count: count + 1 }); }}>+</Button>
        </div>
    )
}
