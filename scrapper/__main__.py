import requests
import Rozee


if __name__ == '__main__':
    for post in Rozee.get_posts():
        r = requests.post('http://localhost:5000/api/posts', json=post)
        if (r.ok):
            print(f"Added {post['title']} to database")
        else:
            print(r.json())
            exit(1)
