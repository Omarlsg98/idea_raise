# This module connects to dynamodb and provides the necessary functions to interact with the database.
# dynamodb has the table ideas.
import os
import uuid

import boto3
from boto3.dynamodb.conditions import Attr, Key, Or
from botocore.exceptions import ClientError
from dotenv import load_dotenv


def generate_uuid():
    return str(uuid.uuid4())


class IdeasDB:
    def __init__(self):
        self.dynamodb = boto3.resource("dynamodb")
        table_name = os.getenv("IDEAS_TABLE")
        self.table = self.dynamodb.Table(table_name)

    def get_ideas(self):
        try:
            response = self.table.scan()
            return response["Items"]
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return []

    def get_idea(self, idea_id: str):
        try:
            response = self.table.query(
                KeyConditionExpression=Key("idea_id").eq(idea_id)
            )
            idea = response["Items"][0]
            return idea
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return None
        except IndexError as e:
            print(e)
            return None

    def create_idea(self, idea: dict):
        try:
            self.table.put_item(Item=idea)
            return True
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return False

    def update_idea(self, idea: dict):
        try:
            self.table.put_item(Item=idea)
            return True
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return False

    def delete_idea(self, idea_id: str, category: str):
        try:
            self.table.delete_item(Key={"idea_id": idea_id, "category": category})
            return True
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return False
        
    def search_text(self, search_string: str):
        try:
            response = self.table.scan(
                FilterExpression=Or(
                    Attr('title').contains(search_string),
                    Attr('description').contains(search_string)
                )                
            )
            return response['Items']
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return False


if __name__ == "__main__":
    load_dotenv()
    db = IdeasDB()
    print(db.get_ideas())
    print(db.get_idea("1"))
    print(
        db.create_idea(
            {
                "idea_id": "3",
                "category": "test",
                "title": "Idea 3",
                "description": "Description 3",
            }
        )
    )
    print(
        db.update_idea(
            {
                "idea_id": "3",
                "category": "test",
                "title": "Idea 3",
                "description": "Description 3 Updated",
            }
        )
    )
    print(db.get_idea("3"))
    print(db.delete_idea(idea_id="3", category="test"))
    print(db.get_ideas())
