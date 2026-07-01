import { Router } from 'express';

const route = Router();

router.get("/", (req, res) => {
    res.json({ text: "Testing" });
});

export default route;