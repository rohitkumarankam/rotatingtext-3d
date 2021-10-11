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
        const loader = new FontLoader()
        this.font = loader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json',
            (font) =>
            {
                const textGeometry = new TextGeometry(
                    ` ROHIT\nKUMAR\nANKAM`,
                    {
                        font: font,
                        size: 2,
                        height: 0.75,
                        curveSegments: 3,
                    // bevelEnabled: true,
                    // bevelThickness: 0.02,
                    // bevelSize: 0.02,
                    // bevelOffset: 0,
                    // bevelSegments: 5,
                })
                textGeometry.computeBoundingBox()
                textGeometry.translate(
                    - textGeometry.boundingBox.max.x * 0.5,
                    textGeometry.boundingBox.max.y * 1,
                    - textGeometry.boundingBox.max.z * 0.5,
                )
                this.textMaterial = new THREE.MeshBasicMaterial({color: this.parameters.color, wireframe: true})
                this.text = new THREE.Mesh(textGeometry, this.textMaterial)
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