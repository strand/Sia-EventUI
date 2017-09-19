import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    raisedbutton: {
        fontSize: 12,
        minWidth: '10%',
        height: 28,
        textTransform: 'lowercase',
        padding: '1px'
    }
}

export const RaisedButtonStyled = ({label, type, primary, onTouchTap, children}) => {
    return (
        <RaisedButton
            label={label}
            type={type}
            labelStyle={styles.raisedbutton}
            style={styles.raisedbutton}
            primary={primary}
            onTouchTap={onTouchTap}
        >
            {children}
        </RaisedButton>
    )
}

export default RaisedButtonStyled