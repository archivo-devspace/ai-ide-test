// Simple AI Cheat Sheet Data Structure
// Easy to read and maintain!

const cheatsheetData = [
    // ========================================
    // BASICS
    // ========================================
    {
        id: 1,
        category: 'basics',
        title: 'What is AI?',
        title_mm: 'AI ဆိုတာ ဘာလဲ?',
        description: 'Artificial Intelligence explained in simple terms for everyone.',
        description_mm: 'လူတိုင်းအတွက် လွယ်ကူသော အသုံးအနှုန်းများဖြင့် ရှင်းပြထားသော ဉာဏ်ရည်တု။',
        points: [
            'AI is computer software that can think and learn like humans',
            'Answers questions, creates images, writes text, recognizes faces',
            'Examples: ChatGPT, Siri, Google Assistant, Face ID',
            'AI learns from lots of examples, just like you learned to read'
        ],
        points_mm: [
            'AI သည် လူသားများကဲ့သို့ တွေးခေါ်သင်ယူနိုင်သော ကွန်ပျူတာဆော့ဖ်ဝဲဖြစ်သည်',
            'မေးခွန်းများဖြေဆိုခြင်း၊ ပုံများဖန်တီးခြင်း၊ စာရေးခြင်း၊ မျက်နှာများမှတ်မိခြင်း',
            'ဥပမာများ: ChatGPT၊ Siri၊ Google Assistant၊ Face ID',
            'သင် စာဖတ်သင်သကဲ့သို့ AI သည် ဥပမာပေါင်းများစွာမှ လေ့လာသင်ယူထားခြင်းဖြစ်သည်'
        ]
    },
    {
        id: 2,
        category: 'basics',
        title: 'What is a Token?',
        title_mm: 'Token ဆိုတာ ဘာလဲ?',
        description: 'Understanding tokens - the building blocks of AI conversations.',
        description_mm: 'Token များကို နားလည်ခြင်း - AI စကားပြောဆိုမှု၏ အခြေခံအုတ်မြစ်များ။',
        points: [
            'A token is a small piece of text (usually 3-4 letters)',
            'Example: "Hello world" = 2 tokens ("Hello" + "world")',
            'AI tools count tokens to measure how much you use',
            'Like SMS character limits - each token counts toward your limit'
        ],
        points_mm: [
            'Token သည် စာသား အစိတ်အပိုင်းငယ်တစ်ခုဖြစ်သည် (ပုံမှန်အားဖြင့် ၃-၄ လုံး)',
            'ဥပမာ: "Hello world" = Token ၂ ခု ("Hello" + "world")',
            'သင် မည်မျှအသုံးပြုသည်ကို တိုင်းတာရန် AI ကိရိယာများက Token များကို ရေတွက်သည်',
            'SMS စာတိုများကဲ့သို့ဖြစ်သည် - Token တစ်ခုစီသည် သင်၏ ကန့်သတ်ချက်ထဲမှ စာလုံးတစ်လုံးနှင့်တူသည်'
        ]
    },
    {
        id: 3,
        category: 'basics',
        title: 'What is a Model?',
        title_mm: 'Model ဆိုတာ ဘာလဲ?',
        description: 'AI models are like different versions of the AI brain.',
        description_mm: 'AI Model များသည် AI ဦးနှောက်၏ မတူညီသော ဗားရှင်းများကဲ့သို့ ဖြစ်သည်။',
        points: [
            'A model is a specific version of AI with different abilities',
            'GPT-4 is smarter but slower, GPT-3.5 is faster but simpler',
            'Like phones: iPhone 15 vs iPhone 12 - newer models can do more',
            'Common models: GPT-4, Claude, Gemini, Llama - each has strengths'
        ],
        points_mm: [
            'Model သည် မတူညီသော စွမ်းရည်များရှိသည့် AI ၏ သီးခြား ဗားရှင်းတစ်ခုဖြစ်သည်',
            'GPT-4 သည် ပိုတော်သော်လည်း နှေးသည်၊ GPT-3.5 သည် ပိုမြန်သော်လည်း ရိုးရှင်းသည်',
            'ဖုန်းများနှင့်တူသည်: iPhone 15 နှင့် iPhone 12 ကဲ့သို့ - မော်ဒယ်အသစ်များက ပိုလုပ်ဆောင်နိုင်သည်',
            'အသုံးများသော မော်ဒယ်များ: GPT-4၊ Claude၊ Gemini၊ Llama - တစ်ခုစီတွင် အားသာချက်များရှိသည်'
        ]
    },
    {
        id: 4,
        category: 'basics',
        title: 'What is a Prompt?',
        title_mm: 'Prompt ဆိုတာ ဘာလဲ?',
        description: 'How to ask AI questions the right way.',
        description_mm: 'AI ကို မေးခွန်းမေးရန် မှန်ကန်သော နည်းလမ်း။',
        points: [
            'A prompt is your question or instruction to the AI',
            'Good: "Write a 3-paragraph email to my boss about vacation"',
            'Bad: "Email" (too vague)',
            'Tip: Be specific! Tell the AI exactly what you want'
        ],
        points_mm: [
            'Prompt သည် AI သို့ သင်ပေးသော မေးခွန်း သို့မဟုတ် ညွှန်ကြားချက်ဖြစ်သည်',
            'ကောင်းသော: "ခွင့်ယူခြင်းအကြောင်း ကျွန်ုပ်၏အလုပ်ရှင်ထံ စာပိုဒ် ၃ ပိုဒ်ပါ အီးမေးလ်ရေးပေးပါ"',
            'မကောင်းသော: "အီးမေးလ်" (အဓိပ္ပါယ် မရှင်းလင်းပါ)',
            'အကြံပြုချက်: တိကျပါစေ! သင်ဘာလိုချင်သည်ကို AI အား အတိအကျပြောပါ'
        ]
    },
    {
        id: 5,
        category: 'basics',
        title: 'What is Training?',
        title_mm: 'Training ဆိုတာ ဘာလဲ?',
        description: 'How AI learns to be smart.',
        description_mm: 'AI သည် ဉာဏ်ရည်ထက်မြက်လာရန် မည်သို့ သင်ယူသည်။',
        points: [
            'Training is when AI reads millions of books and websites to learn',
            'Like school: Just like you learned from textbooks, AI learns from data',
            'Takes time: Training a big AI model can take weeks or months',
            'You can\'t train it: Most AI tools are already trained - you just use them'
        ],
        points_mm: [
            'Training ဆိုသည်မှာ AI က စာအုပ်များနှင့် ဝဘ်ဆိုဒ် သန်းပေါင်းများစွာကို ဖတ်ရှုလေ့လာခြင်းဖြစ်သည်',
            'ကျောင်းနှင့်တူသည်: သင် ကျောင်းသုံးစာအုပ်များမှ လေ့လာသကဲ့သို့ AI သည် ဒေတာများမှ လေ့လာသည်',
            'အချိန်ယူရသည်: AI မော်ဒယ်ကြီးတစ်ခုကို သင်ကြားပေးရာတွင် ရက်သတ္တပတ် သို့မဟုတ် လများစွာ ကြာနိုင်သည်',
            'သင် သင်ကြားပေးစရာမလိုပါ: AI ကိရိယာအများစုသည် သင်ကြားပေးပြီးသားဖြစ်သည် - သင် အသုံးပြုရုံသာဖြစ်သည်'
        ]
    },

    // ========================================
    // USING AI
    // ========================================
    {
        id: 6,
        category: 'using-ai',
        title: 'ChatGPT Basics',
        title_mm: 'ChatGPT အခြေခံများ',
        description: 'How to use ChatGPT effectively.',
        description_mm: 'ChatGPT ကို ထိရောက်စွာ အသုံးပြုနည်း။',
        points: [
            'A chatbot that can answer questions and help with tasks',
            'Free version uses GPT-3.5, paid ($20/month) uses GPT-4',
            'Best for: Writing, brainstorming, explaining concepts, coding help',
            'Can make mistakes, doesn\'t know events after its training date'
        ],
        points_mm: [
            'မေးခွန်းများကို ဖြေဆိုနိုင်ပြီး လုပ်ငန်းဆောင်တာများကို ကူညီပေးနိုင်သော chatbot ဖြစ်သည်',
            'အခမဲ့ဗားရှင်းက GPT-3.5 ကိုသုံးပြီး၊ ငွေပေးရသောဗားရှင်း ($20/လ) က GPT-4 ကိုသုံးသည်',
            'အကောင်းဆုံးအသုံးဝင်ပုံ: စာရေးခြင်း၊ အကြံဉာဏ်ထုတ်ခြင်း၊ အကြောင်းအရာများရှင်းပြခြင်း၊ ကုဒ်ရေးရာတွင်ကူညီခြင်း',
            'အမှားများလုပ်နိုင်သည်၊ ၎င်းသင်ယူခဲ့သည့်ရက်စွဲနောက်ပိုင်း အဖြစ်အပျက်များကို မသိပါ'
        ]
    },
    {
        id: 7,
        category: 'using-ai',
        title: 'Writing Better Prompts',
        title_mm: 'ပိုမိုကောင်းမွန်သော Prompt များ ရေးနည်း',
        description: 'Tips to get better answers from AI.',
        description_mm: 'AI ထံမှ ပိုမိုကောင်းမွန်သော အဖြေများ ရရှိရန် အကြံပြုချက်များ။',
        points: [
            'Be specific: "Write 5 fun facts about Golden Retrievers" not "Write about dogs"',
            'Give context: "I\'m a beginner" or "Explain like I\'m 10 years old"',
            'Set format: "Give me a bullet list" or "Write in 3 paragraphs"',
            'Ask follow-ups: If answer isn\'t perfect, ask AI to improve it'
        ],
        points_mm: [
            'တိကျပါစေ: "Golden Retrievers အကြောင်း စိတ်ဝင်စားဖွယ်အချက် ၅ ချက်ရေးပါ" ဟုပြောပါ',
            'နောက်ခံအကြောင်းအရာပေးပါ: "ကျွန်ုပ်သည် စတင်လေ့လာသူဖြစ်သည်" သို့မဟုတ် "၁၀ နှစ်အရွယ်ကလေးကဲ့သို့ ရှင်းပြပါ"',
            'ပုံစံသတ်မှတ်ပါ: "အချက်အလက်စာရင်းပေးပါ" သို့မဟုတ် "စာပိုဒ် ၃ ပိုဒ်ဖြင့်ရေးပါ"',
            'ဆက်လက်မေးမြန်းပါ: အဖြေက မပြည့်စုံပါက၊ ပိုကောင်းအောင်လုပ်ပေးရန် AI ကို တောင်းဆိုပါ'
        ]
    },
    {
        id: 8,
        category: 'using-ai',
        title: 'AI Image Generators',
        title_mm: 'AI ပုံထုတ်လုပ်ပေးသော ကိရိယာများ',
        description: 'Creating images with AI tools.',
        description_mm: 'AI ကိရိယာများဖြင့် ပုံများ ဖန်တီးခြင်း။',
        points: [
            'Popular tools: DALL-E, Midjourney, Stable Diffusion, Adobe Firefly',
            'How it works: Type a description, AI creates an image',
            'Example: "A sunset over mountains, watercolor style"',
            'Be descriptive - mention colors, style, mood, and details'
        ],
        points_mm: [
            'လူကြိုက်များသော ကိရိယာများ: DALL-E၊ Midjourney၊ Stable Diffusion၊ Adobe Firefly',
            'ဘယ်လိုလုပ်ဆောင်လဲ: ပုံဖော်ပြချက်ကို ရိုက်ထည့်ပါ၊ AI က ပုံတစ်ပုံ ဖန်တီးပေးလိမ့်မည်',
            'ဥပမာ: "တောင်တန်းများပေါ်မှ နေဝင်ချိန်၊ ရေဆေးပန်းချီပုံစံ"',
            'အသေးစိတ်ဖော်ပြပါ - အရောင်များ၊ ပုံစံ၊ ခံစားချက်နှင့် အသေးစိတ်အချက်များကို ထည့်သွင်းပြောပါ'
        ]
    },
    // ... Add remaining 32 items following the same simple pattern
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cheatsheetData;
}
