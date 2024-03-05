from decimal import Decimal
from typing import Union

from app.database.dynamodb import IdeasDB, generate_uuid
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()
ideas_db = IdeasDB()


class Idea(BaseModel):
    idea_id: Union[str, None] = None
    title: str
    category: str
    description: str
    total_prize: Union[Decimal, None] = None
    total_advocates: Union[int, None] = None
    chats: Union[list, None] = None


@router.get("/")
async def get_ideas():
    ideas = ideas_db.get_ideas()
    return {
        "ideas": ideas,
    }

@router.options("/")
async def get_ideas_options():
    return {
        "message": "Options request for ideas",
    }
    

@router.get("/search")
async def search_ideas(search_string: str):
    ideas = ideas_db.search_text(search_string)
    return {
        "ideas": ideas,
    }


@router.get("/{idea_id}")
async def get_idea(idea_id: str):
    idea = ideas_db.get_idea(idea_id)
    return {
        "idea": idea,
    }


@router.post("/")
async def create_idea(idea: Idea):
    idea.idea_id = generate_uuid()
    response = ideas_db.create_idea(idea.model_dump())
    if response:
        return {
            "message": "Idea created!",
            "idea": idea.model_dump(),
        }
    else:
        return {"message": "An error has occurred!"}


@router.put("/")
async def update_idea(idea: Idea):
    response = ideas_db.update_idea(idea.model_dump())
    if response:
        return {
            "message": "Idea updated!",
            "idea_id": idea.idea_id,
            "category": idea.category,
        }
    else:
        return {"message": "An error has occurred!"}


@router.delete("/{category}/{idea_id}")
async def delete_idea(idea_id: str, category: str):
    response = ideas_db.delete_idea(idea_id, category)
    if response:
        return {"message": "Idea deleted!"}
    else:
        return {"message": "An error has occurred!"}
