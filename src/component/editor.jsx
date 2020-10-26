import React, { Component, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let textEditor 
let jsx = '<p>sadfvsdf</p>'

function Editor(){
    const [display, setDipaly] = useState('')

    const submitText = () =>{
        console.log(textEditor.getData())
        setDipaly(textEditor.getData())
         }


    return(
        <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <button onClick={() => submitText()}>submit</button>
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
        {/* {display} */}
        <div dangerouslySetInnerHTML={{__html: display}} />
     </div>
    )
}

export default Editor;
