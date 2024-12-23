import { Router } from "express";
import { getAverageOfCasualtiesByRangesYears, getAverageOfCasualtiesByYear, getYearEventsByOrganization } from "../controllers/yearController";

const router = Router()
router.get("/year/:year", getYearEventsByOrganization)
router.get("/range/:from/:to" ,getAverageOfCasualtiesByRangesYears)
router.get("/:year/:number", getAverageOfCasualtiesByYear)

export default router;
