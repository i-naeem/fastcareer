from crawler import Crawler


NAME = "Rozee"


class Rozee(Crawler):
    def __init__(self, start_urls):
        super().__init__(NAME, start_urls)

    def parse(self, content):
        title = content.title
        description = content.description
        company = content.company
        source = content.ur
        return dict(title="", description="", company="", source="", keywords=[])
