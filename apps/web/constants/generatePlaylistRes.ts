const sad = {
  status: 200,
  response: {
    message: {
      id: "chatcmpl-78UeNZUejWLvSInpwfHXa1KcxQaUK",
      usage: {
        prompt_tokens: 64,
        completion_tokens: 97,
        total_tokens: 161,
      },
      playlist: [
        {
          title: "Say You Love Me",
          artist: "Fleetwood Mac",
          album: "Fleetwood Mac",
          youtubeLink: "https://www.youtube.com/watch?v=mjwcsEWGs7Q",
        },
        {
          title: "Hello",
          artist: "Adele",
          album: "25",
          youtubeLink: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        },
        {
          title: "Everybody Hurts",
          artist: "R.E.M.",
          album: "Automatic for the People",
          youtubeLink: "https://www.youtube.com/watch?v=5rOiW_xY-kc",
        },
      ],
    },
  },
  mood: "sad",
};

const happy = {
  status: 200,
  response: {
    message: {
      id: "chatcmpl-78UftH3niqPTMIv7q77pYkH4bFogi",
      usage: {
        prompt_tokens: 66,
        completion_tokens: 103,
        total_tokens: 169,
      },
      playlist: [
        {
          title: "Can't Stop the Feeling!",
          artist: "Justin Timberlake",
          album: "Trolls",
          youtubeLink: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
        },
        {
          title: "Uptown Funk",
          artist: "Mark Ronson ft. Bruno Mars",
          album: "Uptown Special",
          youtubeLink: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        },
        {
          title: "24K Magic",
          artist: "Bruno Mars",
          album: "24K Magic",
          youtubeLink: "https://www.youtube.com/watch?v=UqyT8IEBkvY",
        },
      ],
    },
  },
  mood: "happy and energetic",
};

const cool = {
  status: 200,
  response: {
    message: {
      id: "chatcmpl-78UhekAS26KdiofdI60lquqLT3zl8",
      usage: {
        prompt_tokens: 64,
        completion_tokens: 108,
        total_tokens: 172,
      },
      playlist: [
        {
          title: "Smooth Operator",
          artist: "Sade",
          album: "Diamond Life",
          youtubeLink: "https://www.youtube.com/watch?v=4TYv2PhG89A",
        },
        {
          title: "Crazy in Love",
          artist: "Beyoncé ft. Jay-Z",
          album: "Dangerously in Love",
          youtubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
        },
        {
          title: "Uptown Funk",
          artist: "Mark Ronson ft. Bruno Mars",
          album: "Uptown Special",
          youtubeLink: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        },
      ],
    },
  },
  mood: "cool",
};

export const GENERATE_PLAYLIST_RESPONSE = happy;
