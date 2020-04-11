const express = require('express');

const videosRoute = (app) => {
  const router = express.Router();

  app.use('/api/videos', router);

  router.get('/', ({ query }, res) =>
    res.status(200).json({ data: query.tags, message: 'All videos' })
  );

  router.get('/:videoId', ({ params }, res, next) =>
    res.status(200).json({ data: params.videoId, message: 'Video retrieved' })
  );

  router.post('/', (req, res, next) =>
    res.status(201).json({ data: {}, message: 'Video created' })
  );

  router.put('/:videoId', ({ params }, res, next) =>
    res.status(200).json({ data: params.videoId, message: 'Video updated' })
  );

  router.delete('/:videoId', ({ params }, res, next) =>
    res.status(200).json({ data: params.videoId, message: 'Video deleted' })
  );
};

module.exports = videosRoute;
