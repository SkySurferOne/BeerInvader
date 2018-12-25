import { getRndInteger } from "./utils.mjs";
import { Bottle } from "./bottle.mjs";

export class StrongBottle extends Bottle {
    constructor(convas, ctx, bottleImg) {
        super(convas, ctx, bottleImg);
        this._step = 4;
        this._points = 3;
    }
}