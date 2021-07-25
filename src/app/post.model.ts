export class post {
  constructor(
    public title: string,
    public description: string,
    public imagepath: string,
    public author: string,
    public date: Date,
    public noOfLikes:number
  ) {}
}
