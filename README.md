# discord-sender-js

This is a simple Node.js script that sends random messages to Discord channels at specified time intervals.

#Setup

1. Clone or download this repository to your local machine.
2. Install the required dependencies by running the following command in your terminal: npm install
3. Create a config.json file in the root directory of the project and fill in the required values for each authorization:
4. [
  {
    "token": "YOUR_DISCORD_TOKEN",
    "filename": "FILE_WHERE_MESSAGES_FILL",
    "channelId": "DISCORD_CHANNEL_ID",
    "timeSleepMin": 5,
    "timeSleepMax": 10
  },
  {
    "token": "YOUR_DISCORD_TOKEN",
    "filename": "FILE_WHERE_MESSAGES_FILL",
    "channelId": "DISCORD_CHANNEL_ID",
    "timeSleepMin": 5,
    "timeSleepMax": 10
  }
]

Replace YOUR_DISCORD_TOKEN with your actual Discord bot token.
Replace FILE_WHERE_MESSAGES_FILL with the path to the file containing the messages you want to send.
Replace DISCORD_CHANNEL_ID with the ID of the Discord channel where you want to send the messages.
Adjust timeSleepMin and timeSleepMax values to set the minimum and maximum time intervals (in seconds) between sending messages.

#Usage

1. In your terminal, navigate to the project directory.
2. Run the script using command: node index.
3. To stop the script, you can press Ctrl + C or close the terminal.
