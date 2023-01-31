import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css';
// import App from "./App";

import gjsPresentWebPage from "grapesjs-preset-webpage"

function WebBuilder() {
 useEffect(() => {
   grapesjs.init({
     container: '#gjs',
     height: '700px',
     width: '100%',
     plugins: [gjsPresentWebPage],
     storageManager: {
       id: 'gjs-',
       type: 'local',
       autosave: true,
       storeComponents: true,
       storeStyles: true,
       storeHtml: true,
       storeCss: true,
     },
     deviceManager: {
       devices:
       [
         {
           id: 'desktop',
           name: 'Desktop',
           width: '',
         },
         {
           id: 'tablet',
           name: 'Tablet',
           width: '768px',
           widthMedia: '992px',
         },
         {
           id: 'mobilePortrait',
           name: 'Mobile portrait',
           width: '320px',
           widthMedia: '575px',
         },
       ]
     },
     pluginsOpts: {
       'grapesjs-preset-webpage': {
         blocksBasicOpts: {
           blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
           flexGrid: 1,
         },
         blocks: ['link-block', 'quote', 'text-basic' ,],
       },
     }
   })
 },[])

 return (
   <div id="gjs"></div>
 );
}
export default WebBuilder;