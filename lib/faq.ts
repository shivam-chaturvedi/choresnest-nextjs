export type FAQQuestion = {
  q: string;
  a: string;
};

export type FAQCategory = {
  category: string;
  questions: FAQQuestion[];
};

export const faqCategories: FAQCategory[] = [
  {
    category: "General & Security",
    questions: [
      {
        q: "How do I secure the app?",
        a: "Go to Settings > Privacy. Enable 'App Lock' and set a PIN.",
      },
      {
        q: "Is my data stored in the cloud?",
        a: "Your data is primarily stored locally on your device for privacy. We do not mine or sell your family data.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Visit Settings > Privacy > Delete Account. This erases local data and removes your profile from our backend.",
      },
      {
        q: "How do I update my profile photo or name?",
        a: "Open the profile menu, tap the avatar, and choose a new symbol or name. Changes sync across every device on your account.",
      },
      {
        q: "What if I forget my App Lock PIN?",
        a: "For security, there is no 'forgot password' backdoor. You would need to reinstall the app, which resets secure data.",
      },
    ],
  },
  {
    category: "Accounts & Profiles",
    questions: [
      {
        q: "How do I switch between family members?",
        a: "Expand the profiles dropdown in the sidebar and tap the member you want to act as. The app then shows that member's events, tasks, and reminders.",
      },
      {
        q: "Can multiple people use the same account?",
        a: "Yes, but we recommend assigning each person a dedicated profile. That keeps reminders, tasks, and documents clearly separated.",
      },
      {
        q: "My member colors disappeared. How do I restore them?",
        a: "Edit the member from the Profiles dropdown, pick a new color, then tap Save. Colors are stored per profile and sync automatically.",
      },
    ],
  },
  {
    category: "Notifications",
    questions: [
      {
        q: "Why are my reminders not ringing?",
        a: "Ensure you have granted 'Notification' permissions. For critical tasks, the app uses 'Exact Alarms' which ensures delivery even in Doze mode.",
      },
      {
        q: "Can I stop notifications at night?",
        a: "Yes! Use 'Quiet Hours' in Notification Settings. You can set a start and end time (e.g., 10 PM to 7 AM) to mute non-urgent alerts.",
      },
      {
        q: "Where can I see past notifications?",
        a: "Tap the Bell icon on the Home screen. It shows a unified history of all missed events, tasks, and vault alerts from the last 7 days.",
      },
    ],
  },
  {
    category: "Data & Backup",
    questions: [
      {
        q: "How do I backup my data?",
        a: "Use the 'Data Export' feature in Settings. Select 'JSON' format for a complete backup of all your family info.",
      },
      {
        q: "Can I view my expenses in Excel?",
        a: "Yes! Select 'Finance' and choose 'CSV' format in the Data Export screen. You can then open the file in Excel or Google Sheets.",
      },
      {
        q: "Does the export include images?",
        a: "Currently, the JSON export includes text data and metadata. Heavy media files (images) are not embedded in the JSON to keep it lightweight.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        q: "How does the Vault work?",
        a: "Upload important docs (IDs, Warranties). Set an Expiry Date. The app will remind you 30 days, 14 days, and 7 days before it expires.",
      },
      {
        q: "Can I rotate chores automatically?",
        a: "Yes. In Task Settings, enable 'Chore Rotation'. The app will shuffle assignees for recurring tasks every Monday.",
      },
      {
        q: "How do I share a shopping list?",
        a: "Since the app is designed for families, all lists created in the 'Family' workspace are instantly visible to all added members.",
      },
    ],
  },
  {
    category: "Notes & Documents",
    questions: [
      {
        q: "How do I search for an old note or document?",
        a: "Use the search bar at the top of the Help screen or Vault/Notes pages. You can type keywords from the title, body, or tags, and suggestions appear instantly.",
      },
      {
        q: "Can I set alarms for documents?",
        a: "Yes. When saving a document, create reminder rules (30/14/7 days) and we'll send alerts per the schedule. You can also view them in the Notification Center.",
      },
    ],
  },
];

export const faqItems = faqCategories.flatMap((category) =>
  category.questions.map((question) => ({
    question: question.q,
    answer: question.a,
  }))
);
