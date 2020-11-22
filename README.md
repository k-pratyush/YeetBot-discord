# YeetBot-discord

### Discord bot for latest steam game updates 🔥

## Current implementations
| COMMAND      | ARGS                                | DETAILS                                   |
|--------------|-------------------------------------|-------------------------------------------|
| ~info        | <game_name>                         | Get store details about the game          |
| ~deals       | optional: sort, optional: limit     | Get latest deals in the store             |
| ~lowestPrice | <game_name>                         | Get historically lowest price of the game |
| ~price       | <game_name>                         | Get current price of the game             |
| ~help        | none                                | Get help menu                             |

TODO:
- [x] add general case handlers
- [ ] prettify responses
- [ ] next steam sale case handler
- [ ] add more currencies
- [ ] add more stores
- [ ] redis caching for appID:gamePlain map

### Development
For development, create a `config.env` file with following API keys
```
DISCORD_BOT_TOKEN=<your_discord_token>
DEALS_API_KEY=<https://isthereanydeal.com API KEY>
```
