const questions = [
      {
        text: "Over the past 2 weeks, have you experienced any of the following symptoms?",
        options: [
          "Depressed mood most of the day",
          "Markedly diminished interest in activities",
          "Significant weight loss or gain",
          "Insomnia or hypersomnia"
        ],
        type: "checkbox"
      },
      {
        text: "Have you experienced fatigue or loss of energy nearly every day?",
        options: ["Yes", "No"],
        type: "radio"
      },
      {
        text: "Have you felt worthless or excessively guilty?",
        options: ["Frequently", "Occasionally", "Not at all"],
        type: "radio"
      },
      {
        text: "Trouble concentrating on things like reading or watching TV?",
        options: ["Yes", "No"],
        type: "radio"
      },
      {
        text: "Thoughts of self-harm or that you’d be better off dead?",
        options: ["Yes", "No"],
        type: "radio"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    function renderQuestion() {
      const q = questions[currentQuestion];
      document.getElementById("question").innerText = q.text;
      const optionsContainer = document.getElementById("options");
      optionsContainer.innerHTML = "";

      q.options.forEach((option, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = q.type;
        input.name = "question" + currentQuestion;
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
      });

      const progress = ((currentQuestion + 1) / questions.length) * 100;
      document.getElementById("progressBar").style.width = progress + "%";
    }

    function nextQuestion() {
      const selectedInputs = document.querySelectorAll(`input[name="question${currentQuestion}"]:checked`);

      if (selectedInputs.length > 0) {
        selectedInputs.forEach(input => {
          if (input.value !== "No" && input.value !== "Not at all") {
            score++;
          }
        });
      }

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        let message = "Minimal or no signs of depression detected.";
        if (score >= 3 && score <= 5) message = "Mild symptoms of depression.";
        else if (score >= 6 && score <= 8) message = "Moderate signs of depression. Consider speaking to a mental health professional.";
        else if (score > 8) message = "Severe symptoms of depression detected. Please seek professional help immediately.";

        document.querySelector(".container").innerHTML = `
          <div class="header">
            <h2>Assessment Complete</h2>
          </div>
          <p>${message}</p>
          <div class="buttons">
            <button class="skip" onclick="location.reload()">Retake</button>
          </div>
        `;
      }
    }

    renderQuestion();