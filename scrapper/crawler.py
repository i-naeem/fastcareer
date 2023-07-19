from bs4 import BeautifulSoup
import httpx
import abc


class Crawler(abc.ABC):
    def __init__(self, name, start_urls):
        self.name = name
        self.start_urls = start_urls

    def crawl(self):
        for url in self.start_urls:
            response = httpx.get(url)
            self.visited.add(url)

            yield self.parse(BeautifulSoup(response.content, 'html.parser'))

    @abc.abstractmethod
    def parse(self, content: BeautifulSoup):
        pass

    def __repr__(self) -> str:
        return f'{self.__class__.__name__}(name={self.name!r}, start_urls={self.start_urls!r})'
