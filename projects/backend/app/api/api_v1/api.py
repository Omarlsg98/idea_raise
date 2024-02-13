from fastapi import APIRouter

from .endpoints import ideas

router = APIRouter()
router.include_router(ideas.router, prefix="/ideas", tags=["Ideas"])
