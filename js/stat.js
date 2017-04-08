'use strict';

window.renderStatistics = function (ctx, names, times) {
  var barWidth = 40;
  var barIndent = 50;
  var barInitialX = 140;
  var barInitialY = 100;
  var histogramHeight = 150;
  var playerBarColor = 'rgba(255, 0, 0, 1)';
  var maxTime = Math.max.apply(null, times);
  var step = histogramHeight / maxTime;
  var textColor = '#000';
  var textFont = '16px PT Mono';
  function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  function drawText(content, x, y) {
    ctx.fillStyle = textColor;
    ctx.font = textFont;
    ctx.fillText(content, x, y);
  }
  function generateRandomBarColor() {
    var randomSaturation = Math.floor(Math.random() * 256);  // насыщенность от 0 до 255
    var	randomOpacity = (Math.random() * 0.8 + 0.2).toFixed(1);  // прозрачность от 0.2 до 1
    return 'rgba(0, 0, ' + randomSaturation + ', ' + randomOpacity + ')';
  }
  function drawStatistics() {
    for (var i = 0; i < times.length; i++) {
      var barX = barInitialX + ((barIndent + barWidth) * i);
      var	barY = barInitialY + (histogramHeight - times[i] * step);
      var	barHeight = times[i] * step;
      var	enemyBarColor = generateRandomBarColor();
      var	barColor = names[i] === 'Вы' ? playerBarColor : enemyBarColor;
      drawRect(barX, barY, barWidth, barHeight, barColor);  // вывод столбцов
      drawText(names[i], barX, barInitialY + histogramHeight + 5); // вывод имен игроков
      drawText(Math.round(times[i]), barX, barY - 20);  // вывод времени игроков
    }
  }
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, '#fff');
  drawText('Ура вы победили!', 120, 40);
  drawText('Список результатов:', 120, 60);
  ctx.textBaseline = 'top';
  drawStatistics();
};
