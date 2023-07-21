import requests


URL = "https://www.rozee.pk/services/job/jobSearch"
PAYLOAD = dict([
    ("userMeta[curSal]", "50000"),
    ("userMeta[expSl]", "60000"),
    ("userMeta[crl]", "693"),
    ("userMeta[exp]", "719"),
    ("userMeta[ct]", "2666"),
    ("filters[q]", "all"),
]
)


def get_posts():
    response = requests.post(url=URL, data=PAYLOAD)
    posts = response.json()['response']['jobs']['basic']

    for post in posts:
        yield dict(
            title=post['title'],
            location=post['city'],
            company=post['company'],
            deadline=post['applyBy'],
            source=post['permaLink'],
            description=post["description"],
        )
