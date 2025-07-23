const API_URL = "https://gutendex.com/books/";

function getBookIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function fetchBookDetails(id) {
  try {
    const res = await fetch(`${API_URL}${id}`);
    const book = await res.json();
    renderDetails(book);
  } catch (error) {
    document.getElementById(
      "book-details"
    ).innerHTML = `<p>Failed to load book details.</p>`;
  }
}

function renderDetails(book) {
  const container = document.getElementById("book-details");
  container.innerHTML = `
    <div class="book-card">
      <img src="${book.formats["image/jpeg"]}" alt="Book Cover" />
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.authors
        .map((a) => `${a.name} (${a.birth_year}–${a.death_year})`)
        .join(", ")}</p>
      <p><strong>ID:</strong> ${book.id}</p>
      <p><strong>Subjects:</strong> ${book.subjects?.join(", ") || "N/A"}</p>
      <p><strong>Bookshelves:</strong> ${
        book.bookshelves?.join(", ") || "N/A"
      }</p>
      <p><strong>Languages:</strong> ${book.languages?.join(", ")}</p>
      <p><strong>Download Count:</strong> ${book.download_count}</p>
      <p><strong>Summary:</strong> ${
        book.summaries?.[0] || "No summary available."
      }</p>
      <div style="margin-top: 1rem;">
        <a href="${
          book.formats["text/html"]
        }" target="_blank" class="download-btn">📘 Read Book</a>
      </div>
    </div>
  `;
}

function navigateToWishlist() {
  window.location.href = "index.html#wishlist";
}

// Initial load
const bookId = getBookIdFromUrl();
if (bookId) {
  fetchBookDetails(bookId);
} else {
  document.getElementById("book-details").innerHTML = `<p>Invalid book ID.</p>`;
}
