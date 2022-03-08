import React, { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';


export default function UploadButton(props) {
    const onClick = props.onClick

     function handleClick(datos) {
        onClick()
    }

    return (
        <Box>
            <LoadingButton
                color="primary"
                onClick={() => handleClick()}
                loading="true"
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                Guardar
            </LoadingButton>
        </Box>
    );
}