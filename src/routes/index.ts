import * as Router from "koa-router";
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    status: "Success",
    message: "Digicp server up and running!"
  };
})

module.exports = router;