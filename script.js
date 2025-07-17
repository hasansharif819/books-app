const API_URL = 'https://gutendex.com/books';
        let books = [];
        let currentPage = 1;
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        function fetchBooks(page = 1) {
            fetch(`${API_URL}?page=${page}`)
                .then(res => res.json())
                .then(data => {
                    books = data.results;
                    currentPage = page;
                    updateGenreDropdown();
                    renderBooks();
                });
        }

        function updateGenreDropdown() {
            const allGenres = new Set();
            books.forEach(book => book.subjects?.forEach(subject => allGenres.add(subject)));
            const select = document.getElementById('genre-filter');
            const options = Array.from(allGenres).map(g => `<option value="${g}">${g}</option>`);
            select.innerHTML = '<option value="">All Genres</option>' + options.join('');
        }

        function renderBooks(list = books) {
            const keyword = document.getElementById('search').value.toLowerCase();
            const genre = document.getElementById('genre-filter').value;
            const filtered = list.filter(book => {
                const matchTitle = book.title.toLowerCase().includes(keyword);
                const matchGenre = !genre || book.subjects?.includes(genre);
                return matchTitle && matchGenre;
            });

            const view = document.getElementById('view');
            const html = `
        <div class="book-list">
          ${filtered
                    .map(
                        book => `
              <div class="book-card">
                <span class="heart ${wishlist.includes(book.id) ? 'liked' : ''}" onclick="toggleWishlist(${book.id})">
                  ❤
                </span>
                <img src="${book.formats["image/jpeg"]}" alt="Cover" />
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.authors.map(a => a.name).join(', ')}</p>
                <p><strong>ID:</strong> ${book.id}</p>
                <p><strong>Genres:</strong> ${book.subjects?.slice(0, 3).join(', ')}</p>
              </div>
            `
                    )
                    .join('')}
        </div>
        <div class="pagination">
          <button onclick="fetchBooks(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&laquo;</button>
          <button class="active">${currentPage}</button>
          <button onclick="fetchBooks(${currentPage + 1})">&raquo;</button>
        </div>
      `;
            view.innerHTML = html;
        }

        function toggleWishlist(id) {
            const index = wishlist.indexOf(id);
            if (index === -1) wishlist.push(id);
            else wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            renderBooks();
        }

        function navigate(view) {
            if (view === 'home') {
                fetchBooks(currentPage);
            } else if (view === 'wishlist') {
                const wishlistBooks = books.filter(b => wishlist.includes(b.id));
                renderBooks(wishlistBooks);
            }
        }

        // Load initial
        fetchBooks();