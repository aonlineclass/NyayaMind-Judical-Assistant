``` md
# NyayaMind – Technical Setup & Usage Flow

# You will find .env file and Report/Presentation at google drive - https://drive.google.com/drive/folders/1HPiUTvKWQaqnNnFJEWssyfXuO-OgKxmt?usp=sharing

This document explains how to run the system and what you can do inside it, step by step.

---

## 🛠 Requirements

Before running the project, you only need:

* Node.js (v18 or higher)
* Any code editor (VS Code recommended)


---

## 🚀 Project Setup

1. Download or extract the project folder.

2. Open the project folder in VS Code (or any editor).

3. Open the terminal in the **root folder**.

4. Install dependencies:

npm install


This installs all required Node.js modules.

5.  Environment setup:

You will be given a `.env` file download it from google drive link above , when you have ur env file , you need to rename the file  it to  .env

-   Copy the `.env` file
-   Paste it into the **root folder** of the project

6.  Start the server:

``` bash
npm run dev
```

Your server will start at:

    http://localhost:3000

Open this in your browser.

------------------------------------------------------------------------

## 🧭 System Flow -- How to Use NyayaMind

### Step 1 -- Search

In the search box, type any legal query in natural language.

Example queries:

-   Bail denied due to absconding risk
-   Eviction without rehabilitation
-   Quash FIR in civil dispute
-   Economic offence long custody bail
-   Land acquisition without hearing

As you type:

-   The system shows live suggestions
-   Suggestions are based on *meaning*, not keywords

Example:

Typing

    bail in economic...

Shows:

-   economic offence bail
-   PMLA bail absconding
-   long custody bail fraud

Click any suggestion or press **Search**.

------------------------------------------------------------------------

### Step 2 -- View Results

You will see up to 10 relevant court orders.

Each card shows:

-   Case Type
-   Court Name
-   Year

Example result card:

    Bail • Supreme Court of India • 2024

Click any card to open it.

------------------------------------------------------------------------

### Step 3 -- Case Panel

When a case opens, you see:

-   Case ID
-   Court Name
-   Judge Name
-   Year
-   Case Type
-   Full Court Order Text

Nothing is hidden. You read the actual judgment.

At the bottom, there is an **Ask AI** box.

You can ask:

-   Why was bail denied in this case?
-   What legal principle was applied?
-   How is this case relevant to economic offences?

The AI:

-   Uses only this court order and related retrieved orders
-   Does not invent facts
-   Explains what already exists in the judgment

This makes long orders easy to understand.

------------------------------------------------------------------------

## ✨ Current Capabilities

-   Meaning-based legal search
-   Live query suggestions
-   Full court order viewer
-   Ask-AI grounded in real judgments
-   Clean and simple interface

------------------------------------------------------------------------

## 🧠 Upcoming Feature -- Learning from Users

This feature is planned for the next phase.

It will add:

    [ Useful ]   [ Not Relevant ]

On each result.

When a user clicks:

-   The system will remember:

    -   The query meaning
    -   The case ID
    -   Whether it was useful

For future similar queries:

-   Useful cases will appear higher
-   Irrelevant cases will appear lower

This will allow the system to:

-   Learn from real human judgment
-   Improve ranking over time
-   Build institutional memory

The architecture already supports this. It is marked as an upcoming
feature due to time constraints.

------------------------------------------------------------------------

NyayaMind is designed as a living judicial system, not just a search
engine.
