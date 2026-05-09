var qData = [
  { 
    q: "নতুন শ্রম আইনের অধীনে কত বছর বা তার বেশি বয়সী শ্রমিকদের জন্য প্রতি বছর বিনামূল্যে বার্ষিক স্বাস্থ্য পরীক্ষা কর্মসূচির সূচনা করা হয়েছে?", 
    a: "৪০ বছর", 
    opts: ["৩৫ বছর", "৪০ বছর", "৪৫ বছর", "৫০ বছর"] 
  },

  { 
    q: "শ্রমিকদের বিনামূল্যে বার্ষিক স্বাস্থ্য পরীক্ষার এই উদ্যোগটি নতুন কোন শ্রম কোডের অধীনে গ্রহণ করা হয়েছে?", 
    a: "Occupational Safety, Health and Working Conditions Code", 
    opts: ["Code on Wages", "Occupational Safety, Health and Working Conditions Code", "Industrial Relations Code", "Social Security Code"] 
  },

  { 
    q: "ভারতে AI-ভিত্তিক স্বাস্থ্যসেবা উদ্ভাবনের প্রসারে কোন দুটি প্রতিষ্ঠানের মধ্যে MoU স্বাক্ষরিত হয়েছে?", 
    a: "IndiaAI এবং ICMR", 
    opts: ["IndiaAI এবং ISRO", "IndiaAI এবং ICMR", "MeitY এবং AIIMS", "ICMR এবং DRDO"] 
  },

  { 
    q: "'IndiaAI' উদ্যোগটি ভারত সরকারের কোন মন্ত্রকের অধীনে কাজ করে?", 
    a: "ইলেকট্রনিক্স ও তথ্যপ্রযুক্তি মন্ত্রক (MeitY)", 
    opts: ["স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রক", "বিজ্ঞান ও প্রযুক্তি মন্ত্রক", "ইলেকট্রনিক্স ও তথ্যপ্রযুক্তি মন্ত্রক (MeitY)", "স্বরাষ্ট্র মন্ত্রক"] 
  },

  { 
    q: "ভবিষ্যতের মঙ্গল অভিযানের লক্ষ্যে কোন মহাকাশ গবেষণা সংস্থা সফলভাবে একটি ১২০ কিলোওয়াট প্লাজমা ইঞ্জিন পরীক্ষা করেছে?", 
    a: "NASA", 
    opts: ["ISRO", "ESA", "NASA", "Roscosmos"] 
  },

  { 
    q: "নাসার পরীক্ষিত নতুন প্লাজমা ইঞ্জিনটি সাধারণত কোন ধরণের প্রপালশন সিস্টেম ব্যবহার করে?", 
    a: "ইলেকট্রিক প্রপালশন", 
    opts: ["সলিড ফুয়েল প্রপালশন", "লিকুইড কেমিক্যাল প্রপালশন", "ইলেকট্রিক প্রপালশন", "নিউক্লিয়ার প্রপালশন"] 
  },

  { 
    q: "প্লাজমা ইঞ্জিনে থ্রাস্ট তৈরি করতে সাধারণত কোন গ্যাস ব্যবহার করা হয়?", 
    a: "জেনন বা আর্গন", 
    opts: ["হাইড্রোজেন বা অক্সিজেন", "জেনন বা আর্গন", "হিলিয়াম বা নাইট্রোজেন", "কার্বন ডাই অক্সাইড"] 
  },

  { 
    q: "এসঅ্যান্ডপি গ্লোবাল ভারতের ২০২৬-২৭ অর্থবছরের জিডিপি বৃদ্ধির পূর্বাভাস কত করেছে?", 
    a: "৬.৬%", 
    opts: ["৬.৮%", "৬.৫%", "৬.৬%", "৬.৪%"] 
  },

  { 
    q: "এসঅ্যান্ডপি গ্লোবাল এবং ক্রিসিল-এর যৌথ প্রতিবেদনের নাম কী?", 
    a: "India Forward", 
    opts: ["India Growth Outlook", "India Forward", "India Economic Survey", "Global Economic Prospects"] 
  },

  { 
    q: "২০২৬-২৭ অর্থবর্ষে ভারতের খুচরা মূল্যস্ফীতি বেড়ে কত শতাংশে পৌঁছানোর আশঙ্কা করা হচ্ছে?", 
    a: "৫.১%", 
    opts: ["৪.৫%", "৫.১%", "৫.৫%", "৬.২%"] 
  },

  { 
    q: "২০২৬ সালের জুন মাসে ভারতের সভাপতিত্বে BRICS কৃষি মন্ত্রীদের সম্মেলন কোথায় অনুষ্ঠিত হবে?", 
    a: "ইন্দোর, মধ্যপ্রদেশ", 
    opts: ["নতুন দিল্লি", "ইন্দোর, মধ্যপ্রদেশ", "বেঙ্গালুরু, কর্ণাটক", "ভোপাল, মধ্যপ্রদেশ"] 
  },

  { 
    q: "BRICS দেশগুলো সম্মিলিতভাবে বিশ্বের প্রায় কত শতাংশ খাদ্যশস্য উৎপাদনের প্রতিনিধিত্ব করে?", 
    a: "৪৫%", 
    opts: ["৩০%", "৩৫%", "৪৫%", "৫০%"] 
  },

  { 
    q: "AIOS-AFOU 2026 আন্তর্জাতিক চক্ষু গবেষণা সম্মেলন কোথায় অনুষ্ঠিত হচ্ছে?", 
    a: "নয়াদিল্লি", 
    opts: ["মুম্বাই", "কলকাতা", "নয়াদিল্লি", "চেন্নাই"] 
  },

  { 
    q: "AIOS-AFOU 2026 সম্মেলনের উদ্বোধন করেন কে?", 
    a: "সঞ্জয় শেঠ", 
    opts: ["রাজনাথ সিং", "সঞ্জয় শেঠ", "অমিত শাহ", "এস. জয়শঙ্কর"] 
  },

  { 
    q: "LA 2028 অলিম্পিকের আগে IOC কোন দেশের ওপর থেকে নিষেধাজ্ঞা পুরোপুরি তুলে নিয়েছে?", 
    a: "বেলারুশ", 
    opts: ["রাশিয়া", "বেলারুশ", "উত্তর কোরিয়া", "ইরান"] 
  },

  { 
    q: "ইউক্রেনে শান্তি না ফেরা পর্যন্ত কোন সংস্থা তাদের নিষেধাজ্ঞা বহাল রাখবে বলে জানিয়েছে?", 
    a: "ওয়ার্ল্ড অ্যাথলেটিক্স (World Athletics)", 
    opts: ["ফিফা (FIFA)", "ওয়ার্ল্ড অ্যাথলেটিক্স (World Athletics)", "ফিডে (FIDE)", "আইওসি (IOC)"] 
  },

  { 
    q: "মাত্র ১৪ বছর বয়সে FIDE কর্তৃক IM খেতাব অর্জনকারী ভারতীয় দাবাড়ুর নাম কী?", 
    a: "অপার সাক্সেনা", 
    opts: ["আর. প্রজ্ঞানন্দ", "অপার সাক্সেনা", "ডি. গুকেশ", "অর্জুন এরিগাইসি"] 
  },

  { 
    q: "অপার সাক্সেনা তাঁর তৃতীয় IM নর্মটি কোন টুর্নামেন্টে অর্জন করেন?", 
    a: "আইএম পুটনিক ১১৪ (সার্বিয়া)", 
    opts: ["আইএম রেনোম ২ (বসনিয়া)", "সান ভিসেন্টে ওপেন (স্পেন)", "আইএম পুটনিক ১১৪ (সার্বিয়া)", "আবুধাবি ওপেন"] 
  },

  { 
    q: "DRDO ও ভারতীয় বিমান বাহিনীর যৌথ উদ্যোগে পরীক্ষিত ভারতের প্রথম নিজস্ব গ্লাইড অস্ত্র ব্যবস্থার নাম কী?", 
    a: "TARA", 
    opts: ["RUDRAM", "TARA", "PRALAY", "ASTHRA"] 
  },

  { 
    q: "ভারতের প্রথম নিজস্ব গ্লাইড অস্ত্র ব্যবস্থা 'TARA'-র সফল পরীক্ষাটি কোন যুদ্ধবিমান থেকে সম্পন্ন করা হয়েছে?", 
    a: "জাগুয়ার (Jaguar)", 
    opts: ["সুখোই-৩০ এমকেআই", "রাফাল", "জাগুয়ার (Jaguar)", "তেজস"] 
  }
];
var correctSound = document.getElementById("correct-sound");
var wrongSound = document.getElementById("wrong-sound");

// Volume Control
correctSound.volume = 0.7;
wrongSound.volume = 0.7;

// ==============================
// QUIZ VARIABLES
// ==============================

var curQ = 0;
var userScore = 0;
var qTimer;
var secLeft = 15;

// ==============================
// START QUIZ
// ==============================

function beginQuizNow() {

    document.getElementById("start-area").style.display = "none";

    document.getElementById("quiz-main-container").style.display = "block";

    loadQuestion();
}

// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    if (curQ >= qData.length) {

        showResult();

        return;
    }

    document.getElementById("next-btn-container").style.display = "none";

    secLeft = 15;

    document.getElementById("timer-box").innerHTML = secLeft;

    document.getElementById("quiz-progress").innerHTML =
        "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;

    document.getElementById("main-q-text").innerHTML =
        qData[curQ].q;

    var optsHtml = "";

    qData[curQ].opts.forEach(opt => {

        optsHtml += `
        <button class="opt-btn"
        onclick="checkAnswer(this, \`${opt}\`)">
            ${opt}
        </button>
        `;
    });

    document.getElementById("main-opt-container").innerHTML =
        optsHtml;

    startTimer();
}

// ==============================
// START TIMER
// ==============================

function startTimer() {

    clearInterval(qTimer);

    qTimer = setInterval(() => {

        secLeft--;

        document.getElementById("timer-box").innerHTML = secLeft;

        if (secLeft <= 0) {

            clearInterval(qTimer);

            // Timeout Sound
            wrongSound.currentTime = 0;

            wrongSound.play().catch(() => {});

            checkAnswer(null, "");
        }

    }, 1000);
}

// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer(btn, selected) {

    clearInterval(qTimer);

    var correct = qData[curQ].a.trim();

    var btns = document.getElementsByClassName("opt-btn");

    // Disable all buttons
    for (let b of btns) {

        b.disabled = true;

        // Highlight Correct Answer
        if (b.innerText.trim() === correct) {

            b.classList.add("correct-ans");
        }
    }

    // ==========================
    // CORRECT ANSWER
    // ==========================

    if (selected.trim() === correct) {

        userScore++;

        document.getElementById("score-val").innerText =
            userScore;

        // Play Correct Sound
        correctSound.currentTime = 0;

        correctSound.play().catch(() => {});
    }

    // ==========================
    // WRONG ANSWER
    // ==========================

    else if (btn) {

        btn.classList.add("wrong-ans");

        // Play Wrong Sound
        wrongSound.currentTime = 0;

        wrongSound.play().catch(() => {});
    }

    // Show Next Button
    document.getElementById("next-btn-container").style.display =
        "block";

    curQ++;
}

// ==============================
// SHOW RESULT
// ==============================

function showResult() {

    document.getElementById("question-area").style.display =
        "none";

    document.getElementById("next-btn-container").style.display =
        "none";

    document.getElementById("result-area").style.display =
        "block";

    var finalScore = userScore;

    var totalQ = qData.length;

    var feedback = "";

    var color = "";

    // ==========================
    // FEEDBACK
    // ==========================

    if (finalScore === totalQ) {

        feedback = "Outstanding! 🌟";

        color = "#388e3c";
    }

    else if (finalScore >= totalQ * 0.8) {

        feedback = "Very Good! 👏";

        color = "#1565c0";
    }

    else if (finalScore >= totalQ * 0.5) {

        feedback = "Good! 👍";

        color = "#f57c00";
    }

    else {

        feedback = "Need More Practice! 📚";

        color = "#d32f2f";
    }

    // ==========================
    // RESULT HTML
    // ==========================

    document.getElementById("res-score").innerHTML = `

        <div style="
            color:${color};
            font-weight:bold;
            margin-bottom:15px;
            font-size:1.8rem;
        ">
            ${feedback}
        </div>

        <div style="
            font-size:3rem;
            font-weight:bold;
        ">
            ${finalScore} / ${totalQ}
        </div>

    `;
}