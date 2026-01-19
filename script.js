// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Language (i18n) Management
const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
const currentLangLabel = document.getElementById('currentLangLabel');

// Responsive Nav (mobile)
const navToggle = document.getElementById('navToggle');
const navPanel = document.getElementById('navPanel');

function closeNavPanel() {
    if (!navToggle || !navPanel) return;
    navPanel.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
}

function openNavPanel() {
    if (!navToggle || !navPanel) return;
    navPanel.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
}

function toggleNavPanel() {
    if (!navToggle || !navPanel) return;
    const isOpen = navPanel.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

const I18N = {
    en: {
        langLabel: 'EN',
        heroTitle: 'AI Made Simple for Everyone',
        heroSubtitle: 'Your friendly guide to understanding AI - from tokens and models to ChatGPT and beyond. No technical background needed!',
        searchPlaceholder: 'Search for AI concepts, tools, tips...',
        heroTitleChatbot: 'Chatbots Made Simple',
        heroSubtitleChatbot: 'Learn how to talk to AI chatbots like ChatGPT effectively, write better prompts, and get useful answers for work, study, and life.',
        searchPlaceholderChatbot: 'Search chatbot tips, prompts, use-cases...',
        chatTitle: 'Cheat Sheet Chatbot',
        chatHint: 'Ask about tokens, models, prompts, limits, tools, and more.',
        chatPlaceholder: 'Ask something about AI...',
        chatWelcome: 'Hi! Ask me anything from the AI Cheat Sheet. I will answer using the topics in this page.',
        chatHelp: 'Try asking:\n- What is a token?\n- Explain prompts with examples\n- What are model limits?\n- Give tips to use ChatGPT better\n\nYou can also type a keyword (e.g. "prompt", "rate limit", "hallucination").',
        chatNoMatch: "I couldn't find a matching topic in the cheat sheet. Try different keywords.",
        chatRelated: 'Related:',
        chatNoData: "I can't access the cheat sheet data right now.",
        chatAskAgain: 'Please ask a question.',
        catAll: 'All',
        catBasics: 'AI Basics',
        catUsingAI: 'Using AI',
        catTools: 'AI Tools',
        catLimits: 'Limits & Restrictions',
        catTips: 'Tips & Tricks',
        catUnderstanding: 'Understanding AI',
        catGettingStarted: 'Getting Started',
        catAdvanced: 'Advanced',
        noResultsTitle: 'No results found',
        noResultsBody: 'Try adjusting your search or filter criteria',
        footerText: '© 2026 Archivo DevSpace. Built with ❤️ for the AI community.',
        copy: 'Copy',
        copied: 'Copied!',
        categories: {
            all: 'All',
            basics: 'AI Basics',
            'using-ai': 'Using AI',
            tools: 'AI Tools',
            limits: 'Limits & Restrictions',
            tips: 'Tips & Tricks',
            understanding: 'Understanding AI',
            'getting-started': 'Getting Started',
            advanced: 'Advanced'
        }
    },
    mm: {
        langLabel: 'MM',
        heroTitle: 'AI ကို လူတိုင်းအတွက် လွယ်ကူအောင်',
        heroSubtitle: 'Token၊ Model၊ ChatGPT နဲ့ အခြားအရာတွေ အပါအဝင် AI ကို နားလည်ဖို့ မိတ်ဆွေလိုပါပဲ။ နည်းပညာအခြေခံမလိုပါ။',
        searchPlaceholder: 'AI အယူအဆ၊ Tools၊ Tips… ကို ရှာဖွေပါ',
        heroTitleChatbot: 'Chatbot ကို လွယ်လွယ်ကူကူ အသုံးပြုမယ်',
        heroSubtitleChatbot: 'ChatGPT လို AI chatbot တွေနဲ့ မှန်ကန်ပြီး အထောက်အကူဖြစ်တဲ့ အဖြေတွေ ရဖို့ Prompt တွေကို လိုအပ်သလို ရေးသားပြီး ထိရောက်စွာ ဆက်သွယ်အသုံးပြုနည်းတွေ လေ့လာပါ။',
        searchPlaceholderChatbot: 'Chatbot အသုံးပြုနည်း၊ Prompt နမူနာတွေကို ရှာဖွေပါ...',
        chatTitle: 'Cheat Sheet Chatbot',
        chatHint: 'Token, Model, Prompt, Limits, Tools စသည်တို့ကို မေးမြန်းနိုင်ပါတယ်။',
        chatPlaceholder: 'AI အကြောင်း မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ...',
        chatWelcome: 'မင်္ဂလာပါ! AI Cheat Sheet ထဲက အကြောင်းအရာတွေကို မေးမြန်းပါ။ ဒီ chatbot က ဒီစာမျက်နှာထဲက topic တွေကို အခြေခံပြီး ဖြေပါမယ်။',
        chatHelp: 'မေးလို့ကောင်းတဲ့ မေးခွန်းတွေ:\n- Token ဆိုတာ ဘာလဲ?\n- Prompt ကို ဥပမာနဲ့ ရှင်းပြပါ\n- Model limits ဆိုတာ ဘာလဲ?\n- ChatGPT ကို ပိုကောင်းအောင် သုံးဖို့ Tips ပေးပါ\n\nKeyword နဲ့လည်း ရှာမေးလို့ရပါတယ် (ဥပမာ "prompt", "rate limit", "hallucination")။',
        chatNoMatch: 'Cheat sheet ထဲမှာ တိုက်ဆိုင်တဲ့ topic မတွေ့ပါ။ Keyword ကို ပြောင်းပြီး ပြန်မေးကြည့်ပါ။',
        chatRelated: 'ဆက်စပ်:',
        chatNoData: 'Cheat sheet data ကို အခုအချိန်မှာ မရယူနိုင်ပါ။',
        chatAskAgain: 'မေးခွန်းတစ်ခု ထပ်မံ ရိုက်ထည့်ပါ။',
        catAll: 'အားလုံး',
        catBasics: 'AI အခြေခံ',
        catUsingAI: 'AI အသုံးပြုခြင်း',
        catTools: 'AI Tools',
        catLimits: 'ကန့်သတ်ချက်များ',
        catTips: 'Tips & Tricks',
        catUnderstanding: 'AI ကို နားလည်ခြင်း',
        catGettingStarted: 'စတင်ရန်',
        catAdvanced: 'အဆင့်မြင့်',
        noResultsTitle: 'ရလဒ် မတွေ့ပါ',
        noResultsBody: 'ရှာဖွေမှု သို့မဟုတ် Filter ကို ပြန်လည်ညှိနှိုင်းကြည့်ပါ',
        footerText: '© 2026 Archivo DevSpace။ AI community အတွက် ❤️ နဲ့ တည်ဆောက်ထားသည်။',
        copy: 'ကူးယူ',
        copied: 'ကူးယူပြီး!',
        categories: {
            all: 'အားလုံး',
            basics: 'AI အခြေခံ',
            'using-ai': 'AI အသုံးပြုခြင်း',
            tools: 'AI Tools',
            limits: 'ကန့်သတ်ချက်များ',
            tips: 'Tips & Tricks',
            understanding: 'AI ကို နားလည်ခြင်း',
            'getting-started': 'စတင်ရန်',
            advanced: 'အဆင့်မြင့်'
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function formatCategory(category) { // This is now primarily for internal formatting if a key is missing
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function categoryLabel(category) {
    const dict = (I18N[currentLang] && I18N[currentLang].categories) || I18N.en.categories;
    return dict[category] || formatCategory(category);
}

function applyTranslations() {
    document.documentElement.setAttribute('lang', currentLang === 'mm' ? 'my' : 'en');

    if (currentLangLabel) currentLangLabel.textContent = I18N[currentLang]?.langLabel || 'EN';

    // Update text content for elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        el.textContent = t(key);
    });

    // Update placeholder text for elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        el.setAttribute('placeholder', t(key));
    });

    // Update filter pill texts
    document.querySelectorAll('#filterPills .pill').forEach(pill => {
        const categoryKey = pill.dataset.category;
        if (categoryKey) {
            pill.textContent = categoryLabel(categoryKey);
        }
    });
}

function setLang(nextLang) {
    currentLang = nextLang === 'mm' ? 'mm' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    renderCheatsheet(); // Re-render cheatsheet to update card titles/descriptions
}

function closeLangMenu() {
    if (!langMenu || !langToggle) return;
    langMenu.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
}

function toggleLangMenu() {
    if (!langMenu || !langToggle) return;
    const isOpen = langMenu.classList.toggle('open');
    langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Event Listeners for Language Switcher
if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLangMenu();
    });

    langMenu.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            setLang(btn.dataset.lang);
            closeLangMenu();
            // renderCheatsheet() is called inside setLang now
        });
    });

    document.addEventListener('click', closeLangMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLangMenu();
    });
}

// Event listeners for responsive nav
if (navToggle && navPanel) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNavPanel();
        // If nav opens, close language menu to prevent overlap
        if (navPanel.classList.contains('open')) closeLangMenu();
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!navPanel.classList.contains('open')) return;
        if (navPanel.contains(e.target) || navToggle.contains(e.target)) return;
        closeNavPanel();
    });

    // Close on Escape (without breaking search behavior)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNavPanel();
    });

    // Close on link click (mobile)
    navPanel.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => closeNavPanel());
    });

    // Reset panel when moving to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeNavPanel();
    });
}

// State Management
// (Existing theme and general state management remains here)
// ...

let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const filterPills = document.querySelectorAll('.pill');
const cheatsheetGrid = document.getElementById('cheatsheetGrid');
const noResults = document.getElementById('noResults');


// Render Functions
function renderCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${Math.random() * 0.2}s`;

    // Use translated title and description if available
    const title = (currentLang === 'mm' && item.title_mm) ? item.title_mm : item.title;
    const description = (currentLang === 'mm' && item.description_mm) ? item.description_mm : item.description;

    // Select content based on language
    const points = (currentLang === 'mm' && item.points_mm) ? item.points_mm : item.points;

    let contentHTML = '';

    if (points && points.length > 0) {
        contentHTML = `
            <div class="card-content">
                <ul>
                    ${points.map(point => `<li>${escapeHtml(point)}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-header">
            <div>
                <h3 class="card-title">${title}</h3>
                <span class="card-category">${categoryLabel(item.category)}</span>
            </div>
        </div>
        <p class="card-description">${description}</p>
        ${contentHTML}
    `;

    return card;
}

function renderCheatsheet() {
    if (!cheatsheetGrid || !noResults || typeof cheatsheetData === 'undefined') return;
    // Filter data
    const filteredData = cheatsheetData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        // Use translated title and description for search
        const title = (currentLang === 'mm' && item.title_mm) ? item.title_mm : item.title;
        const description = (currentLang === 'mm' && item.description_mm) ? item.description_mm : item.description;
        const categoryText = categoryLabel(item.category); // Use translated category for search

        const matchesSearch = searchQuery === '' ||
            title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            categoryText.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Clear grid
    cheatsheetGrid.innerHTML = '';

    // Show/hide no results
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        cheatsheetGrid.style.display = 'none';
        document.querySelector('#noResults h3').textContent = t('noResultsTitle');
        document.querySelector('#noResults p').textContent = t('noResultsBody');

    } else {
        noResults.style.display = 'none';
        cheatsheetGrid.style.display = 'grid';

        // Render cards
        filteredData.forEach(item => {
            const card = renderCard(item);
            cheatsheetGrid.appendChild(card);
        });
    }

    // Update URL with current filters (for sharing)
    updateURL();
}

// Helper Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// The original formatCategory is now integrated into categoryLabel and I18N dictionary
// function formatCategory(category) {
//     return category
//         .split('-')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

function updateURL() {
    const params = new URLSearchParams();
    if (currentCategory !== 'all') params.set('category', currentCategory);
    if (searchQuery) params.set('search', searchQuery);
    if (currentLang !== 'en') params.set('lang', currentLang); // Save language in URL

    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const search = params.get('search');
    const lang = params.get('lang');

    if (category) {
        currentCategory = category;
        filterPills.forEach(pill => {
            pill.classList.toggle('active', pill.dataset.category === category);
        });
    }

    if (search) {
        searchQuery = search;
        searchInput.value = search;
    }

    if (lang) {
        currentLang = lang;
    }
}

// Copy to Clipboard Function
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${t('copied')}
        `;
        button.style.background = 'var(--primary-500)';
        button.style.color = 'white';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Event Listeners (cheatsheet page)
if (searchInput && cheatsheetGrid) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCheatsheet();
    });
}

if (filterPills && filterPills.length && cheatsheetGrid) {
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active state
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Update category
            currentCategory = pill.dataset.category;

            // Re-render
            renderCheatsheet();
        });
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search with '/' key
    if (e.key === '/' && searchInput && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }

    // Clear search with 'Escape' key (only if search is focused)
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.blur();
        renderCheatsheet();
    }

    // Theme toggle with 't' key
    if (e.key === 't' && document.activeElement !== searchInput) {
        themeToggle.click();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromURL();
    applyTranslations(); // Apply translations on load
    renderCheatsheet();
    initChatbotPage();

    // Add fade-in animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// -----------------------------
// Chatbot Page (offline, cheatsheet-powered)
// -----------------------------

function initChatbotPage() {
    const page = document.body?.dataset?.page;
    if (page !== 'chatbot') return;

    const chatMessages = document.getElementById('chatMessages');
    const chatOptions = document.getElementById('chatOptions');
    const chips = document.querySelectorAll('[data-chat-prompt]');

    if (!chatMessages || !chatOptions) return;

    const welcome = t('chatWelcome') || "Hi! Click on topics below to learn about AI.";
    appendMsg('assistant', welcome);

    // Show initial category options
    showCategoryOptions();

    // Quick action chips
    chips.forEach(btn => {
        btn.addEventListener('click', () => {
            const prompt = btn.getAttribute('data-chat-prompt') || '';
            if (!prompt) return;
            handleUserClick(prompt);
        });
    });

    function handleUserClick(query) {
        appendMsg('user', query);
        const answer = answerFromCheatsheet(query);
        appendMsg('assistant', answer.text);

        // Show related topic buttons
        if (answer.related && answer.related.length > 0) {
            showRelatedOptions(answer.related);
        } else {
            showCategoryOptions();
        }
    }

    function showCategoryOptions() {
        chatOptions.innerHTML = '';
        const categories = [
            { key: 'basics', label: categoryLabel('basics') },
            { key: 'using-ai', label: categoryLabel('using-ai') },
            { key: 'tools', label: categoryLabel('tools') },
            { key: 'limits', label: categoryLabel('limits') },
            { key: 'tips', label: categoryLabel('tips') },
            { key: 'understanding', label: categoryLabel('understanding') },
            { key: 'getting-started', label: categoryLabel('getting-started') },
            { key: 'advanced', label: categoryLabel('advanced') }
        ];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = cat.label;
            btn.addEventListener('click', () => {
                showTopicsInCategory(cat.key, cat.label);
            });
            chatOptions.appendChild(btn);
        });
    }

    function showTopicsInCategory(categoryKey, categoryLabel) {
        appendMsg('user', categoryLabel);

        if (typeof cheatsheetData === 'undefined') {
            appendMsg('assistant', t('chatNoData') || "Can't load topics.");
            return;
        }

        const topics = cheatsheetData.filter(item => item.category === categoryKey);

        if (topics.length === 0) {
            appendMsg('assistant', 'No topics found in this category.');
            showCategoryOptions();
            return;
        }

        const topicList = topics.map(item => '• ' + getItemText(item, 'title')).join('\n');
        appendMsg('assistant', `Topics in ${categoryLabel}:\n\n${topicList}\n\nClick a topic below:`);

        chatOptions.innerHTML = '';
        topics.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = getItemText(item, 'title');
            btn.addEventListener('click', () => {
                showTopicDetail(item);
            });
            chatOptions.appendChild(btn);
        });

        // Add back button
        const backBtn = document.createElement('button');
        backBtn.className = 'chat-option-btn';
        backBtn.textContent = '← Back to Categories';
        backBtn.style.gridColumn = '1 / -1';
        backBtn.addEventListener('click', showCategoryOptions);
        chatOptions.appendChild(backBtn);
    }

    function showTopicDetail(item) {
        const title = getItemText(item, 'title');
        appendMsg('user', title);

        const desc = getItemText(item, 'description');
        const content = getItemContentText(item);

        let response = `${title}\n\n${desc}`;
        if (content) {
            response += `\n\n${content}`;
        }

        appendMsg('assistant', response);

        // Find related topics in same category
        const related = cheatsheetData
            .filter(i => i.category === item.category && i.id !== item.id)
            .slice(0, 4);

        if (related.length > 0) {
            showRelatedOptions(related);
        } else {
            showCategoryOptions();
        }
    }

    function showRelatedOptions(relatedItems) {
        chatOptions.innerHTML = '';

        relatedItems.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = getItemText(item, 'title');
            btn.addEventListener('click', () => {
                showTopicDetail(item);
            });
            chatOptions.appendChild(btn);
        });

        // Add back button
        const backBtn = document.createElement('button');
        backBtn.className = 'chat-option-btn';
        backBtn.textContent = '← Back to Categories';
        backBtn.style.gridColumn = '1 / -1';
        backBtn.addEventListener('click', showCategoryOptions);
        chatOptions.appendChild(backBtn);
    }

    function appendMsg(role, text) {
        const wrap = document.createElement('div');
        wrap.className = `chat-msg ${role}`;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';

        // Convert newlines to <br> and set as HTML
        const formattedText = text.replace(/\n/g, '<br>');
        bubble.innerHTML = formattedText;

        wrap.appendChild(bubble);
        chatMessages.appendChild(wrap);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function answerFromCheatsheet(query) {
    if (typeof cheatsheetData === 'undefined') {
        return { text: t('chatNoData') || "Can't access data.", related: [] };
    }

    const q = normalizeText(query);
    if (!q) return { text: t('chatAskAgain') || "Please try again.", related: [] };

    const results = rankCheatsheetMatches(q).slice(0, 4);
    if (results.length === 0) {
        return { text: t('chatNoMatch') || "No matching topics found.", related: [] };
    }

    const top = results[0];
    const title = getItemText(top.item, 'title');
    const desc = getItemText(top.item, 'description');
    const content = getItemContentText(top.item);

    let text = `${title}\n\n${desc}`;
    if (content) {
        text += `\n\n${content}`;
    }

    const related = results.slice(1).map(r => r.item);

    return { text, related };
}

function normalizeText(s) {
    return (s || '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]+/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(s) {
    const parts = normalizeText(s).split(' ').filter(Boolean);
    // drop ultra-common tiny tokens
    return parts.filter(w => w.length > 2);
}

function getItemText(item, field) {
    if (!item) return '';
    if (currentLang === 'mm') {
        if (field === 'title' && item.title_mm) return item.title_mm;
        if (field === 'description' && item.description_mm) return item.description_mm;
    }
    return item[field] || '';
}

function getItemContentText(item) {
    const points = (currentLang === 'mm' && item.points_mm) ? item.points_mm : item.points;
    if (points && Array.isArray(points)) return points.join('\n');
    return '';
}

function rankCheatsheetMatches(q) {
    const qTokens = tokenize(q);
    if (qTokens.length === 0) return [];

    const scored = cheatsheetData.map(item => {
        const hay = normalizeText([
            getItemText(item, 'title'),
            getItemText(item, 'description'),
            item.category,
            getItemContentText(item)
        ].join(' '));

        let score = 0;
        for (const tok of qTokens) {
            if (hay.includes(tok)) score += 3;
        }
        // bonus for phrase containment
        if (hay.includes(q)) score += 6;
        // bonus for title hits
        const title = normalizeText(getItemText(item, 'title'));
        for (const tok of qTokens) {
            if (title.includes(tok)) score += 2;
        }
        return { item, score };
    }).filter(x => x.score > 0);

    scored.sort((a, b) => b.score - a.score);
    return scored;
}

// Service Worker for PWA (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, that's okay
        });
    });
}

// Analytics (placeholder - add your analytics code here)
function trackEvent(category, action, label) {
    // Example: Google Analytics
    // gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track filter usage
filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        trackEvent('Filter', 'Click', pill.dataset.category);
    });
});

// Track search usage
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (searchQuery) {
            trackEvent('Search', 'Query', searchQuery);
        }
    }, 1000);
});
