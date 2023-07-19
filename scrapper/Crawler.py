import httpx


class Crawler:
    def __init__(self, name, start_urls):
        self.name = name
        self.start_urls = start_urls

        self.visited = set()

    def crawl(self):
        for url in self.start_urls:
            if url not in self.visited:
                response = httpx.get(url)
                self.visited.add(url)
                yield response.content

    def __repr__(self) -> str:
        return f'{self.__class__.__name__}(name={self.name!r}, start_urls={self.start_urls!r})'
