/* =========================================================
   SHEHEALTH
   Frontend Application
   HTML + CSS + JavaScript
========================================================= */


/* ================= DATA ================= */

const foods = [

  {
    name: "Poha",
    category: "breakfast",
    emoji: "🍚",
    description: "Light Indian breakfast made from flattened rice.",
    calories: 250,
    protein: "6g",
    iron: "Good",
    benefit: "Quick energy"
  },

  {
    name: "Oats & Banana",
    category: "breakfast",
    emoji: "🥣",
    description: "Simple breakfast with oats, milk and banana.",
    calories: 320,
    protein: "10g",
    iron: "Moderate",
    benefit: "Energy + fibre"
  },

  {
    name: "Idli",
    category: "breakfast",
    emoji: "🥞",
    description: "Steamed fermented rice and lentil food.",
    calories: 180,
    protein: "7g",
    iron: "Moderate",
    benefit: "Light meal"
  },

  {
    name: "Dal Roti",
    category: "lunch",
    emoji: "🍛",
    description: "Indian combination of lentils and whole-wheat roti.",
    calories: 420,
    protein: "16g",
    iron: "Good",
    benefit: "Protein + fibre"
  },

  {
    name: "Paneer Salad",
    category: "lunch",
    emoji: "🥗",
    description: "Paneer with fresh vegetables.",
    calories: 330,
    protein: "20g",
    iron: "Moderate",
    benefit: "Protein"
  },

  {
    name: "Vegetable Khichdi",
    category: "dinner",
    emoji: "🍲",
    description: "Comforting rice and lentil meal with vegetables.",
    calories: 350,
    protein: "12g",
    iron: "Good",
    benefit: "Balanced meal"
  },

  {
    name: "Roti & Sabzi",
    category: "dinner",
    emoji: "🥘",
    description: "Whole wheat roti with seasonal vegetables.",
    calories: 380,
    protein: "10g",
    iron: "Good",
    benefit: "Fibre"
  },

  {
    name: "Fruit Bowl",
    category: "snack",
    emoji: "🍎",
    description: "Seasonal fruits for a refreshing snack.",
    calories: 140,
    protein: "2g",
    iron: "Moderate",
    benefit: "Vitamins"
  },

  {
    name: "Roasted Chana",
    category: "snack",
    emoji: "🥜",
    description: "Convenient protein-rich Indian snack.",
    calories: 170,
    protein: "8g",
    iron: "Good",
    benefit: "Protein"
  },

  {
    name: "Curd",
    category: "snack",
    emoji: "🥛",
    description: "Plain curd as a simple dairy option.",
    calories: 100,
    protein: "5g",
    iron: "Low",
    benefit: "Calcium"
  }

];


const mealPlans = {

  working: {

    default: [
      {
        type: "Breakfast",
        emoji: "🥣",
        name: "Oats & Banana Bowl",
        description: "Quick breakfast for a busy morning.",
        calories: 320,
        focus: "Energy + fibre"
      },

      {
        type: "Lunch",
        emoji: "🍛",
        name: "Dal, Roti & Seasonal Sabzi",
        description: "A practical balanced Indian lunch.",
        calories: 450,
        focus: "Protein + fibre"
      },

      {
        type: "Snack",
        emoji: "🍎",
        name: "Fruit + Roasted Chana",
        description: "Easy office-friendly snack.",
        calories: 220,
        focus: "Vitamins + protein"
      },

      {
        type: "Dinner",
        emoji: "🍲",
        name: "Vegetable Khichdi",
        description: "Simple and comforting dinner.",
        calories: 350,
        focus: "Balanced meal"
      }
    ]

  },


  pregnant: {

    1: [
      {
        type: "Breakfast",
        emoji: "🥣",
        name: "Oats, Banana & Milk",
        description: "Simple breakfast with fibre and protein.",
        calories: 320,
        focus: "Fibre + protein"
      },

      {
        type: "Lunch",
        emoji: "🍛",
        name: "Dal, Roti & Vegetables",
        description: "Balanced Indian lunch option.",
        calories: 450,
        focus: "Protein + iron"
      },

      {
        type: "Snack",
        emoji: "🍎",
        name: "Fruit & Roasted Chana",
        description: "Convenient nutrient-rich snack.",
        calories: 220,
        focus: "Vitamins + protein"
      },

      {
        type: "Dinner",
        emoji: "🍲",
        name: "Vegetable Khichdi",
        description: "Easy-to-digest balanced meal.",
        calories: 350,
        focus: "Balanced nutrition"
      }
    ],

    2: [
      {
        type: "Breakfast",
        emoji: "🥞",
        name: "Idli with Vegetable Sambar",
        description: "Steamed breakfast with lentils and vegetables.",
        calories: 300,
        focus: "Protein + fibre"
      },

      {
        type: "Lunch",
        emoji: "🥗",
        name: "Paneer, Roti & Vegetables",
        description: "Protein-focused Indian meal.",
        calories: 480,
        focus: "Protein + calcium"
      },

      {
        type: "Snack",
        emoji: "🥛",
        name: "Curd & Seasonal Fruit",
        description: "Simple snack option.",
        calories: 180,
        focus: "Calcium + vitamins"
      },

      {
        type: "Dinner",
        emoji: "🍲",
        name: "Dal Khichdi & Vegetables",
        description: "Balanced home-style dinner.",
        calories: 400,
        focus: "Protein + fibre"
      }
    ],

    3: [
      {
        type: "Breakfast",
        emoji: "🥣",
        name: "Vegetable Upma & Fruit",
        description: "Light breakfast with vegetables.",
        calories: 310,
        focus: "Energy + fibre"
      },

      {
        type: "Lunch",
        emoji: "🍛",
        name: "Dal, Roti, Sabzi & Curd",
        description: "Balanced Indian lunch.",
        calories: 500,
        focus: "Protein + calcium"
      },

      {
        type: "Snack",
        emoji: "🥜",
        name: "Roasted Chana & Fruit",
        description: "Practical snack between meals.",
        calories: 220,
        focus: "Protein + vitamins"
      },

      {
        type: "Dinner",
        emoji: "🍲",
        name: "Vegetable Khichdi",
        description: "Simple balanced evening meal.",
        calories: 380,
        focus: "Balanced nutrition"
      }
    ]

  }

};


/* ================= DEFAULT USER ================= */

const defaultProfile = {

  name: "Aditi",

  age: 25,

  mode: "working",

  diet: "vegetarian",

  activity: "moderate",

  trimester: 1

};


/* ================= STATE ================= */

let state = {

  profile: loadStorage("shehealth_profile", defaultProfile),

  water: loadStorage("shehealth_water", {
    date: getTodayKey(),
    count: 0,
    timeline: []
  }),

  meals: loadStorage("shehealth_meals", {}),

  mood: loadStorage("shehealth_mood", {}),

  journal: loadStorage("shehealth_journal", {}),

  tasks: loadStorage("shehealth_tasks", [
    {
      id: 1,
      text: "Drink enough water",
      completed: false
    },

    {
      id: 2,
      text: "Have regular meals",
      completed: false
    },

    {
      id: 3,
      text: "Take a short wellness break",
      completed: false
    }
  ]),

  theme: loadStorage("shehealth_theme", "light")

};


/* ================= STORAGE ================= */

function loadStorage(key, fallback) {

  try {

    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : fallback;

  } catch (error) {

    console.error("Storage error:", error);

    return fallback;

  }

}


function saveStorage(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


/* ================= DATE ================= */

function getTodayKey() {

  return new Date().toISOString().split("T")[0];

}


function formatDate() {

  return new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

}


/* ================= INITIALIZATION ================= */

document.addEventListener(
  "DOMContentLoaded",
  initialize
);


function initialize() {

  resetDailyDataIfNeeded();

  applyTheme();

  setupNavigation();

  setupButtons();

  setupProfile();

  setupMeals();

  setupFoods();

  setupHydration();

  setupWellness();

  setupTasks();

  updateEverything();

}


/* ================= DAILY RESET ================= */

function resetDailyDataIfNeeded() {

  if (state.water.date !== getTodayKey()) {

    state.water = {

      date: getTodayKey(),

      count: 0,

      timeline: []

    };

    state.meals = {};

    state.mood = {};

    state.journal = {};

    saveStorage("shehealth_water", state.water);

    saveStorage("shehealth_meals", state.meals);

    saveStorage("shehealth_mood", state.mood);

    saveStorage("shehealth_journal", state.journal);

  }

}


/* ================= NAVIGATION ================= */

function setupNavigation() {

  document.querySelectorAll(".nav-btn").forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          showSection(
            button.dataset.section
          );

        }
      );

    }
  );


  document.querySelectorAll("[data-section-target]").forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          showSection(
            button.dataset.sectionTarget
          );

        }
      );

    }
  );


  document
    .getElementById("profileBtn")
    .addEventListener(
      "click",
      () => showSection("profile")
    );

}


function showSection(sectionId) {

  document.querySelectorAll(".page").forEach(
    page => {

      page.classList.toggle(
        "active",
        page.id === sectionId
      );

    }
  );


  document.querySelectorAll(".nav-btn").forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.section === sectionId
      );

    }
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================= BUTTONS ================= */

function setupButtons() {

  document
    .getElementById("themeBtn")
    .addEventListener(
      "click",
      toggleTheme
    );


  document
    .getElementById("refreshMeals")
    .addEventListener(
      "click",
      () => {

        renderMeals();

        showToast(
          "Meal plan refreshed"
        );

      }
    );

}


/* ================= THEME ================= */

function applyTheme() {

  document.body.classList.toggle(
    "dark",
    state.theme === "dark"
  );

}


function toggleTheme() {

  state.theme =
    state.theme === "light"
      ? "dark"
      : "light";

  saveStorage(
    "shehealth_theme",
    state.theme
  );

  applyTheme();

}


/* ================= PROFILE ================= */

function setupProfile() {

  const form =
    document.getElementById("profileForm");

  const modeInputs =
    document.querySelectorAll(
      'input[name="mode"]'
    );


  modeInputs.forEach(
    input => {

      input.addEventListener(
        "change",
        updateProfileModeUI
      );

    }
  );


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      state.profile.name =
        document
          .getElementById("profileName")
          .value.trim() || "there";

      state.profile.age =
        Number(
          document.getElementById("profileAge").value
        ) || 25;

      state.profile.mode =
        document.querySelector(
          'input[name="mode"]:checked'
        ).value;

      state.profile.diet =
        document.getElementById("profileDiet").value;

      state.profile.activity =
        document.getElementById("profileActivity").value;

      state.profile.trimester =
        Number(
          document.getElementById("profileTrimester").value
        );

      saveStorage(
        "shehealth_profile",
        state.profile
      );

      updateEverything();

      showToast(
        "Profile saved successfully"
      );

    }
  );


  loadProfileIntoForm();

}


function loadProfileIntoForm() {

  const p = state.profile;

  document.getElementById(
    "profileName"
  ).value = p.name;

  document.getElementById(
    "profileAge"
  ).value = p.age;

  document.querySelector(
    `input[name="mode"][value="${p.mode}"]`
  ).checked = true;

  document.getElementById(
    "profileDiet"
  ).value = p.diet;

  document.getElementById(
    "profileActivity"
  ).value = p.activity;

  document.getElementById(
    "profileTrimester"
  ).value = p.trimester;

  updateProfileModeUI();

}


function updateProfileModeUI() {

  const mode =
    document.querySelector(
      'input[name="mode"]:checked'
    )?.value;

  const pregnancySection =
    document.getElementById(
      "profileTrimesterSection"
    );

  const pregnancySelector =
    document.getElementById(
      "pregnancySelector"
    );

  if (mode === "pregnant") {

    pregnancySection.classList.remove(
      "hidden"
    );

    pregnancySelector.classList.remove(
      "hidden"
    );

  } else {

    pregnancySection.classList.add(
      "hidden"
    );

    pregnancySelector.classList.add(
      "hidden"
    );

  }

}


/* ================= DASHBOARD ================= */

function updateDashboard() {

  const p = state.profile;

  document.getElementById(
    "welcomeName"
  ).textContent =
    p.name || "there";


  const badge =
    document.getElementById(
      "userModeBadge"
    );

  badge.textContent =
    p.mode === "pregnant"
      ? `Pregnancy • Trimester ${p.trimester}`
      : "Working Woman";


  const title =
    document.getElementById(
      "heroTitle"
    );

  const description =
    document.getElementById(
      "heroDescription"
    );


  if (p.mode === "pregnant") {

    title.textContent =
      "A little extra care for you and baby.";

    description.textContent =
      `Your plan is adapted for your ${ordinal(
        p.trimester
      )} trimester.`;

  } else {

    title.textContent =
      "Your health, your routine.";

    description.textContent =
      "Stay hydrated, eat regularly and take small wellness breaks.";

  }


  document.getElementById(
    "todayDate"
  ).textContent = formatDate();


  document.getElementById(
    "dashboardWater"
  ).textContent =
    `${state.water.count} / ${getWaterGoal()}`;


  const completedMeals =
    getCompletedMeals();

  document.getElementById(
    "dashboardMeals"
  ).textContent =
    `${completedMeals} / 4`;


  document.getElementById(
    "dashboardMood"
  ).textContent =
    state.mood[getTodayKey()] || "—";


  document.getElementById(
    "dashboardStreak"
  ).textContent =
    calculateStreak();


  updateRecommendation();

}


function ordinal(number) {

  if (number === 1) return "1st";

  if (number === 2) return "2nd";

  return "3rd";

}


/* ================= RECOMMENDATION ================= */

function updateRecommendation() {

  const p = state.profile;

  let title =
    "Start with a balanced breakfast";

  let text =
    "A regular breakfast can help you maintain your energy throughout the morning.";


  if (p.mode === "pregnant") {

    if (p.trimester === 1) {

      title =
        "Focus on regular, comfortable meals";

      text =
        "Choose balanced foods that work well with your routine and personal tolerance.";

    }

    if (p.trimester === 2) {

      title =
        "Include protein and calcium-rich choices";

      text =
        "Try combining lentils, dairy or suitable alternatives with vegetables and whole grains.";

    }

    if (p.trimester === 3) {

      title =
        "Keep meals balanced and practical";

      text =
        "Smaller comfortable meals and regular hydration may help support your daily routine.";

    }

  } else {

    if (p.activity === "high") {

      title =
        "Plan energy-rich meals around your schedule";

      text =
        "Keep practical snacks available so busy periods don't lead to skipped meals.";

    }

    if (p.activity === "low") {

      title =
        "Add gentle movement breaks";

      text =
        "Short activity breaks can be easier to maintain during a busy workday.";

    }

  }


  document.getElementById(
    "recommendationTitle"
  ).textContent = title;

  document.getElementById(
    "recommendationText"
  ).textContent = text;

}


/* ================= MEALS ================= */

function setupMeals() {

  document.querySelectorAll(
    ".trimester-btn"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          state.profile.trimester =
            Number(button.dataset.trimester);

          saveStorage(
            "shehealth_profile",
            state.profile
          );

          renderMeals();

          updateEverything();

        }
      );

    }
  );

}


function getMealsForUser() {

  if (
    state.profile.mode ===
    "pregnant"
  ) {

    return mealPlans.pregnant[
      state.profile.trimester
    ];

  }

  return mealPlans.working.default;

}


function renderMeals() {

  const container =
    document.getElementById(
      "mealList"
    );

  const meals =
    getMealsForUser();


  document.querySelectorAll(
    ".trimester-btn"
  ).forEach(
    button => {

      button.classList.toggle(
        "active",
        Number(button.dataset.trimester) ===
        Number(state.profile.trimester)
      );

    }
  );


  if (state.profile.mode === "pregnant") {

    document.getElementById(
      "nutritionFocus"
    ).textContent =
      getPregnancyFocus(
        state.profile.trimester
      );

  } else {

    document.getElementById(
      "nutritionFocus"
    ).textContent =
      "Quick, balanced and practical meals for a busy schedule.";

  }


  container.innerHTML =
    meals.map(
      (meal, index) => {

        const key =
          getMealKey(index);

        const completed =
          Boolean(
            state.meals[key]
          );


        return `

          <article class="meal-card">

            <div class="meal-top">

              <div>
                <span class="meal-type">
                  ${meal.type}
                </span>

                <h3>
                  ${meal.name}
                </h3>
              </div>

              <div class="meal-emoji">
                ${meal.emoji}
              </div>

            </div>

            <p>
              ${meal.description}
            </p>

            <div class="meal-meta">

              <span class="meta-pill">
                ${meal.calories} kcal
              </span>

              <span class="meta-pill">
                ${meal.focus}
              </span>

            </div>

            <button
              class="meal-complete ${
                completed
                  ? "completed"
                  : ""
              }"
              data-meal-index="${index}"
            >
              ${
                completed
                  ? "✓ Completed"
                  : "Mark as completed"
              }
            </button>

          </article>

        `;

      }
    ).join("");


  container
    .querySelectorAll(
      ".meal-complete"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.mealIndex
              );

            const key =
              getMealKey(index);

            state.meals[key] =
              !state.meals[key];

            saveStorage(
              "shehealth_meals",
              state.meals
            );

            renderMeals();

            updateDashboard();

          }
        );

      }
    );

}


function getMealKey(index) {

  return `${getTodayKey()}_${state.profile.mode}_${state.profile.trimester}_${index}`;

}


function getCompletedMeals() {

  return getMealsForUser()
    .map(
      (_, index) =>
        Boolean(
          state.meals[
            getMealKey(index)
          ]
        )
    )
    .filter(Boolean)
    .length;

}


function getPregnancyFocus(trimester) {

  const focus = {

    1:
      "Balanced meals with attention to folate, iron, protein and hydration.",

    2:
      "Balanced meals with protein, calcium, iron, fibre and hydration.",

    3:
      "Balanced meals, adequate protein, fibre, calcium and hydration."

  };

  return focus[trimester];

}


/* ================= FOOD DATABASE ================= */

let activeFoodFilter = "all";


function setupFoods() {

  document
    .getElementById("foodSearch")
    .addEventListener(
      "input",
      renderFoods
    );


  document.querySelectorAll(
    ".filter-btn"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          activeFoodFilter =
            button.dataset.foodFilter;

          document.querySelectorAll(
            ".filter-btn"
          ).forEach(
            item =>
              item.classList.toggle(
                "active",
                item === button
              )
          );

          renderFoods();

        }
      );

    }
  );


  renderFoods();

}


function renderFoods() {

  const search =
    document
      .getElementById("foodSearch")
      .value
      .toLowerCase()
      .trim();


  const filtered =
    foods.filter(
      food => {

        const matchesSearch =
          food.name
            .toLowerCase()
            .includes(search) ||
          food.description
            .toLowerCase()
            .includes(search);


        const matchesCategory =
          activeFoodFilter === "all" ||
          food.category === activeFoodFilter;


        return (
          matchesSearch &&
          matchesCategory
        );

      }
    );


  const container =
    document.getElementById(
      "foodList"
    );


  if (!filtered.length) {

    container.innerHTML = `
      <div class="food-card">
        <h3>No food found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;

  }


  container.innerHTML =
    filtered.map(
      food => `

        <article class="food-card">

          <div class="food-icon">
            ${food.emoji}
          </div>

          <h3>
            ${food.name}
          </h3>

          <p>
            ${food.description}
          </p>

          <div class="food-nutrients">

            <span>
              ${food.calories} kcal
            </span>

            <span>
              Protein ${food.protein}
            </span>

            <span>
              Iron: ${food.iron}
            </span>

            <span>
              ${food.benefit}
            </span>

          </div>

        </article>

      `
    ).join("");

}


/* ================= HYDRATION ================= */

function setupHydration() {

  document
    .getElementById("addWater")
    .addEventListener(
      "click",
      addWater
    );


  document
    .getElementById("removeWater")
    .addEventListener(
      "click",
      removeWater
    );

}


function getWaterGoal() {

  return state.profile.mode ===
    "pregnant"
    ? 9
    : 8;

}


function addWater() {

  const goal =
    getWaterGoal();

  if (state.water.count >= goal) {

    showToast(
      "You've reached today's target 🎉"
    );

    return;

  }


  state.water.count++;

  state.water.timeline.push(
    new Date().toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    )
  );


  saveStorage(
    "shehealth_water",
    state.water
  );


  renderHydration();

  updateDashboard();

}


function removeWater() {

  if (state.water.count <= 0)
    return;

  state.water.count--;

  state.water.timeline.pop();

  saveStorage(
    "shehealth_water",
    state.water
  );

  renderHydration();

  updateDashboard();

}


function renderHydration() {

  const goal =
    getWaterGoal();

  const count =
    state.water.count;


  document.getElementById(
    "waterCount"
  ).textContent = count;


  document.getElementById(
    "waterGoal"
  ).textContent = goal;


  const percentage =
    Math.min(
      100,
      (count / goal) * 100
    );


  document.getElementById(
    "waterProgress"
  ).style.width =
    `${percentage}%`;


  const circle =
    document.querySelector(
      ".water-circle"
    );


  circle.style.background = `
    radial-gradient(
      circle,
      var(--surface) 58%,
      transparent 59%
    ),
    conic-gradient(
      var(--primary) ${percentage * 3.6}deg,
      var(--secondary) 0deg
    )
  `;


  const message =
    document.getElementById(
      "waterMessage"
    );


  if (percentage >= 100) {

    message.textContent =
      "Great job! You've reached today's target.";

  } else if (percentage >= 60) {

    message.textContent =
      "You're doing well. Keep going!";

  } else {

    message.textContent =
      "Try taking regular water breaks throughout the day.";

  }


  const timeline =
    document.getElementById(
      "waterTimeline"
    );


  timeline.innerHTML =
    state.water.timeline.length
      ? state.water.timeline
          .map(
            time =>
              `<div class="timeline-item">💧 ${time}</div>`
          )
          .join("")
      : `
          <div class="timeline-item">
            No water logged yet.
          </div>
        `;

}


/* ================= WELLNESS ================= */

function setupWellness() {

  document.querySelectorAll(
    ".mood-btn"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const mood =
            button.dataset.mood;

          state.mood[
            getTodayKey()
          ] = mood;

          saveStorage(
            "shehealth_mood",
            state.mood
          );


          document.querySelectorAll(
            ".mood-btn"
          ).forEach(
            item =>
              item.classList.remove(
                "selected"
              )
          );


          button.classList.add(
            "selected"
          );


          updateDashboard();

          showToast(
            `Mood saved: ${mood}`
          );

        }
      );

    }
  );


  document.querySelectorAll(
    ".wellness-tip"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          showToast(
            "Take a few minutes for yourself 🌸"
          );

        }
      );

    }
  );


  document
    .getElementById("saveJournal")
    .addEventListener(
      "click",
      saveJournal
    );


  loadJournal();

}


function saveJournal() {

  const text =
    document
      .getElementById("journal")
      .value.trim();


  state.journal[
    getTodayKey()
  ] = text;


  saveStorage(
    "shehealth_journal",
    state.journal
  );


  showToast(
    "Your note has been saved"
  );

}


function loadJournal() {

  document.getElementById(
    "journal"
  ).value =
    state.journal[
      getTodayKey()
    ] || "";

}


/* ================= TASKS ================= */

function setupTasks() {

  document
    .getElementById("addTaskBtn")
    .addEventListener(
      "click",
      addTask
    );


  document
    .getElementById("newTask")
    .addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          addTask();

        }

      }
    );


  renderTasks();

}


function renderTasks() {

  const container =
    document.getElementById(
      "taskList"
    );


  container.innerHTML =
    state.tasks.map(
      task => `

        <div
          class="task ${
            task.completed
              ? "completed"
              : ""
          }"
        >

          <input
            type="checkbox"
            data-task-id="${task.id}"
            ${
              task.completed
                ? "checked"
                : ""
            }
          >

          <span>
            ${escapeHTML(task.text)}
          </span>

          <button
            class="delete-task"
            data-delete-task="${task.id}"
          >
            ✕
          </button>

        </div>

      `
    ).join("");


  container
    .querySelectorAll(
      "input[type=checkbox]"
    )
    .forEach(
      checkbox => {

        checkbox.addEventListener(
          "change",
          () => {

            const id =
              Number(
                checkbox.dataset.taskId
              );

            const task =
              state.tasks.find(
                item =>
                  item.id === id
              );

            if (task) {

              task.completed =
                checkbox.checked;

              saveStorage(
                "shehealth_tasks",
                state.tasks
              );

              renderTasks();

            }

          }
        );

      }
    );


  container
    .querySelectorAll(
      "[data-delete-task]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const id =
              Number(
                button.dataset.deleteTask
              );

            state.tasks =
              state.tasks.filter(
                task =>
                  task.id !== id
              );

            saveStorage(
              "shehealth_tasks",
              state.tasks
            );

            renderTasks();

          }
        );

      }
    );

}


function addTask() {

  const input =
    document.getElementById(
      "newTask"
    );


  const text =
    input.value.trim();


  if (!text) {

    showToast(
      "Write a task first"
    );

    return;

  }


  state.tasks.push({

    id: Date.now(),

    text,

    completed: false

  });


  saveStorage(
    "shehealth_tasks",
    state.tasks
  );


  input.value = "";

  renderTasks();

  showToast(
    "Task added"
  );

}


/* ================= STREAK ================= */

function calculateStreak() {

  /*
    Simple prototype streak.

    A production version would calculate this
    from server-side daily records.
  */

  const completedToday =
    getCompletedMeals() > 0 ||
    state.water.count > 0 ||
    Boolean(state.mood[getTodayKey()]);


  return completedToday ? 1 : 0;

}


/* ================= UPDATE EVERYTHING ================= */

function updateEverything() {

  updateDashboard();

  renderMeals();

  renderHydration();

  loadProfileIntoForm();

  loadJournal();

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent = message;

  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* ================= SECURITY / DISPLAY ================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}