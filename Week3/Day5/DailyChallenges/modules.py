import requests
import time

def get_page_load_time(url):
    try:
        start_time = time.time()  # Record the start time before making the request
        response = requests.get(url)
        response_time = time.time() - start_time  # Calculate the time taken for the response
        if response.status_code == 200:
            print(f"Loaded {url} successfully in {response_time:.2f} seconds.")
        else:
            print(f"Failed to load {url}. Status code: {response.status_code}")
    except requests.exceptions.RequestException as err:
        print(f"An error occurred while loading {url}: \n{err}")

sites = [
    "https://www.google.com",
    "https://www.ynet.co.il",
    "https://www.imdb.com",
    "https://www.example.com"  # A non-existent domain to test error handling
]

for site in sites:
    get_page_load_time(site)
