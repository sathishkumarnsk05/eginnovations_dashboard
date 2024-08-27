document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let currentDate = new Date();
    let selectedDate = new Date();

    const monthYearElement = document.querySelector(".month-year");
    const daysContainer = document.querySelector(".days");
    const prevButton = document.querySelector(".prev-month");
    const nextButton = document.querySelector(".next-month");

    function renderCalendar() {
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        monthYearElement.querySelector(".month").textContent = monthNames[currentMonth];
        monthYearElement.querySelector(".year").textContent = currentYear;

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        daysContainer.innerHTML = "";
        let dayCounter = 1;

        for (let i = 1; i <= 42; i++) {
            const dayElement = document.createElement("div");
            const daySpan = document.createElement("span"); // Create a span element

            if (i >= firstDayOfMonth && dayCounter <= daysInMonth) {
                daySpan.textContent = dayCounter;
                dayElement.dataset.date = new Date(currentYear, currentMonth, dayCounter).toISOString();

                if (dayCounter === selectedDate.getDate() &&
                    currentMonth === selectedDate.getMonth() &&
                    currentYear === selectedDate.getFullYear()) {
                    dayElement.classList.add("selected");
                }

                if (dayCounter === new Date().getDate() &&
                    currentMonth === new Date().getMonth() &&
                    currentYear === new Date().getFullYear()) {
                    dayElement.classList.add("today");
                }

                dayCounter++;
            } else {
                daySpan.textContent = "";
            }

            dayElement.appendChild(daySpan); // Append span to div
            dayElement.addEventListener("click", function() {
                if (daySpan.textContent !== "") { // Only allow clicks on valid days
                    selectedDate = new Date(dayElement.dataset.date);
                    renderCalendar();
                }
            });

            daysContainer.appendChild(dayElement);
        }
    }

    prevButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
