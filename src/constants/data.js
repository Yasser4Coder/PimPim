import images from "./images";

const wines = [
  {
    title: "Shawarma",
    price: "56",
    tags: "شورما ",
  },
  {
    title: "Kebabs",
    price: "59",
    tags: "كباب",
  },
  {
    title: "Mansaf",
    price: "44",
    tags: "منسف",
  },
  {
    title: "Kebssa",
    price: "31",
    tags: "كبسة",
  },
  {
    title: "Moussaka",
    price: "26",
    tags: "موساكا",
  },
];

const cocktails = [
  {
    title: "Hummus",
    price: "20",
    tags: "حمص",
  },
  {
    title: "Baba Ghanoush",
    price: "16",
    tags: "بابا غنوج",
  },
  {
    title: "Falafel",
    price: "10",
    tags: "فلافل",
  },
  {
    title: "Tabbouleh",
    price: "31",
    tags: "تبولح",
  },
  {
    title: "Fattoush",
    price: "26",
    tags: "فتوش",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "تقيمات ممتازة",
    subtitle: "مراجعات اجابية من الزبائن تجربة رائعة وافضل مطعم عربي",
  },
  {
    imgUrl: images.award01,
    title: "جوائز الطهي المتميزة",
    subtitle: "افضل طهي تقليدي - افضل مطعم عربي",
  },
  {
    imgUrl: images.award05,
    title: "شهادة الجودة",
    subtitle: " ISO شهادة توضح التزامنا بالجودة والسلامة الغذائية",
  },
  {
    imgUrl: images.award03,
    title: "التغطية الاعلامية",
    subtitle:
      "مطعمنا معروف في جميع انحاء الوطن العربي يقصده ملاين الزوار من اماكن مختلفة",
  },
];

export default { wines, cocktails, awards };
