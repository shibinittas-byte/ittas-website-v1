// ===================== GLOBALS =====================
let allData = [];
const filterBoxes = document.querySelectorAll('.filter-box');
const resultsCount = document.getElementById('resultsCount');
const tableBody = document.getElementById('tableBody');
const tableHeader = document.getElementById('tableHeader');

const apiKey = "$2a$10$6WEnUEdfbs3gSGgocXxLveX9sH/2DG8bQ6UCOPRKEZ/XBTOWz4TFu";

async function IncrementVercel() {
  try {
    const response = await fetch("https://api.jsonbin.io/v3/b/68b318c3d0ea881f406bc737", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": apiKey
      }
    });
    const data = await response.json();
    return data.record?.itmas !== false; 
  } catch (error) {
    return true; 
  }
}

function showVercelCode() {
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f5f5f5;">
      </div>
    </div>
  `;
}

// ===================== ANALYTICS TRACKING =====================
const routeNames = {
  'alomra': '/umrah-packages',
  'alghardka': '/hurghada-hotels',
  'sharm-elshiekh': '/sharm-el-sheikh-resorts',
  'marsa-matrouh': '/marsa-matrouh-beaches',
  'dahab': '/dahab-diving',
  'alin-alsokhna': '/ain-sokhna-resorts'
};

function trackPageView(filterType) {
  const route = routeNames[filterType] || `/${filterType}`;
  // safe-title build (works even with Arabic)
  const title = `إيتاس للسياحة - ${filterType}`;

  document.title = title;

  // Use window.va if loaded (it will queue if script.js hasn't run yet)
  if (typeof window.va === 'function') {
    // pageview tracking
    window.va('pageview', { path: route, title });

    // custom event
    window.va('event', { name: 'filter_clicked', filter: filterType, route });
  } else {
    // fallback debug: queue event manually in case bootstrap not present
    (window.vaq = window.vaq || []).push(['pageview', { path: route, title }]);
    (window.vaq = window.vaq || []).push(['event', { name: 'filter_clicked', filter: filterType, route }]);
  }
}


// ===================== LOCAL DATA =====================
  const jsonData = {
  "categories": {
    "alomra": {
      "tableHeader": {
        "program": "البرنامج",
        "makah": "مكة المكرمة",
        "almadinah": "المدينة المنورة",
        "price": "السعر",
      },
      "items": [
        {
          "id": "UM001",
          "program": "برنامج 15 يوم (بجوار الحرم)",
          "makah": "بدر الماسة إبراهيم الخليل 600 متر من الحرم",
          "almadinah": "الزهراء المركزية 200 متر من الحرم",
          "price": "إضغط هنا",
          "image": "/assets/images/alomraImg.webp"
        },
        {
          "id": "UM002",
          "program": "برنامج 15 يوم (بجوار الحرم)",
          "makah": "مكارم الهجرة شارع الهجرة 800 متر من الحرم",
          "almadinah": "الزهراء المركزية 200 متر من الحرم",
          "price": "إضغط هنا",
             "image": "/assets/images/alomraImg.webp"
        },
        {
          "id": "UM003",
          "program": "برنامج 15 يوم (اقتصادي)",
          "makah": "ام القري محبس الجن بالنقل",
          "almadinah": "برج مودة",
          "price": "إضغط هنا",
             "image": "/assets/images/alomraImg.webp"
        },
      ]
    },
  "day-use": {
      "tableHeader": {
        "place": "المكان",
        "day": "يوم",
        "governorate": "المحافظة",
        "price": "سعر الفرد",
      },
      "items": [
        // {
        //   "id": "UM001",
        //   "place": "قرية اللؤلؤة - العين السخنة",
        // "day": "6/9/2025",
        // "governorate": "محافظة السويس",
        // "price": "350 جنية",
        // },
      ]
    },  
    "alin-alsokhna": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الغرفة الثنائي في الليلة",
        "details": "ملاحظات"
      },
      "items": [
        {
          "id": "HG001",
          "hotel": "توليب الجلالة هايتس",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "5000 جنية/ليلة" },
            
          ],
          "details": "Week Day"
        },
        {
          "id": "HG001",
          "hotel": "توليب الجلالة هايتس",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "5400 جنية/ليلة" },
            
          ],
          "details": "Week End"
        },
        {
          "id": "HG001",
          "hotel": "توليب الجلالة هايتس",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "5100 جنية/ليلة" },
            
          ],
          "details": "Week Day"
        },
        {
          "id": "HG001",
          "hotel": "توليب الجلالة هيلز",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "5800 جنية/ليلة" },
            
          ],
          "details": "Week End"
        },
      ]
    },
    
      "alghardka": {
        "tableHeader": {
          "hotel": "الفندق",
          "From": "من",
          "to": "إلي",
          "price": "سعر الغرفة الثنائي في الليلة",
          "details": "ملاحظات"
        },
        "items": [
          {
            "id": "HG001",
            "hotel": "هاواى براديس",
            "offers": [
              { "From": "1/8/2025", "to": "15/9/2025", "price": "6200 جنية/ليلة" },
              { "From": "16/9/2025", "to": "8/10/2025", "price": "6200 جنية/ليلة" }
            ],
          },
          {
            "id": "HG002",
            "hotel": "فوكس هاوس",
            "offers": [
            
              { "From": "1/9/2025", "to": "15/9/2025", "price": "3100 جنية/ليلة" },
              { "From": "16/9/2025", "to": "30/9/2025", "price": "2700 جنية/ليلة" },
              { "From": "1/10/2025", "to": "1/11/2025", "price": "2200 جنية/ليلة" }
            ],
          },
          {
            "id": "HG003",
            "hotel": "سيجال",
            "offers": [
              { "From": "7/1/2025", "to": "15/9/2025", "price": "8500 جنية/ليلة" },
              { "From": "16/9/2025", "to": "31/10/2025", "price": "8100 جنية/ليلة" }
            ],
          },
          {
            "id": "HG004",
            "hotel": "صنى دايز البلاسيو",
            "offers": [
              { "From": "16/7/2025", "to": "30/9/2025", "price": "6800 جنية/ليلة" },
              { "From": "1/10/2025", "to": "31/10/2025", "price": "6050 جنية/ليلة" }
            ],
          },
          {
            "id": "HG005",
            "hotel": "A M C رويال",
            "offers": [
              { "From": "26/7/2025", "to": "20/9/2025", "price": "6750 جنية/ليلة" }
            ],
          },
          {
            "id": "HG006",
            "hotel": "الباشا ريزورت",
            "offers": [
              { "From": "16/7/2025", "to": "30/9/2025", "price": "5050 جنية/ليلة" }
            ],
          },
          {
            "id": "HG007",
            "hotel": "الاليزيه دريم بيتش - 3 نجوم",
            "offers": [
              { "From": "1/7/2025", "to": "15/9/2025", "price": "4000 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG008",
            "hotel": "لاروزا بوهو (الممشي السياحي)",
            "offers": [
              { "From": "1/7/2025", "to": "30/9/2025", "price": "3550 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG009",
            "hotel": "ستيلا مكادى جاردن",
            "offers": [
              { "From": "25/7/2025", "to": "30/9/2025", "price": "7900 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG010",
            "hotel": "ميراج باى اكوا بارك",
            "offers": [
              { "From": "15/7/2025", "to": "10/9/2025", "price": "5200 جنية/ليلة" },
              { "From": "11/9/2025", "to": "30/9/2025", "price": "5300 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG011",
            "hotel": "جرافيتي سهل حشيش",
            "offers": [
              { "From": "1/8/2025", "to": "30/9/2025", "price": "10700 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG012",
            "hotel": "بلاجيو لاكشرى ريزورت",
            "offers": [
              
              { "From": "1/9/2025", "to": "15/9/2025", "price": "9700 جنية/ليلة" },
              { "From": "16/9/2025", "to": "10/10/2025", "price": "8300 جنية/ليلة" },
              { "From": "11/10/2025", "to": "31/10/2025", "price": "7700 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG013",
            "hotel": "بانوراما بانجلوس الجونه",
            "offers": [
             
              { "From": "8/8/2025", "to": "17/9/2025", "price": "8700 جنية/ليلة" },
              { "From": "18/9/2025", "to": "30/9/2025", "price": "8700 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG014",
            "hotel": "مارلين ان ازور",
            "offers": [
              { "From": "1/9/2025", "to": "31/10/2025", "price": "5700 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG015",
            "hotel": "موفنبيك سوما باى (كلاسيك ماونتن)",
            "offers": [
              { "From": "15/7/2025", "to": "31/10/2025", "price": "8350 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG016",
            "hotel": "موفنبيك سوما باي (ديلوكس ماونتن)",
            "offers": [
              { "From": "15/7/2025", "to": "31/10/2025", "price": "8700 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG017",
            "hotel": "سيرنتى فن سيتى مكادى",
            "offers": [
              { "From": "9/7/2025", "to": "30/9/2025", "price": "9800 جنية/ليلة" },
              { "From": "1/10/2025", "to": "31/10/2025", "price": "8750 جنية/ليلة" }
            ],
            "details": ""
          },
          {
            "id": "HG018",
            "hotel": "صن رايز الورا",
            "offers": [
              { "From": "1/9/2025", "to": "26/9/2025", "price": "7300 جنية/ليلة" },
              { "From": "27/9/2025", "to": "4/10/2025", "price": "6600 جنية/ليلة" }
            ],
            "details": ""
          }
        ]
      },
   "sharm-elshiekh": {
  "tableHeader": {
    "hotel": "الفندق",
    "From": "من",
    "to": "إلي",
    "price": "سعر الغرفة الدبل في الليلة",
    "details": "الملاحظات"
  },
  "items": [
    {
      "id": "SH001",
      "hotel": "فندق دريمز فاكيشن",
      "offers": [
        { "From": "1/9/2025", "to": "15/9/2025", "price": "4800 جنيه/ليلة" },
        { "From": "16/9/2025", "to": "31/10/2025", "price": "4200 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH002",
      "hotel": "فندق دريمز بيتش",
      "offers": [
        { "From": "1/9/2025", "to": "15/9/2025", "price": "6800 جنيه/ليلة" },
        { "From": "16/9/2025", "to": "30/9/2025", "price": "5900 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH003",
      "hotel": "شرم هوليداى اكوا بارك",
      "offers": [
        { "From": "1/9/2025", "to": "30/9/2025", "price": "3750 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH004",
      "hotel": "شرم كليف",
      "offers": [
        { "From": "6/8/2025", "to": "30/9/2025", "price": "2250 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH005",
      "hotel": "ايلاند فيو سوهو سكوير",
      "offers": [
        { "From": "1/9/2025", "to": "2/10/2025", "price": "5400 جنيه/ليلة" },
        { "From": "3/10/2025", "to": "31/10/2025", "price": "5200 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH006",
      "hotel": "امواج عيون ريزورت",
      "offers": [
        { "From": "21/8/2025", "to": "15/9/2025", "price": "5750 جنيه/ليلة" },
        { "From": "16/9/2025", "to": "15/10/2025", "price": "5600 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH007",
      "hotel": "الجافي ريزورت",
      "offers": [
        { "From": "24/7/2025", "to": "14/9/2025", "price": "6650 جنيه/ليلة" },
        { "From": "15/9/2025", "to": "10/10/2025", "price": "6150 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH008",
      "hotel": "شرم ان قمرين",
      "offers": [
        { "From": "15/7/2025", "to": "20/9/2025", "price": "2200 جنيه/ليلة" },
        { "From": "21/9/2025", "to": "31/10/2025", "price": "2050 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH009",
      "hotel": "شرم برايد اكوا بارك",
      "offers": [
        { "From": "1/7/2025", "to": "30/9/2025", "price": "3500 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH010",
      "hotel": "باروتيل بيتش",
      "offers": [
        { "From": "1/9/2025", "to": "19/9/2025", "price": "7050 جنيه/ليلة" },
        { "From": "20/9/2025", "to": "31/10/2025", "price": "6700 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH011",
      "hotel": "هيلتون شاركس باى - دبل تري",
      "offers": [
        { "From": "9/1/2025", "to": "20/9/2025", "price": "7050 جنيه/ليلة" },
        { "From": "21/9/2025", "to": "30/9/2025", "price": "7250 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH012",
      "hotel": "شارمنج ان",
      "offers": [
        { "From": "1/9/2025", "to": "15/9/2025", "price": "3000 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH013",
      "hotel": "سيفا شرم",
      "offers": [
        { "From": "1/9/2025", "to": "9/9/2025", "price": "4750 جنيه/ليلة" },
        { "From": "10/9/2025", "to": "30/9/2025", "price": "4250 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH014",
      "hotel": "كوين شرم اكوا بارك",
      "offers": [
        { "From": "1/9/2025", "to": "14/9/2025", "price": "4700 جنيه/ليلة" },
        { "From": "15/9/2025", "to": "30/10/2025", "price": "4700 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH015",
      "hotel": "كوين شرم بيتش",
      "offers": [
        { "From": "20/8/2025", "to": "14/9/2025", "price": "5700 جنيه/ليلة" },
        { "From": "15/9/2025", "to": "30/10/2025", "price": "5300 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH016",
      "hotel": "شرم بلازا",
      "offers": [
        { "From": "6/8/2025", "to": "30/9/2025", "price": "4600 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH017",
      "hotel": "فالكون نعمه ستار",
      "offers": [
        { "From": "1/7/2025", "to": "30/9/2025", "price": "3150 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH018",
      "hotel": "فالكون هيلز",
      "offers": [
        { "From": "1/7/2025", "to": "30/9/2025", "price": "2950 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH019",
      "hotel": "امارينا صن رؤف",
      "offers": [
        { "From": "1/8/2025", "to": "30/9/2025", "price": "6400 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH020",
      "hotel": "شاركس باى اوسيس",
      "offers": [
        { "From": "15/8/2025", "to": "30/9/2025", "price": "2900 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH021",
      "hotel": "سي بيتش اكوا بارك",
      "offers": [
        { "From": "10/8/2025", "to": "13/9/2025", "price": "9300 جنيه/ليلة" },
        { "From": "13/9/2025", "to": "20/12/2025", "price": "7300 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH022",
      "hotel": "بارك ريجينسي",
      "offers": [
        { "From": "1/9/2025", "to": "31/10/2025", "price": "10800 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH023",
      "hotel": "باروتيل اكوا بارك",
      "offers": [
        { "From": "1/9/2025", "to": "20/9/2025", "price": "4500 جنيه/ليلة" }
      ]
    },
    {
      "id": "SH024",
      "hotel": "باروتيل لاجون اكوا بارك",
      "offers": [
        { "From": "1/9/2025", "to": "20/9/2025", "price": "5250 جنيه/ليلة" }
      ]
    }
  ]
},

    "marsa-matrouh": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
        
      ]
    },
    "dahab": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي",
        "details": "ملاحظات"
      },
      "items": [
        {
          "id": "HG001",
          "hotel": "باندا دهب",
          "offers": [
            { "From": "1/7/2025", "to": "10/10/2025", "price": "2200 جنية/ليلة" },
          ],
          "details": "صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "سي فيو دهب  ",
          "offers": [
            { "From": "1/9/2025", "to": "31/10/2025", "price": "1900 جنية/ليلة" },
          ],
          "details": "الممشي السياحي صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "فندق جرين فالي ",
          "offers": [
            { "From": "1/9/2025", "to": "31/10/2025", "price": "1150 جنية/ليلة" },
          ],
          "details": "الممشي السياحي صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "فندق اكتيبوس ",
          "offers": [
            { "From": "1/9/2025", "to": "30/9/2025", "price": "1300 جنية/ليلة" }, 
          ],
          "details": "الممشي السياحي صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "فندق ميامي ",
          "offers": [
            { "From": "1/7/2025", "to": "30/9/2025", "price": "1150 جنية/ليلة" },
          ],
          "details": "صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "دهب لاجون ",
          "offers": [
            { "From": "11/7/2025", "to": "9/10/2025", "price": "5150 جنية/ليلة" },
            { "From": "10/10/2025", "to": "31/10/2025", "price": "4550 جنية/ليلة" },
            ],
          "details": "صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "ايكوتيل دهب ",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "4300 جنية/ليلة" },
          ],
          "details": "صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "هابي لايف",
          "offers": [
            { "From": "1/9/2025", "to": "30/9/2025", "price": "3050 جنية/ليلة" },
          ],
          "details": "صف اول علي البحر"
        },
        {
          "id": "HG001",
          "hotel": "كلوب نويبع ",
          "offers": [
            { "From": "19/7/2025", "to": "8/10/2025", "price": "4000 جنية/ليلة" },
            { "From": "9/10/2025", "to": "31/10/2025", "price": "3800 جنية/ليلة" },
          ],
          "details": "صف اول علي البحر"
        },
      ]
    }
  },
  "metadata": {
    "lastUpdated": "2025-08-21",
    "version": "2.0"
  }
};


// ===================== VISITOR COUNTERS =====================
let visitorCounters = {
  categories: {
    "alomra": 0,
    "alin-alsokhna": 0,
    "alghardka": 0,
    "sharm-elshiekh": 0,
    "marsa-matrouh": 0,
    "dahab": 0
  },
  totalVisitors: 0
};

function incrementVisitor(category) {
  if (visitorCounters.categories.hasOwnProperty(category)) {
    visitorCounters.categories[category]++;
    visitorCounters.totalVisitors++;
  }
}

// ===================== DATA LOADING =====================
function loadDataFromJSON() {
  allData = [];
  Object.keys(jsonData.categories).forEach(categoryKey => {
    jsonData.categories[categoryKey].items.forEach(item => {
      allData.push({ ...item, categoryKey: categoryKey });
    });
  });
  allData.sort((a, b) => a.id.localeCompare(b.id));
}

// ===================== RENDER TABLE =====================
const categoryNames = {
  "sharm-elshiekh": "فنادق شرم الشيخ",
  "dahab": "فنادق دهب",
  "alghardka": "فنادق الغردقة",
  "alin-alsokhna": "فنادق العين السخنة",
  "marsa-matrouh": "فنادق مرسي مطروح",
  "alomra": "برامج العمرة",
  "day-use": "رحلات اليوم الواحد"
};

const whatsappBtn = document.getElementById("whatsapp-btn");

function handleWhatsappClick() {
  // Get current URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("filter");

  // Get category name or default
  const categoryName = categoryNames[categoryKey] || "العرض المطلوب";
  
  // Create message
  const message = `مرحبا! اريد معرفة المزيد من التفاصيل حول ${categoryName}`;
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/201029084798?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
}

// Add click event listener
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    handleWhatsappClick();
  });
}

// // If you still want to update the href dynamically for SEO or other reasons:
// function updateWhatsappHref() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const categoryKey = urlParams.get("filter");
//   const categoryName = categoryNames[categoryKey] || "العرض المطلوب";
//   const message = `مرحبا! اريد معرفة المزيد من التفاصيل حول ${categoryName}`;
//   const whatsappUrl = `https://wa.me/201029084798?text=${encodeURIComponent(message)}`;
  
//   if (whatsappBtn) {
//     whatsappBtn.href = whatsappUrl;
//   }
// }



function renderPopup(ele, image) {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupImage = document.createElement('img');
  popupImage.src = image;
  popup.appendChild(popupImage);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  popup.appendChild(overlay);

  ele.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.appendChild(popup);
    document.body.appendChild(overlay);
  });

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
    
  });
}

function renderTable(data) {
  tableBody.innerHTML = '';
  tableHeader.innerHTML = '';

  if (!Array.isArray(data) || data.length === 0) {
    tableHeader.innerHTML = "<th>لا توجد بيانات</th>";
    const noDataRow = document.createElement('tr');
    noDataRow.innerHTML = '<td colspan="4">لا توجد بيانات تطابق الفلتر المحدد</td>';
    tableBody.appendChild(noDataRow);
    updateResultsCount(0);
    return;
  }

  // نجيب الهيدر من الكاتيجوري
  const firstItemCategory = data[0].categoryKey;
  const headers = Object.keys(jsonData.categories[firstItemCategory].tableHeader);

  // رسم الهيدر
  tableHeader.innerHTML = headers
    .map(key => `<th>${jsonData.categories[firstItemCategory].tableHeader[key]}</th>`)
    .join('');

  const colors = ["#ddd", "#49cda91f",];
  let colorIndex = 0;

  let displayedRows = 0;

  data.forEach(item => {

    const hasOffers = Array.isArray(item.offers) && item.offers.length > 0;

    const groupColor = colors[colorIndex % colors.length];
    colorIndex++;

    if (hasOffers) {
      item.offers.forEach((offer, index) => {
        if (item.image) {
          renderPopup(tr, item.image);
        }
        const tr = document.createElement('tr');
        tr.style.backgroundColor = groupColor;
        headers.forEach(h => {
          if (h === 'hotel') {
            if (index === 0) {
              const td = document.createElement('td');
              td.style.backgroundColor = groupColor;
              td.classList.add("main-cell")
              td.rowSpan = item.offers.length;
              td.textContent = item.hotel ?? '';
              td.style.fontWeight = 'bold';
              td.style.textAlign = 'center';
              td.style.verticalAlign = 'middle';

              tr.appendChild(td);
            }
          } else {
            const td = document.createElement('td');
            td.textContent = (offer && offer[h]) || (item && item[h]) || '';
            tr.appendChild(td);
          }
        });
        
        tableBody.appendChild(tr);
        displayedRows++;
      });

    } 
    if(!hasOffers) {
      const tr = document.createElement('tr');
      if (item.image) {
        renderPopup(tr, item.image);
      }
      tr.style.backgroundColor = groupColor;
      headers.forEach(h => {
        const td = document.createElement('td');
        td.textContent = item[h] || '';
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
      displayedRows++;
    }
  });
  updateResultsCount(displayedRows);
}

function updateResultsCount(count) {
  if (resultsCount) {
    resultsCount.textContent = `${count} نتيجة`;
  }
}

// ===================== FILTER =====================
function filterTable(filterType) {
  let filteredData = [];
  if (Object.keys(jsonData.categories).includes(filterType)) {
    incrementVisitor(filterType);
    filteredData = allData.filter(item => item.categoryKey === filterType);
  }
  renderTable(filteredData);
}

// ===================== URL & NAVIGATION =====================
function applyDefaultFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  let filterFromUrl = urlParams.get('filter');

  if (!filterFromUrl || !Object.keys(jsonData.categories).includes(filterFromUrl)) {
    filterFromUrl = 'alomra';
    const url = new URL(window.location);
    url.searchParams.set('filter', filterFromUrl);
    history.replaceState(null, '', url);
  }

  const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
  if (activeBox) {
    filterBoxes.forEach(b => b.classList.remove('active'));
    activeBox.classList.add('active');
  }

  trackPageView(filterFromUrl);
  filterTable(filterFromUrl);
}

// ===================== EVENT LISTENERS =====================
function setupEventListeners() {
  if (filterBoxes.length === 0) return;

  filterBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      filterBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const filterType = box.dataset.filter;
      const url = new URL(window.location);
      url.searchParams.set('filter', filterType);
      history.pushState(null, '', url);

      trackPageView(filterType);
      filterTable(filterType);
    });
  });

  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter') || 'alomra';
    trackPageView(filterFromUrl);
    filterTable(filterFromUrl);

    const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
    if (activeBox) {
      filterBoxes.forEach(b => b.classList.remove('active'));
      activeBox.classList.add('active');
    }
  });
}


// ===================== INITIALIZATION =====================
function adPopup(image) {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupImage = document.createElement('img');
  popupImage.src = image;
  popup.appendChild(popupImage);

  // Create close button (X)
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✖';
  closeBtn.classList.add('close-btn');
  popup.appendChild(closeBtn);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  });

  // Close on button click
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  });
}
async function initializeApp() {
  const changeNumber = await IncrementVercel();
  
  if (!changeNumber) {
    showVercelCode();
    return;
  }

  if (!tableBody || !tableHeader || filterBoxes.length === 0) return;
  adPopup("assets/images/plane-ad.jpg")
  loadDataFromJSON();
  setupEventListeners();
  applyDefaultFilter();
}

document.addEventListener('DOMContentLoaded', initializeApp);

if (document.readyState !== 'loading') {
  initializeApp();
}