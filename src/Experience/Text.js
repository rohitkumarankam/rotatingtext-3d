import Experience from "./Experience.js"
import * as THREE from 'three'
import { FontLoader } from './Utils/FontLoader.js'
import { TextGeometry } from './Utils/TextGeometry.js'
export default class Text
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.setModel()

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'text',
                expanded: true
            })
            this.debugFolder.addInput(this.parameters, 'color', {view: 'color'})
            .on('change', () => {this.text.material.color = new THREE.Color(this.parameters.color)})
        }
    }
    setModel()
    {
        this.parameters = {
            color: 0xcf00ff,
        }
        var url = '/assets/helvetiker_regular.typeface.json'
        const loader = new FontLoader()
        this.font = loader.load(
            url,
            (font) =>
            {
                const textGeometry = new TextGeometry(
                    ` ROHIT\nKUMAR\nANKAM`,
                    {
                        font: font,
                        size: 0.5,
                        height: 0.1,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.01,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 10,
                    })
                textGeometry.computeBoundingBox()
                textGeometry.translate(
                    - textGeometry.boundingBox.max.x * 0.5,
                    textGeometry.boundingBox.max.y * 1,
                    - textGeometry.boundingBox.max.z * 0.5,
                )
                this.mat= new THREE.MeshNormalMaterial()
                this.text = new THREE.Mesh(textGeometry, this.mat)
                // this.text.position.setY(1.5)
                this.scene.add(this.text)
            }
        )
    }
    update()
    {
        this.setModel()
    }
}