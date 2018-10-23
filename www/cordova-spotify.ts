/**
 * Plays a track by its URI.
 *
 * When `positionMs` is < 0, this function immediately throws an error
 * instead of returning a rejected promise.
 *
 * `auth` may change freely during runtime. The plugin will handle the
 * required login / logout processes automatically when a new track is played.
 *
 * @param {string} trackUri The URI of the track to play.
 * @param {AuthorizationData} auth Valid authorization data.
 * @param {number} positionMs The position (in millseconds) to start playing from. Must be >= 0.
 * @returns {Promise<void>} A promise that resolves when the track starts playing.
 * @async
 */
export function play(success, error, trackUri: string, token: string, clientId: string, positionMs?: number): void {
  if (!trackUri) {
      throw new ReferenceError("trackUri parameter is null");
  }
  if (!token) {
      throw new ReferenceError("token parameter is null");
  }
  if (!clientId) {
      throw new ReferenceError("clientId parameter is null");
  }
  if (positionMs !== undefined && positionMs < 0) {
      throw new RangeError("positionMs parameter is < 0");
  }

  const resolve = v => setTimeout(() => success(v));
  const reject = e => setTimeout(() => error(e));

  cordova.exec(
      event => resolve(event),
      err => reject(err),
      'SpotifyConnector',
      'play',
      [trackUri, token, clientId, positionMs || 0]
  );
}
