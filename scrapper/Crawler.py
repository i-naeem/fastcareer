

class Crawler:
    def __init__(self, name, start_urls):
        self.name = name
        self.start_urls = start_urls

    def __repr__(self) -> str:
        return f'{self.__class__.__name__}(name={self.name!r}, start_urls={self.start_urls!r})'


class Rozee(Crawler):
    pass
