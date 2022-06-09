module.exports = {
  sourceByTop(source) {
  process.env.API_KEY="815bbe5cf8a5428a89b3269b10bd2db8";
    return 'https://newsapi.org/v2/top-headlines?sources='
      + source
      + '&apiKey='
      + process.env.API_KEY; //set API key via environment or dotenv file
  }
}
