//COPYRIGHT (C) 2022 CODED BY Tharindu Liyanage
const _0x37fcce=_0x1b92;(function(_0x277fe4,_0xec53e3){const _0x194187=_0x1b92,_0x29c933=_0x277fe4();while(!![]){try{const _0x238b95=-parseInt(_0x194187(0xce))/0x1+-parseInt(_0x194187(0x14b))/0x2*(parseInt(_0x194187(0x107))/0x3)+-parseInt(_0x194187(0xee))/0x4+-parseInt(_0x194187(0xcc))/0x5+-parseInt(_0x194187(0x156))/0x6+parseInt(_0x194187(0x117))/0x7*(parseInt(_0x194187(0x11c))/0x8)+-parseInt(_0x194187(0x131))/0x9*(-parseInt(_0x194187(0x115))/0xa);if(_0x238b95===_0xec53e3)break;else _0x29c933['push'](_0x29c933['shift']());}catch(_0xc40b21){_0x29c933['push'](_0x29c933['shift']());}}}(_0x5802,0xe6fb6),require(_0x37fcce(0x10d)));const {default:GarfieldAddConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x37fcce(0xb4)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x37fcce(0x114)),pino=require('pino'),{Boom}=require(_0x37fcce(0xed)),fs=require('fs'),yargs=require(_0x37fcce(0xfc)),chalk=require('chalk'),FileType=require(_0x37fcce(0xb7)),path=require(_0x37fcce(0x102)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x37fcce(0xe4)),{formatp,tanggal,formatDate,getTime,clockString,runtime,jsonformat,format,parseMention,getRandom}=require(_0x37fcce(0xe7)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x37fcce(0xe7));var low;try{low=require(_0x37fcce(0x116));}catch(_0x50c9f1){low=require(_0x37fcce(0x15e));}const {Low,JSONFile}=low,mongoDB=require(_0x37fcce(0xc2));global[_0x37fcce(0x15b)]=(_0x35973b,_0xd1ac5a='/',_0x3a2050={},_0x4e8c86)=>(_0x35973b in global[_0x37fcce(0xdc)]?global[_0x37fcce(0xdc)][_0x35973b]:_0x35973b)+_0xd1ac5a+(_0x3a2050||_0x4e8c86?'?'+new URLSearchParams(Object[_0x37fcce(0x162)]({..._0x3a2050,..._0x4e8c86?{[_0x4e8c86]:global[_0x37fcce(0xf8)][_0x35973b in global['APIs']?global[_0x37fcce(0xdc)][_0x35973b]:_0x35973b]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x37fcce(0xb2)]({'level':_0x37fcce(0xd4),'stream':_0x37fcce(0x109)})});global[_0x37fcce(0xdf)]=new Object(yargs(process[_0x37fcce(0x148)][_0x37fcce(0x126)](0x2))[_0x37fcce(0x12d)](![])[_0x37fcce(0x14e)]()),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/['test'](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x37fcce(0x167))),global['db'][_0x37fcce(0x12a)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x37fcce(0x12a)]||{}};if(global['db'])setInterval(async()=>{const _0x25c162=_0x37fcce;if(global['db'][_0x25c162(0x12a)])await global['db']['write']();},0x1e*0x3e8);function _0x1b92(_0x1e2158,_0x337333){const _0x5802c1=_0x5802();return _0x1b92=function(_0x1b925a,_0x30390f){_0x1b925a=_0x1b925a-0xa9;let _0x90d476=_0x5802c1[_0x1b925a];return _0x90d476;},_0x1b92(_0x1e2158,_0x337333);}async function startGarfieldAdd(){const _0x322b4c=_0x37fcce,_0xb722a0=GarfieldAddConnect({'logger':pino({'level':_0x322b4c(0xd4)}),'printQRInTerminal':!![],'browser':[_0x322b4c(0xf3),_0x322b4c(0xd2),_0x322b4c(0xb8)],'auth':state});store[_0x322b4c(0xe3)](_0xb722a0['ev']),_0xb722a0['ws']['on']('CB:call',async _0x8f744a=>{const _0x19047d=_0x322b4c,_0x408fa7=_0x8f744a[_0x19047d(0xd6)][0x0][_0x19047d(0x121)][_0x19047d(0x10c)];if(_0x8f744a[_0x19047d(0xd6)][0x0]['tag']=='offer'){let _0xd0d676=await _0xb722a0['sendContact'](_0x408fa7,global[_0x19047d(0xdd)]);_0xb722a0[_0x19047d(0x13a)](_0x408fa7,{'text':_0x19047d(0x140)},{'quoted':_0xd0d676}),await sleep(0x1f40),await _0xb722a0[_0x19047d(0xa9)](_0x408fa7,_0x19047d(0xc9));}}),_0xb722a0['ev']['on'](_0x322b4c(0x110),async _0x201125=>{const _0x14caf8=_0x322b4c;try{mek=_0x201125[_0x14caf8(0x100)][0x0];if(!mek[_0x14caf8(0x168)])return;mek[_0x14caf8(0x168)]=Object['keys'](mek[_0x14caf8(0x168)])[0x0]===_0x14caf8(0xbd)?mek[_0x14caf8(0x168)]['ephemeralMessage'][_0x14caf8(0x168)]:mek[_0x14caf8(0x168)];if(mek[_0x14caf8(0x171)]&&mek[_0x14caf8(0x171)]['remoteJid']===_0x14caf8(0x169))return;if(!_0xb722a0[_0x14caf8(0x118)]&&!mek['key'][_0x14caf8(0xf0)]&&_0x201125[_0x14caf8(0x157)]===_0x14caf8(0xb5))return;if(mek[_0x14caf8(0x171)]['id'][_0x14caf8(0x10e)](_0x14caf8(0x14f))&&mek['key']['id']['length']===0x10)return;m=smsg(_0xb722a0,mek,store),require('./Garfield.js')(_0xb722a0,m,_0x201125,store);}catch(_0x32feda){console['log'](_0x32feda);}});function _0x5a6409(_0x4912a5){const _0x4df0f6=_0x322b4c;return _0x4912a5[Math[_0x4df0f6(0x15f)](_0x4912a5[_0x4df0f6(0x120)]*Math['random']())];}let _0x5f23e2=[f1,f2,f3,f4,f5,f6],_0x2c6ca6=_0x5a6409(_0x5f23e2);return _0xb722a0['ev']['on'](_0x322b4c(0xba),async _0x390939=>{const _0x325e11=_0x322b4c;console[_0x325e11(0xfb)](_0x390939);try{let _0x36da0b=await _0xb722a0['groupMetadata'](_0x390939['id']),_0xe2c873=_0x390939[_0x325e11(0xfe)];for(let _0x4d1a46 of _0xe2c873){try{ppuser=await _0xb722a0[_0x325e11(0x153)](_0x4d1a46,_0x325e11(0x13d));}catch{ppuser=_0x325e11(0xeb);}try{ppgroup=await _0xb722a0[_0x325e11(0x153)](_0x390939['id'],_0x325e11(0x13d));}catch{ppgroup=_0x325e11(0xeb);}if(_0x390939[_0x325e11(0x134)]==_0x325e11(0xef)){var _0x49f51f=await getBuffer(ppuser);let _0x14c9c1={'key':{'fromMe':![],'participant':_0x325e11(0x11a),'remoteJid':_0x325e11(0xe5)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x49f51f,'surface':0xc8,'message':''+_0x36da0b['subject'],'orderTitle':'memek','sellerJid':_0x325e11(0x11a)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};he=_0x325e11(0x149)+_0x36da0b[_0x325e11(0x154)]+'\x20@'+_0x4d1a46[_0x325e11(0x111)]('@')[0x0]+'\x0a\x0a'+_0x36da0b['desc'];let _0x26d22b=_0x325e11(0x13f),_0x2ded59=[{'buttonId':_0x325e11(0x132),'buttonText':{'displayText':_0x325e11(0x15c)},'type':0x1}],_0x34f94f={'document':fs[_0x325e11(0x16a)]('./lib/tes.xlsx'),'mimetype':_0x2c6ca6,'jpegThumbnail':_0x49f51f,'mentions':[_0x4d1a46],'fileName':_0x325e11(0x149)+_0x36da0b[_0x325e11(0x154)],'fileLength':0x5af3107a3fff,'caption':he,'footer':'©GARFIELD\x20INC\x202022','buttons':_0x2ded59,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':'Don\x27t\x20forget\x20to\x20smile\x20today','body':_0x325e11(0x12f),'mediaType':0x2,'thumbnail':_0x49f51f,'sourceUrl':_0x26d22b,'mediaUrl':_0x26d22b}}};_0xb722a0[_0x325e11(0x13a)](_0x390939['id'],_0x34f94f,{'quoted':_0x14c9c1});}else{if(_0x390939[_0x325e11(0x134)]==_0x325e11(0x16f)){let _0x16a47d={'key':{'fromMe':![],'participant':_0x325e11(0x11a),'remoteJid':_0x325e11(0xe5)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x49f51f,'surface':0xc8,'message':''+_0x36da0b[_0x325e11(0x154)],'orderTitle':_0x325e11(0x16e),'sellerJid':_0x325e11(0x11a)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};he=_0x325e11(0x11e)+_0x36da0b[_0x325e11(0x154)]+'\x20@'+_0x4d1a46[_0x325e11(0x111)]('@')[0x0]+'\x0a\x0a'+_0x36da0b[_0x325e11(0x105)];let _0x272fec=_0x325e11(0x13f),_0x3fe5f9=[{'buttonId':_0x325e11(0x132),'buttonText':{'displayText':_0x325e11(0x16c)},'type':0x1}],_0x486077={'document':fs[_0x325e11(0x16a)](_0x325e11(0xcd)),'mimetype':_0x2c6ca6,'jpegThumbnail':_0x49f51f,'mentions':[_0x4d1a46],'fileName':_0x325e11(0x11e)+_0x36da0b[_0x325e11(0x154)],'fileLength':0x5af3107a3fff,'caption':he,'footer':_0x325e11(0x12c),'buttons':_0x3fe5f9,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x325e11(0x139),'body':'SUBSCRIBE\x20DRIPS\x20OFC','mediaType':0x2,'thumbnail':_0x49f51f,'sourceUrl':_0x272fec,'mediaUrl':_0x272fec}}};_0xb722a0[_0x325e11(0x13a)](_0x390939['id'],_0x486077,{'quoted':_0x16a47d});}}}}catch(_0x10b1dd){console[_0x325e11(0xfb)](_0x10b1dd);}}),_0xb722a0[_0x322b4c(0x10a)]=_0x37d9eb=>{const _0x4d2893=_0x322b4c;if(!_0x37d9eb)return _0x37d9eb;if(/:\d+@/gi['test'](_0x37d9eb)){let _0x113354=jidDecode(_0x37d9eb)||{};return _0x113354[_0x4d2893(0x10f)]&&_0x113354['server']&&_0x113354[_0x4d2893(0x10f)]+'@'+_0x113354[_0x4d2893(0x104)]||_0x37d9eb;}else return _0x37d9eb;},_0xb722a0['ev']['on'](_0x322b4c(0x142),_0x52a510=>{const _0x228767=_0x322b4c;for(let _0x196ef5 of _0x52a510){let _0x5e528a=_0xb722a0['decodeJid'](_0x196ef5['id']);if(store&&store[_0x228767(0x124)])store[_0x228767(0x124)][_0x5e528a]={'id':_0x5e528a,'name':_0x196ef5[_0x228767(0xb5)]};}}),_0xb722a0['getName']=(_0x4f2671,_0x2b6a15=![])=>{const _0x420ac2=_0x322b4c;id=_0xb722a0[_0x420ac2(0x10a)](_0x4f2671),_0x2b6a15=_0xb722a0['withoutContact']||_0x2b6a15;let _0x16f9dc;if(id[_0x420ac2(0xe8)](_0x420ac2(0x144)))return new Promise(async _0x4cf268=>{const _0x1f4461=_0x420ac2;_0x16f9dc=store['contacts'][id]||{};if(!(_0x16f9dc[_0x1f4461(0x166)]||_0x16f9dc[_0x1f4461(0x154)]))_0x16f9dc=_0xb722a0[_0x1f4461(0x135)](id)||{};_0x4cf268(_0x16f9dc[_0x1f4461(0x166)]||_0x16f9dc['subject']||PhoneNumber('+'+id[_0x1f4461(0x108)]('@s.whatsapp.net',''))[_0x1f4461(0xd1)](_0x1f4461(0x16d)));});else _0x16f9dc=id===_0x420ac2(0x11a)?{'id':id,'name':'WhatsApp'}:id===_0xb722a0[_0x420ac2(0x10a)](_0xb722a0[_0x420ac2(0x10f)]['id'])?_0xb722a0[_0x420ac2(0x10f)]:store['contacts'][id]||{};return(_0x2b6a15?'':_0x16f9dc[_0x420ac2(0x166)])||_0x16f9dc[_0x420ac2(0x154)]||_0x16f9dc[_0x420ac2(0x13b)]||PhoneNumber('+'+_0x4f2671['replace']('@s.whatsapp.net',''))[_0x420ac2(0xd1)](_0x420ac2(0x16d));},_0xb722a0['sendContact']=async(_0x316940,_0x40e36f,_0x532fce='',_0xc8cc88={})=>{const _0x418f31=_0x322b4c;let _0x4be7b2=[];for(let _0x55b3c4 of _0x40e36f){_0x4be7b2[_0x418f31(0x141)]({'displayName':await _0xb722a0[_0x418f31(0x119)](_0x55b3c4+_0x418f31(0xbe)),'vcard':_0x418f31(0xc4)+global['ownername']+'\x20+\x20\x27\x0a\x27\x20//created\x20afnanplk,\x20please\x20copy\x20this\x20with\x20credit..\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+\x20\x27ORG:Coded\x20By\x20Tharindu\x20Liyanage;\x0a\x27\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+\x20\x27TEL;type=CELL;type=VOICE;waid=\x27\x20+\x20'+global[_0x418f31(0xdd)]+_0x418f31(0x103)+global[_0x418f31(0xdd)]+_0x418f31(0xd3)});}_0xb722a0['sendMessage'](_0x316940,{'contacts':{'displayName':''+global['ownername'],'contacts':_0x4be7b2},..._0xc8cc88},{'quoted':_0x532fce});},_0xb722a0[_0x322b4c(0xcb)]=_0x181545=>{const _0x59d7aa=_0x322b4c;return _0xb722a0[_0x59d7aa(0x164)]({'tag':'iq','attrs':{'to':_0x59d7aa(0xbe),'type':_0x59d7aa(0x159),'xmlns':_0x59d7aa(0xf9)},'content':[{'tag':_0x59d7aa(0xf9),'attrs':{},'content':Buffer[_0x59d7aa(0xbc)](_0x181545,_0x59d7aa(0x16b))}]}),_0x181545;},_0xb722a0[_0x322b4c(0x118)]=!![],_0xb722a0[_0x322b4c(0xd9)]=_0x1888ba=>smsg(_0xb722a0,_0x1888ba,store),_0xb722a0['ev']['on'](_0x322b4c(0xc6),async _0x15e98d=>{const _0xd141a5=_0x322b4c,{connection:_0x115384,lastDisconnect:_0x21c6b1}=_0x15e98d;if(_0x115384===_0xd141a5(0x136)){let _0x253be2=new Boom(_0x21c6b1?.[_0xd141a5(0x13c)])?.[_0xd141a5(0x150)]['statusCode'];if(_0x253be2===DisconnectReason[_0xd141a5(0xf4)])console[_0xd141a5(0xfb)](_0xd141a5(0x138)),_0xb722a0[_0xd141a5(0x15a)]();else{if(_0x253be2===DisconnectReason[_0xd141a5(0x170)])console['log'](_0xd141a5(0x10b)),startGarfieldAdd();else{if(_0x253be2===DisconnectReason[_0xd141a5(0x137)])console[_0xd141a5(0xfb)](_0xd141a5(0xca)),startGarfieldAdd();else{if(_0x253be2===DisconnectReason[_0xd141a5(0x147)])console[_0xd141a5(0xfb)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0xb722a0[_0xd141a5(0x15a)]();else{if(_0x253be2===DisconnectReason['loggedOut'])console[_0xd141a5(0xfb)](_0xd141a5(0x15d)),_0xb722a0[_0xd141a5(0x15a)]();else{if(_0x253be2===DisconnectReason[_0xd141a5(0xc7)])console['log'](_0xd141a5(0xaf)),startGarfieldAdd();else{if(_0x253be2===DisconnectReason[_0xd141a5(0xb6)])console[_0xd141a5(0xfb)](_0xd141a5(0xcf)),startGarfieldAdd();else _0xb722a0[_0xd141a5(0xc0)](_0xd141a5(0x13e)+_0x253be2+'|'+_0x115384);}}}}}}}console[_0xd141a5(0xfb)](_0xd141a5(0x143),_0x15e98d);}),_0xb722a0['ev']['on'](_0x322b4c(0x133),saveState),_0xb722a0[_0x322b4c(0xea)]=(_0x2bb922,_0x2ff819='',_0x107fa8='',_0x2ae5f6='',_0x350dfd='',_0x1e1d7d=[],_0x128556)=>{const _0x512a32=_0x322b4c;let _0x962bc5=_0x1e1d7d;var _0x497a0c={'text':_0x2ff819,'footer':_0x107fa8,'title':_0x2ae5f6,'buttonText':_0x350dfd,'sections':_0x962bc5};_0xb722a0[_0x512a32(0x13a)](_0x2bb922,_0x497a0c,{'quoted':_0x128556});},_0xb722a0[_0x322b4c(0xbf)]=(_0x3226f3,_0x4f04a2='',_0x55650d='',_0x457735=[])=>{const _0x49a5ea=_0x322b4c;let _0x1e9e03=_0x457735;var _0x3dd77e={'text':_0x4f04a2,'footer':_0x55650d,'templateButtons':_0x1e9e03};_0xb722a0[_0x49a5ea(0x13a)](_0x3226f3,_0x3dd77e);},_0xb722a0[_0x322b4c(0xf5)]=async(_0x3a0318,_0x485002='',_0x4fca5e='',_0xfda8de,_0x482ab2=[],_0x12e0a7={})=>{const _0x1e8f47=_0x322b4c;let _0x41e72a=await prepareWAMessageMedia({'image':_0xfda8de},{'upload':_0xb722a0[_0x1e8f47(0xff)]});var _0xa60c6a=generateWAMessageFromContent(_0x3a0318,proto[_0x1e8f47(0xe1)][_0x1e8f47(0xec)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x41e72a[_0x1e8f47(0x130)],'hydratedContentText':_0x485002,'hydratedFooterText':_0x4fca5e,'hydratedButtons':_0x482ab2}}}),_0x12e0a7);_0xb722a0[_0x1e8f47(0xc3)](_0x3a0318,_0xa60c6a['message'],{'messageId':_0xa60c6a['key']['id']});},_0xb722a0['send5ButVid']=async(_0x3d78d3,_0x364aa1='',_0x3fc590='',_0x27d2e7,_0x2f93ff=[],_0x358b49={})=>{const _0x93a985=_0x322b4c;let _0x58536e=await prepareWAMessageMedia({'video':_0x27d2e7},{'upload':_0xb722a0[_0x93a985(0xff)]});var _0x790051=generateWAMessageFromContent(_0x3d78d3,proto['Message'][_0x93a985(0xec)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x58536e[_0x93a985(0xb3)],'hydratedContentText':_0x364aa1,'hydratedFooterText':_0x3fc590,'hydratedButtons':_0x2f93ff}}}),_0x358b49);_0xb722a0[_0x93a985(0xc3)](_0x3d78d3,_0x790051[_0x93a985(0x168)],{'messageId':_0x790051['key']['id']});},_0xb722a0[_0x322b4c(0x12e)]=async(_0x3045c2,_0x3e4d12='',_0x4dd761='',_0x14ed5c,_0x2fcd0a=[],_0x2dbe2f={})=>{const _0x2b144b=_0x322b4c;let _0x55dc3e=await prepareWAMessageMedia({'video':_0x14ed5c,'gifPlayback':!![]},{'upload':_0xb722a0['waUploadToServer']});var _0x3afcb7=generateWAMessageFromContent(_0x3045c2,proto[_0x2b144b(0xe1)][_0x2b144b(0xec)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x55dc3e[_0x2b144b(0xb3)],'hydratedContentText':_0x3e4d12,'hydratedFooterText':_0x4dd761,'hydratedButtons':_0x2fcd0a}}}),_0x2dbe2f);_0xb722a0[_0x2b144b(0xc3)](_0x3045c2,_0x3afcb7[_0x2b144b(0x168)],{'messageId':_0x3afcb7[_0x2b144b(0x171)]['id']});},_0xb722a0[_0x322b4c(0x101)]=(_0x3c5057,_0x15150e=[],_0x447c42,_0x1a8098,_0x370ae0='',_0x1a4462={})=>{let _0x595055={'text':_0x447c42,'footer':_0x1a8098,'buttons':_0x15150e,'headerType':0x2,..._0x1a4462};_0xb722a0['sendMessage'](_0x3c5057,_0x595055,{'quoted':_0x370ae0,..._0x1a4462});},_0xb722a0['sendText']=(_0x2ff1c5,_0x2a388a,_0x40d2c8='',_0x453f1d)=>_0xb722a0[_0x322b4c(0x13a)](_0x2ff1c5,{'text':_0x2a388a,..._0x453f1d},{'quoted':_0x40d2c8}),_0xb722a0[_0x322b4c(0x160)]=async(_0x10d5f0,_0x4b0de3,_0x3832b4='',_0x30ed36='',_0x35292f)=>{const _0x4ba8d8=_0x322b4c;let _0x569ebe=Buffer[_0x4ba8d8(0xf1)](_0x4b0de3)?_0x4b0de3:/^data:.*?\/.*?;base64,/i[_0x4ba8d8(0x127)](_0x4b0de3)?Buffer[_0x4ba8d8(0xbc)](_0x4b0de3[_0x4ba8d8(0x111)]`,`[0x1],'base64'):/^https?:\/\//[_0x4ba8d8(0x127)](_0x4b0de3)?await await getBuffer(_0x4b0de3):fs[_0x4ba8d8(0xf2)](_0x4b0de3)?fs[_0x4ba8d8(0x16a)](_0x4b0de3):Buffer['alloc'](0x0);return await _0xb722a0[_0x4ba8d8(0x13a)](_0x10d5f0,{'image':_0x569ebe,'caption':_0x3832b4,..._0x35292f},{'quoted':_0x30ed36});},_0xb722a0[_0x322b4c(0xe9)]=async(_0x7b82ba,_0x540d59,_0x210327='',_0x3723a0='',_0x291550=![],_0x4855c3)=>{const _0x166ed5=_0x322b4c;let _0x272d21=Buffer[_0x166ed5(0xf1)](_0x540d59)?_0x540d59:/^data:.*?\/.*?;base64,/i[_0x166ed5(0x127)](_0x540d59)?Buffer['from'](_0x540d59[_0x166ed5(0x111)]`,`[0x1],_0x166ed5(0x11f)):/^https?:\/\//[_0x166ed5(0x127)](_0x540d59)?await await getBuffer(_0x540d59):fs['existsSync'](_0x540d59)?fs[_0x166ed5(0x16a)](_0x540d59):Buffer[_0x166ed5(0xd7)](0x0);return await _0xb722a0[_0x166ed5(0x13a)](_0x7b82ba,{'video':_0x272d21,'caption':_0x210327,'gifPlayback':_0x291550,..._0x4855c3},{'quoted':_0x3723a0});},_0xb722a0[_0x322b4c(0x145)]=async(_0x1a0522,_0x56a686,_0x23ff86='',_0x3f12ca=![],_0x3cbd91)=>{const _0x140bd6=_0x322b4c;let _0x1bc1ea=Buffer[_0x140bd6(0xf1)](_0x56a686)?_0x56a686:/^data:.*?\/.*?;base64,/i[_0x140bd6(0x127)](_0x56a686)?Buffer[_0x140bd6(0xbc)](_0x56a686['split']`,`[0x1],_0x140bd6(0x11f)):/^https?:\/\//[_0x140bd6(0x127)](_0x56a686)?await await getBuffer(_0x56a686):fs[_0x140bd6(0xf2)](_0x56a686)?fs['readFileSync'](_0x56a686):Buffer[_0x140bd6(0xd7)](0x0);return await _0xb722a0[_0x140bd6(0x13a)](_0x1a0522,{'audio':_0x1bc1ea,'ptt':_0x3f12ca,..._0x3cbd91},{'quoted':_0x23ff86});},_0xb722a0[_0x322b4c(0x14c)]=async(_0x552d31,_0x170472,_0x1188ec,_0x53083e={})=>_0xb722a0[_0x322b4c(0x13a)](_0x552d31,{'text':_0x170472,'contextInfo':{'mentionedJid':[..._0x170472[_0x322b4c(0xc5)](/@(\d{0,16})/g)][_0x322b4c(0xac)](_0x33dc39=>_0x33dc39[0x1]+_0x322b4c(0xbe))},..._0x53083e},{'quoted':_0x1188ec}),_0xb722a0[_0x322b4c(0xb1)]=async(_0x4cfc86,_0x1d8a11,_0x399d92,_0x267db3={})=>{const _0x8dd5be=_0x322b4c;let _0x24af70=Buffer['isBuffer'](_0x1d8a11)?_0x1d8a11:/^data:.*?\/.*?;base64,/i[_0x8dd5be(0x127)](_0x1d8a11)?Buffer[_0x8dd5be(0xbc)](_0x1d8a11[_0x8dd5be(0x111)]`,`[0x1],_0x8dd5be(0x11f)):/^https?:\/\//[_0x8dd5be(0x127)](_0x1d8a11)?await await getBuffer(_0x1d8a11):fs[_0x8dd5be(0xf2)](_0x1d8a11)?fs[_0x8dd5be(0x16a)](_0x1d8a11):Buffer['alloc'](0x0),_0x3810d9;return _0x267db3&&(_0x267db3['packname']||_0x267db3[_0x8dd5be(0x112)])?_0x3810d9=await writeExifImg(_0x24af70,_0x267db3):_0x3810d9=await imageToWebp(_0x24af70),await _0xb722a0[_0x8dd5be(0x13a)](_0x4cfc86,{'sticker':{'url':_0x3810d9},..._0x267db3},{'quoted':_0x399d92}),_0x3810d9;},_0xb722a0[_0x322b4c(0xda)]=async(_0x595e0b,_0x30c306,_0x4e4cbd,_0x497516={})=>{const _0x1540b0=_0x322b4c;let _0x2a01b9=Buffer['isBuffer'](_0x30c306)?_0x30c306:/^data:.*?\/.*?;base64,/i[_0x1540b0(0x127)](_0x30c306)?Buffer[_0x1540b0(0xbc)](_0x30c306[_0x1540b0(0x111)]`,`[0x1],_0x1540b0(0x11f)):/^https?:\/\//['test'](_0x30c306)?await await getBuffer(_0x30c306):fs[_0x1540b0(0xf2)](_0x30c306)?fs[_0x1540b0(0x16a)](_0x30c306):Buffer[_0x1540b0(0xd7)](0x0),_0x3f8342;return _0x497516&&(_0x497516[_0x1540b0(0xaa)]||_0x497516[_0x1540b0(0x112)])?_0x3f8342=await writeExifVid(_0x2a01b9,_0x497516):_0x3f8342=await videoToWebp(_0x2a01b9),await _0xb722a0[_0x1540b0(0x13a)](_0x595e0b,{'sticker':{'url':_0x3f8342},..._0x497516},{'quoted':_0x4e4cbd}),_0x3f8342;},_0xb722a0['downloadAndSaveMediaMessage']=async(_0x2a7758,_0x17fb7c,_0x550a74=!![])=>{const _0x3dc080=_0x322b4c;let _0x179c2a=_0x2a7758[_0x3dc080(0x129)]?_0x2a7758[_0x3dc080(0x129)]:_0x2a7758,_0x14a7ff=(_0x2a7758['msg']||_0x2a7758)[_0x3dc080(0xe6)]||'',_0x1a79d9=_0x2a7758[_0x3dc080(0xb0)]?_0x2a7758['mtype'][_0x3dc080(0x108)](/Message/gi,''):_0x14a7ff[_0x3dc080(0x111)]('/')[0x0];const _0x2d659b=await downloadContentFromMessage(_0x179c2a,_0x1a79d9);let _0x598bca=Buffer[_0x3dc080(0xbc)]([]);for await(const _0x46f72c of _0x2d659b){_0x598bca=Buffer[_0x3dc080(0xe0)]([_0x598bca,_0x46f72c]);}let _0x2b5034=await FileType['fromBuffer'](_0x598bca);return trueFileName=_0x550a74?_0x17fb7c+'.'+_0x2b5034[_0x3dc080(0xd0)]:_0x17fb7c,await fs['writeFileSync'](trueFileName,_0x598bca),trueFileName;},_0xb722a0[_0x322b4c(0x123)]=async _0x43bd80=>{const _0x1c4cbb=_0x322b4c;let _0x11cbce=(_0x43bd80[_0x1c4cbb(0x129)]||_0x43bd80)['mimetype']||'',_0x812582=_0x43bd80['mtype']?_0x43bd80[_0x1c4cbb(0xb0)][_0x1c4cbb(0x108)](/Message/gi,''):_0x11cbce[_0x1c4cbb(0x111)]('/')[0x0];const _0x522bad=await downloadContentFromMessage(_0x43bd80,_0x812582);let _0x9b2d14=Buffer[_0x1c4cbb(0xbc)]([]);for await(const _0x24c8ed of _0x522bad){_0x9b2d14=Buffer[_0x1c4cbb(0xe0)]([_0x9b2d14,_0x24c8ed]);}return _0x9b2d14;},_0xb722a0['sendMedia']=async(_0x489433,_0x210a60,_0x28aefc='',_0x60cc8a='',_0x46912b='',_0x380778={})=>{const _0x2aa97c=_0x322b4c;let _0x13fb6e=await _0xb722a0[_0x2aa97c(0x11b)](_0x210a60,!![]),{mime:_0x1be07d,ext:_0x32bad8,res:_0x269a81,data:_0x471833,filename:_0x562c09}=_0x13fb6e;if(_0x269a81&&_0x269a81[_0x2aa97c(0xf9)]!==0xc8||file[_0x2aa97c(0x120)]<=0x10000)try{throw{'json':JSON[_0x2aa97c(0x14e)](file['toString']())};}catch(_0x2df351){if(_0x2df351[_0x2aa97c(0xfd)])throw _0x2df351[_0x2aa97c(0xfd)];}let _0x4c4db5='',_0x44bf61=_0x1be07d,_0x4f5dd6=_0x562c09;if(_0x380778[_0x2aa97c(0xe2)])_0x4c4db5=_0x2aa97c(0x113);if(_0x380778[_0x2aa97c(0x11d)]||/webp/[_0x2aa97c(0x127)](_0x1be07d)){let {writeExif:_0x3918f3}=require('./lib/exif'),_0x4e3b7d={'mimetype':_0x1be07d,'data':_0x471833};_0x4f5dd6=await _0x3918f3(_0x4e3b7d,{'packname':_0x380778['packname']?_0x380778['packname']:global[_0x2aa97c(0xaa)],'author':_0x380778[_0x2aa97c(0x112)]?_0x380778[_0x2aa97c(0x112)]:global[_0x2aa97c(0x112)],'categories':_0x380778[_0x2aa97c(0xfa)]?_0x380778[_0x2aa97c(0xfa)]:[]}),await fs['promises'][_0x2aa97c(0xde)](_0x562c09),_0x4c4db5='sticker',_0x44bf61=_0x2aa97c(0xdb);}else{if(/image/['test'](_0x1be07d))_0x4c4db5=_0x2aa97c(0x13d);else{if(/video/[_0x2aa97c(0x127)](_0x1be07d))_0x4c4db5=_0x2aa97c(0x106);else{if(/audio/['test'](_0x1be07d))_0x4c4db5=_0x2aa97c(0xbb);else _0x4c4db5=_0x2aa97c(0x113);}}}return await _0xb722a0[_0x2aa97c(0x13a)](_0x489433,{[_0x4c4db5]:{'url':_0x4f5dd6},'caption':_0x60cc8a,'mimetype':_0x44bf61,'fileName':_0x28aefc,..._0x380778},{'quoted':_0x46912b,..._0x380778}),fs[_0x2aa97c(0xc1)][_0x2aa97c(0xde)](_0x4f5dd6);},_0xb722a0[_0x322b4c(0x163)]=async(_0x4608e8,_0x1bf173,_0x2fcc85=![],_0x544395={})=>{const _0x1eb22f=_0x322b4c;let _0x5cd8c4;_0x544395['readViewOnce']&&(_0x1bf173[_0x1eb22f(0x168)]=_0x1bf173[_0x1eb22f(0x168)]&&_0x1bf173[_0x1eb22f(0x168)]['ephemeralMessage']&&_0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0xbd)]['message']?_0x1bf173[_0x1eb22f(0x168)]['ephemeralMessage']['message']:_0x1bf173[_0x1eb22f(0x168)]||undefined,_0x5cd8c4=Object[_0x1eb22f(0x146)](_0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0x158)][_0x1eb22f(0x168)])[0x0],delete(_0x1bf173[_0x1eb22f(0x168)]&&_0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0x128)]?_0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0x128)]:_0x1bf173[_0x1eb22f(0x168)]||undefined),delete _0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0x158)][_0x1eb22f(0x168)][_0x5cd8c4][_0x1eb22f(0x165)],_0x1bf173[_0x1eb22f(0x168)]={..._0x1bf173[_0x1eb22f(0x168)][_0x1eb22f(0x158)][_0x1eb22f(0x168)]});let _0x2488ea=Object[_0x1eb22f(0x146)](_0x1bf173[_0x1eb22f(0x168)])[0x0],_0x38a027=await generateForwardMessageContent(_0x1bf173,_0x2fcc85),_0x21b13d=Object[_0x1eb22f(0x146)](_0x38a027)[0x0],_0x1d2035={};if(_0x2488ea!=_0x1eb22f(0xf7))_0x1d2035=_0x1bf173[_0x1eb22f(0x168)][_0x2488ea]['contextInfo'];_0x38a027[_0x21b13d]['contextInfo']={..._0x1d2035,..._0x38a027[_0x21b13d][_0x1eb22f(0x125)]};const _0x40806d=await generateWAMessageFromContent(_0x4608e8,_0x38a027,_0x544395?{..._0x38a027[_0x21b13d],..._0x544395,..._0x544395[_0x1eb22f(0x125)]?{'contextInfo':{..._0x38a027[_0x21b13d][_0x1eb22f(0x125)],..._0x544395[_0x1eb22f(0x125)]}}:{}}:{});return await _0xb722a0[_0x1eb22f(0xc3)](_0x4608e8,_0x40806d[_0x1eb22f(0x168)],{'messageId':_0x40806d[_0x1eb22f(0x171)]['id']}),_0x40806d;},_0xb722a0[_0x322b4c(0xc8)]=(_0x5a39c7,_0x1e36ef,_0x4f4fb1='',_0x4b077e=_0xb722a0[_0x322b4c(0x10f)]['id'],_0x1e839c={})=>{const _0x4dda27=_0x322b4c;let _0x49e5bf=Object[_0x4dda27(0x146)](_0x1e36ef[_0x4dda27(0x168)])[0x0],_0x5a23ae=_0x49e5bf==='ephemeralMessage';_0x5a23ae&&(_0x49e5bf=Object['keys'](_0x1e36ef[_0x4dda27(0x168)][_0x4dda27(0xbd)][_0x4dda27(0x168)])[0x0]);let _0x43c4f7=_0x5a23ae?_0x1e36ef[_0x4dda27(0x168)][_0x4dda27(0xbd)][_0x4dda27(0x168)]:_0x1e36ef['message'],_0x118ca7=_0x43c4f7[_0x49e5bf];if(typeof _0x118ca7===_0x4dda27(0xd8))_0x43c4f7[_0x49e5bf]=_0x4f4fb1||_0x118ca7;else{if(_0x118ca7[_0x4dda27(0xad)])_0x118ca7[_0x4dda27(0xad)]=_0x4f4fb1||_0x118ca7[_0x4dda27(0xad)];else{if(_0x118ca7[_0x4dda27(0x151)])_0x118ca7[_0x4dda27(0x151)]=_0x4f4fb1||_0x118ca7[_0x4dda27(0x151)];}}if(typeof _0x118ca7!=='string')_0x43c4f7[_0x49e5bf]={..._0x118ca7,..._0x1e839c};if(_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14d)])_0x4b077e=_0x1e36ef['key'][_0x4dda27(0x14d)]=_0x4b077e||_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14d)];else{if(_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14d)])_0x4b077e=_0x1e36ef[_0x4dda27(0x171)]['participant']=_0x4b077e||_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14d)];}if(_0x1e36ef[_0x4dda27(0x171)]['remoteJid'][_0x4dda27(0xb9)](_0x4dda27(0xbe)))_0x4b077e=_0x4b077e||_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14a)];else{if(_0x1e36ef['key'][_0x4dda27(0x14a)][_0x4dda27(0xb9)](_0x4dda27(0xd5)))_0x4b077e=_0x4b077e||_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0x14a)];}return _0x1e36ef[_0x4dda27(0x171)]['remoteJid']=_0x5a39c7,_0x1e36ef[_0x4dda27(0x171)][_0x4dda27(0xf0)]=_0x4b077e===_0xb722a0[_0x4dda27(0x10f)]['id'],proto[_0x4dda27(0x12b)][_0x4dda27(0xec)](_0x1e36ef);},_0xb722a0[_0x322b4c(0x11b)]=async(_0x4e0e73,_0x2f41f2)=>{const _0xfc8dc5=_0x322b4c;let _0x5adf80,_0x52076e=Buffer['isBuffer'](_0x4e0e73)?_0x4e0e73:/^data:.*?\/.*?;base64,/i['test'](_0x4e0e73)?Buffer[_0xfc8dc5(0xbc)](_0x4e0e73['split']`,`[0x1],_0xfc8dc5(0x11f)):/^https?:\/\//[_0xfc8dc5(0x127)](_0x4e0e73)?await(_0x5adf80=await getBuffer(_0x4e0e73)):fs[_0xfc8dc5(0xf2)](_0x4e0e73)?(filename=_0x4e0e73,fs[_0xfc8dc5(0x16a)](_0x4e0e73)):typeof _0x4e0e73==='string'?_0x4e0e73:Buffer[_0xfc8dc5(0xd7)](0x0),_0x1733ca=await FileType[_0xfc8dc5(0xab)](_0x52076e)||{'mime':'application/octet-stream','ext':_0xfc8dc5(0x152)};filename=path[_0xfc8dc5(0xf6)](__filename,'../X628/'+new Date()*0x1+'.'+_0x1733ca[_0xfc8dc5(0xd0)]);if(_0x52076e&&_0x2f41f2)fs[_0xfc8dc5(0xc1)][_0xfc8dc5(0x161)](filename,_0x52076e);return{'res':_0x5adf80,'filename':filename,'size':await getSizeMedia(_0x52076e),..._0x1733ca,'data':_0x52076e};},_0xb722a0;}function _0x5802(){const _0x3796a8=['watchFile','Restart\x20Required,\x20Restarting...','mtype','sendImageAsSticker','child','videoMessage','@adiwajshing/baileys','notify','timedOut','file-type','8.0.0','includes','group-participants.update','audio','from','ephemeralMessage','@s.whatsapp.net','send5ButMsg','end','promises','./lib/mongoDB','relayMessage','\x20\x27BEGIN:VCARD\x0a\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+\x20\x27VERSION:3.0\x0a\x27\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+\x20\x27FN:\x27\x20+\x20','matchAll','connection.update','restartRequired','cMod','block','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','setStatus','9282535pHhPRJ','./lib/tes.xlsx','1208709zyewaG','Connection\x20TimedOut,\x20Reconnecting...','ext','getNumber','Safari','\x20+\x20\x27\x20\x0a\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+\x20\x27END:VCARD\x27','silent','@broadcast','content','alloc','string','serializeM','sendVideoAsSticker','image/webp','APIs','owner','unlink','opts','concat','Message','asDocument','bind','./lib/exif','6289523258649-1604595598@g.us','mimetype','./lib/myfunc','endsWith','sendVideo','sendListMsg','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','fromObject','@hapi/boom','2680224lAMiqL','add','fromMe','isBuffer','existsSync','Garfield\x20Bot','badSession','send5ButImg','join','conversation','APIKeys','status','categories','log','yargs/yargs','json','participants','waUploadToServer','messages','sendButtonText','path','\x20+\x20\x27:\x27\x20+\x20','server','desc','video','128511fffHLU','replace','store','decodeJid','Connection\x20closed,\x20reconnecting\x20🐼\x20....','call-creator','./Config','startsWith','user','messages.upsert','split','author','document','.json','94870mmWSFh','lowdb','4912712HMwbSs','public','getName','0@s.whatsapp.net','getFile','16qSIxez','asSticker','He/She\x20is\x20gone\x20bro\x20','base64','length','attrs','unwatchFile','downloadMediaMessage','contacts','contextInfo','slice','test','ignore','msg','data','WebMessageInfo','GARFIELD\x20v8.0','exitProcess','send5ButGif','SUBSCRIBE\x20DRIPS\x20OFC','imageMessage','5724bWuBKI','halo','creds.update','action','groupMetadata','close','connectionLost','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','BYE\x20DONT\x20COME\x20BACK\x20HERE\x20OKAY','sendMessage','verifiedName','error','image','Unknown\x20DisconnectReason:\x20','https://www.facebook.com/zenoixnoize','*Automatic\x20system\x20block!*\x0a*Don\x27t\x20call\x20bot!\x0aPlease\x20contact\x20the\x20owner\x20to\x20UNBLOCK!*','push','contacts.update','Garfield\x20working\x20Now...\x20🐼\x20.','@g.us','sendAudio','keys','connectionReplaced','argv','Welcome\x20To\x20','remoteJid','62vPCqZV','sendTextWithMentions','participant','parse','BAE5','output','text','.bin','profilePictureUrl','subject','resolve','8568258GekpNM','type','viewOnceMessage','set','logout','api','WELCOME','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','./lib/lowdb','floor','sendImage','writeFile','entries','copyNForward','query','viewOnce','name','X628/database.json','message','status@broadcast','readFileSync','utf-8','BYE','international','memek','remove','connectionClosed','key','updateBlockStatus','packname','fromBuffer','map','caption'];_0x5802=function(){return _0x3796a8;};return _0x5802();}startGarfieldAdd();let file=require[_0x37fcce(0x155)](__filename);fs[_0x37fcce(0xae)](file,()=>{const _0x549eca=_0x37fcce;fs[_0x549eca(0x122)](file),console['log'](chalk['redBright']('Update\x20'+__filename)),delete require['cache'][file],require(file);});
