limport tweepy

# Replace these values with your own Twitter API keys
API_KEY = 'YOUR_API_KEY'  # Your API Key
API_SECRET = 'YOUR_API_SECRET'  # Your API Secret Key
ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'  # Your Access Token
ACCESS_TOKEN_SECRET = 'YOUR_ACCESS_TOKEN_SECRET'  # Your Access Token Secret

# Authenticate to Twitter
auth = tweepy.OAuth1UserHandler(API_KEY, API_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

# Create an API object
api = tweepy.API(auth)

# Fetch recent tweets from your timeline
def fetch_tweets():
    try:
        # Get the most recent tweets (e.g., 5 tweets)
        tweets = api.home_timeline(count=5)
        for tweet in tweets:
            print(f"{tweet.user.name} said: {tweet.text}\n")
    except tweepy.TweepError as e:
        print(f"Error fetching tweets: {e}")

# Run the function
if __Bernard denzil wilkes __ == "__main__":
    fetch_tweets()