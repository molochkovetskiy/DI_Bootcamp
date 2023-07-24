import math
from typing import List, Union

class Paginator:
    def __init__(self, items: List[Union[str, int]] = None, page_size: int=10) -> None:
        self.items = items
        self.page_size = int(page_size)
        self.current_page = 1
        self.total_pages = math.ceil(len(items) / page_size)
        self.items_per_page = math.ceil(len(items) / self.total_pages)

    def get_current_page_items(self) -> None:
        """Get the items on the current page"""
        start_index = (self.current_page - 1) * self.items_per_page
        end_index = min(start_index + self.items_per_page, len(self.items))
        print(self.items[start_index:end_index])
    
    def prev_page(self) -> None:
        self.current_page = max(1, self.current_page - 1)

    def next_page(self) -> None:
        self.current_page = min(self.total_pages, self.current_page + 1)
    
    def first_page(self) -> None:
        self.current_page = 1

    def last_page(self) -> None:
        self.current_page = self.total_pages

    def go_to_page(self, page_num: int) -> None:
        if page_num <= 0:
            self.first_page()
        elif page_num > self.current_page:
            self.last_page()
        else:
            self.current_page = page_num


alphabet_list = list("abcdefghijklmnopqrstuvwxyz")

paginator = Paginator(alphabet_list, 4)

paginator.get_current_page_items() # Output: ['a', 'b', 'c', 'd']

paginator.next_page()
paginator.get_current_page_items() # Output: ['e', 'f', 'g', 'h']

paginator.last_page()
paginator.get_current_page_items() # Output: ['y', 'z']

paginator.go_to_page(6)
paginator.get_current_page_items() # Output: ['u', 'v', 'w', 'x']
