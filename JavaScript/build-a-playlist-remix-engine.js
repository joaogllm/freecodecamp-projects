const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  let result = [];
  if (Array.isArray(playlists)) {
    for (let i = 0; i < playlists.length; i++) {
      for (let j = 0; j < playlists[i].length; j++) {
        const tracks = {
          ...playlists[i][j],
          source: [i, j],
        };
        result.push(tracks);
      }
    }
  } else {
    return [];
  }
  return result;
}

function scoreTracks(tracks) {
  return tracks.map(function (track) {
    return {
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120),
    };
  });
}

function dedupeTracks(dupetracks) {
  const seen = new Set();
  let result = [];
  for (let i = 0; i < dupetracks.length; i++) {
    if (!seen.has(dupetracks[i].trackId)) {
      seen.add(dupetracks[i].trackId);
      result.push(dupetracks[i]);
    }
  }
  return result;
}
function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};
  const result = [];
  for (let i = 0; i < tracks.length; i++) {
    if (artistCounts[tracks[i].artist] === undefined) {
      artistCounts[tracks[i].artist] = 1;
      result.push(tracks[i]);
    } else if (artistCounts[tracks[i].artist] < maxPerArtist) {
      artistCounts[tracks[i].artist] += 1;
      result.push(tracks[i]);
    }
  }
  return result;
}
function buildSchedule(tracks) {
  return tracks.map(function (track, index) {
    return {
      slot: index + 1,
      trackId: track.trackId,
    };
  });
}
function remixPlaylist(playlists, maxPerArtist) {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(scoreTracks(flattenPlaylists(playlists))),
      maxPerArtist,
    ),
  );
}
console.log(remixPlaylist(playlists, 2));
