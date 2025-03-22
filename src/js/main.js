'use strict'

export default function displayHealthStatus(player) {
	if (player.health > 50) {
		return 'healthy';
	}
	if (player.health > 14) {
		return 'wounded';
	}
	return 'critical';
}
