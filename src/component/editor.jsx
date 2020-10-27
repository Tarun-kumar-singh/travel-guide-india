import React, { Component, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

let textEditor 
let jsx = '<p>sadfvsdf</p>'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
function Editor(){
    const [display, setDipaly] = useState('')
    const classes = useStyles();

    const submitText = () =>{
        console.log(textEditor.getData())
        setDipaly(textEditor.getData())
         }
    return(
        <div>
         <div style={{position:'absolute', right:'13vw', top:'52px' }}>
            <Button
            onClick={() => submitText()}
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
        >
            Upload
        </Button>
      </div>
        <div style={{width:'70vw', marginLeft:'17%', marginTop:'100px'}}>
        <CKEditor
            editor={ ClassicEditor }
            // data="<p>Hello from CKEditor 5!</p>"
            onInit={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
                textEditor = editor
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
        />
        </div>
        <div>
            {ReactHtmlParser(display)}
            </div>
     </div>
    )
}

export default Editor;
