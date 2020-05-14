export default class Video {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private videoURL: string,
    private userId: string,
  ) { }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getVideoURL(): string {
    return this.videoURL;
  }

  public getUserId(): string {
    return this.userId;
  }
}