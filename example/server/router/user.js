
export default function ({ router }) {
  router.post('/user/list', async (req, res) => {
    res.json({ status: 0, page: req.body.page });
  });

  return router;
}
