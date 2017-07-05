import { Index, MinimongoEngine } from 'meteor/easy:search'

PlayersIndex = new Index({
    collection: NetworkApp,
    fields: ['ign'],
    engine: new MinimongoEngine(),
})