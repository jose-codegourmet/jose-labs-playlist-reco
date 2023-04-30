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
    id: "chatcmpl-78XH4OM8cIXG67cTWGGWrchciRfVg",
    usage: {
      prompt_tokens: 110,
      completion_tokens: 144,
      total_tokens: 254,
    },
    playlist: [
      {
        title: 'Don"\'"t Worry Be Happy',
        " artist": " Bobby McFerrin",
        " album": " Simple Pleasures",
        " youtubeLink": " https://www.youtube.com/watch?v=d-diB65scQU",
      },
      {
        title: "Good Vibrations",
        " artist": " The Beach Boys",
        " album": " Smile",
        " youtubeLink": " https://www.youtube.com/watch?v=Eab_beh07HU",
      },
      {
        title: "Can't Stop The Feeling!",
        " artist": " Justin Timberlake",
        " album": " Trolls: Original Motion Picture Soundtrack",
        " youtubeLink": " https://www.youtube.com/watch?v=ru0K8uYEZWw",
      },
    ],
    hexcodes: [
      "#FFD700",
      "#FFA07A",
      "#32CD32",
      "#87CEEB",
      "#FF69B4",
      "#90EE90",
    ],
  },
  mood: "happy",
};

const cool = {
  status: 200,
  responseObject: {
    id: "chatcmpl-78Wy2zaJPdoVTQBt5qO7AR3krOIFO",
    usage: {
      prompt_tokens: 103,
      completion_tokens: 155,
      total_tokens: 258,
    },
    playlist: [
      {
        title: "In the Air Tonight",
        artist: "Phil Collins",
        album: "Face Value",
        youtubeLink: "https://www.youtube.com/watch?v=YkADj0TPrJA",
      },
      {
        title: "Smooth",
        artist: "Santana ft. Rob Thomas",
        album: "Supernatural",
        youtubeLink: "https://www.youtube.com/watch?v=6Whgn_iE5uc",
      },
      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special",
        youtubeLink: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
      },
    ],
    hexcodes: [
      "#3A64A0",
      "#CCE3F2",
      "#F2ECEB",
      "#FFE8A6",
      "#E1692F",
      "#9E2A2B",
    ],
  },
  mood: "cool",
};

export const GENERATE_PLAYLIST_RESPONSE = happy;
