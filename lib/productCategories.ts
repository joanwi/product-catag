export interface Product {
  name: string;
  products: number;
  reviews: number;
}

export interface Category {
  name: string;
  items: Product[];
}

export const categories: Category[] = [
  {
    name: "Task Management & To-Do Lists",
    items: [
      { name: "To-do list app", products: 94, reviews: 177 },
      { name: "To-do app", products: 84, reviews: 156 },
      { name: "Todo app", products: 30, reviews: 43 },
      { name: "Todo list app", products: 26, reviews: 43 },
      { name: "Task management software", products: 26, reviews: 33 },
      { name: "Task manager", products: 26, reviews: 30 },
      { name: "Task management app", products: 21, reviews: 25 },
      { name: "Task app", products: 19, reviews: 23 },
      { name: "Task management apps", products: 16, reviews: 19 },
      { name: "Checklist app", products: 13, reviews: 14 },
      { name: "Task management tool", products: 2, reviews: 2 },
      { name: "Best task management software", products: 1, reviews: 1 },
      { name: "Task manager app", products: 5, reviews: 7 },
      { name: "Time blocking/tasking app", products: 3, reviews: 3 },
      { name: "Todoist", products: 1, reviews: 1 },
      { name: "Taskade", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Productivity Tools",
    items: [
      { name: "Productivity apps", products: 88, reviews: 165 },
      { name: "Productivity", products: 52, reviews: 92 },
      { name: "Productivity app", products: 45, reviews: 78 },
      { name: "Productivity tools", products: 19, reviews: 21 },
      { name: "Productivity software", products: 6, reviews: 9 },
      { name: "Best productivity app", products: 13, reviews: 13 },
      { name: "Best productivity tool", products: 10, reviews: 13 },
      { name: "Best productivity apps", products: 3, reviews: 4 },
      { name: "Productivity youtuber", products: 6, reviews: 6 },
      { name: "Productivity podcast", products: 14, reviews: 15 },
      { name: "Productivity books", products: 20, reviews: 23 },
      { name: "Productivity book", products: 19, reviews: 20 },
      { name: "Best productivity tips", products: 3, reviews: 3 },
      { name: "Best productivity hack", products: 3, reviews: 3 }
    ]
  },
  {
    name: "Note-Taking & Knowledge Management",
    items: [
      { name: "Note-taking app", products: 24, reviews: 78 },
      { name: "Note taking", products: 10, reviews: 27 },
      { name: "Note-taking software", products: 7, reviews: 11 },
      { name: "Notetaking app", products: 12, reviews: 16 },
      { name: "Note app", products: 15, reviews: 17 },
      { name: "Notes app", products: 10, reviews: 12 },
      { name: "Note taking apps", products: 6, reviews: 9 },
      { name: "Note-taking application", products: 4, reviews: 4 },
      { name: "Best notetaking app", products: 3, reviews: 4 },
      { name: "App for note-taking", products: 3, reviews: 3 },
      { name: "Best notes", products: 4, reviews: 4 },
      { name: "Google keep", products: 1, reviews: 5 },
      { name: "Onenote alternative", products: 4, reviews: 4 },
      { name: "Notion", products: 3, reviews: 3 },
      { name: "Notion alternative", products: 1, reviews: 1 },
      { name: "Obsidian", products: 1, reviews: 2 },
      { name: "Digital notebook", products: 1, reviews: 1 },
      { name: "Digital notepad", products: 1, reviews: 1 },
      { name: "Second brain", products: 3, reviews: 3 }
    ]
  },
  {
    name: "Scheduling & Time Management",
    items: [
      { name: "Scheduling app", products: 31, reviews: 37 },
      { name: "Calendar app", products: 18, reviews: 26 },
      { name: "Calendar application", products: 6, reviews: 7 },
      { name: "Best digital calendar", products: 7, reviews: 9 },
      { name: "Best calendar", products: 6, reviews: 7 },
      { name: "Calendar/scheduling app", products: 3, reviews: 3 },
      { name: "Best calendar app", products: 2, reviews: 3 },
      { name: "Calendar apps", products: 2, reviews: 3 },
      { name: "Scheduling software", products: 7, reviews: 9 },
      { name: "Scheduling tool", products: 4, reviews: 4 },
      { name: "Auto scheduler", products: 2, reviews: 2 },
      { name: "Time tracking software", products: 12, reviews: 18 },
      { name: "Time tracking app", products: 13, reviews: 18 },
      { name: "Time tracking tool", products: 8, reviews: 9 },
      { name: "Best time tracking software", products: 6, reviews: 8 },
      { name: "Time tracking tools", products: 2, reviews: 2 },
      { name: "Time tracking extension", products: 3, reviews: 4 },
      { name: "Timesheet app", products: 2, reviews: 2 },
      { name: "Time management apps", products: 9, reviews: 9 },
      { name: "Time management software", products: 4, reviews: 4 },
      { name: "Time management book", products: 6, reviews: 9 },
      { name: "Time management books", products: 3, reviews: 4 },
      { name: "Time management", products: 1, reviews: 1 },
      { name: "Time tracking device", products: 2, reviews: 3 },
      { name: "Ai scheduling tool", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Focus & Distraction Management",
    items: [
      { name: "Pomodoro app", products: 18, reviews: 37 },
      { name: "Best pomodoro timer", products: 22, reviews: 23 },
      { name: "Pomodoro timer apps", products: 3, reviews: 3 },
      { name: "Pomodoro device", products: 1, reviews: 1 },
      { name: "Blocker", products: 22, reviews: 28 },
      { name: "App blocker", products: 11, reviews: 12 },
      { name: "Ad blocker", products: 6, reviews: 11 },
      { name: "Website blocker", products: 6, reviews: 8 },
      { name: "Website blockers", products: 7, reviews: 7 },
      { name: "Internet blocker", products: 2, reviews: 2 },
      { name: "App blockers", products: 3, reviews: 3 }
    ]
  },
  {
    name: "Habit & Goal Tracking",
    items: [
      { name: "Habit tracker app", products: 20, reviews: 26 },
      { name: "Habit tracker", products: 16, reviews: 17 },
      { name: "Best habit tracker", products: 9, reviews: 11 },
      { name: "Habit app", products: 7, reviews: 8 },
      { name: "Best habits", products: 4, reviews: 4 },
      { name: "Goal tracking app", products: 5, reviews: 5 },
      { name: "Best goal", products: 3, reviews: 3 },
      { name: "Gamification", products: 3, reviews: 3 }
    ]
  },
  {
    name: "Journaling & Self-Reflection",
    items: [
      { name: "Journaling app", products: 16, reviews: 21 },
      { name: "Best journaling app", products: 4, reviews: 4 },
      { name: "Journal app", products: 2, reviews: 6 },
      { name: "Diary app", products: 4, reviews: 4 },
      { name: "Journaling tools", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Project Management",
    items: [
      { name: "Project management tool", products: 20, reviews: 26 },
      { name: "Project management app", products: 14, reviews: 17 },
      { name: "Project management software", products: 6, reviews: 7 },
      { name: "Project management tools", products: 2, reviews: 3 },
      { name: "Project management system", products: 2, reviews: 2 },
      { name: "Project management platforms", products: 1, reviews: 1 },
      { name: "Project/task management", products: 4, reviews: 5 },
      { name: "Gantt chart software", products: 3, reviews: 3 },
      { name: "Gantt chart", products: 2, reviews: 2 },
      { name: "Kanban software", products: 1, reviews: 1 },
      { name: "Trello", products: 3, reviews: 3 },
      { name: "Jira", products: 1, reviews: 2 }
    ]
  },
  {
    name: "Mind Mapping & Creative Tools",
    items: [
      { name: "Mind mapping software", products: 11, reviews: 15 },
      { name: "Mind mapping tool", products: 10, reviews: 14 },
      { name: "Mindmap software", products: 4, reviews: 5 },
      { name: "Mind map tool", products: 6, reviews: 6 }
    ]
  },
  {
    name: "Books & Learning Resources",
    items: [
      { name: "Productivity books", products: 20, reviews: 23 },
      { name: "Productivity book", products: 19, reviews: 20 },
      { name: "Best self-improvement books", products: 8, reviews: 13 },
      { name: "Self-help books", products: 7, reviews: 10 },
      { name: "Best self-help books", products: 2, reviews: 2 },
      { name: "Self development book recommendations", products: 4, reviews: 4 },
      { name: "Self-development book", products: 1, reviews: 1 },
      { name: "Self-help book", products: 1, reviews: 1 },
      { name: "Time management book", products: 6, reviews: 9 },
      { name: "Time management books", products: 3, reviews: 4 },
      { name: "Meditation book", products: 5, reviews: 5 },
      { name: "Books/podcasts", products: 9, reviews: 12 },
      { name: "Books", products: 4, reviews: 4 },
      { name: "Best book recommendations", products: 3, reviews: 3 },
      { name: "Book recommendation", products: 1, reviews: 1 },
      { name: "Ebook", products: 2, reviews: 3 },
      { name: "Audible recommendations", products: 1, reviews: 1 },
      { name: "Study hacks", products: 5, reviews: 5 },
      { name: "Language learning resources", products: 2, reviews: 2 },
      { name: "Best courses online", products: 2, reviews: 2 }
    ]
  },
  {
    name: "Hardware & Office Equipment",
    items: [
      { name: "Noise cancelling headphones", products: 41, reviews: 71 },
      { name: "Best noise cancelling headphones", products: 15, reviews: 17 },
      { name: "Noise-canceling headphones", products: 8, reviews: 11 },
      { name: "Best headphones with mic", products: 2, reviews: 2 },
      { name: "Over the ear headphones", products: 1, reviews: 1 },
      { name: "Earmuffs", products: 1, reviews: 1 },
      { name: "Rechargeable batteries", products: 23, reviews: 33 },
      { name: "Graphic tablet", products: 7, reviews: 13 },
      { name: "Best standing desk", products: 6, reviews: 7 },
      { name: "Standing desks", products: 4, reviews: 5 },
      { name: "Desk recommendations", products: 2, reviews: 2 },
      { name: "Under desk treadmill", products: 1, reviews: 1 },
      { name: "Compact walking pad", products: 1, reviews: 1 },
      { name: "Tablets", products: 4, reviews: 6 },
      { name: "Android tablets", products: 3, reviews: 3 },
      { name: "Headset", products: 4, reviews: 4 },
      { name: "Ear tips", products: 3, reviews: 4 },
      { name: "Alarm clock", products: 6, reviews: 6 },
      { name: "Sunrise alarm", products: 3, reviews: 3 },
      { name: "Pocket utility tool", products: 5, reviews: 5 },
      { name: "Tape measure", products: 3, reviews: 3 },
      { name: "Best writing pen", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Health & Lifestyle",
    items: [
      { name: "Weight loss apps", products: 10, reviews: 11 },
      { name: "Best weight loss apps", products: 5, reviews: 5 },
      { name: "Health tracking app", products: 6, reviews: 6 },
      { name: "Mental health tracking app", products: 7, reviews: 8 },
      { name: "Meditation app", products: 2, reviews: 2 },
      { name: "Best meditation app", products: 3, reviews: 3 },
      { name: "Exercise equipment", products: 1, reviews: 1 },
      { name: "Sleep aid", products: 1, reviews: 2 },
      { name: "Neck pillows", products: 1, reviews: 2 },
      { name: "Best quality-of-life purchases", products: 3, reviews: 4 }
    ]
  },
  {
    name: "Document & Content Management",
    items: [
      { name: "Screenshot software", products: 6, reviews: 12 },
      { name: "Pdf software", products: 3, reviews: 3 },
      { name: "Pdf app", products: 1, reviews: 1 },
      { name: "Pdfs", products: 1, reviews: 1 },
      { name: "Document management systems", products: 1, reviews: 1 },
      { name: "Organizing documents", products: 3, reviews: 3 },
      { name: "Annotation tool", products: 3, reviews: 3 },
      { name: "Markdown editors", products: 3, reviews: 3 },
      { name: "Excel templates", products: 4, reviews: 4 },
      { name: "Notion templates", products: 1, reviews: 1 },
      { name: "Best notion templates", products: 1, reviews: 1 },
      { name: "Templates", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Social Media & Content Creation",
    items: [
      { name: "Youtubers", products: 25, reviews: 25 },
      { name: "Productivity youtuber", products: 6, reviews: 6 },
      { name: "Youtube recommended videos", products: 7, reviews: 8 },
      { name: "Youtube channel recommendations", products: 2, reviews: 2 },
      { name: "Social media", products: 2, reviews: 2 },
      { name: "Best social media", products: 1, reviews: 1 },
      { name: "Best lofi", products: 1, reviews: 1 },
      { name: "Best long form", products: 2, reviews: 2 }
    ]
  },
  {
    name: "Other Apps & Tools",
    items: [
      { name: "App recommendation", products: 5, reviews: 5 },
      { name: "App recommendations", products: 3, reviews: 3 },
      { name: "Mobile applications", products: 6, reviews: 6 },
      { name: "Mobile app", products: 1, reviews: 1 },
      { name: "Android app", products: 2, reviews: 2 },
      { name: "Ios", products: 3, reviews: 3 },
      { name: "Web app", products: 1, reviews: 1 },
      { name: "Desktop app", products: 3, reviews: 3 },
      { name: "Software/website", products: 11, reviews: 13 },
      { name: "Software tool", products: 1, reviews: 1 },
      { name: "Browser extensions", products: 4, reviews: 4 },
      { name: "Best chrome extensions", products: 3, reviews: 3 },
      { name: "Chrome extensions", products: 1, reviews: 1 },
      { name: "Text expander", products: 8, reviews: 10 },
      { name: "Dictation app", products: 3, reviews: 3 },
      { name: "Dictation software", products: 1, reviews: 1 },
      { name: "Text to speech", products: 1, reviews: 1 },
      { name: "Voice memo app", products: 1, reviews: 1 },
      { name: "Ai tool", products: 1, reviews: 1 },
      { name: "Ai tools for organizing", products: 3, reviews: 3 },
      { name: "Ai apps/programs", products: 2, reviews: 2 },
      { name: "Ai voice assistant", products: 2, reviews: 2 },
      { name: "Voice assistant", products: 2, reviews: 2 },
      { name: "Timer app", products: 4, reviews: 5 },
      { name: "Timer apps", products: 1, reviews: 1 },
      { name: "Timers", products: 2, reviews: 2 },
      { name: "Flashcard app", products: 1, reviews: 1 },
      { name: "Best flashcard app", products: 1, reviews: 4 },
      { name: "Handwriting app", products: 3, reviews: 4 },
      { name: "Best handwriting", products: 1, reviews: 1 },
      { name: "Learning app", products: 2, reviews: 2 },
      { name: "Chart software", products: 1, reviews: 1 },
      { name: "Music production software", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Home & Cleaning",
    items: [
      { name: "Automatic feeder", products: 4, reviews: 12 },
      { name: "Cat grooming brush", products: 2, reviews: 2 },
      { name: "Pet stain remover", products: 2, reviews: 2 },
      { name: "Stain remover", products: 3, reviews: 3 },
      { name: "Best stain remover", products: 1, reviews: 1 },
      { name: "Water spot remover", products: 1, reviews: 1 },
      { name: "Best laundry detergent", products: 2, reviews: 2 },
      { name: "Fabric protector", products: 1, reviews: 2 },
      { name: "Cordless vac", products: 1, reviews: 1 },
      { name: "Best way to soundproof", products: 4, reviews: 4 },
      { name: "Best way to take care of dog hair", products: 3, reviews: 3 },
      { name: "Diy bugspray", products: 7, reviews: 7 },
      { name: "Bugspray", products: 1, reviews: 1 },
      { name: "Fleas", products: 4, reviews: 4 },
      { name: "Gardening tools", products: 1, reviews: 1 },
      { name: "Wall decor", products: 2, reviews: 2 },
      { name: "Shoe storage", products: 1, reviews: 1 }
    ]
  },
  {
    name: "Finance & Consumer Goods",
    items: [
      { name: "Prepaid card", products: 20, reviews: 21 },
      { name: "Best high yield savings accounts", products: 1, reviews: 1 },
      { name: "Best investment account", products: 1, reviews: 1 },
      { name: "Best way to save money", products: 2, reviews: 2 },
      { name: "Debt tracker", products: 2, reviews: 3 },
      { name: "Rewards program", products: 2, reviews: 2 },
      { name: "Subscription app", products: 9, reviews: 9 }
    ]
  },
  {
    name: "Travel & Transportation",
    items: [
      { name: "Airplane tickets", products: 9, reviews: 11 },
      { name: "First class plane tickets", products: 3, reviews: 6 },
      { name: "Airline tickets", products: 3, reviews: 3 },
      { name: "Best time to book", products: 1, reviews: 1 },
      { name: "Passport", products: 2, reviews: 2 }
    ]
  },
  {
    name: "Miscellaneous",
    items: [
      { name: "Food products", products: 8, reviews: 8 },
      { name: "Crackers", products: 1, reviews: 1 },
      { name: "Cake mix", products: 1, reviews: 1 },
      { name: "Best popcorn", products: 1, reviews: 1 },
      { name: "Hot drinks", products: 1, reviews: 1 },
      { name: "Coffee alternative", products: 1, reviews: 1 },
      { name: "Plastic produce bags", products: 1, reviews: 1 },
      { name: "Best way to save half a can of soda", products: 5, reviews: 5 },
      { name: "Nicotine gum", products: 1, reviews: 1 },
      { name: "Wiper blades", products: 2, reviews: 2 },
      { name: "Dress pants", products: 4, reviews: 4 },
      { name: "Best way to fold", products: 3, reviews: 3 },
      { name: "Best way to tie", products: 2, reviews: 2 },
      { name: "Newsletters", products: 1, reviews: 1 },
      { name: "Best news apps", products: 4, reviews: 5 },
      { name: "Best media sources", products: 6, reviews: 6 },
      { name: "Job sites", products: 6, reviews: 6 },
      { name: "Career path", products: 1, reviews: 1 },
      { name: "Boot camps", products: 1, reviews: 1 },
      { name: "Selling tips", products: 2, reviews: 2 },
      { name: "Best life hacks", products: 1, reviews: 3 },
      { name: "Best hacks", products: 3, reviews: 3 },
      { name: "Achievements", products: 1, reviews: 3 },
      { name: "Best activity", products: 1, reviews: 2 },
      { name: "Best poop", products: 2, reviews: 2 }
    ]
  }
]; 