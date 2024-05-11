# spec-keeper

# SpecKeep

SpecKeep is a web-based note-taking application that allows users to create, edit, and organize their notes efficiently.

## Screens

### Home Page

This is the main dashboard where users can see all their notes organized in a grid or list format.

- **Behavior:** Fetches and displays notes from the server on user's dashboard. Allows users to search, filter, sort, and organize notes.
- **Layout:** Contains a 'Header', 'SearchAndFilterPanel', and 'NoteGrid' or 'NoteList'.

## Components

### Header
Displays the application logo, search bar, and user account options.

- **Behavior:** Search bar updates the displayed notes as per the query. Account options allow for user settings and log out.
- **Styling:** Fixed at the top, large bold logo, minimalistic style with vibrant accent colors for functional buttons.

### SearchAndFilterPanel
A panel that hosts sorting, filtering, and viewing options.

- **Behavior:** Allows users to switch between grid and list views; apply filters like "Last edited", "Created date"; and sort notes.
- **Styling:** Horizontal alignment with clearly labeled options, vibrant colored toggles or dropdowns set against the light background.

### NoteGrid
A collection of notes displayed as cards in a wrap grid format.

- **Behavior:**
  - Renders individual 'NoteItem' components.
  - Each 'NoteNoteItem' has options to edit, delete, or categorize.
  - Responsive layout that adjusts card size based on screen width.
- **Styling:**
  - Cards have a subtle shadow, rounded corners, and slight hover effect to enhance interactivity.
  - Uses whitespace generously to prevent a cluttered appearance.
  
### NoteList
An alternative display format showing notes in a vertical list.

- **Behavior:** Similar functionalities as 'NoteGrid' but in a list format.
- **Styling:**
  - Each list item is separated by a subtle line.
  - Implements large tap/click areas for accessibility.

### NoteItem
Component that shows a preview of the note including title, snippet of content, and last edited time.

- **Behavior:** On tap or click, opens the note for detailed viewing and editing in a 'NoteDetail' view.
- **Styling:** 
  - Title is bold and accent color if tagged as important.
  - Content snippet in smaller, lighter font to differentiate from title.
  - Shows last edited time in a small, subtle font at the bottom.

### NoteDetail
A full detailed view of the note for reading or editing.

- **Behavior:**
  - Allows text editing with rich text capabilities (bold, italic, underline).
  - Can attach images or links.
  - Option to delete the note or save changes.
- **Styling:**
  - Clean, uncluttered interface with the editing tools subtly available.
  - Bright, standout buttons for Save and Delete actions.

## General Design Principles

- **Light Base:** Application uses a light or white base for a clean and open interface.
- **Vibrant Accents:** Primary functions like buttons and toggles use vibrant colors to be easily identifiable.
- **Text Readability:** Ensures all text is black or dark grey for clarity. Headers are particularly bold and large.
- **Whitespace:** Liberal use of whitespace to avoid a cluttered or overwhelming feel, ensuring a comfortable reading and writing environment.
- **Strategic Icons:** Minimal use of icons to keep the interface clean but effective enough for intuitive navigation.
- **Simple Top Navigation:** Clear and minimalistic top-aligned navigation bar for aesthetic and functional usability.
- **Hierarchical Typography:** Various type sizes and weights are used to guide the user through the interface naturally.
- **Standout CTAs:** Contrasting colors for CTAs ensure they are prominent and inviting to the user.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/spec-keeper.git
cd spec-keeper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
