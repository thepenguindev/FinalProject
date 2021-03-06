export default class Scene
{
    constructor(s)
    {
        this.s = s;
        this.updateables = [];
    }

    update()
    {
        this.updateables.forEach(u => {
            u.update();
        });
    }

    pushToUpdate(v)
    {
        this.updateables.push(v);
    }

    pullFromUpdate(n)
    {
        let u = this.getUpdateable(n);

        if (u)
        {
            let i = this.updateables.getIndexOf(u);
            this.updateables.splice(i, 1);
        }
    }

    getUpdateable(n)
    {
        for (let i = 0; i < this.updateables.length; i++)
        {
            if (this.updateables[i].name == n)
            {
                return this.updateables[i];
            }
        }
    }
}
