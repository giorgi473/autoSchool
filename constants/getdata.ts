export interface Person {
  name: string;
  age: number;
}

export const data: Person[] = [
  { name: "giorgi", age: 12 },
  { name: "paata", age: 11 },
  { name: "lali", age: 34 },
  { name: "gurami", age: 30 },
];

// -----------------------------------------------------
interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  image: string;
  desc: string;
  _id: number;
  gadjet: string;
  answeringQuestion: string;
  answers: Answer[];
}

export interface VehicleCategory {
  id: string;
  label: string;
  icon: string;
  gadjet: string;
  categoryMappings: {
    [categoryName: string]: {
      questions: Question[];
    };
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface ActiveCategory {
  id: number;
  name: string;
  tickets: number;
  main: Question[];
}

export const vehicleCategories: VehicleCategory[] = [
  {
    id: "A1",
    label: "A1",
    icon: "https://www.starti.ge/exam/svgicons/AA1.svg",
    gadjet: "მოპედი",
    categoryMappings: {
      "მძღოლი, მგზავრი და ქვეითი": {
        questions: [
          {
            _id: 3,
            gadjet: "მოპედი",
            answeringQuestion: "A1 კატეგორიის კითხვა მძღოლებზე",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "A1 კატეგორიის სპეციალური კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
        ],
      },
      "პრიორიტეტის ნიშნები": {
        questions: [
          {
            _id: 204,
            gadjet: "მოპედი",
            answeringQuestion: "A1 კატეგორიის კითხვა პრიორიტეტზე",
            image:
              "https://www.starti.ge/exam/ticket_media/new/ticketIMG-655.jpg",
            desc: "A1 პრიორიტეტის ნიშნების კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 202,
            gadjet: "მოპედი",
            answeringQuestion: "A1 კატეგორიის მეორე კითხვა პრიორიტეტზე",
            image:
              "https://www.starti.ge/exam/ticket_media/new/ticketIMG-656.jpg",
            desc: "A1 პრიორიტეტის ნიშნების მეორე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: false },
              { text: "პასუხი 2", isCorrect: true },
            ],
          },
        ],
      },
    },
  },
  {
    id: "B",
    label: "B, B1",
    icon: "https://www.starti.ge/exam/svgicons/BB1.svg",
    gadjet: "ავტომობილი",
    categoryMappings: {
      "მძღოლი, მგზავრი და ქვეითი": {
        questions: [
          {
            _id: 1,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის კითხვა მძღოლებზე",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის სპეციალური კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: false },
              { text: "პასუხი 2", isCorrect: true },
            ],
          },
          {
            _id: 2,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მეორე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მეორე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 3,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მესამე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მესამე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 4,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მეოთხე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მეოთხე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 5,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მეხუთე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მეხუთე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: false },
              { text: "პასუხი 2", isCorrect: true },
            ],
          },
          {
            _id: 6,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მეექვსე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მეექვსე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 7,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მეშვიდე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მეშვიდე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 8,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის მერვე კითხვა",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "B კატეგორიის მერვე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
        ],
      },
      "პრიორიტეტის ნიშნები": {
        questions: [
          {
            _id: 101,
            gadjet: "ავტომობილი",
            answeringQuestion: "B კატეგორიის კითხვა პრიორიტეტზე",
            image:
              "https://www.starti.ge/exam/ticket_media/new/ticketIMG-654.jpg",
            desc: "B პრიორიტეტის ნიშნების კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: false },
              { text: "პასუხი 2", isCorrect: true },
            ],
          },
        ],
      },
    },
  },
  {
    id: "C1",
    label: "C1",
    icon: "https://www.starti.ge/exam/svgicons/C1.svg",
    gadjet: "ავტომობილი",
    categoryMappings: {
      "მძღოლი, მგზავრი და ქვეითი": {
        questions: [
          {
            _id: 20,
            gadjet: "ავტომობილი",
            answeringQuestion: "C1 კატეგორიის კითხვა მძღოლებზე",
            image: "https://www.starti.ge/exam/shss.png",
            desc: "C1 კატეგორიის სპეციალური კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
        ],
      },
      "პრიორიტეტის ნიშნები": {
        questions: [
          {
            _id: 201,
            gadjet: "მოპედი",
            answeringQuestion: "C1 კატეგორიის კითხვა პრიორიტეტზე",
            image:
              "https://www.starti.ge/exam/ticket_media/new/ticketIMG-655.jpg",
            desc: "C1 პრიორიტეტის ნიშნების კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: true },
              { text: "პასუხი 2", isCorrect: false },
            ],
          },
          {
            _id: 202,
            gadjet: "ავტომობილი",
            answeringQuestion: "C1 კატეგორიის მეორე კითხვა პრიორიტეტზე",
            image:
              "https://www.starti.ge/exam/ticket_media/new/ticketIMG-656.jpg",
            desc: "C1 პრიორიტეტის ნიშნების მეორე კითხვა",
            answers: [
              { text: "პასუხი 1", isCorrect: false },
              { text: "პასუხი 2", isCorrect: true },
            ],
          },
        ],
      },
    },
  },
];

export const questionCategories: Category[] = [
  { id: 1, name: "მძღოლი, მგზავრი და ქვეითი" },
  { id: 2, name: "პრიორიტეტის ნიშნები" },
];
