import requests
import sys

# Check if the address is provided as a command-line argument
if len(sys.argv) != 2:
    print("Usage: python check_challenge.py <url>")
    sys.exit(1)

# Get the URL from the argument
url = sys.argv[1] + "/secret-path"

# Perform the GET request
try:
    response = requests.get(url, allow_redirects=False)

    # Check if the response has the 'X-CTF-Flag' header
    flag = response.headers.get('X-CTF-Flag')

    if flag:
        print(f"Success: Found the flag - {flag}")
    else:
        print("Error: Flag not found in the response headers.")
except requests.exceptions.RequestException as e:
    print(f"Error: Could not connect to {url}. Exception: {e}")
