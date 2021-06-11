var json = [
    {
        question: "이름",
        answer: "내 이름은 아리야 >.<",
        image: "happy",
        animation: "bounce",
    },
    {
        question: "안녕",
        answer: "반가워!",
        image: "",
        animation: "tada",
    },
    {
        question: "눈부셔",
        answer: "앗! 불 꺼줄게~!",
        image: "",
        animation: "jello",
        action: "brigtnessOFF",
    },
    {
        question: "어두워",
        answer: "그래?! 불 켜줄게~!",
        image: "",
        animation: "jello",
        action: "brigtnessON",
    },
    {
        question: "춤",
        answer: "난 우울할 땐 힙합을 춰!",
        image: "dance",
        action: "dance",
    },
    {
        question: "멋져",
        answer: "헤헤 고마워~~ 🖤",
        image: "happy",
        animation: "swing",
    },
    {
        question: "저리가",
        answer: "끙,, 알겠어,,",
        image: "sad",
        action: "move",
    },
    {
        question: "돌아와",
        answer: "나 불렀어 ?!",
        image: "happy",
        action: "back",
    },
];

var learning_check = 0;
var question = "";
var answer = "";

function json_check() {
    var input_value = document.getElementById("input-message");

    if (learning_check == 0) {
        for (let i = 0; i < json.length; i++) {
            if (input_value.value.indexOf(json[i].question) > -1) {
                typing(json[i].answer);
                setBotImage(json[i].image);

                if (json[i].action === "dance") {
                    DanceAnimate();
                } else if (json[i].action === "move") {
                    console.log("move");
                    MoveAnimate();
                } else if (json[i].action === "back") {
                    BackAnimate();
                } else if (json[i].action === "brigtnessON") {
                    brightness("ON");
                } else if (json[i].action === "brigtnessOFF") {
                    brightness("OFF");
                } else {
                    Animate(json[i].animation);
                }
                learning_check = 0;
                return;
            } else {
                typing("무슨 말인지 모르겠어ㅠㅡㅠ");
                Animate("shakeX");
                setBotImage("sad");
                learning_check = 1;
            }
        }
    }
    if (learning_check == 1) {
        setTimeout(() => {
            typing("알려줄래? (좋아 or 싫어)");
            setBotImage("sad");
            question = input_value.value;
            learning_check = 2;
        }, 2500);
    }
    if (learning_check == 2) {
        if (input_value.value === "좋아") {
            setBotImage("sad");
            Animate("swing");
            setTimeout(() => {
                typing("내가 뭐라고 대답하면 좋을까??");
                learning_check = 3;
            }, 1000);
        } else {
            typing("힝");
            setBotImage("sad");
            learning_check = 0;
        }
        return;
    }
    if (learning_check == 3) {
        setTimeout(() => {
            answer = input_value.value;
            push_json();
        },300);
    }
}

function push_json() {
    json.push({ question: `${question}`, answer: `${answer}` });
    typing("이제 무슨 말인지 알겠어~!");
    setBotImage("happy");
    learning_check = 0;
}
