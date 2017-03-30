'use strict';

window.renderStatistics = function (ctx, names, times) {
	
	var barWidth = 40,
			barIndent = 50,
			barInitialX = 140,
			barInitialY = 100,
			histogramHeight = 150,
			playerBarColor = 'rgba(255, 0, 0, 1)',
			maxTime = -1;

  for (var i = 0; i < times.length; i++) {
		
    var time = times[i];
		
    if (time > maxTime) {
      maxTime = time;
    }
  }
	
	var step = histogramHeight / maxTime;
	
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
	
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
	
	ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 60);
	
	ctx.textBaseline = 'top'; 
	
  for (var i = 0; i < times.length; i++) {
		
		var barX = barInitialX + ((barIndent + barWidth) * i),
				barY = barInitialY + (histogramHeight - times[i] * step),
				barHeight = times[i] * step,
				randomBarSaturation = Math.floor(Math.random() * 256), 															//насыщенность от 0 до 255
				randomBarOpacity = (Math.random() * 0.8 + 0.2).toFixed(1), 													//прозрачность от 0.2 до 1
				enemyBarColor = 'rgba(0, 0, ' + randomBarSaturation + ', ' + randomBarOpacity + ')',
				barColor = names[i] == 'Вы' ? playerBarColor : enemyBarColor;
		
		ctx.fillStyle = barColor;
    ctx.fillRect(barX, barY, barWidth, barHeight);
		ctx.fillStyle = '#000';
    ctx.fillText(names[i], barX, barInitialY + histogramHeight + 5);
		ctx.fillText(Math.round(times[i]), barX, barY - 20);
  }
	
};