export class Quote {
    public date:Date;
    public showDetails:Boolean;
    public upvote:number;
    public downvote=0;
    constructor(public quote:string,public author:string,public name:string){
        this.date=new Date();
        this.upvote=0;
        this.downvote=0;
        this.showDetails=false;
    }
    }