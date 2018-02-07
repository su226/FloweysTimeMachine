var items = [
    "<空>",
    "怪物糖果",
    "Croquet Roll",//TODO
    "木棍",
    "绷带",
    "石头糖",
    "南瓜环",
    "蜘蛛甜甜圈",
    "坚忍的洋葱",
    "幽灵果实",
    "蜘蛛果酒",
    "奶油糖肉桂派",
    "褪色缎带",
    "玩具刀",
    "牢固的手套",
    "兄贵头巾",
    "一份雪人",
    "好冰棒",
    "狗型冰棒",
    "情侣冰棒",
    "光棍冰棒",
    "肉桂兔包",
    "提米薄片",
    "遗弃的乳蛋饼",
    "旧芭蕾短裙",
    "芭蕾舞鞋",
    "打孔的卡片",
    "烦人的狗",
    "狗沙拉",
    "狗剩1",
    "狗剩2",
    "狗剩3",
    "狗剩4",
    "狗剩5",
    "狗剩6",
    "太空食物",
    "方便面",
    "蟹果",
    "热狗...?",
    "热猫",
    "魅力汉堡",
    "海茶",
    "新星巴菲",
    "传说英雄",
    "云雾眼镜",
    "破损的笔记本",
    "脏围裙",
    "烧焦的平底锅",
    "牛仔帽",
    "空枪",
    "心形吊坠",
    "生锈的匕首",
    "真刀",
    "吊坠",
    "不好的回忆",
    "梦想",
    "安黛因的信",
    "安黛因的信EX",
    "薯豆片",
    "垃圾食物",
    "神秘钥匙",
    "脸形牛排",
    "安静的狗",
    "蜗牛派",
    "提米盔甲",
    "<无效>"
];

var cellOpts = {
    "0":   "<空>",
    "201": "打招呼",
    "202": "谜题帮助",
    "203": "介绍自己",
    "204": "叫她\"妈妈\"",
    "205": "调情",
    "206": "托丽尔的电话",
    "210": "帕帕瑞斯的电话",
    "220": "维度盒子A",
    "221": "维度盒子B"
};

var weaponAts = {
    "3": 0, // 木棍
    "13": 3,
    "16": 5,
    "52": 99,
    "47": 10,
    "25": 7,
    "45": 2,
    "49": 12,
    "51": 15
};

var ArmorDfs = {
    "4": 0, // 绷带
    "12": 3, // 褪色缎带
    "15": 7, // 兄贵头巾
    "44": 5, // 云雾眼镜
    "46": 11, // 脏围裙
    "50": 15, // 心形吊坠
    "53": 99, // 吊坠
    "64": 20 // 提米护甲
};

var rooms = {
    "4":  "遗迹 - 初始点",
    "5":  "遗迹 - 小花地点",
    "6":  "遗迹 - 入口 [存档点]",
    "7":  "遗迹 - 托丽尔踩砖块谜题",
    "8":  "遗迹 - 开关谜题",
    "9":  "遗迹 - 假人房间",
    "10": "遗迹 - 尖刺谜题",
    "11": "遗迹 - 长廊",
    "12": "遗迹 - 树叶堆 [存档点]",
    "13": "遗迹 - 糖果柱子",
    "14": "遗迹 - 必定摔落陷阱门",
    "15": "遗迹 - 推石头谜题1",
    "16": "遗迹 - 陷阱门走廊谜题",
    "17": "遗迹 - 说话的石头",
    "18": "遗迹 - 老鼠洞 [存档点]",
    "19": "遗迹 - 幽灵纳普斯特",
    "20": "遗迹 - 蜘蛛烘焙铺",
    "21": "遗迹 - 2只青蛙",
    "22": "遗迹 - 开关下的陷阱门",
    "23": "遗迹 - 3个柱子房间1",
    "24": "遗迹 - 3个柱子房间2",
    "25": "遗迹 - 3个柱子房间3",
    "26": "遗迹 - 3个柱子房间4",
    "27": "遗迹 - 柱子房间下面的坑",
    "28": "遗迹 - 三岔路口",
    "29": "遗迹 - 讲托丽尔闲话的青蛙",
    "30": "遗迹 - 玩具刀房间",
    "31": "遗迹 - 家 [存档点]",
    "32": "托丽尔的家 - 入口",
    "33": "托丽尔的家 - 阅读房间",
    "34": "托丽尔的家 - 长廊",
    "35": "托丽尔的家 - 托丽尔的房间",
    "36": "托丽尔的家 - 你的房间",
    "37": "托丽尔的家 - 厨房",
    "38": "托丽尔的地下室1",
    "39": "托丽尔的地下室2",
    "40": "托丽尔的地下室3",
    "41": "托丽尔的地下室 - 托丽尔战斗",
    "42": "托丽尔的地下室 - 通往小花的长廊",
    "43": "托丽尔的地下室 - 小花",
    "44": "雪町 - 遗迹出口",
    "45": "雪町 - 黑森林小路",
    "46": "雪町 - Box Road [存档点]",//TODO
    "47": "雪町 - 鱼竿",
    "48": "雪町 - 帕帕瑞斯岗哨",
    "49": "雪町 - Doggo",//TODO
    "50": "雪町 - 指南针图标",
    "51": "雪町 - 雪人",
    "52": "雪町 - 高压电迷宫",
    "53": "雪町 - 雪地高尔夫",
    "54": "雪町 - 狗夫妇的房子",
    "55": "雪町 - 怪物小孩找单词",
    "56": "雪町 - 意大利面 [存档点]",
    "57": "雪町 - 狗夫妇",
    "58": "雪町 - XO谜题1",
    "59": "雪町 - XO谜题2",
    "60": "雪町 - 彩砖谜题",
    "61": "雪町 - 狗屋 [存档点]",
    "62": "雪町 - 雪人帕帕瑞斯和衫斯",
    "63": "雪町 - 滑动XO谜题",
    "64": "雪町 - 传送的衫斯",
    "65": "雪町 - 冰穴入口",
    "66": "雪町 - 雪堆(大犬汪)",
    "67": "雪町 - 致命的恐怖挑战",
    "68": "雪町 - 城镇 [存档点]",
    "69": "雪镇 - 冰把狼",//TODO
    "70": "雪镇 - 船港",
    "71": "雪镇 - 宾馆大厅",
    "73": "雪镇 - 烤尔比",
    "74": "雪镇 - 图书馆",
    "81": "雪町 - 帕帕瑞斯战斗",
    "82":  "瀑布 - 入口",
    "83":  "瀑布 - 检查点 [存档点]",
    "84":  "瀑布 - 掉下的石头",
    "86":  "瀑布 - 长廊 [存档点]",
    "87":  "Waterfall - Lily pad bridge",
    "88":  "Waterfall - Lily pad vertical bridge",
    "90":  "Waterfall - Telescope",
    "91":  "Waterfall - Boat plank",
    "92":  "Waterfall - Undyne Spear dodging 1",
    "93":  "Waterfall - Bush after spear dodging",
    "94":  "Waterfall - Crystal [SAVE]",
    "95":  "Waterfall - Sans Telescope",
    "96":  "Waterfall - Nice Cream Stand",
    "97":  "Waterfall - Split Pathway",
    "98":  "Waterfall - Ballet shoes",
    "99":  "Waterfall - Duck",
    "100": "Waterfall - Onionsan",
    "101": "Waterfall - Artifact hub",
    "102": "Waterfall - Piano",
    "103": "Waterfall - Legendary Artifact",
    "104": "Waterfall - Rainy Statue",
    "105": "Waterfall - Umbrellas",
    "106": "Waterfall - Rainy Path 1",
    "107": "Waterfall - Rainy Path 2",
    "108": "Waterfall - Palace View",
    "109": "Waterfall - Umbrella ledge",
    "110": "Waterfall - Bridge [SAVE]",
    "111": "Waterfall - Bridge spear dodge",
    "112": "Waterfall - Bridge fall",
    "113": "Waterfall - Trash Zone Flower bed",
    "114": "Waterfall - Trash Zone [SAVE]",
    "115": "Waterfall - Training Dummy revenge",
    "116": "Waterfall - Quiet Area [SAVE]",
    "117": "Waterfall - Undyne's house entrance",
    "119": "Waterfall - Twin Ghost houses",
    "124": "Waterfall - Turtle shop",
    "125": "Waterfall - River boat",
    "126": "Waterfall - 2 waterfalls",
    "127": "Waterfall - Mushroom maze",
    "128": "Waterfall - Temmie Village [SAVE]",
    "129": "Waterfall - Lamp maze",
    "130": "Waterfall - Behind you",
    "131": "Waterfall - More flowers",
    "132": "Waterfall - Cave bridge",
    "133": "Waterfall - Cave exit",
    "134": "Waterfall - Undyne area",
    "135": "Waterfall - Undyne area + 1",
    "136": "Waterfall - Hotland Welcome",
    "137": "Hotland - Entrance",
    "138": "Hotland - Water tank",
    "139": "Hotland - Laboratory Entrance [SAVE]",
    "140": "Hotland - River boat",
    "141": "Hotland - Laboratory Hub",
    "142": "Hotland - Laboratory Upper Floor",
    "143": "Hotland - Laboratory Exit",
    "144": "Hotland - Treadmills 1",
    "145": "Hotland - Magma Chamber [SAVE]",
    "146": "Hotland - Burnt Pan",
    "147": "Hotland - Lasers 1",
    "148": "Hotland - Puzzle Gate 1",
    "149": "Hotland - Left Boz Puzzle Entrance",
    "150": "Hotland - Left Box Puzzle",
    "151": "Hotland - Right Box Puzzle Entrance",
    "152": "Hotland - Right Box Puzzle",
    "153": "Hotland - Arrow bridge",
    "154": "Hotland - Kitchen",
    "155": "Hotland - Core View [SAVE]",
    "156": "Hotland - Elevator R1",
    "157": "Hotland - Elevator R2",
    "158": "Hotland - Hot Dog Stand",
    "159": "Hotland - Art Club Entrance",
    "160": "Hotland - Art Club",
    "161": "Hotland - Stained Apron",
    "162": "Hotland - Treadmill switch puzzle",
    "163": "Hotland - Arrow puzzle",
    "164": "Hotland - Bad Opinion Zone [SAVE]",
    "165": "Hotland - Bro guards",
    "166": "Hotland - Bombastic News report",
    "167": "Hotland - Upper Core View",
    "168": "Hotland - Elevator L2",
    "169": "Hotland - Elevator L3",
    "170": "Hotland - Spider Bake Sale",
    "171": "Hotland - F3 Puzzle Gate",
    "172": "Hotland - F3 South Puzzle Entrance",
    "173": "Hotland - F3 South Puzzle",
    "174": "Hotland - F3 North Puzzle Entrance",
    "175": "Hotland - F3 North Puzzle",
    "176": "Hotland - Spider Entrance [SAVE]",
    "177": "Hotland - Spider Room",
    "178": "Hotland - Mettaton Poster",
    "179": "Hotland - Theater Stage",
    "180": "Hotland - Colored Tile Maze 2",
    "181": "Hotland - Nice Cream Stand",
    "182": "Hotland - Hotel Entrance",
    "183": "Hotland - Hotel Lobby [SAVE]",
    "184": "Hotland - Hotel Restaurant",
    "185": "Hotland - Hotel Cordidor",
    "186": "Hotland - Hotel Alley",
    "187": "Hotland - Elevator R3",
    "188": "Hotland - Core Entrance",
    "189": "Hotland - Core Elevator",
    "190": "Hotland - Core Pit",
    "191": "Hotland - Core North of Elavator",
    "192": "Hotland - Core Wrong order lasers",
    "193": "Hotland - Core Crossroads",
    "194": "Hotland - Core Dead End",
    "195": "Hotland - Core Power Laser Puzzle",
    "196": "Hotland - Core Branch [SAVE]",
    "197": "Hotland - Core Ice Deposit",
    "198": "Hotland - Core West Puzzle Entrance",
    "199": "Hotland - Core West Puzzle Entrance + 1",
    "200": "Hotland - Core West Puzzle Entrance + 2",
    "202": "Hotland - Core End - 3",
    "201": "Hotland - South of 100G Trash Can",
    "203": "Hotland - Core End - 4",
    "204": "Hotland - Core Get Lost",
    "205": "Hotland - Core West Puzzle",
    "206": "Hotland - Core Glamburger Trash Can",
    "207": "Hotland - Core 100G Trash Can",
    "208": "Hotland - Core Battle Bridge",
    "209": "Hotland - Core End - 1",
    "210": "Hotland - Core End [SAVE]",
    "211": "Hotland - Core Mettaton Room",
    "212": "Hotland - Core Final Elevator Entrance",
    "214": "Hotland - Elevator L1",
    "215": "Hotland - Core Final Elevator",
    "216": "城堡电梯 [存档点]",
    "217": "城堡 - 另一个电梯",
    "218": "城堡 - 暗黑小路",
    "219": "新家 [存档点]",
    "220": "新家 - 入口",
    "221": "新家 - 读书室",
    "222": "新家 - 走廊",
    "223": "新家 - Asgore的房间",
    "224": "新家 - 你的房间",
    "225": "新家 - 厨房",
    "226": "新家 - 地下室1",
    "227": "新家 - 地下室2",
    "228": "新家 - 地下室3",
    "229": "新家 - 地下室4",
    "230": "新家 - 电梯",
    "231": "审判长廊 [存档点]",
    "232": "王座入口 [存档点]",
    "233": "王座入口 - 向下楼梯",
    "234": "王座入口 - 棺材",
    "235": "王座 [存档点]",
    "236": "结束 [存档点]",
    "237": "屏障",
    "241": "外面[未使用]",
    "242": "实验室电梯",
    "243": "真实验室 - 电梯",
    "244": "真实验室 - 电梯入口",
    "245": "真实验室 - 南部长廊",
    "246": "真实验室 [存档点]",
    "247": "真实验室 - 西部长廊1",
    "248": "真实验室 - 西部水槽",
    "249": "真实验室 - 西部红色钥匙孔",
    "250": "真实验室 - 北部长廊1",
    "251": "真实验室 - 卧室 [存档点]",
    "252": "真实验室 - 东北长廊",
    "253": "真实验室 - 东北蓝色钥匙孔",
    "254": "真实验室 - 北部长廊2",
    "255": "真实验室 - 绿色钥匙",
    "256": "真实验室 - 西北头颅",
    "257": "真实验室 - 黄色钥匙孔+电视",
    "258": "真实验室 - 西北冰箱",
    "259": "真实验室 - 绿钥匙孔",
    "260": "真实验室 - 风扇",
    "261": "真实验室 - 电梯2",
    "262": "真实验室 - 供电房长廊",
    "263": "真实验室 - 供电房",
    "264": "W. D. Gaster",
    "265": "雪町 - 冰穴",
    "331": "艾斯利尔的房间[未使用]"
};

var floweyStates = {
    "0": "无 (初始状态)",
    "1": "浅蓝 (战斗开始)",
    "2": "橙",
    "3": "蓝",
    "4": "紫",
    "5": "绿",
    "6": "黄",
    "7": "无 (战斗完成)",
};

var torielPrefer={
    "0": "未知",
    "1": "奶油糖",
    "2": "肉桂"
}

var torielStates = {
    "0": "初始状态",
    "3": "未知",
    "4": "被杀死",
    "5": "被饶恕"
};

var comedianStates = {
    "0": "初始状态",
    "1": "未知",
    "2": "被杀死"
};

var doggoStates = {
    "0": "初始状态",
    "1": "被杀死",
    "2": "被饶恕"
};

var dogamyDogaressaStates = {
    "0": "初始状态",
    "1": "被杀死",
    "2": "被饶恕"
};

var greaterDogStates = {
    "0": "初始状态",
    "1": "被杀死",
    "2": "被饶恕",
    "3": "被忽略"
};

var papyrusStates = {
    "0": "初始状态",
    "1": "被杀死"
};

var plotValues = {
    "2": "没有与帕帕瑞斯战斗",
    "101": "已与帕帕瑞斯战斗",
    "119": "未知",
    "164": "热地屠杀",
    "199": "未知",
    "999": "真和平结局"
};

var trainingDummyStates = {
    "0": "初始状态",
    "1": "被杀死",
    "2": "被谈话",
    "3": "试了你的意大利面"
};

var shyrenStates = {
    "0": "初始状态",
    "1": "被杀死",
    "2": "未知"
};

var madDummyStates = {
    "0": "初始状态",
    "1": "被杀死"
};

var undyneStates1 = {
    "0": "初始状态",
    "1": "被杀死"
};

var undyneStates2 = {
    "0": "初始状态",
    "1": "被杀死"
};

var broGuardsStates = {
    "0": "初始状态",
    "1": "被杀死"
};

var mettatonStates = {
    "0": "初始状态",
    "1": "被杀死"
};

var muffetStates = {
    "0": "初始状态",
    "1": "被杀死"
};

function parseIniFromText(text) {
    "use strict";
    var lines = text.match(/[^\r\n]+/g);
    var section = null;
    var ini = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                throw "小节以外的配置项";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                throw "期望 '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                throw "期望 '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                throw "未结束的字符串";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return ini;
}

function flowey_laugh_once() {
    "use strict";
    if (localStorage.getItem("laughed") !== "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        if(!document.getElementById("mute").checked) {
            var audio = new Audio("res/flowey_laugh.mp3");
            audio.play();
        }
        localStorage.setItem("laughed", "true");
    }
}

function insert_inv_lists() {
    "use strict";
    function insert(node, i) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", i);
        var newContent = document.createTextNode(items[i]);
        newOption.appendChild(newContent);
        var select = document.getElementById(node);
        select.appendChild(newOption);
    }
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            insert("sav-invslot" + j, i);
        }
        insert("sav-weapon", i);
        insert("sav-armor", i);
    }
}

function insert_cell_lists() {
    "use strict";
    for (var i = 1; i <= 8; i++) {
        loadSelectFromObj("sav-cellslot" + i, cellOpts);
    }
}

function loadSelectFromObj(selectId, obj) {
    "use strict";
    var select = document.getElementById(selectId);

    for (var key in obj) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(obj[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

// Load undertale.ini data into an ini object and execute a closure on it.
function loadIniFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        try {
            closure(parseIniFromText(text));
        } catch (err) {
            window.alert("解析undertale.ini失败: " + err);
        }
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.match(/[^\r\n]+/g));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    if (iniobj.General){
        document.getElementById("ini-name").value = iniobj.General.Name;
        if(iniobj.General.Room){
            document.getElementById("ini-location").value = parseInt(iniobj.General.Room.trim());
        }else{
            document.getElementById("ini-location").value = 4;
        }
        if(iniobj.General.Kills){
            document.getElementById("ini-kills").value = parseInt(iniobj.General.Kills.trim());
        }else{
            document.getElementById("ini-kills").value = 0;
        }
        if(iniobj.General.Gameover){
            document.getElementById("ini-dies").value = parseInt(iniobj.General.Gameover.trim());
        }else{
            document.getElementById("ini-dies").value = 0;
        }
        if(iniobj.General.Love){
            document.getElementById("ini-love").value = parseInt(iniobj.General.Love.trim());
        }else{
            document.getElementById("ini-love").value = 0;
        }
    } else {
        document.getElementById("ini-name").value = "Marty";
        document.getElementById("ini-location").value = 4;
        document.getElementById("ini-kills").value = 0;
        document.getElementById("ini-dies").value = 0;
        document.getElementById("ini-love").value = 0;
    }
    if (iniobj.Flowey) {
        if(iniobj.Flowey.Met1){
            if (parseInt(iniobj.Flowey.Met1.trim()) === 1) {
                document.getElementById("ini-flowey-met").checked = true;
            } else {
                document.getElementById("ini-flowey-met").checked = false;
            }
        }else{
            document.getElementById("ini-flowey-met").checked = false;
        }
    }else{
        document.getElementById("ini-flowey-met").checked = false;
    }
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            if (parseInt(iniobj.FFFFF.F.trim()) === 1) {
                document.getElementById("ini-omega-flowey-trapped").checked = true;
            } else {
                document.getElementById("ini-omega-flowey-trapped").checked = false;
            }
        } else {
            document.getElementById("ini-omega-flowey-trapped").checked = false;
        }
        if (iniobj.FFFFF.P) {
            document.getElementById("ini-omega-flowey-soul").value = parseInt(iniobj.FFFFF.P.trim());
        } else {
            document.getElementById("ini-omega-flowey-soul").value = 0;
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = parseInt(iniobj.FFFFF.D.trim());
        } else {
            document.getElementById("ini-omega-flowey-deaths").value = 0;
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
        document.getElementById("ini-omega-flowey-soul").value = 0;
        document.getElementById("ini-omega-flowey-deaths").value = 0;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            if (parseInt(iniobj.reset.s_key.trim()) === 1) {
                document.getElementById("ini-dodged-all-special-thanks").checked = true;
            } else {
                document.getElementById("ini-dodged-all-special-thanks").checked = false;
            }
        } else {
            document.getElementById("ini-dodged-all-special-thanks").checked = false;
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.fun) {
        document.getElementById("ini-fun").value = parseInt(iniobj.fun.trim());
    }
    if (iniobj.Sans){
        if (iniobj.Sans.F) {
            document.getElementById("ini-sans-deaths").value = parseInt(iniobj.Sans.F.trim());
        }
        if (iniobj.Sans.M1) {
            if (parseInt(iniobj.Sans.M1.trim()) === 1) {
                document.getElementById("ini-sans-met").checked = true;
            } else {
                document.getElementById("ini-sans-met").checked = false;
            }
        }
    } else {
        document.getElementById("ini-sans-deaths").value = 0;
        document.getElementById("ini-sans-met").checked = false;
    }
    if (iniobj.Toriel) {
        if (iniobj.Toriel.Bscotch) {
            document.getElementById("ini-toriel-prefer").value = parseInt(iniobj.Toriel.Bscotch.trim());
        } else {
            document.getElementById("ini-toriel-prefer").value = 0;
        }
        if (iniobj.Toriel.TS) {
            if (parseInt(iniobj.Toriel.TS.trim()) === 1) {
                document.getElementById("ini-spared-toriel").checked = true;
            } else {
                document.getElementById("ini-spared-toriel").checked = false;
            }
        } else {
            document.getElementById("ini-spared-toriel").checked = false;
        }
        if (iniobj.Toriel.TK) {
            if (parseInt(iniobj.Toriel.TK.trim()) === 1) {
                document.getElementById("ini-killed-toriel").checked = true;
            } else {
                document.getElementById("ini-killed-toriel").checked = false;
            }
        } else {
            document.getElementById("ini-killed-toriel").checked = false;
        }
    } else {
        document.getElementById("ini-toriel-prefer").value = 0;
        document.getElementById("ini-spared-toriel").checked = false;
        document.getElementById("ini-killed-toriel").checked = false;
    }
    if (iniobj.Papyrus){
        if (iniobj.Papyrus.M1) {
            if (parseInt(iniobj.Papyrus.M1.trim()) === 1) {
                document.getElementById("ini-papyrus-met").checked = true;
            } else {
                document.getElementById("ini-papyrus-met").checked = false;
            }
        } else {
            document.getElementById("ini-papyrus-met").checked = false;
        }
        if (iniobj.Papyrus.PS){
            if (parseInt(iniobj.Papyrus.PS.trim()) === 1){
                document.getElementById("ini-spared-papyrus").checked = true;
            } else {
                document.getElementById("ini-spared-papyrus").checked = false;
            }
        } else {
            document.getElementById("ini-spared-papyrus").checked = false;
        }
        if (iniobj.Papyrus.PK){
            if (parseInt(iniobj.Papyrus.PK.trim()) === 1){
                document.getElementById("ini-killed-papyrus").checked = true;
            } else {
                document.getElementById("ini-killed-papyrus").checked = false;
            }
        } else {
            document.getElementById("ini-killed-papyrus").checked = false;
        }
    } else {
        document.getElementById("ini-papyrus-met").checked = false;
        document.getElementById("ini-spared-papyrus").checked = false;
        document.getElementById("ini-killed-papyrus").checked = false;
    }
    if (iniobj.EndF){
        if (iniobj.EndF.EndF){
            if (parseInt(iniobj.EndF.EndF.trim()) === 1){
                document.getElementById("ini-exit-barrier").checked = true;
            } else {
                document.getElementById("ini-exit-barrier").checked = false;
            }
        } else {
            document.getElementById("ini-exit-barrier").checked = false;
        }
    } else {
        document.getElementById("ini-exit-barrier").checked = false;
    }
}

// Update an ini object from the persistent data form.
function updateIniFromForm(ini) {
    "use strict";
    ini.General.Name = document.getElementById("ini-name").value;
    ini.General.Room = document.getElementById("ini-location").value;
    ini.General.Kills = document.getElementById("ini-kills").value;
    ini.General.Love = document.getElementById("ini-love").value;
    if (document.getElementById("ini-omega-flowey-trapped").checked) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.F = "1";
    } else {
        if (ini.FFFFF) {
            ini.FFFFF.F = "0";
        }
    }
    var upcomingSoul = parseInt(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = parseInt(document.getElementById("ini-omega-flowey-deaths").value);
    if (timesDied) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        if (ini.FFFFF) {
            ini.FFFFF.D = timesDied;
        }
    }
    if (document.getElementById("ini-dodged-all-special-thanks").checked) {
        if (!ini.reset) {
            ini.reset = {};
        }
        ini.reset.s_key = "1";
    } else {
        if (ini.reset) {
            ini.reset.s_key = "0";
        }
    }
    var fun = parseInt(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
    if (document.getElementById("ini-sans-met").checked) {
        if (!ini.Sans) {
            ini.Sans = {};
        }
        if (ini.Sans) {
            ini.Sans.M1 = "1";
        }
    }
    var timesDiedSans = parseInt(document.getElementById("ini-sans-deaths").value);
    if (timesDiedSans){
        if (!ini.Sans){
            ini.Sans={};
        }
        if (ini.Sans){
            ini.Sans.F = timesDiedSans;
        }
    }
    var torielPrefer = parseInt(document.getElementById("ini-toriel-prefer").value);
    if (torielPrefer) {
        if (!ini.Toriel) {
            ini.Toriel = {};
        }
        ini.Toriel.Bscotch = torielPrefer;
    }
    if (document.getElementById("ini-spared-toriel").checked) {
        if (!ini.Toriel) {
            ini.Toriel = {};
        }
        if (ini.Toriel) {
            ini.Toriel.TS = "1";
        }
    }
    if (document.getElementById("ini-killed-toriel").checked) {
        if (!ini.Toriel) {
            ini.Toriel = {};
        }
        if (ini.Toriel) {
            ini.Toriel.TK = "1";
        }
    }
    if (document.getElementById("ini-papyrus-met").checked) {
        if (!ini.Papyrus) {
            ini.Papyrus = {};
        }
        if (ini.Papyrus) {
            ini.Papyrus.M1 = "1";
        }
    }
    if (document.getElementById("ini-spared-papyrus").checked){
        if (!ini.Papyrus) {
            ini.Papyrus = {};
        }
        if (ini.Papyrus) {
            ini.Papyrus.PS = "1";
        }
    }
    if (document.getElementById("ini-killed-papyrus").checked){
        if (!ini.Papyrus) {
            ini.Papyrus = {};
        }
        if (ini.Papyrus) {
            ini.Papyrus.PK = "1";
        }
    }
}

function updateSelection(id, values, index, list) {
    "use strict";
    var value = parseInt(values[index].trim());
    if (!list[value]) {
        list[value] = "Unrecognized (" + value + ")";
        loadSelectFromObj(id, list);
    }
    document.getElementById(id).value = value;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    for (var i = 0; i < 8; i++) {
        updateSelection("sav-invslot" + (i + 1), values, 12 + (i * 2), items);
        updateSelection("sav-cellslot" + (i + 1), values, 13 + (i * 2), cellOpts);
    }
    updateSelection("sav-weapon", values, 28, items);
    updateSelection("sav-armor", values, 29, items);
    updateSelection("sav-trainingdummystate", values, 44, trainingDummyStates);
    updateSelection("sav-torielstate", values, 75, torielStates);
    updateSelection("sav-doggostate", values, 82, doggoStates);
    updateSelection("sav-dogamydogaressastate", values, 83, dogamyDogaressaStates);
    updateSelection("sav-greaterdogstate", values, 84, greaterDogStates);
    updateSelection("sav-comedianstate", values, 87, comedianStates);
    updateSelection("sav-papyrusstate", values, 97, papyrusStates);
    updateSelection("sav-shyrenstate", values, 111, shyrenStates);
    document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values, 281, undyneStates1);
    updateSelection("sav-maddummystate", values, 282, madDummyStates);
    updateSelection("sav-undynestate2", values, 380, undyneStates2);
    updateSelection("sav-muffetstate", values, 427, muffetStates);
    updateSelection("sav-broguardsstate", values, 432, broGuardsStates);
    updateSelection("sav-mettatonstate", values, 455, mettatonStates);
    if (parseInt(values[523].trim()) === 12) {
        document.getElementById("sav-exitedtruelab").checked = true;
    } else {
        document.getElementById("sav-exitedtruelab").checked = false;
    }
    if (parseInt(values[37].trim()) === 1) {
        document.getElementById("sav-defeatedasriel").checked = true;
    } else {
        document.getElementById("sav-defeatedasriel").checked = false;
    }
    updateSelection("sav-plotvalue", values, 542, plotValues);
    if (parseInt(values[545].trim()) === 1) {
        document.getElementById("sav-havecell").checked = true;
    } else {
        document.getElementById("sav-havecell").checked = false;
    }
    document.getElementById("sav-location").value = parseInt(values[547].trim());
    document.getElementById("sav-fun").value = parseInt(values[35].trim());
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    values[12] = document.getElementById("sav-invslot1").value;
    values[13] = document.getElementById("sav-cellslot1").value;
    values[14] = document.getElementById("sav-invslot2").value;
    values[15] = document.getElementById("sav-cellslot2").value;
    values[16] = document.getElementById("sav-invslot3").value;
    values[17] = document.getElementById("sav-cellslot3").value;
    values[18] = document.getElementById("sav-invslot4").value;
    values[19] = document.getElementById("sav-cellslot4").value;
    values[20] = document.getElementById("sav-invslot5").value;
    values[21] = document.getElementById("sav-cellslot5").value;
    values[22] = document.getElementById("sav-invslot6").value;
    values[23] = document.getElementById("sav-cellslot6").value;
    values[24] = document.getElementById("sav-invslot7").value;
    values[25] = document.getElementById("sav-cellslot7").value;
    values[26] = document.getElementById("sav-invslot8").value;
    values[27] = document.getElementById("sav-cellslot8").value;
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[231] = document.getElementById("sav-unkkills").value;
    values[232] = document.getElementById("sav-ruinskills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    } else {
        values[523] = "0";
    }
    if (document.getElementById("sav-defeatedasriel").checked) {
        values[37] = "1";
    } else {
        values[37] = "0";
    }
    values[542] = document.getElementById("sav-plotvalue").value;
    if (document.getElementById("sav-havecell").checked) {
        values[545] = "1";
    } else {
        values[545] = "0";
    }
    values[547] = document.getElementById("sav-location").value;
    values[35] = document.getElementById("sav-fun").value;
}

function saveIniToFile(ini) {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveSaveValuesToFile(values) {
    "use strict";
    var string = "";
    for (var i = 0; i < values.length; i++) {
        string += values[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "text/plain"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("builtinpresetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function start() {
    "use strict";
    var userPresets = localStorage.getItem("userPresets");
    if (userPresets === null) {
        localStorage.setItem("userPresets", JSON.stringify({}));
    } else {
        for (var key in JSON.parse(userPresets)) {
            var presetSelect2 = document.getElementById("userpresetselect");
            var option2 = document.createElement("option");
            var text2 = document.createTextNode(key);
            option2.appendChild(text2);
            presetSelect2.appendChild(option2);
        }
    }
    if (localStorage.getItem("laughed") === "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
    }
    var ini, saveLines;
    function loadPreset(name) {
        ini = presets[name].ini;
        saveLines = presets[name].lines;
        updateSaveDataForm(saveLines);
        updatePersistentDataForm(ini);
    }
    loadSelectFromObj("sav-location", rooms);
    loadSelectFromObj("ini-location", rooms);
    loadSelectFromObj("ini-omega-flowey-soul", floweyStates);
    loadSelectFromObj("ini-toriel-prefer", torielPrefer)
    loadSelectFromObj("sav-torielstate", torielStates);
    loadSelectFromObj("sav-comedianstate", comedianStates);
    loadSelectFromObj("sav-doggostate", doggoStates);
    loadSelectFromObj("sav-dogamydogaressastate", dogamyDogaressaStates);
    loadSelectFromObj("sav-greaterdogstate", greaterDogStates);
    loadSelectFromObj("sav-papyrusstate", papyrusStates);
    loadSelectFromObj("sav-plotvalue", plotValues);
    loadSelectFromObj("sav-trainingdummystate", trainingDummyStates);
    loadSelectFromObj("sav-shyrenstate", shyrenStates);
    loadSelectFromObj("sav-maddummystate", madDummyStates);
    loadSelectFromObj("sav-undynestate1", undyneStates1);
    loadSelectFromObj("sav-undynestate2", undyneStates2);
    loadSelectFromObj("sav-broguardsstate", broGuardsStates);
    loadSelectFromObj("sav-muffetstate", muffetStates);
    loadSelectFromObj("sav-mettatonstate", mettatonStates);
    insert_inv_lists();
    insert_cell_lists();
    loadPresetSelect();
    loadPreset("Ruins Start");
    var iniFile, saveFile;
    var iniInput = document.getElementById("ini-file");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").disabled = false;
        } else {
            document.getElementById("ini-loadbutton").disabled = true;
        }
    }, false);
    var saveInput = document.getElementById("sav-file");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").disabled = false;
        } else {
            document.getElementById("sav-loadbutton").disabled = true;
        }
    }, false);
    var iniLoadButton = document.getElementById("ini-loadbutton");
    iniLoadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("请选择一个文件！");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    }, false);
    var file0LoadButton = document.getElementById("sav-loadbutton");
    file0LoadButton.addEventListener("click", function() {
        if (!saveFile) {
            window.alert("请选择一个文件！");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    }, false);
    var saveIniButton = document.getElementById("ini-savebutton");
    saveIniButton.addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    }, false);
    var saveXButton = document.getElementById("sav-savebutton");
    saveXButton.addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    }, false);
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "text/plain"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    }, false);
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "text/plain"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    }, false);
    var weaponSelect = document.getElementById("sav-weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (typeof at !== "undefined") {
            document.getElementById("sav-weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("sav-armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
    };
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    }, false);
    function saveUserPreset(name) {
        updateIniFromForm(ini);
        updateSaveValuesFromForm(saveLines);
        var obj = {
            "ini": ini,
            "lines": saveLines,
        };
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        presets[name] = obj;
        localStorage.setItem("userPresets",JSON.stringify(presets));
    }
    document.getElementById("userpresetnew").addEventListener("click", function() {
        var name = window.prompt("输入配置名称");
        if (name === null || name === "") {
            window.alert("无效名称，未创建配置!");
        } else {
            saveUserPreset(name);
            var presetSelect = document.getElementById("userpresetselect");
            var option = document.createElement("option");
            var text = document.createTextNode(name);
            option.appendChild(text);
            presetSelect.appendChild(option);
            presetSelect.value = name;
            document.getElementById("userpresetload").disabled = false;
            document.getElementById("userpresetsave").disabled = false;
            document.getElementById("userpresetdelete").disabled = false;
            document.getElementById("userpresetexport").disabled = false;
        }
    }, false);
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("请选择一个有效的配置！");
        }
    }, false);
    document.getElementById("userpresetload").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            var item = localStorage.getItem("userPresets");
            var presets = JSON.parse(item);
            var obj = presets[name];
            ini = obj.ini;
            saveLines = obj.lines;
            updateSaveDataForm(saveLines);
            updatePersistentDataForm(ini);
        } else {
            window.alert("请选择一个有效的配置！");
        }
    }, false);
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").disabled = true;
            document.getElementById("userpresetsave").disabled = true;
            document.getElementById("userpresetdelete").disabled = true;
            document.getElementById("userpresetexport").disabled = true;
        }
    }, false);
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").disabled = false;
        document.getElementById("userpresetsave").disabled = false;
        document.getElementById("userpresetdelete").disabled = false;
        document.getElementById("userpresetexport").disabled = false;
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/x-javascript"});
        saveAs(blob, name + ".js", true);
    }, false);
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
    }, false);
    function addClickSound(list){
        for(var i=0;i<list.length;i++){
            list[i].addEventListener("click",function(){
                if(!document.getElementById("mute").checked) {
                    var audio = new Audio("res/menuselect.ogg");
                    audio.play()
                }
            })
        }
    }
    addClickSound(document.getElementsByTagName("a"));
    addClickSound(document.getElementsByTagName("button"));
    addClickSound(document.getElementsByTagName("input"));
    addClickSound(document.getElementsByTagName("select"));
    addClickSound([document.getElementById("floweyimg")])
}

document.addEventListener("DOMContentLoaded", start);
