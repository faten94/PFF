import base64 from 'base64-js';
import React, {Component} from 'react'
import fs from 'fs';
// const fs = require('fs   ')

class Pictures {
    // constructor(props){
    //     super(props)
    //   }

    static stringToUint8Array = (str) => {
        const length = str.length
        const array = new Uint8Array(new ArrayBuffer(length))
        for(let i = 0; i < length; i++) array[i] = str.charCodeAt(i)
        return array
    }
    
    static async fileToBase64 (content) {
        try {
            // const content = await FileSystem.readAsStringAsync(uri)
            console.log(content.length)
            return base64.fromByteArray(this.stringToUint8Array(content))
        } catch(e) {
            console.warn('fileToBase64()', e.message)
            return ''
        }
    }
    
    static convertImage = async (image) => {
        console.log(fs)
        const content = await fs.readFile(image, 
            // {encoding: 'base64'}
            (err, data) => {if(err) throw err;
            console.log('fs.readFile'+data)})
        // const imageString = await this.fileToBase64(image)
        console.log('image string '+content)
        return content
    }

    static convertToImage = async (base64Image) => {
        fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
            console.log('File created');
        });
    }
}

export default Pictures