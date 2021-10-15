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
        this.time = this.experience.time
        
        this.setText()
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDummy()
            }
        })
    }

    setDummy()
    {
        this.scene.color = new THREE.Color(0xff00ff)
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
        if(this.text.text)
            this.text.text.lookAt(new THREE.Vector3(7 * Math.sin(this.time.elapsed * 0.001),10 * Math.cos(this.time.elapsed * 0.001),12))
    }

    destroy()
    {
    }
}