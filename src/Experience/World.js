import * as THREE from 'three'
import Experience from './Experience.js'
import Text from './Text.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDummy()
                this.setText()
            }
        })
    }

    setDummy()
    {   
        // const texture = this.resources.items.baked1
        // texture.flipY = false
        // const material = new THREE.MeshBasicMaterial({map:texture})
        // const cube = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
        // )
        // this.scene.add(this.resources.items.path.scene)
        // this.resources.items.path.scene.traverse((child)=>{
        //     child.material = material
        // })

        // cube.position.setY(0.5)
        

        // this.scene.add(cube)
    }
    setText()
    {
        this.text = new Text
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}