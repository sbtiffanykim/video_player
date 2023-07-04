export const home = (req, res) => {
  const videos = [
    {
      title: 'first video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 56,
      id: 1,
    },
    {
      title: 'second video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 56,
      id: 2,
    },
    {
      title: 'Third video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 56,
      id: 3,
    },
  ];
  res.render('home', { pageTitle: 'Home', videos });
};
export const search = (req, res) => res.send('Search');

export const watch = (req, res) => res.render('watch');
export const edit = (req, res) => res.render('edit');
export const deleteVideo = (req, res) => res.send(`Delete the Video #${req.params.id}`);
export const upload = (req, res) => res.send('Upload Video');
