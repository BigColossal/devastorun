import { Container, Graphics } from "pixi.js"
import type { zone } from "./types"

export const worldManager: {container: Container, zone: zone, addChild: Function} = {
    container: new Container(),
    zone: 'Grass',

    addChild(child: Graphics) {
        this.container.addChild(child)
    }
}

