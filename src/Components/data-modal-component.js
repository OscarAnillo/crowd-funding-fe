import { Typography } from '@mui/material';
import data from '../data/data-modal.json';

export default function DataModalComponent(){
    return (
        <>
            {data.map(item => (
                <div key={item.id} className="modal-div">
                    <div>
                        <input type="radio" id="input-radio-btn" name="pledge" />
                        <div>
                            <Typography variant='subtitle2' component="h4" id='modal-div-title'>{item.name}</Typography>
                            <Typography variant='body2' component="h6" id='modal-div-subtitle'>{item.pledge}</Typography>
                        </div>
                    </div>
                        <div>
                            <Typography variant='body2' component="p" id='modal-div-text'>{item.text}</Typography>
                        </div>
                        <div>
                            <Typography variant='h6' component="h4" id='modal-div-quantity'>{item.quantity} {item.quantity ? <span>left</span>:""} </Typography>
                        </div>
                    </div>
            ))}
        </>
    )
}