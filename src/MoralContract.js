// MoralContract.js
import React from 'react';
import { Card, CardContent, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const MoralContract = ({ onAccept, onDecline }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" style={{ left: 90, top: 20, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'revert', fontWeight: '900', wordWrap: 'break-word' }}>
                    Moral Contract
                </Typography>
                <br/><br/><br/>
                <Typography variant="body2" color="text.secondary">
                    ... Insert moral contract text here ...
                    <br></br>..............
                    <br/>
                    ................
                </Typography>
                <br/><br/>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="I agree to the terms and conditions"
                />
                <Button variant="contained" color="primary" onClick={onAccept} style={{background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', marginRight:10}}>
                    Agree
                </Button>
                <Button variant="contained" color="secondary" onClick={onDecline} style={{background: 'red'}}>
                    Disagree
                </Button>
            </CardContent>
        </Card>
    );
};

export default MoralContract;
