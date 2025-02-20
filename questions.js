// questions.js
const questions = {
    a1: {
        question: "欢迎你，你已经进入了《仙道大学牲传奇》剧本，你是仙道学院的大学生，你平时专心学习，精通各种仙术，平时被选为班长，在一堂课上，老师想选一个优秀的学生示范展示飞行术，点名了你，你走上台，望向台下的学生，你看着他们的眼神，有的人好像在说，切，怎么又是他，又装起来了，还有的眼睛在说，偶像加油，你会选择：",
        options: [
            { 
                text: "装傻充愣，因为你不想显得自己太聪明", 
                action: () => executeActions([
                    () => renderQuestion({b2:1}),
                    
                ]) 
            },
            { text: "正常展示，但是你也知道，即使正常展示，在同学眼中，也是非常厉害的存在", action: () => renderQuestion({b1:1}) },
        
        ]
    },
    b1: {
        question: "你选择了正常展示，你表演的非常好，老师对你大加赞赏，台下的迷妹对你一阵欢呼，下课后，你开心的走回宿舍，发现你的室友都不理你了，原本一起的活动也没有叫上你，你隐隐觉得，他们都在嫉妒你，但是你还是有好朋友的，是你为数不多的好友，名字叫大智，有一天，大智告诉你，他看见了十班的小元和你的女友小紫在一起，你得知之后很生气，但是此事又有一些捕风捉影，虽然大智是你的好友，通常不会骗你，但是某一天，你外出寻宝，意外看见了小元果真和你的女友小紫在一起，你一时被气昏了头脑，这口恶气必须出，你会",
        options: [
            { text: "暴打小紫", action: () => renderQuestion({end1:1,end2:1}) },
            { text: "暴打小元", action: () => renderQuestion({end1:1,end2:1}) },
            { text: "暴打小紫和小元", action: () => renderQuestion({end1:1,end2:1}) },
        ],
        uniqueFunctions: [
            () => console.log("test"),
            () => console.log("test")
        ]
    },
    b2: {
        question: "你选择了故意装作不会，老师眼里有些不开心，但是也没有责怪你，毕竟太难了，但是你发现，你的女朋友看你的眼神好像不太对，你私下里问他怎么了？她说你今天的行为让她丢脸，你怎么也没有哄好她，你本想这不是什么事，知道有一天，你发现你的女友小紫居然偷偷和另一个男生在图书馆聊些什么，好像还很开心，你想走上前质问，结果距离有点远，还没到，男生幻化出仙云，带着女孩离开了，你得知此事后，你试图再联系小紫，但是小紫怎么也不理你，答案其实已经很明显了，你偶尔偶遇她，她也故意回避了你，你的心情很低落，你失落了很多天，但是你的室友都来安慰你，说没什么大不了的，还有一个室友打探清楚了，目前跟小紫交往的，是十班的班长小元，是个富二代，家境深不可测，你想夺回小紫，希望不大，但是突然有一天，小紫突然联系了你，要和你约会，你们再次相见，看着小紫萎靡不振，脸色很不好，像是生病了，她似乎隐瞒了什么，你决定",
        options: [
            { text: "必须告诉我为什么", action: () => renderQuestion({end3:1}) },
            { text: "能回来就好，其他不计较了，继续❤️", action: () => renderQuestion({c:1}) },
        ],
    },
    end3: {
        question: "你追问小紫，小紫面露难色，小脸变得红扑扑的，突然，脸上的血管越来越清晰，突然，她一把推开你，，，，，，她青筋暴起，体型越来越大，变成了绿巨人浩克，并说道：不要逼我变身，说完，一拳朝你袭来，，，，",
        options: [
            { text: "你已经触发了结局" },
        ],
    },
    // 5: {
    //     question: "你和小紫又约会了，小紫的脸色好像不太健康，你问她怎么了？她说自己受了很多委屈，还是你更好，你心里好受了一点，你和她继续交流，你想：",
    //     options: [
    //         { text: "具体问问为什么又来找自己了，发生了什么？", action: () => renderQuestion({4:1}) },
    //         { text: "做快乐的事情", action: () => renderQuestion({4:1}) },
    //     ],
    //     uniqueFunctions: [
    //         () => alert("这是动物问题的独特函数"),
    //         () => console.log("动物问题的额外逻辑")
    //     ]
    // },
    // 6: {
    //     question: "小紫对这个问题好像很排斥，眼神飘忽不定，你猜了很多答案，她都说不对，只是说那个男生没有你好，只是一个冒牌货罢了，你会",
    //     options: [
    //         { text: "很生气，还是隐瞒了什么，离开", action: () => renderQuestion({4:1}) },
    //         { text: "算了，不追究，回来就好，不要破坏了今天的氛围，还是做快乐的事情吧", action: () => renderQuestion({4:1}) },
    //     ],
    //     uniqueFunctions: [
    //         () => alert("这是动物问题的独特函数"),
    //         () => console.log("动物问题的额外逻辑")2:1,3:1
    //     ]
    // },
    c: {
        question: "你不计前嫌，幸福的和小紫在了一起，，，，后来，学院流行起来了“谣言”，最近听说学校流入了魔毒，魔毒通过男欢女爱传播，得知此事，整个学院陷入了巨大的惶恐，纷纷有人去检查自己的身体，学院也组织了一次体检，你慢慢回忆，小紫上次生病，好像看起来是魔毒",
        options: [
            { text: "过了几天，你拿到了一份报告", action: () => renderQuestion({end4:1,end5:1}) },
        ],
    },
    end5: {
        question: "你拿到了一份报告，结果显示，你中了魔毒，你心如死灰，也想明白了，你质问小紫，小紫也说了实话，哈，我也很抱歉，不过我也是受害者，是那个男的传染给了我，我害怕极了，但是那个男的又说，要是我传播出去了，就给我很多钱钱，，，你太失望了。",
        options: [
            { text: "你已经触发了结局", action: () => null },
        ],
    },
    end4: {
        question: "拿到报告，显示正常，你悬着的心终于放下了，你还是要相信小紫的,你们两个幸福的在一起了。",
        options: [
            { text: "你已经触发了结局", action: () => null },
        ],

    },
    // 10: {
    //     question: "拿到报告，显示正常，，你不该有疑心，你还是很幸福的，有情人成了眷属，还是要相信爱情的。",
    //     options: [
    //         { text: "过了几天，你拿到了一份报告", action: () => renderQuestion({4:1}) },
    //     ],
    //     uniqueFunctions: [
    //         () => alert("这是动物问题的独特函数"),
    //         () => console.log("动物问题的额外逻辑")
    //     ]
    // },
    // 11: {
    //     question: "通过这件事，你也看清了小紫的为人，虚伪爱面，不是真心的，你虽然很伤心，但是过了几个月，小紫又主动联系了你，还主动认错，你会：",
    //     options: [
    //         { text: "给个台阶就下,再联系就是了，毕竟找个女朋友不容易", action: () => renderQuestion({4:1}) },
    //         { text: "不想再联系她了", action: () => renderQuestion({4:1}) },  
    //     ], 
    //     uniqueFunctions: [
    //         () => alert("这是动物问题的独特函数"),
    //         () => console.log("动物问题的额外逻辑")
    //     ]
    // },
    // 12: {
    //     question: "你渐渐对爱情麻木，感觉伤害很大，",
    //     options: [
    //         { text: "给个台阶就下,再联系就是了，毕竟找个女朋友不容易", action: () => renderQuestion({4:1}) },
    //         { text: "不想再联系她了", action: () => renderQuestion({4:1}) },  
    //     ], 
    //     uniqueFunctions: [
    //         () => alert("这是动物问题的独特函数"),
    //         () => console.log("动物问题的额外逻辑")
    //     ]
    // },
    //
    end1: {
        question: "拳脚无眼，你一拳打向了小元的腹肌，那感觉，此时，小元也默默的看着你，一时间，时间好像静止了，小元和你不约而同的看向对方，你下意识推开了小紫，握着小元的手，，，，，此时此刻，大智在旁边边偷看偷笑",
        options: [
            { text: "您已经触发了结局", action: () => null },
        ], 
    },
    end2: {
        question: "你正准备动手，小元直接跪下来说道：“想不到我今天看见了咱仙道学院第一才子”，你的表情由怒转喜，笑道，看来你还是懂事的，小元又说道，您是仙道大学第一舔狗，看见了您，我是自知我比不过您了，我马上就滚。从此之后，你和小紫幸福的在了一起了",
        options: [
            { text: "你已经触发了结局", action: () => null}  
        ], 
    },






};

const questionWeights = {
    a1: 1
};
