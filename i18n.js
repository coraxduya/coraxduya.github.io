// 多语言数据配置
const i18nData = {
    'en': {
        // 导航栏
        'nav.research': 'Research',
        'nav.video': 'Video',
        'nav.about': 'About',
        'nav.try-lumine': 'Try Lumine',
        'nav.toggle-dark': 'Toggle dark mode',
        'nav.toggle-light': 'Switch to light mode',
        'nav.toggle-dark-mode': 'Switch to dark mode',
        
        // 面包屑导航
        'breadcrumb.research': 'RESEARCH',
        
        // 标题和元信息
        'hero.title': 'Lumine: A Generalist Agent for 3D Open-Worlds',
        'hero.published': 'Published 2025',
        'hero.by': 'By',
        'hero.author': 'Lumine Team',
        
        // 介绍文本
        'intro.text': 'Building generalist autonomous agents that can perceive, reason, and act at human-level in open worlds is a key goal of artificial general intelligence (AGI) research. Lumine addresses this gap by integrating foundation models with embodied interaction, enabling real-time, long-horizon task completion in complex 3D open-world games.',
        
        // 章节标题
        'section.background': '1. Background',
        'section.core-output': '2. Core Output',
        'section.methodology': '3. Methodology',
        'subsection.architecture': '3.1 Foundational Architecture',
        'subsection.training': '3.2 Three-Stage Training Pipeline',
        
        // 背景部分
        'background.text': 'Traditional agents excel in closed, rule-fixed environments (e.g., Go, Dota II) but lack generalization to ambiguous, unbounded 3D open worlds. Lumine addresses this gap by integrating foundation models with embodied interaction, enabling real-time, long-horizon task completion in complex 3D open-world games.',
        
        // 核心输出部分
        'core-output.intro': 'Lumine is the first generalist Vision-Language-Action (VLA) agent capable of completing hour-long tasks in complex 3D open-world environments (e.g., Genshin Impact) in real time. Its key achievements include:',
        'achievement.realtime': 'Real-time performance:',
        'achievement.realtime-desc': 'Processes raw pixel inputs at 5 FPS and generates executable keyboard-mouse actions at 30 FPS, matching human speed.',
        'achievement.longhorizon': 'Long-horizon task completion:',
        'achievement.longhorizon-desc': 'Finishes the 1-hour Genshin Impact Mondstadt main storyline independently, even outperforming new human players (58 minutes vs. average 78 minutes).',
        'achievement.crossgame': 'Cross-game generalization:',
        'achievement.crossgame-desc': 'Without additional training, adapts to unseen games like Honkai: Star Rail, Wuthering Waves, and Black Myth: Wukong, completing their initial main missions.',
        'achievement.unified': 'Unified capability integration:',
        'achievement.unified-desc': 'Combines perception, high-level planning, low-level control, memory, and adaptive reasoning—overcoming fragmentation in traditional agent designs.',
        
        // 方法论部分
        'methodology.intro': 'Lumine is built on the Qwen2-VL foundation model and developed via a scalable, three-stage framework, with optimizations for real-time inference.',
        'architecture.input-output': 'Input-output:',
        'architecture.input-output-desc': 'Takes raw screen pixels (720p resolution) and text instructions as input; outputs autoregressive keyboard-mouse actions (via a unified language-action vocabulary) and optional "inner monologue" (reasoning traces) when needed.',
        'architecture.hybrid': 'Hybrid reasoning:',
        'architecture.hybrid-desc': 'Dynamically balances explicit reasoning (for complex decisions like puzzle-solving) and direct action (for routine tasks like navigation), avoiding inefficiency from step-by-step reasoning.',
        
        // 训练阶段
        'training.intro': 'Training leverages 2424 hours of curated Genshin Impact gameplay data, following a curriculum that builds skills incrementally:',
        'training.behavior': 'Behavior Cloning (1731 hours):',
        'training.behavior-desc': 'Teaches basic action primitives (e.g., navigation, object interaction, combat) by imitating human gameplay, filtering out idle or noisy actions.',
        'training.classifier': 'Classifier-Augmented Instruction Following (200 hours):',
        'training.classifier-desc': 'Aligns actions with natural language. A Qwen2-VL-based classifier auto-labels gameplay segments (from 165 hours of human-annotated data), then refines labels via GPT-4.1 to create high-quality instruction-data pairs.',
        'training.reasoning': 'Human-Annotated Reasoning Fine-Tuning (15 hours):',
        'training.reasoning-desc': 'Integrates 19K reasoning traces (aligned with 300K action frames) to teach adaptive decision-making, enabling Lumine to generate "inner monologue" for long-horizon tasks.',
        
        // 游戏展示部分
        'games.title': 'Lumine in Action: 3D Open-World Games',
        'games.description': 'Lumine demonstrates exceptional performance across multiple 3D open-world games, achieving human-level or superior task completion rates.',
        'games.generalization': 'The agent\'s ability to generalize across different game environments without additional training represents a significant breakthrough in embodied AI research. From completing complex main storylines in Genshin Impact to adapting to entirely new game mechanics in Black Myth: Wukong, Lumine showcases the potential for truly generalist AI agents.',
        'games.conclusion': 'This cross-game adaptability, combined with real-time performance capabilities, positions Lumine as a foundational step toward artificial general intelligence in interactive 3D environments. The research demonstrates that foundation models can be effectively adapted for complex, long-horizon tasks that require both strategic planning and precise motor control.',
        
        // 语言选择
        'lang.english': 'English',
        'lang.chinese-simplified': '简体中文',
        'lang.chinese-traditional': '繁體中文'
    },
    
    'zh-CN': {
        // 导航栏
        'nav.research': '研究',
        'nav.video': '视频',
        'nav.about': '关于',
        'nav.try-lumine': '试用 Lumine',
        'nav.toggle-dark': '切换暗色模式',
        'nav.toggle-light': '切换到亮色模式',
        'nav.toggle-dark-mode': '切换到暗色模式',
        
        // 面包屑导航
        'breadcrumb.research': '研究',
        
        // 标题和元信息
        'hero.title': 'Lumine：3D开放世界的通用智能体',
        'hero.published': '发布于 2025年',
        'hero.by': '作者',
        'hero.author': 'Lumine 团队',
        
        // 介绍文本
        'intro.text': '构建能够在开放世界中进行人类水平感知、推理和行动的通用自主智能体是人工通用智能（AGI）研究的关键目标。Lumine通过将基础模型与具身交互相结合，在复杂的3D开放世界游戏中实现实时、长时程任务完成，填补了这一空白。',
        
        // 章节标题
        'section.background': '1. 背景',
        'section.core-output': '2. 核心成果',
        'section.methodology': '3. 方法论',
        'subsection.architecture': '3.1 基础架构',
        'subsection.training': '3.2 三阶段训练流程',
        
        // 背景部分
        'background.text': '传统智能体在封闭、规则固定的环境中表现出色（如围棋、Dota II），但缺乏对模糊、无界的3D开放世界的泛化能力。Lumine通过将基础模型与具身交互相结合，在复杂的3D开放世界游戏中实现实时、长时程任务完成，填补了这一空白。',
        
        // 核心输出部分
        'core-output.intro': 'Lumine是首个能够在复杂3D开放世界环境（如《原神》）中实时完成小时级任务的通用视觉-语言-动作（VLA）智能体。其主要成就包括：',
        'achievement.realtime': '实时性能：',
        'achievement.realtime-desc': '以5 FPS处理原始像素输入，以30 FPS生成可执行的键盘鼠标动作，达到人类速度。',
        'achievement.longhorizon': '长时程任务完成：',
        'achievement.longhorizon-desc': '独立完成1小时的《原神》蒙德主线剧情，甚至超越新手玩家表现（58分钟 vs 平均78分钟）。',
        'achievement.crossgame': '跨游戏泛化：',
        'achievement.crossgame-desc': '无需额外训练，适应《崩坏：星穹铁道》、《鸣潮》和《黑神话：悟空》等未见过的游戏，完成其初始主线任务。',
        'achievement.unified': '统一能力集成：',
        'achievement.unified-desc': '结合感知、高级规划、低级控制、记忆和自适应推理——克服传统智能体设计中的碎片化问题。',
        
        // 方法论部分
        'methodology.intro': 'Lumine基于Qwen2-VL基础模型构建，通过可扩展的三阶段框架开发，并针对实时推理进行优化。',
        'architecture.input-output': '输入输出：',
        'architecture.input-output-desc': '接收原始屏幕像素（720p分辨率）和文本指令作为输入；输出自回归键盘鼠标动作（通过统一的语言-动作词汇表）和可选的"内心独白"（推理轨迹）。',
        'architecture.hybrid': '混合推理：',
        'architecture.hybrid-desc': '动态平衡显式推理（用于复杂决策如解谜）和直接动作（用于常规任务如导航），避免逐步推理的低效性。',
        
        // 训练阶段
        'training.intro': '训练利用2424小时精选的《原神》游戏数据，遵循渐进式技能构建课程：',
        'training.behavior': '行为克隆（1731小时）：',
        'training.behavior-desc': '通过模仿人类游戏行为教授基本动作原语（如导航、物体交互、战斗），过滤掉空闲或噪声动作。',
        'training.classifier': '分类器增强指令跟随（200小时）：',
        'training.classifier-desc': '将动作与自然语言对齐。基于Qwen2-VL的分类器自动标记游戏片段（来自165小时人工标注数据），然后通过GPT-4.1优化标签以创建高质量指令-数据对。',
        'training.reasoning': '人工标注推理微调（15小时）：',
        'training.reasoning-desc': '集成19K推理轨迹（与300K动作帧对齐）以教授自适应决策，使Lumine能够为长时程任务生成"内心独白"。',
        
        // 游戏展示部分
        'games.title': 'Lumine实战：3D开放世界游戏',
        'games.description': 'Lumine在多个3D开放世界游戏中展现出卓越性能，达到人类水平或更优的任务完成率。',
        'games.generalization': '智能体在不同游戏环境中无需额外训练即可泛化的能力代表了具身AI研究的重大突破。从完成《原神》复杂主线剧情到适应《黑神话：悟空》全新游戏机制，Lumine展示了真正通用AI智能体的潜力。',
        'games.conclusion': '这种跨游戏适应性，结合实时性能能力，使Lumine成为迈向交互式3D环境中人工通用智能的基础性步骤。研究表明，基础模型可以有效适应需要战略规划和精确运动控制的复杂长时程任务。',
        
        // 语言选择
        'lang.english': 'English',
        'lang.chinese-simplified': '简体中文',
        'lang.chinese-traditional': '繁體中文'
    },
    
    'zh-TW': {
        // 导航栏
        'nav.research': '研究',
        'nav.video': '影片',
        'nav.about': '關於',
        'nav.try-lumine': '試用 Lumine',
        'nav.toggle-dark': '切換暗色模式',
        'nav.toggle-light': '切換到亮色模式',
        'nav.toggle-dark-mode': '切換到暗色模式',
        
        // 面包屑导航
        'breadcrumb.research': '研究',
        
        // 标题和元信息
        'hero.title': 'Lumine：3D開放世界的通用智慧體',
        'hero.published': '發佈於 2025年',
        'hero.by': '作者',
        'hero.author': 'Lumine 團隊',
        
        // 介绍文本
        'intro.text': '構建能夠在開放世界中進行人類水準感知、推理和行動的通用自主智慧體是人工通用智慧（AGI）研究的關鍵目標。Lumine透過將基礎模型與具身互動相結合，在複雜的3D開放世界遊戲中實現即時、長時程任務完成，填補了這一空白。',
        
        // 章节标题
        'section.background': '1. 背景',
        'section.core-output': '2. 核心成果',
        'section.methodology': '3. 方法論',
        'subsection.architecture': '3.1 基礎架構',
        'subsection.training': '3.2 三階段訓練流程',
        
        // 背景部分
        'background.text': '傳統智慧體在封閉、規則固定的環境中表現出色（如圍棋、Dota II），但缺乏對模糊、無界的3D開放世界的泛化能力。Lumine透過將基礎模型與具身互動相結合，在複雜的3D開放世界遊戲中實現即時、長時程任務完成，填補了這一空白。',
        
        // 核心输出部分
        'core-output.intro': 'Lumine是首個能夠在複雜3D開放世界環境（如《原神》）中即時完成小時級任務的通用視覺-語言-動作（VLA）智慧體。其主要成就包括：',
        'achievement.realtime': '即時效能：',
        'achievement.realtime-desc': '以5 FPS處理原始像素輸入，以30 FPS生成可執行的鍵盤滑鼠動作，達到人類速度。',
        'achievement.longhorizon': '長時程任務完成：',
        'achievement.longhorizon-desc': '獨立完成1小時的《原神》蒙德主線劇情，甚至超越新手玩家表現（58分鐘 vs 平均78分鐘）。',
        'achievement.crossgame': '跨遊戲泛化：',
        'achievement.crossgame-desc': '無需額外訓練，適應《崩壞：星穹鐵道》、《鳴潮》和《黑神話：悟空》等未見過的遊戲，完成其初始主線任務。',
        'achievement.unified': '統一能力整合：',
        'achievement.unified-desc': '結合感知、高級規劃、低級控制、記憶和自適應推理——克服傳統智慧體設計中的碎片化問題。',
        
        // 方法论部分
        'methodology.intro': 'Lumine基於Qwen2-VL基礎模型構建，透過可擴展的三階段框架開發，並針對即時推理進行最佳化。',
        'architecture.input-output': '輸入輸出：',
        'architecture.input-output-desc': '接收原始螢幕像素（720p解析度）和文字指令作為輸入；輸出自迴歸鍵盤滑鼠動作（透過統一的語言-動作詞彙表）和可選的「內心獨白」（推理軌跡）。',
        'architecture.hybrid': '混合推理：',
        'architecture.hybrid-desc': '動態平衡顯式推理（用於複雜決策如解謎）和直接動作（用於常規任務如導航），避免逐步推理的低效性。',
        
        // 训练阶段
        'training.intro': '訓練利用2424小時精選的《原神》遊戲資料，遵循漸進式技能構建課程：',
        'training.behavior': '行為複製（1731小時）：',
        'training.behavior-desc': '透過模仿人類遊戲行為教授基本動作原語（如導航、物體互動、戰鬥），過濾掉閒置或雜訊動作。',
        'training.classifier': '分類器增強指令跟隨（200小時）：',
        'training.classifier-desc': '將動作與自然語言對齊。基於Qwen2-VL的分類器自動標記遊戲片段（來自165小時人工標註資料），然後透過GPT-4.1最佳化標籤以創建高品質指令-資料對。',
        'training.reasoning': '人工標註推理微調（15小時）：',
        'training.reasoning-desc': '整合19K推理軌跡（與300K動作幀對齊）以教授自適應決策，使Lumine能夠為長時程任務生成「內心獨白」。',
        
        // 游戏展示部分
        'games.title': 'Lumine實戰：3D開放世界遊戲',
        'games.description': 'Lumine在多個3D開放世界遊戲中展現出卓越效能，達到人類水準或更優的任務完成率。',
        'games.generalization': '智慧體在不同遊戲環境中無需額外訓練即可泛化的能力代表了具身AI研究的重大突破。從完成《原神》複雜主線劇情到適應《黑神話：悟空》全新遊戲機制，Lumine展示了真正通用AI智慧體的潛力。',
        'games.conclusion': '這種跨遊戲適應性，結合即時效能能力，使Lumine成為邁向互動式3D環境中人工通用智慧的基礎性步驟。研究表明，基礎模型可以有效適應需要戰略規劃和精確運動控制的複雜長時程任務。',
        
        // 语言选择
        'lang.english': 'English',
        'lang.chinese-simplified': '简体中文',
        'lang.chinese-traditional': '繁體中文'
    }
};

// 语言管理器类
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage() || 'en';
        this.languageSelector = null;
        this.init();
    }
    
    init() {
        this.createLanguageSelector();
        this.setLanguage(this.currentLanguage);
        this.bindEvents();
    }
    
    createLanguageSelector() {
        // 创建语言选择器容器
        const langContainer = document.createElement('div');
        langContainer.className = 'language-selector';
        
        // 创建当前语言显示按钮
        const currentLangBtn = document.createElement('button');
        currentLangBtn.className = 'current-lang-btn';
        currentLangBtn.innerHTML = `
            <span class="lang-text">${this.getLanguageDisplayName(this.currentLanguage)}</span>
            <span class="lang-arrow">▼</span>
        `;
        
        // 创建语言选项下拉菜单
        const langDropdown = document.createElement('div');
        langDropdown.className = 'lang-dropdown';
        
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'zh-CN', name: '简体中文' },
            { code: 'zh-TW', name: '繁體中文' }
        ];
        
        languages.forEach(lang => {
            const langOption = document.createElement('button');
            langOption.className = 'lang-option';
            langOption.setAttribute('data-lang', lang.code);
            langOption.textContent = lang.name;
            if (lang.code === this.currentLanguage) {
                langOption.classList.add('active');
            }
            langDropdown.appendChild(langOption);
        });
        
        langContainer.appendChild(currentLangBtn);
        langContainer.appendChild(langDropdown);
        
        // 插入到导航栏右侧，主题切换按钮之前
        const navRight = document.querySelector('.nav-right');
        const themeToggle = document.getElementById('theme-toggle');
        navRight.insertBefore(langContainer, themeToggle);
        
        this.languageSelector = langContainer;
    }
    
    bindEvents() {
        const currentLangBtn = this.languageSelector.querySelector('.current-lang-btn');
        const langDropdown = this.languageSelector.querySelector('.lang-dropdown');
        const langOptions = this.languageSelector.querySelectorAll('.lang-option');
        
        // 切换下拉菜单显示/隐藏
        currentLangBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.languageSelector.classList.toggle('active');
        });
        
        // 点击语言选项
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                this.setLanguage(selectedLang);
                this.storeLanguage(selectedLang);
                this.languageSelector.classList.remove('active');
            });
        });
        
        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', () => {
            this.languageSelector.classList.remove('active');
        });
    }
    
    setLanguage(langCode) {
        this.currentLanguage = langCode;
        
        // 更新HTML lang属性
        document.documentElement.setAttribute('lang', langCode);
        
        // 更新所有带有data-i18n属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key, langCode);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // 更新语言选择器显示
        if (this.languageSelector) {
            const currentLangText = this.languageSelector.querySelector('.lang-text');
            currentLangText.textContent = this.getLanguageDisplayName(langCode);
            
            // 更新选中状态
            const langOptions = this.languageSelector.querySelectorAll('.lang-option');
            langOptions.forEach(option => {
                option.classList.toggle('active', option.getAttribute('data-lang') === langCode);
            });
        }
        
        // 更新主题切换按钮的aria-label
        this.updateThemeToggleLabel();
    }
    
    updateThemeToggleLabel() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const labelKey = currentTheme === 'light' ? 'nav.toggle-dark-mode' : 'nav.toggle-light';
            const label = this.getTranslation(labelKey, this.currentLanguage);
            if (label) {
                themeToggle.setAttribute('aria-label', label);
            }
        }
    }
    
    getTranslation(key, langCode) {
        return i18nData[langCode] && i18nData[langCode][key] ? i18nData[langCode][key] : key;
    }
    
    getLanguageDisplayName(langCode) {
        const names = {
            'en': 'English',
            'zh-CN': '简体中文',
            'zh-TW': '繁體中文'
        };
        return names[langCode] || langCode;
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            // 检测是否为繁体中文
            if (browserLang.includes('TW') || browserLang.includes('HK') || browserLang.includes('MO')) {
                return 'zh-TW';
            }
            return 'zh-CN';
        }
        return 'en';
    }
    
    getStoredLanguage() {
        return localStorage.getItem('lumine-language');
    }
    
    storeLanguage(langCode) {
        localStorage.setItem('lumine-language', langCode);
    }
}

// 初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, i18nData };
}