# GNEWSAPI

# Install
 - You need to have Node.js installed. You can download it from https://nodejs.org/
 - npm install or yarn install

# Description:

https://gnews.io/
This API will be available at `http://localhost:3000`
You can use the following query parameters to interact with the API:
- /articles - Fetch N news articles (default: 10)
- /articles?count=5 - Fetch 5 news articles
- /articles?category=title or description - Find a news article with a specific title or description
- /articles?keywords=technology - Search for news articles by keywords(title or description)


The API uses the memory-cache package to cache results for 30 minutes, which will prevent fetching the same articles over and over again.

To create documentation for your API, you can use tools like Swagger (https://swagger.io/) or Apiary (https://apiary.io/).
