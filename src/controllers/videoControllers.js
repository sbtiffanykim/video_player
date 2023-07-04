export const home = (req, res) => res.send('Home Videos');
export const search = (req, res) => res.send('Search');

export const edit = (req, res) => res.send(`Edit Video #${req.params.id}`);
export const watch = (req, res) => res.send(`Watch Video #${req.params.id}`);
export const deleteVideo = (req, res) => res.send(`Delete the Video #${req.params.id}`);
export const upload = (req, res) => res.send('Upload Video');
