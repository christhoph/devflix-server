const Db = require('../lib/db');

class VideosService {
  constructor() {
    this.collection = 'videos';
    this.db = new Db();
  }

  getVideos = async ({ tags }) => {
    const videos = await this.db.getAll(this.collection, tags);
    return videos || [];
  };

  getVideo = async ({ videoId }) => {
    const video = await this.db.get(this.collection, videoId);
    return video || {};
  };

  createVideo = async ({ video }) => {
    const createVideoId = await this.db.create(this.collection, video);
    return createVideoId;
  };

  updateVideo = async ({ videoId, video }) => {
    const updateVideoId = await this.db.update(this.collection, videoId, video);
    return updateVideoId;
  };

  deleteVideo = async ({ videoId }) => {
    const deleteVideoId = await this.db.delete(this.collection, videoId);
    return deleteVideoId;
  };
}

module.exports = VideosService;
