import { Application, Container } from "pixi.js"
import { worldManager } from "./worldManager";

export const applicationManager = {
    app: new Application(),

    async init() {
        await this.app.init(
            {background: '#171717',
            resizeTo: window}
            );
        document.body.appendChild(this.app.canvas);
        this.addContainer(worldManager.container)
    },

    addContainer(container: Container) {
        this.app.stage.addChild(container)
    }


}