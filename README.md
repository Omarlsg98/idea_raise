# Idea Raise MVP backend
## Description

This is the MVP for Idea Raise a platform to connect ideators with creators. 
A fusion between crowdsourcing and crowdfunding!


## To develop

```
python -m venv .venv
pip install -r requirements
uvicorn app.main:app --reload
```

## To deploy 
```
cd .venv/Lib/site-packages/ 
zip -r9 ../../../function.zip . 
cd - 
zip -g ./function.zip -r app
```