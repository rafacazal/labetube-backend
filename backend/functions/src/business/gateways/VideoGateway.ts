import Video from "../entities/Video";

export interface VideoGateway {
  uploadVideo(video: Video): Promise<void>
  getVideos(userId: string): Promise<void>
}
