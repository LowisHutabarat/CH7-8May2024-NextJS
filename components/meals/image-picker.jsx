// kawan nge sad
"use client";

import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const[pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickImage() {
        console.log("something")
        imageInput.current.click();
    }

    function handleImageChange() {
        const file = event.target.files[0];

        if(!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="name">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked Yet.</p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="The Image selected by user" fill />
                    )}
                </div>
                <input className={classes.input} type="file" id='image' 
                accept='image/png, image/jpeg' name={name} ref={imageInput}
                onChange={handleImageChange}
                />

                <button className={classes.button} 
                type='button' onClick={handlePickImage}>
                    Pick an Image</button>
            </div>
        </div>
    )
}