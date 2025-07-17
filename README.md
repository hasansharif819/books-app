# 📚 Gutendex Books Explorer
## A sleek, responsive, and fully interactive single-page application to explore books from the Gutendex API. Built with vanilla JavaScript and raw CSS, this project demonstrates clean UI design and advanced functionalities — all without any page reloads.

# 🚀 Features
* Real-time Search: Instantly filter books by title with a dynamic search bar.

* Genre Filter: Select from genres/topics using a dropdown to narrow down book choices.

## Wishlist:

* Mark/unmark books as favorites with a clickable heart icon.

* Wishlist data persists in localStorage to keep your favorites safe across sessions.

## Pagination:

* Navigate through book pages using numbered pagination and previous/next controls.

* Smooth transitions ensure a pleasant browsing experience.

## Book Details:

* Dedicated page for each book displaying detailed info: title, author(s), cover image, genre(s), and ID.

## Multi-page SPA:

* Home page with book list

* Wishlist page showing only favorited books

* Individual book details page
* All pages update dynamically without full page reload.

## Responsive Design:

* Mobile-first layout with fluid grids and flexible components.

* Works flawlessly on desktop, tablets, and smartphones.

## Clean UI:

* Minimalist, elegant design using raw CSS (styles.css).

* No UI frameworks or templates — crafted from scratch.

## Persistence:

* Search queries and filter choices are saved to localStorage and restored on reload.

# 🛠️ Tech Stack
* Vanilla JavaScript (ES6+)

* Raw CSS (in styles.css)

* Gutendex API (https://gutendex.com) for book data

* HTML5, modern browser APIs

## No frameworks or libraries, pure vanilla stack

## 📁 Project Structure
```bash
/index.html       # Main entry point & SPA container
/styles.css       # All raw CSS styles for layout & responsiveness
/script.js       # Vanilla JS to handle UI, API calls, routing, state, and localStorage
```

## ⚙️ How To Use
Clone the repository:

```bash
git clone https://github.com/hasansharif819/books-app.git
cd books-app
Open index.html in any modern browser (Chrome, Firefox, Edge).
```

# Start exploring:

* Search books by typing in the search bar.

* Filter books by selecting genres from dropdown.

* Click the heart icon to add/remove books from your wishlist.

* Use pagination controls to browse pages.

* Click on any book for detailed info.

* Navigate to wishlist via the navbar.

# 💡 Design Decisions & Principles
SOLID Principles adhered to in JavaScript for modular, maintainable code:

Single Responsibility: Functions focus on single tasks.

Open/Closed: Easily extensible without modifying core functions.

Liskov Substitution: UI components interchangeable without side effects.

Interface Segregation: Separation of concerns between UI, data fetching, and storage.

Dependency Inversion: API calls abstracted from UI logic.

SPA Navigation:
Browser history and URL hash management for seamless page transitions.

Performance:
Minimal API calls with smart caching and debounced search inputs.

Accessibility:
Keyboard navigable and screen reader friendly.

# 📸 Screenshots

Explore the book collection with search, filters, and pagination


Manage your favorite books, saved locally


Detailed view of selected book

# 🙌 Credits
Powered by the Gutendex API — a free and open source project based on Project Gutenberg data.

Designed and developed from scratch by Sharif Hasan using only vanilla JS and CSS.

# 📬 Contact
* Have questions or feedback?
* Reach out: [hs.sharif819.com]
* GitHub: https://github.com/hasansharif819

# Thank you for checking out this project! Happy reading 📖✨
