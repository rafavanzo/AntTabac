document.addEventListener("DOMContentLoaded", function() {
    var opcoesSelect = document.getElementById("opcoes");
    opcoesSelect.addEventListener("change", function() {
      var selectedOption = opcoesSelect.value;
      var comparacaoSelect = document.getElementById("comparacao");
      var selectedComparacao = comparacaoSelect.value;
  
      var timelineItems = document.querySelectorAll(".timeline li");
      timelineItems.forEach(function(item) {
        item.classList.remove("selected");
      });
  
      if (selectedOption !== "" && selectedComparacao !== "") {
        var selectedTimelineItem = getSelectedTimelineItem(selectedOption, selectedComparacao);
        if (selectedTimelineItem) {
          selectedTimelineItem.classList.add("selected");
        }
      }
    });
  
    function getSelectedTimelineItem(selectedOption, selectedComparacao) {
      var selectedTimelineItem = null;
      var timelineItems = document.querySelectorAll(".timeline li");
  
      timelineItems.forEach(function(item) {
        var itemText = item.textContent;
        var timeRange = getTimeRange(itemText);
  
        if (timeRange && isOptionInRange(selectedOption, selectedComparacao, timeRange)) {
          selectedTimelineItem = item;
        }
      });
  
      return selectedTimelineItem;
    }
  
    function getTimeRange(itemText) {
      var regex = /Após ([0-9]+) (minutos|horas|dias|semanas|meses|anos)/;
      var matches = itemText.match(regex);
      if (matches && matches.length === 3) {
        return {
          value: parseInt(matches[1], 10),
          unit: matches[2]
        };
      }
      return null;
    }
  
    function isOptionInRange(selectedOption, selectedComparacao, timeRange) {
      var optionValue = parseInt(selectedOption, 10);
  
      switch (selectedComparacao) {
        case "minutos":
          return isOptionInMinutes(optionValue, timeRange);
        case "horas":
          return isOptionInHours(optionValue, timeRange);
        case "dias":
          return isOptionInDays(optionValue, timeRange);
        case "semanas":
          return isOptionInWeeks(optionValue, timeRange);
        case "meses":
          return isOptionInMonths(optionValue, timeRange);
        case "anos":
          return isOptionInYears(optionValue, timeRange);
        default:
          return false;
      }
    }
  
    function isOptionInMinutes(optionValue, timeRange) {
      var minutes = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          minutes = timeRange.value;
          break;
        case "horas":
          minutes = timeRange.value * 60;
          break;
        case "dias":
          minutes = timeRange.value * 24 * 60;
          break;
        case "semanas":
          minutes = timeRange.value * 7 * 24 * 60;
          break;
        case "meses":
          minutes = timeRange.value * 30 * 24 * 60;
          break;
        case "anos":
          minutes = timeRange.value * 365 * 24 * 60;
          break;
        default:
          return false;
      }
  
      return optionValue >= minutes && optionValue < minutes + 60;
    }
  
    function isOptionInHours(optionValue, timeRange) {
      var hours = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          hours = Math.floor(timeRange.value / 60);
          break;
        case "horas":
          hours = timeRange.value;
          break;
        case "dias":
          hours = timeRange.value * 24;
          break;
        case "semanas":
          hours = timeRange.value * 7 * 24;
          break;
        case "meses":
          hours = timeRange.value * 30 * 24;
          break;
        case "anos":
          hours = timeRange.value * 365 * 24;
          break;
        default:
          return false;
      }
  
      return optionValue >= hours && optionValue < hours + 24;
    }
  
    function isOptionInDays(optionValue, timeRange) {
      var days = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          days = Math.floor(timeRange.value / (24 * 60));
          break;
        case "horas":
          days = Math.floor(timeRange.value / 24);
          break;
        case "dias":
          days = timeRange.value;
          break;
        case "semanas":
          days = timeRange.value * 7;
          break;
        case "meses":
          days = timeRange.value * 30;
          break;
        case "anos":
          days = timeRange.value * 365;
          break;
        default:
          return false;
      }
  
      return optionValue >= days && optionValue < days + 7;
    }
  
    function isOptionInWeeks(optionValue, timeRange) {
      var weeks = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          weeks = Math.floor(timeRange.value / (7 * 24 * 60));
          break;
        case "horas":
          weeks = Math.floor(timeRange.value / (7 * 24));
          break;
        case "dias":
          weeks = Math.floor(timeRange.value / 7);
          break;
        case "semanas":
          weeks = timeRange.value;
          break;
        case "meses":
          weeks = timeRange.value * 30 / 7;
          break;
        case "anos":
          weeks = timeRange.value * 365 / 7;
          break;
        default:
          return false;
      }
  
      return optionValue >= weeks && optionValue < weeks + 4;
    }
  
    function isOptionInMonths(optionValue, timeRange) {
      var months = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          months = Math.floor(timeRange.value / (30 * 24 * 60));
          break;
        case "horas":
          months = Math.floor(timeRange.value / (30 * 24));
          break;
        case "dias":
          months = Math.floor(timeRange.value / 30);
          break;
        case "semanas":
          months = Math.floor(timeRange.value * 7 / 30);
          break;
        case "meses":
          months = timeRange.value;
          break;
        case "anos":
          months = timeRange.value * 12;
          break;
        default:
          return false;
      }
  
      return optionValue >= months && optionValue < months + 12;
    }
  
    function isOptionInYears(optionValue, timeRange) {
      var years = 0;
  
      switch (timeRange.unit) {
        case "minutos":
          years = Math.floor(timeRange.value / (365 * 24 * 60));
          break;
        case "horas":
          years = Math.floor(timeRange.value / (365 * 24));
          break;
        case "dias":
          years = Math.floor(timeRange.value / 365);
          break;
        case "semanas":
          years = Math.floor(timeRange.value * 7 / 365);
          break;
        case "meses":
          years = Math.floor(timeRange.value / 12);
          break;
        case "anos":
          years = timeRange.value;
          break;
        default:
          return false;
      }
  
      return optionValue >= years;
    }
  });
  