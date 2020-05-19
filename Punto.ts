export class Punto{
    private x:number
    private y:number
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }
    public toString():string{
        let text = '(' + this.x + ', ' + this.y + ')'
        return text
    }
    public distanciaAlOrigen(x = this.x, y = this.y):number{
        return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
    }
    public calcularDistancia(B:Punto){
        let [x,y] = [B.getX(), B.getY()]
        return this.distanciaAlOrigen(this.x-x, this.y-y)
    }
    public getX (): number{
        return this.x
    }
    public setX(x: number){
        this.x = x
    }
    public getY(): number{
        return this.y
    }
    public setY(y: number){
        this.y = y
    }
}
