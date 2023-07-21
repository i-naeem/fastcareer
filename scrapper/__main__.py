from dataclasses import dataclass, field
import datetime
import Rozee


@dataclass
class Job:
    title: str
    source: str
    company: str
    location: str
    description: str
    deadline: datetime.date


if __name__ == '__main__':
    for post in Rozee.get_posts():
        p = Job(**post)
        print(p)
