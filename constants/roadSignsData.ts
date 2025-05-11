export const paragraphs = [
  {
    id: 1,
    text: "საგზაო ნიშნები მოძრაობის უსაფრთხოებასა და მოწესრიგებულობას უზრუნველყოფს. ისინი აფრთხილებენ საგზაო მოძრაობის მონაწილეებს სხვადასხვა სახიფათო უბნებთან მიახლოების შესახებ, ზღუდავენ ან კრძალავენ ქუჩებისა და გზების ცალკეულ უბნებზე ზოგიერთი სატრანსპორტო საშუალების მოძრაობას, აწესრიგებენ გზაჯვარედინის, სავალი ნაწილების გადაკვეთისა და გზის ვიწრო უბნის გავლის თანმიმდევრობას, აზუსტებენ ძირითადი ნიშნების მოქმედების ზონას, დროს, მანძილს ობიექტამდე ან ზღუდავენ მათ მოქმედებასნებას.",
  },
  {
    id: 2,
    text: "ნიშნის ყოველ ჯგუფს აქვს განსაზღვრული ფორმა და ფერი, რაც მნიშვნელოვან მანძილზე მათი გამოცნობის საშუალებას იძლევა.",
  },
];

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  content?: {
    image: string;
    description: string;
    modal: { modalImage: string; modalDescription: string };
  }[];
  icon: string;
}

// მენიუს ელემენტები
export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "მაფრთხილებელი",
    category: "warning",
    content: [
      {
        image: "./mafrtxilebeli/slagbaumiani.svg",
        description: "1.1. რკინიგზის შლაგბაუმიანი გადასასვლელი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalle.png",
          modalDescription:
            "იძლევა გაფრთხილებას რკინიგზის შლაგბაუმიან გადასასვლელთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი მეორდება დაუსახლებელ პუნქტში, სახიფათო მონაკვეთის დასაწყისიდან არანაკლებ 50 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/uslagbauno.svg",
        description: "1.2. რკინიგზის უშლაგბაუმო გადასასვლელი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalus.png",
          modalDescription:
            "იძლევა გაფრთხილებას რკინიგზის უშლაგბაუმო გადასასვლელთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი მეორდება დაუსახლებელ პუნქტში, სახიფათო მონაკვეთის დასაწყისიდან არანაკლებ 50 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/ertl.svg",
        description: "1.3.1. ერთლიანდაგიანი რკინიგზა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalertl.png",
          modalDescription:
            "იძლევა გაფრთხილებას ერთლიანდაგიანი რკინიგზის უშლაგბაუმო გადასასვლელთან მიახლოების თაობაზე. იდგმება უშუალოდ რკინიგზის გადასასვლელის წინ.",
        },
      },
      {
        image: "./mafrtxilebeli/mravall.svg",
        description: "1.3.2. მრავალლიანდაგიანი რკინიგზა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalmravall.png",
          modalDescription:
            "იძლევა გაფრთხილებას ორი ან ორზე მეტი ლიანდაგის მქონე რკინიგზის უშლაგბაუმო გადასასვლელთან მიახლოების თაობაზე. იდგმება უშუალოდ რკინიგზის გადასასვლელის წინ.",
        },
      },
      {
        image: "./mafrtxilebeli/miaxloveba.svg",
        description: "1.4.1.-1.4.6. რკინიგზის გადასასვლელთან მიახლოება",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalmiaxloveba.png",
          modalDescription:
            "დამატებით აფრთხილებს მძღოლს დაუსახლებელ პუნქტში რკინიგზის გადასასვლელთან მიახლოების თაობაზე. 1.4.1−1.4.3 ნიშნები იდგმება გზის მარჯვენა მხარეს, ხოლო 1.4.4−1.4.6 ნიშნები − გზის მარცხენა მხარეს. 1.4.1 და 1.4.4 ნიშნები იდგმება მოძრაობის მიმართულებით ძირითად და განმეორებით 1.1 ან 1.2 ნიშანთან ერთად, 1.4.3 და 1.4.6 ნიშნები − მოძრაობის მიმართულებით განმეორებით 1.1 ან 1.2 ნიშანთან ერთად, ხოლო 1.4.2 და 1.4.5 ნიშნები − დამოუკიდებლად, თანაბარ დაშორებაზე ძირითად და განმეორებით 1.1 ან 1.2",
        },
      },
      {
        image: "./mafrtxilebeli/gadakveta.svg",
        description: "1.5. ტრამვაის ხაზის გადაკვეთა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalgadakveta.png",
          modalDescription:
            "იძლევა გაფრთხილებას ტრამვაის ხაზის გზასთან გადაკვეთის თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/tanabar.svg",
        description: "თანაბარმნიშვნელოვანი გზების გადაკვეთა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modaltanabar.png",
          modalDescription:
            "გზაჯვარედინი თანაბარმნიშვნელოვანი გზების გადაკვეთით. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/meorexaris.svg",
        description: "1.7.1. მეორეხარისხოვან გზასთან გადაკვეთა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modaltanabar.png",
          modalDescription:
            "ისეთ გზასთან გადაკვეთა, რომელზე მოძრავ მძღოლსაც აქვს გზის დათმობის ვალდებულება. ნიშანი სახიფათო მონაკვეთის დასაწყისამდე იდგმება დაუსახლებელ პუნქტში 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/seerteba.svg",
        description: "1.7.2.-1.7.7. მეორეხარისხოვანი გზის შეერთება",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalseerteba.png",
          modalDescription:
            "ისეთ გზასთან შეერთება, რომელზე მოძრავ მძღოლსაც აქვს გზის დათმობის ვალდებულება (შეერთება მარჯვნიდან – 1.7.2, 1.7.4 და 1.7.6, შეერთება მარცხნიდან – 1.7.3, 1.7.5 და 1.7.7). ნიშანი სახიფათო მონაკვეთის დასაწყისამდე იდგმება დაუსახლებელ პუნქტში 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/wre.svg",
        description: "1.8. წრიული მოძრაობის გადაკვეთა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalwre.png",
          modalDescription:
            "იძლევა გაფრთხილებას 4.3 ნიშნით აღნიშნულ წრიულმოძრაობიან გზაჯვარედინთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/suqnisani.svg",
        description: "1.9. შუქნიშნით რეგულირება",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsuqnisani.png",
          modalDescription:
            "გზაჯვარედინი, ქვეითთა გადასასვლელი ან გზის მონაკვეთი (გარდა რკინიგზის გადასასვლელისა), რომელზე მოძრაობაც შუქნიშნით რეგულირდება. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/xidi.svg",
        description: "1.10. გასახსნელი ხიდი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalxidi.png",
          modalDescription:
            "იძლევა გაფრთხილებას გასახსნელ ხიდთან ან საბორნე გადასასვლელთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი მეორდება დაუსახლებელ პუნქტში, სახიფათო მონაკვეთის დასაწყისიდან არანაკლებ 50 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/sanapiro.svg",
        description: "1.11. სანაპიროზე გასასვლელი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsanapiro.png",
          modalDescription:
            "სანაპიროზე ან წყალსაცავის ნაპირზე გასასვლელი. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. ნიშანი მეორდება დაუსახლებელ პუნქტში, სახიფათო მონაკვეთის დასაწყისიდან არანაკლებ 50 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/saxipato.svg",
        description: "1.12.1. სახიფათო მოსახვევი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsaxipato.png",
          modalDescription:
            "მცირერადიუსიანი ან შეზღუდული ხილვადობის მქონე გზის სახიფათო მოსახვევი მარჯვნივ. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/saxleft.svg",
        description: "1.12.2. სახიფათო მოსახვევი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsaxleft.png",
          modalDescription:
            "მცირერადიუსიანი ან შეზღუდული ხილვადობის მქონე გზის სახიფათო მოსახვევი მარცხნივ. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/snake.svg",
        description: "1.13.1. სახიფათო მოსახვევები",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsnake.png",
          modalDescription:
            "გზის მონაკვეთი სახიფათო მოსახვევებით: პირველი მოსახვევით მარჯვნივ. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/snake2.svg",
        description: "1.13.2. სახიფათო მოსახვევები",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalsnake2.png",
          modalDescription:
            "გზის მონაკვეთი სახიფათო მოსახვევებით: პირველი მოსახვევით მარცხნივ. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/cicabo.svg",
        description: "1.14. ციცაბო დაღმართი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalcicabo.png",
          modalDescription:
            "იძლევა გაფრთხილებას ციცაბოდაღმართიან გზის მონაკვეთთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. თუ აღმართი და დაღმართი (ან დაღმართი და აღმართი) ერთმანეთს მიჰყვება, 8.1.1 დაფის გარეშე 1.14 და 1.15 ნიშნები შეიძლება დაიდგას შესაბამისად, უშუალოდ აღმართის და დაღმართის წინ;",
        },
      },
      {
        image: "./mafrtxilebeli/cic.svg",
        description: "1.15. ციცაბო აღმართი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalcic.png",
          modalDescription:
            "იძლევა გაფრთხილებას ციცაბოაღმართიან გზის მონაკვეთთან მიახლოების თაობაზე. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე. თუ აღმართი და დაღმართი (ან დაღმართი და აღმართი) ერთმანეთს მიჰყვება, 8.1.1 დაფის გარეშე 1.14 და 1.15 ნიშნები შეიძლება დაიდგას შესაბამისად, უშუალოდ აღმართის და დაღმართის წინ;",
        },
      },
      {
        image: "./mafrtxilebeli/molipuli.svg",
        description: "1.16. მოლიპული გზა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalmolipuli.png",
          modalDescription:
            "გზის მოლიპული მონაკვეთი, რომელზედაც საბურავის გზის საფართან ჩაჭიდების კოეფიციენტი 0,4-ზე ნაკლებია. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/uswormasworo.svg",
        description: "1.17. უსწორმასწორო გზა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modaluswormasworo.png",
          modalDescription:
            "გზის მონაკვეთი, რომლის სავალი ნაწილი დაზიანებულია ტალღოვანი, ღრანტეებიანი, ხიდთან უსწორმასწორო შეუღლებებით და ა. შ.. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/xelovnuri.svg",
        description: "1.18. ხელოვნური უსწორმასწორობა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalxelovnuri.png",
          modalDescription:
            "გზის მონაკვეთი, რომელზედაც მოწყობილია ხელოვნური უსწორმასწორობა სიჩქარის იძულებით შემცირებისათვის. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/asxletva.svg",
        description: "1.19. ქვის ასხლეტა",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalasxletva.png",
          modalDescription:
            "გზის მონაკვეთი, რომელზედაც შესაძლებელია სატრანსპორტო საშუალების თვლებიდან ღორღის, ხრეშის ასხლეტა და ა. შ.. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/gzispiri.svg",
        description: "1.20. სახიფათო გზისპირი",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalgzispiri.png",
          modalDescription:
            "გზის მონაკვეთი, რომლის გზისპირის მდგომარეობა არ შეესაბამება არსებულ სტანდარტებს. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/seviwroveba.svg",
        description: "1.21.1. გზის შევიწროება",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalseviwroveba.png",
          modalDescription:
            "გზის მონაკვეთი, რომლის სავალი ნაწილის სიგანე ვიწროვდება ორივე მხრიდან. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
      {
        image: "./mafrtxilebeli/seviwrovebaright.svg",
        description: "1.21.2. გზის შევიწროება",
        modal: {
          modalImage: "/mafrtxilebeli/modalle/modalseviwrovebaright.png",
          modalDescription:
            "გზის მონაკვეთი, რომლის სავალი ნაწილის სიგანე ვიწროვდება მარჯვნიდან. ნიშანი დაუსახლებელ პუნქტში იდგმება სახიფათო მონაკვეთის დასაწყისამდე 150−300 მეტრ მანძილზე, დასახლებულ პუნქტში – 50–100 მეტრ მანძილზე.",
        },
      },
    ],
    icon: "./sign-icon.svg",
  },
  {
    id: 2,
    title: "პრიორიტეტის",
    category: "priority",
    content: [
      {
        image:
          "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        description: "1.1. გზის დაბრკოლება გადასასვლელთან",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          modalDescription: "1.2. საფრთხის ზონა",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "1.2. საფრთხის ზონა",
        modal: {
          modalImage:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          modalDescription: "1.1. გზის დაბრკოლება გადასასვლელთან",
        },
      },
    ],
    icon: "./prioriteti.svg",
  },
  {
    id: 3,
    title: "ამკრძალავი",
    category: "prohibitory",
    content: [
      {
        image:
          "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
        description: "2.1. შესვლა აკრძალულია",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
          modalDescription: "2.2. პარკირება აკრძალულია",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        description: "2.2. პარკირება აკრძალულია",
        modal: {
          modalImage:
            "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
          modalDescription: "2.1. შესვლა აკრძალულია",
        },
      },
    ],
    icon: "./amkrzalavi.svg",
  },
  {
    id: 4,
    title: "მიმთითებელი",
    category: "mandatory",
    content: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
        description: "3.1. მიმართულების მითითება",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
          modalDescription: "3.2. სავალდებულო მარჯვნივ",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        description: "3.2. სავალდებულო მარჯვნივ",
        modal: {
          modalImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
          modalDescription: "3.1. მიმართულების მითითება",
        },
      },
    ],
    icon: "./mimtitebeli.svg",
  },
  {
    id: 5,
    title: "განსაკუთრებული მითითებების",
    category: "special_instructions",
    content: [
      {
        image:
          "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        description: "4.1. დამატებითი ინფორმაცია",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1497436072909-60f34c19a7d0",
          modalDescription: "4.2. სპეციალური მითითება",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1497436072909-60f34c19a7d0",
        description: "4.2. სპეციალური მითითება",
        modal: {
          modalImage:
            "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
          modalDescription: "4.1. დამატებითი ინფორმაცია",
        },
      },
    ],
    icon: "./gansakutrebuli.svg",
  },
  {
    id: 6,
    title: "სერვისის",
    category: "service",
    content: [
      {
        image:
          "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "5.1. საგანგებო გზავნილი",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          modalDescription: "5.2. გადაუდებელი სერვისი",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "5.2. გადაუდებელი სერვისი",
        modal: {
          modalImage:
            "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          modalDescription: "5.1. საგანგებო გზავნილი",
        },
      },
    ],
    icon: "./service.svg",
  },
  {
    id: 7,
    title: "საინფორმაციო",
    category: "informational",
    content: [
      {
        image:
          "https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png",
        description: "6.1. გზის დახურვა",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
          modalDescription: "6.2. გზის შეზღუდვა",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
        description: "6.2. გზის შეზღუდვა",
        modal: {
          modalImage:
            "https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png",
          modalDescription: "6.1. გზის დახურვა",
        },
      },
    ],
    icon: "./sainpormacio.svg",
  },
  {
    id: 8,
    title: "დამატებითი ინფორმაციის",
    category: "additional_information",
    content: [
      {
        image:
          "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
        description: "7.1. გზის მონაკვეთი",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1503437313881-503a91226402",
          modalDescription: "7.2. გზის ტიპი",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1503437313881-503a91226402",
        description: "7.2. გზის ტიპი",
        modal: {
          modalImage:
            "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
          modalDescription: "7.1. გზის მონაკვეთი",
        },
      },
    ],
    icon: "./damatebiti.svg",
  },
  {
    id: 9,
    title: "საგზაო მონიშვნები",
    category: "road_markings",
    content: [
      {
        image:
          "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/866759932dc5358cee86f6552d1250f2/inside-bubble-spheres.jpg",
        description: "8.1. მანძილის მითითება",
        modal: {
          modalImage:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
          modalDescription: "8.2. მანძილის ნიშანი",
        },
      },
      {
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        description: "8.2. მანძილის ნიშანი",
        modal: {
          modalImage:
            "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/866759932dc5358cee86f6552d1250f2/inside-bubble-spheres.jpg",
          modalDescription: "8.1. მანძილის მითითება",
        },
      },
    ],
    icon: "./sagzao.svg",
  },
];
