import { Product } from '../context/CartContext';
import productFlatlay from '../assets/images/product-flatlay.jpeg';
import whiteJar from '../assets/images/white-jar-elegant.jpeg';
import lipBalm2 from '../assets/images/lip-balm-alt.jpeg';
import premiumSerum from '../assets/images/premium-serum.jpeg';
import lipBalm from '../assets/images/lip-balm.jpeg';
import pumpBottle from '../assets/images/pump-bottle.jpeg';
import pumpBottle2 from '../assets/images/pump-bottle-alt.jpeg';
import heroBanner2 from '../assets/images/hero-banner-2.jpeg';

export const products: Product[] = [
  { 
    id: 1, 
    name: "مجموعة العناية المتكاملة", 
    name_en: "Total Care Collection",
    description: "مجموعة متكاملة للعناية بالبشرة مع الفازلين الكلاسيكي المعالج.", 
    description_en: "A comprehensive skin care set featuring the classic healing Vaseline.",
    longDescription: "تجمع هذه المجموعة الفريدة بين الهلام النفطي النقي والمرطبات الكلاسيكية لتحصلي على بشرة ناعمة ومرطبة بعمق وحماية تدوم طوال اليوم.",
    longDescription_en: "This unique set combines pure petroleum jelly and classic moisturizers to give you soft, deeply hydrated skin and protection that lasts all day.",
    price: "189.00", 
    image: productFlatlay,
    category: "مجموعات العناية",
    category_en: "Care Sets",
    ingredients: "مستخلصات تنقية ثلاثية، جل بترولي نقي 100%.",
    ingredients_en: "Triple-purification extracts, 100% pure petroleum jelly.",
    usage: "نظام متكامل للعناية اليومية. استخدمي اللوشن بعد الاستحمام والفازلين للأماكن شديدة الجفاف.",
    usage_en: "Complete daily care system. Use the lotion after bathing and Vaseline for extra dry areas.",
    rating: 5
  },
  { 
    id: 2, 
    name: "كريم الإشراقة الذهبية", 
    name_en: "Golden Radiance Cream",
    description: "كريم ليلي مكثف يعيد حيوية البشرة بلمسة ذهبية فاخرة.", 
    description_en: "Intensive night cream that restores skin vitality with a luxurious golden touch.",
    longDescription: "يجمع هذا الكريم الفاخر بين سر الترطيب العميق ومستخلصات مجددة للخلايا. تم تصميم عبوته الذهبية المميزة لمنحك شعوراً بالفخامة وحيوية لا مثيل لها.",
    longDescription_en: "This luxury cream combines the secret of deep hydration with cell-renewing extracts. Its signature golden packaging is designed to give you a sense of luxury and unmatched vitality.",
    price: "89.00", 
    image: whiteJar,
    category: "كريمات الوجه والجسم",
    category_en: "Face & Body Creams",
    ingredients: "جل بترولي معالج، فيتامين هـ، مستخلصات نباتية ذهبية، زبدة الشيا.",
    ingredients_en: "Treated petroleum jelly, Vitamin E, golden plant extracts, Shea butter.",
    usage: "خذي كمية مناسبة ودلكيها على بشرة نظيفة قبل النوم للحصول على أقصى ترطيب.",
    usage_en: "Take a suitable amount and massage it onto clean skin before bed for maximum hydration.",
    rating: 5
  },
  { 
    id: 3, 
    name: "زبدة الشفاه الملكية", 
    name_en: "Royal Lip Butter",
    description: "زبدة شفاه غنية تذوب لتغذيها بعمق وتمنحها مظهراً مشرقاً.", 
    description_en: "Rich lip butter that melts away to deeply nourish and give you a radiant look.",
    longDescription: "تتميز هذه الزبدة بقوامها الكثيف الذي يذوب بمجرد ملامستها للشفاه. مصممة لتنعيم أكثر المناطق جفافاً ومنح الشفاه ملمساً حريرياً ناعماً وتوهجاً ملكياً.",
    longDescription_en: "This butter features a thick texture that melts on contact with the lips. Designed to soften the driest areas and give lips a silky smooth feel and a royal glow.",
    price: "115.00", 
    image: lipBalm2,
    category: "مراهم الشفاه",
    category_en: "Lip Balms",
    ingredients: "مزيج من زبدة الكاكاو والشيا، زيوت طبيعية مركزة.",
    ingredients_en: "Blend of cocoa and shea butter, concentrated natural oils.",
    usage: "ضعيها على الشفاه الجافة والمتشققة كعناية يومية مكثفة.",
    usage_en: "Apply it on dry and chapped lips as an intensive daily care.",
    rating: 5
  },
  { 
    id: 4, 
    name: "مصل الجمال السحري", 
    name_en: "Magic Beauty Serum",
    description: "مصل سحري بتركيبة خفيفة وسريعة الامتصاص لحماية فائقة.", 
    description_en: "Magic serum with a light, fast-absorbing formula for superior protection.",
    longDescription: "تأتي بعبوة أنيقة بتركيبة متطورة تعمل على بناء حاجز واقي للبشرة ويحميها من العوامل البيئية بقوام خفيف جداً، مما يمنحك نضارة سحرية.",
    longDescription_en: "Comes in elegant packaging with an advanced formula that builds a protective skin barrier against environmental factors with a very light texture, giving you magical freshness.",
    price: "145.00", 
    image: premiumSerum,
    category: "سيرومات الوجه",
    category_en: "Face Serums",
    ingredients: "حمض الهيالورونيك، خلاصة الصبار، مستخلصات عشبية.",
    ingredients_en: "Hyaluronic acid, Aloe Vera extract, herbal extracts.",
    usage: "دلكي قطرات قليلة بلطف على الوجه والرقبة يومياً قبل وضع المرطب.",
    usage_en: "Gently massage a few drops onto the face and neck daily before applying moisturizer.",
    rating: 5
  },
  { 
    id: 5, 
    name: "مرطب الشفاه المخملي", 
    name_en: "Velvet Lip Balm",
    description: "مرطب مخصص للعناية السريعة والترطيب الفوري للشفاه.", 
    description_en: "Special balm for fast care and instant lip hydration.",
    longDescription: "في عبوة أنبوبية أنيقة، يأتي هذا مرطب ليذكرك كل يوم بالاهتمام بشفتيك. مصمم للترطيب السريع أثناء التنقل بدون أي أثر دهني مزعج.",
    longDescription_en: "In elegant tube packaging, this balm reminds you every day to care for your lips. Designed for fast hydration on-the-go without any annoying greasy residue.",
    price: "65.00", 
    image: lipBalm,
    category: "مراهم الشفاه",
    category_en: "Lip Balms",
    ingredients: "خلاصة البابونج، نعناع ملطف، جلسرين نباتي.",
    ingredients_en: "Chamomile extract, soothing mint, vegetable glycerin.",
    usage: "استخدميه متى شعرتِ بجفاف شفتيك خلال اليوم.",
    usage_en: "Use it whenever your lips feel dry during the day.",
    rating: 4
  },
  { 
    id: 6, 
    name: "لوشن الهارون الحريري", 
    name_en: "Al Harun Silky Lotion",
    description: "لوشن غني للبشرة الحساسة والجافة جداً يمنحها نعومة الحرير.", 
    description_en: "Rich lotion for sensitive and very dry skin that gives it silky softness.",
    longDescription: "بفضل تركيبته السلسة في عبوة المضخة العملية الفاخرة، يوفر لوشن الهارون ترطيباً يدوم. تركيبته اللطيفة تناسب البشرات التي تحتاج لعناية فائقة وتغليف مائي مكثف.",
    longDescription_en: "Thanks to its smooth formula in a luxurious practical pump bottle, Al Harun lotion provides long-lasting hydration. Its gentle formula suits skin that needs superior care and intensive hydration.",
    price: "95.00", 
    image: pumpBottle,
    category: "مرطبات الجسم",
    category_en: "Body Lotions",
    ingredients: "زيت اللوز الحلو، نسبة عالية من الجلسرين، ماء مقطر نقي.",
    ingredients_en: "Sweet almond oil, high glycerin content, pure distilled water.",
    usage: "اضغطي المضخة واستخدمي اللوشن بحرية على كامل الجسم لمزيد من المرونة.",
    usage_en: "Press the pump and use the lotion freely on the entire body for more elasticity.",
    rating: 5
  },
  { 
    id: 7, 
    name: "لوشن العناية الكلاسيكية بالمضخة", 
    name_en: "Classic Care Pump Lotion",
    description: "لوشن العناية الكلاسيكية بعبوة مضخة عملية لترطيب يومي مريح.", 
    description_en: "Classic care lotion with a practical pump bottle for comfortable daily hydration.",
    longDescription: "لوشن غني مصمم خصيصاً للاستخدام اليومي المريح عبر العبوة ذات المضخة. يمنح إحساساً بالنعومة والانتعاش بينما يعمل على استعادة ترطيب البشرة ليتركها بملمس مخملي أبيض.",
    longDescription_en: "Rich lotion specially designed for comfortable daily use via the pump bottle. It gives a sense of softness and freshness while working to restore skin hydration, leaving it with a white velvet feel.",
    price: "85.00", 
    image: pumpBottle2,
    category: "مرطبات الجسم",
    category_en: "Body Lotions",
    ingredients: "مستخلصات مسكنة وملطفة، مرطبات نباتية كلاسيكية.",
    ingredients_en: "Analgesic and soothing extracts, classic plant moisturizers.",
    usage: "مثالي للاستخدام اليومي بعد الاستحمام لكافة مناطق الجسم.",
    usage_en: "Ideal for daily use after bathing for all areas of the body.",
    rating: 4
  },
  { 
    id: 8, 
    name: "مجموعة الإشراقة الفاخرة", 
    name_en: "Luxury Radiance Set",
    description: "مجموعة فاخرة لعناية متكاملة بإشراقة ساحرة.", 
    description_en: "Luxury set for complete care with an enchanting glow.",
    longDescription: "ارتقي بروتين العناية الخاص بك مع مجموعة الإشراقة الفاخرة التي توفر التغذية العميقة واللمسة الحريرية لبشرتك.",
    longDescription_en: "Elevate your care routine with the Luxury Radiance Set that provides deep nourishment and a silky touch to your skin.",
    price: "220.00", 
    image: heroBanner2,
    category: "مجموعات العناية",
    category_en: "Care Sets",
    ingredients: "خلاصات طبيعية مركزة، فيتامينات متعددة.",
    ingredients_en: "Concentrated natural extracts, multivitamins.",
    usage: "استخدمي منتجات المجموعة كروتين ليلي مكثف.",
    usage_en: "Use the collection's products as an intensive night routine.",
    rating: 5
  }
];

export const categories = [
  { name: "مجموعات العناية", name_en: "Care Sets", image: productFlatlay, id:"care-sets" },
  { name: "مرطبات الجسم", name_en: "Body Lotions", image: pumpBottle, id:"body-lotion" },
  { name: "كريمات الوجه والجسم", name_en: "Creams", image: whiteJar, id:"creams" },
  { name: "سيرومات الوجه", name_en: "Serums", image: premiumSerum, id:"serums" },
  { name: "مراهم الشفاه", name_en: "Lip Balms", image: lipBalm, id:"lip-balms" },
];
