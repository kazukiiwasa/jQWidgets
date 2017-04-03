/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){"use strict";a.jqx.timeSpan=function(){var b={ticksPerMillisecond:1e4,millisecondsPerTick:1e-4,ticksPerSecond:1e7,secondsPerTick:1e-7,ticksPerMinute:6e8,minutesPerTick:1/6e8,ticksPerHour:36e9,hoursPerTick:1/36e9,ticksPerDay:864e9,daysPerTick:1/864e9,millisPerSecond:1e3,millisPerMinute:6e4,millisPerHour:36e5,millisPerDay:864e5,_ticks:0};a.extend(!0,this,b);var c=this;if(c.ticks=function(){return c._ticks},c.days=function(){return parseInt(c._ticks/c.ticksPerDay)},c.timeToMS=function(a,b,d,e){var f=3600*a+60*b+d+e/1e3;return parseInt(f*c.ticksPerSecond)},c.hours=function(){return parseInt(c._ticks/c.ticksPerHour)%24},c.milliseconds=function(){return parseInt(c._ticks/c.ticksPerMillisecond)%1e3},c.minutes=function(){return parseInt(c._ticks/c.ticksPerMinute)%60},c.seconds=function(){return parseInt(c._ticks/c.ticksPerSecond)%60},c.totalDays=function(){return parseInt(c._ticks*c.daysPerTick)},c.totalHours=function(){return parseInt(c._ticks*c.hoursPerTick)},c.totalMilliseconds=function(){var a=c._ticks*c.millisecondsPerTick;return parseInt(a)},c.totalMinutes=function(){return parseInt(c._ticks*c.minutesPerTick)},c.totalSeconds=function(){return parseInt(c._ticks*c.secondsPerTick)},1===arguments.length)c._ticks=arguments[0];else if(3===arguments.length)c._ticks=c.timeToMS(arguments[0],arguments[1],arguments[2]);else if(4===arguments.length){var d=arguments[0],e=arguments[1],f=arguments[2],g=arguments[3],h=0,i=1e3*(3600*d*24+3600*e+60*f+g)+h;c._ticks=i*c.ticksPerMillisecond}else if(5===arguments.length){var d=arguments[0],e=arguments[1],f=arguments[2],g=arguments[3],h=arguments[4],i=1e3*(3600*d*24+3600*e+60*f+g)+h;c._ticks=i*c.ticksPerMillisecond}return c.add=function(b){var d=c._ticks+b._ticks,e=new a.jqx.timeSpan(d);return e},c.substract=function(b){var c=_ticks-b._ticks;return new a.jqx.timeSpan(c)},c.duration=function(){return c._ticks>=0?new a.jqx.timeSpan(c._ticks):new a.jqx.timeSpan(-c._ticks)},c.equals=function(a){return c._ticks==a._ticks},c.valueOf=function(){return c._ticks},c.compare=function(a,b){return a._ticks>b._ticks?1:a._ticks<b._ticks?-1:0},c.interval=function(b,d){var e=b*d,f=e+(b>=0?.5:-.5);return new a.jqx.timeSpan(f*c.ticksPerMillisecond)},c.fromDays=function(a){return c.interval(a,c.millisPerDay)},c.fromHours=function(a){return c.interval(a,c.millisPerHour)},c.fromMilliseconds=function(a){return c.interval(a,1)},c.fromMinutes=function(a){return c.interval(a,c.millisPerMinute)},c.fromSeconds=function(a){return c.interval(a,c.millisPerSecond)},c.fromTicks=function(b){return new a.jqx.timeSpan(b)},c};var b=[{id:"Local",offset:0,offsetHours:0,displayName:"",supportsDaylightSavingTime:!1},{id:"Dateline Standard Time",offset:-720,offsetHours:-12,displayName:"(UTC-12:00) International Date Line West",supportsDaylightSavingTime:!1},{id:"UTC-11",offset:-660,offsetHours:-11,displayName:"(UTC-11:00) Coordinated Universal Time-11",supportsDaylightSavingTime:!1},{id:"Hawaiteratoran Standard Time",offset:-600,offsetHours:-10,displayName:"(UTC-10:00) Hawaiterator",supportsDaylightSavingTime:!1},{id:"Alaskan Standard Time",offset:-540,offsetHours:-9,displayName:"(UTC-09:00) Alaska",supportsDaylightSavingTime:!0},{id:"Pacific Standard Time (Mexico)",offset:-480,offsetHours:-8,displayName:"(UTC-08:00) Baja California",supportsDaylightSavingTime:!0},{id:"Pacific Standard Time",offset:-480,offsetHours:-8,displayName:"(UTC-08:00) Pacific Time (US & Canada)",supportsDaylightSavingTime:!0},{id:"US Mountain Standard Time",offset:-420,offsetHours:-7,displayName:"(UTC-07:00) Arizona",supportsDaylightSavingTime:!1},{id:"Mountain Standard Time (Mexico)",offset:-420,offsetHours:-7,displayName:"(UTC-07:00) Chihuahua, La Paz, Mazatlan",supportsDaylightSavingTime:!0},{id:"Mountain Standard Time",offset:-420,offsetHours:-7,displayName:"(UTC-07:00) Mountain Time (US & Canada)",supportsDaylightSavingTime:!0},{id:"Central Standard Time",offset:-360,offsetHours:-6,displayName:"(UTC-06:00) Central Time (US & Canada)",supportsDaylightSavingTime:!0},{id:"Central America Standard Time",offset:-360,offsetHours:-6,displayName:"(UTC-06:00) Central America",supportsDaylightSavingTime:!1},{id:"Canada Central Standard Time",offset:-360,offsetHours:-6,displayName:"(UTC-06:00) Saskatchewan",supportsDaylightSavingTime:!1},{id:"Central Standard Time (Mexico)",offset:-360,offsetHours:-6,displayName:"(UTC-06:00) Guadalajara, Mexico City, Monterrey",supportsDaylightSavingTime:!0},{id:"SA Pacific Standard Time",offset:-300,offsetHours:-5,displayName:"(UTC-05:00) Bogota, Lima, Quito, Rio Branco",supportsDaylightSavingTime:!1},{id:"Eastern Standard Time",offset:-300,offsetHours:-5,displayName:"(UTC-05:00) Eastern Time (US & Canada)",supportsDaylightSavingTime:!0},{id:"US Eastern Standard Time",offset:-300,offsetHours:-5,displayName:"(UTC-05:00) Indiana (East)",supportsDaylightSavingTime:!0},{id:"Venezuela Standard Time",offset:-270,offsetHours:-4.5,displayName:"(UTC-04:30) Caracas",supportsDaylightSavingTime:!1},{id:"Atlantic Standard Time",offset:-240,offsetHours:-4,displayName:"(UTC-04:00) Atlantic Time (Canada)",supportsDaylightSavingTime:!0},{id:"Paraguay Standard Time",offset:-240,offsetHours:-4,displayName:"(UTC-04:00) Asuncion",supportsDaylightSavingTime:!0},{id:"Central Brazilian Standard Time",offset:-240,offsetHours:-4,displayName:"(UTC-04:00) Cuiaba",supportsDaylightSavingTime:!0},{id:"Pacific SA Standard Time",offset:-240,offsetHours:-4,displayName:"(UTC-04:00) Santiago",supportsDaylightSavingTime:!0},{id:"SA Western Standard Time",offset:-240,offsetHours:-4,displayName:"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",supportsDaylightSavingTime:!1},{id:"Newfoundland Standard Time",offset:-210,offsetHours:-3.5,displayName:"(UTC-03:30) Newfoundland",supportsDaylightSavingTime:!0},{id:"SA Eastern Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Cayenne, Fortaleza",supportsDaylightSavingTime:!1},{id:"Argentina Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Buenos Aires",supportsDaylightSavingTime:!0},{id:"E. South America Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Brasilia",supportsDaylightSavingTime:!0},{id:"Bahia Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Salvador",supportsDaylightSavingTime:!0},{id:"Montevideo Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Montevideo",supportsDaylightSavingTime:!0},{id:"Greenland Standard Time",offset:-180,offsetHours:-3,displayName:"(UTC-03:00) Greenland",supportsDaylightSavingTime:!0},{id:"UTC-02",offset:-120,offsetHours:-2,displayName:"(UTC-02:00) Coordinated Universal Time-02",supportsDaylightSavingTime:!1},{id:"Mid-Atlantic Standard Time",offset:-120,offsetHours:-2,displayName:"(UTC-02:00) Mid-Atlantic - Old",supportsDaylightSavingTime:!0},{id:"Azores Standard Time",offset:-60,offsetHours:-1,displayName:"(UTC-01:00) Azores",supportsDaylightSavingTime:!0},{id:"Cape Verde Standard Time",offset:-60,offsetHours:-1,displayName:"(UTC-01:00) Cape Verde Is.",supportsDaylightSavingTime:!1},{id:"Morocco Standard Time",offset:0,offsetHours:0,displayName:"(UTC) Casablanca",supportsDaylightSavingTime:!0},{id:"UTC",offset:0,offsetHours:0,displayName:"(UTC) Coordinated Universal Time",supportsDaylightSavingTime:!1},{id:"GMT Standard Time",offset:0,offsetHours:0,displayName:"(UTC) Dublin, Edinburgh, Lisbon, London",supportsDaylightSavingTime:!0},{id:"Greenwich Standard Time",offset:0,offsetHours:0,displayName:"(UTC) Monrovia, Reykjavik",supportsDaylightSavingTime:!1},{id:"Central European Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",supportsDaylightSavingTime:!0},{id:"Namibia Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) Windhoek",supportsDaylightSavingTime:!0},{id:"W. Central Africa Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) West Central Africa",supportsDaylightSavingTime:!1},{id:"W. Europe Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",supportsDaylightSavingTime:!0},{id:"Central Europe Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",supportsDaylightSavingTime:!0},{id:"Romance Standard Time",offset:60,offsetHours:1,displayName:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",supportsDaylightSavingTime:!0},{id:"FLE Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",supportsDaylightSavingTime:!0},{id:"South Africa Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Harare, Pretoria",supportsDaylightSavingTime:!1},{id:"Turkey Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Istanbul",supportsDaylightSavingTime:!0},{id:"GTB Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Athens, Bucharest",supportsDaylightSavingTime:!0},{id:"Libya Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Tripoli",supportsDaylightSavingTime:!0},{id:"E. Europe Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) E. Europe",supportsDaylightSavingTime:!0},{id:"Jordan Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Amman",supportsDaylightSavingTime:!0},{id:"Middle East Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Beirut",supportsDaylightSavingTime:!0},{id:"Egypt Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Cairo",supportsDaylightSavingTime:!0},{id:"Syria Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Damascus",supportsDaylightSavingTime:!0},{id:"Israel Standard Time",offset:120,offsetHours:2,displayName:"(UTC+02:00) Jerusalem",supportsDaylightSavingTime:!0},{id:"Arab Standard Time",offset:180,offsetHours:3,displayName:"(UTC+03:00) Kuwait, Riyadh",supportsDaylightSavingTime:!1},{id:"E. Africa Standard Time",offset:180,offsetHours:3,displayName:"(UTC+03:00) Nairobi",supportsDaylightSavingTime:!1},{id:"Arabic Standard Time",offset:180,offsetHours:3,displayName:"(UTC+03:00) Baghdad",supportsDaylightSavingTime:!0},{id:"Kaliningrad Standard Time",offset:180,offsetHours:3,displayName:"(UTC+03:00) Kaliningrad, Minsk",supportsDaylightSavingTime:!0},{id:"Iran Standard Time",offset:210,offsetHours:3.5,displayName:"(UTC+03:30) Tehran",supportsDaylightSavingTime:!0},{id:"Mauritius Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Port Louis",supportsDaylightSavingTime:!0},{id:"Georgian Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Tbilisi",supportsDaylightSavingTime:!1},{id:"Caucasus Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Yerevan",supportsDaylightSavingTime:!0},{id:"Arabian Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Abu Dhabi, Muscat",supportsDaylightSavingTime:!1},{id:"Azerbaijan Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Baku",supportsDaylightSavingTime:!0},{id:"Russian Standard Time",offset:240,offsetHours:4,displayName:"(UTC+04:00) Moscow, St. Petersburg, Volgograd",supportsDaylightSavingTime:!0},{id:"Afghanistan Standard Time",offset:270,offsetHours:4.5,displayName:"(UTC+04:30) Kabul",supportsDaylightSavingTime:!1},{id:"Pakistan Standard Time",offset:300,offsetHours:5,displayName:"(UTC+05:00) Islamabad, Karachi",supportsDaylightSavingTime:!0},{id:"West Asia Standard Time",offset:300,offsetHours:5,displayName:"(UTC+05:00) Ashgabat, Tashkent",supportsDaylightSavingTime:!1},{id:"India Standard Time",offset:330,offsetHours:5.5,displayName:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",supportsDaylightSavingTime:!1},{id:"Sri Lanka Standard Time",offset:330,offsetHours:5.5,displayName:"(UTC+05:30) Sri Jayawardenepura",supportsDaylightSavingTime:!1},{id:"Nepal Standard Time",offset:345,offsetHours:5.75,displayName:"(UTC+05:45) Kathmandu",supportsDaylightSavingTime:!1},{id:"Central Asia Standard Time",offset:360,offsetHours:6,displayName:"(UTC+06:00) Astana",supportsDaylightSavingTime:!1},{id:"Bangladesh Standard Time",offset:360,offsetHours:6,displayName:"(UTC+06:00) Dhaka",supportsDaylightSavingTime:!0},{id:"Ekaterinburg Standard Time",offset:360,offsetHours:6,displayName:"(UTC+06:00) Ekaterinburg",supportsDaylightSavingTime:!0},{id:"Myanmar Standard Time",offset:390,offsetHours:6.5,displayName:"(UTC+06:30) Yangon (Rangoon)",supportsDaylightSavingTime:!1},{id:"SE Asia Standard Time",offset:420,offsetHours:7,displayName:"(UTC+07:00) Bangkok, Hanoi, Jakarta",supportsDaylightSavingTime:!1},{id:"N. Central Asia Standard Time",offset:420,offsetHours:7,displayName:"(UTC+07:00) Novosibirsk",supportsDaylightSavingTime:!0},{id:"Ulaanbaatar Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Ulaanbaatar",supportsDaylightSavingTime:!1},{id:"China Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",supportsDaylightSavingTime:!1},{id:"Singapore Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Kuala Lumpur, Singapore",supportsDaylightSavingTime:!1},{id:"North Asia Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Krasnoyarsk",supportsDaylightSavingTime:!0},{id:"Taipei Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Taipei",supportsDaylightSavingTime:!1},{id:"W. Australia Standard Time",offset:480,offsetHours:8,displayName:"(UTC+08:00) Perth",supportsDaylightSavingTime:!0},{id:"Korea Standard Time",offset:540,offsetHours:9,displayName:"(UTC+09:00) Seoul",supportsDaylightSavingTime:!1},{id:"North Asia East Standard Time",offset:540,offsetHours:9,displayName:"(UTC+09:00) Irkutsk",supportsDaylightSavingTime:!0},{id:"Tokyo Standard Time",offset:540,offsetHours:9,displayName:"(UTC+09:00) Osaka, Sapporo, Tokyo",supportsDaylightSavingTime:!1},{id:"AUS Central Standard Time",offset:570,offsetHours:9.5,displayName:"(UTC+09:30) Darwin",supportsDaylightSavingTime:!1},{id:"Cen. Australia Standard Time",offset:570,offsetHours:9.5,displayName:"(UTC+09:30) Adelaide",supportsDaylightSavingTime:!0},{id:"West Pacific Standard Time",offset:600,offsetHours:10,displayName:"(UTC+10:00) Guam, Port Moresby",supportsDaylightSavingTime:!1},{id:"Tasmania Standard Time",offset:600,offsetHours:10,displayName:"(UTC+10:00) Hobart",supportsDaylightSavingTime:!0},{id:"E. Australia Standard Time",offset:600,offsetHours:10,displayName:"(UTC+10:00) Brisbane",supportsDaylightSavingTime:!1},{id:"AUS Eastern Standard Time",offset:600,offsetHours:10,displayName:"(UTC+10:00) Canberra, Melbourne, Sydney",supportsDaylightSavingTime:!0},{id:"Yakutsk Standard Time",offset:600,offsetHours:10,displayName:"(UTC+10:00) Yakutsk",supportsDaylightSavingTime:!0},{id:"Vladivostok Standard Time",offset:660,offsetHours:11,displayName:"(UTC+11:00) Vladivostok",supportsDaylightSavingTime:!0},{id:"Central Pacific Standard Time",offset:660,offsetHours:11,displayName:"(UTC+11:00) Solomon Is., New Caledonia",supportsDaylightSavingTime:!1},{id:"Magadan Standard Time",offset:720,offsetHours:12,displayName:"(UTC+12:00) Magadan",supportsDaylightSavingTime:!0},{id:"Kamchatka Standard Time",offset:720,offsetHours:12,displayName:"(UTC+12:00) Petropavlovsk-Kamchatsky - Old",supportsDaylightSavingTime:!0},{id:"Fiji Standard Time",offset:720,offsetHours:12,displayName:"(UTC+12:00) Fiji",supportsDaylightSavingTime:!0},{id:"New Zealand Standard Time",offset:720,offsetHours:12,displayName:"(UTC+12:00) Auckland, Wellington",supportsDaylightSavingTime:!0},{id:"UTC+12",offset:720,offsetHours:12,displayName:"(UTC+12:00) Coordinated Universal Time+12",supportsDaylightSavingTime:!1},{id:"Tonga Standard Time",offset:780,offsetHours:13,displayName:"(UTC+13:00) Nuku'alofa",supportsDaylightSavingTime:!1},{id:"Samoa Standard Time",offset:780,offsetHours:13,displayName:"(UTC+13:00) Samoa",supportsDaylightSavingTime:!0}],c=[0,31,59,90,120,151,181,212,243,273,304,334,365],d=[0,31,60,91,121,152,182,213,244,274,305,335,366],e=1461,f=36524,g=146097,h=584388,i=693593,j=3652059,k=3155378976e9,l=3155378976e5;a.jqx.date=function(){var m=this;if(m.ticksPerMillisecond=1e4,m.millisecondsPerTick=1e-4,m.ticksPerSecond=1e7,m.secondsPerTick=1e-7,m.ticksPerMinute=6e8,m.minutesPerTick=1/6e8,m.ticksPerHour=36e9,m.hoursPerTick=1/36e9,m.ticksPerDay=864e9,m.daysPerTick=1/864e9,m.millisPerSecond=1e3,m.millisPerMinute=6e4,m.millisPerHour=36e5,m.millisPerDay=864e5,m.daysPerYear=365,m.daysPer4Years=e,m.daysPer100Years=f,m.daysPer400Years=g,m.daysTo1601=h,m.daysTo1899=i,m.daysTo10000=j,m.minTicks=0,m.maxTicks=k,m.maxMillis=l,m.datePartYear=0,m.datePartDayOfYear=1,m.datePartMonth=2,m.datePartDay=3,m.daysToMonth365=c,m.daysToMonth366=d,m.minValue=new Date(0),m.maxValue=new Date(3155378976e9),m.ticksMask=0x4000000000000000,m.flagsMask=0xc000000000000000,m.localMask=0x8000000000000000,m.ticksCeiling=0x4000000000000000,m.kindUnspecified=0,m.kindUtc=0x4000000000000000,m.kindLocal=0x8000000000000000,m.kindLocalAmbiguousDst=0xc000000000000000,m.kindShift=62,m.regexTrim=/^\s+|\s+$/g,m.regexInfinity=/^[+-]?infinity$/i,m.regexHex=/^0x[a-f0-9]+$/i,m.regexParseFloat=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,m.calendar={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","},m.dateData=0,m.timeZone=null,m.timeZones=b,m.internalMS=function(){return m.dateData},m.getDatePart=function(a){var b=m.internalMS(),c=parseInt(b/m.millisPerDay),d=parseInt(c/m.daysPer400Years);c-=d*m.daysPer400Years;var e=parseInt(c/m.daysPer100Years);4==e&&(e=3),c-=e*m.daysPer100Years;var f=parseInt(c/m.daysPer4Years);c-=f*m.daysPer4Years;var g=parseInt(c/m.daysPerYear);if(4==g&&(g=3),a==m.datePartYear)return parseInt(400*d+100*e+4*f+g+1);if(c-=g*m.daysPerYear,a==m.datePartDayOfYear)return parseInt(c+1);for(var h=3==g&&(24!=f||3==e),i=h?m.daysToMonth366:m.daysToMonth365,j=c>>6;c>=i[j];)j++;return a==m.datePartMonth?parseInt(j):parseInt(c-i[j-1]+1)},m.dayOfWeek=function(){var a=m.dateData,b=parseInt(a/m.millisPerDay+1)%7;return b},m.dayOfYear=function(){return m.getDatePart(m.datePartDayOfYear)},m.weekOfYear=function(a){var b=m.toDate(),c=a||m.calendar.firstDay,d=new Date(b.getFullYear(),0,1),e=d.getDay()-c;e=e>=0?e:e+7;var f,g=Math.floor((b.getTime()-d.getTime()-6e4*(b.getTimezoneOffset()-d.getTimezoneOffset()))/864e5)+1;return e<4?(f=Math.floor((g+e-1)/7)+1,f>52&&(nYear=new Date(b.getFullYear()+1,0,1),nday=nYear.getDay()-c,nday=nday>=0?nday:nday+7,f=nday<4?1:53)):f=Math.floor((g+e-1)/7),f},m.subtract=function(b){return new a.jqx.timeSpan(m.dateData*m.ticksPerMillisecond-b.dateData*m.ticksPerMillisecond)},m.dateToMS=function(a,b,c){if(a>=1&&a<=9999&&b>=1&&b<=12){a=parseInt(a);var d=m.isLeapYear(a)?m.daysToMonth366:m.daysToMonth365;if(c>=1&&c<=d[b]-d[b-1]){var e=a-1,f=365*e+parseInt(e/4)-parseInt(e/100)+parseInt(e/400)+d[b-1]+c-1;return f*m.millisPerDay}}},m.isLeapYear=function(a){if(a<1||a>9999)throw new Error("Year out of Range");return a%4==0&&(a%100!=0||a%400==0)},m.timeToMS=function(a,b,c,d){if(a>=0&&a<24&&b>=0&&b<60&&c>=0&&c<60){var e=parseInt(3600*a+60*b+c);return d>0&&d<1e3?e*m.millisPerSecond+d:e*m.millisPerSecond}},m.daysInMonth=function(a,b){if(b<1||b>12)throw new Error("Month out of Range");var c=m.isLeapYear(a)?m.daysToMonth366:m.daysToMonth365;return c[b]-c[b-1]},m.arrayIndexOf=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},m.startsWith=function(a,b){return 0===a.indexOf(b)},m.endsWith=function(a,b){return a.substr(a.length-b.length)===b},m.trim=function(a){return(a+"").replace(m.regexTrim,"")},m.expandFormat=function(a,b){b=b||"F";var c,d=a.patterns,e=b.length;if(1===e){if(c=d[b],!c)throw"Invalid date format string '"+b+"'.";b=c}else 2===e&&"%"===b.charAt(0)&&(b=b.charAt(1));return b},m.getEra=function(a,b){if(!b)return 0;if("string"==typeof a)return 0;for(var c,d=a.getTime(),e=0,f=b.length;e<f;e++)if(c=b[e].start,null===c||d>=c)return e;return 0},m.toUpper=function(a){return a.split(" ").join(" ").toUpperCase()},m.toUpperArray=function(a){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=m.toUpper(a[c]);return b},m.getEraYear=function(a,b,c,d){var e=a.getFullYear();return!d&&b.eras&&(e-=b.eras[c].offset),e},m.getDayIndex=function(a,b,c){var d,e=a.days,f=a._upperDays;return f||(a._upperDays=f=[m.toUpperArray(e.names),m.toUpperArray(e.namesAbbr),m.toUpperArray(e.namesShort)]),b=b.toUpperCase(),c?(d=m.arrayIndexOf(f[1],b),d===-1&&(d=m.arrayIndexOf(f[2],b))):d=m.arrayIndexOf(f[0],b),d},m.getMonthIndex=function(a,b,c){var d=a.months,e=a.monthsGenitive||a.months,f=a._upperMonths,g=a._upperMonthsGen;f||(a._upperMonths=f=[m.toUpperArray(d.names),m.toUpperArray(d.namesAbbr)],a._upperMonthsGen=g=[m.toUpperArray(e.names),m.toUpperArray(e.namesAbbr)]),b=m.toUpper(b);var h=m.arrayIndexOf(c?f[1]:f[0],b);return h<0&&(h=m.arrayIndexOf(c?g[1]:g[0],b)),h},m.appendPreOrPostMatch=function(a,b){for(var c=0,d=!1,e=0,f=a.length;e<f;e++){var g=a.charAt(e);switch(g){case"'":d?b.push("'"):c++,d=!1;break;case"\\":d&&b.push("\\"),d=!d;break;default:b.push(g),d=!1}}return c},m.getTokenRegExp=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},m.tryparseDate=function(b,c,d){if(void 0==c||null==c)c=m.calendar;else if(null!=c&&c&&"string"===a.type(c)&&Globalize){var e=Globalize.cultures[c];e&&(c=e.calendar)}if(void 0!=d){if("array"===a.type(d))for(var f=0;f<d.length;f++){var g=m.parseDate(b,d[f],c);if(g)return g}var g=m.parseDate(b,d,c);if(g)return g}if(""==b)return null;if(null==b||b.substring||(b=b.toString()),null!=b&&"/Date("==b.substring(0,6)){var h=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/,i=new Date(+b.replace(/\/Date\((\d+)\)\//,"$1"));if("Invalid Date"==i){var j=b.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/),i=null;j&&(i=new Date(1*j[1]+36e5*j[2]+6e4*j[3]))}if(null==i||"Invalid Date"==i||isNaN(i)){var k=h.exec(b);if(k){var l=new Date(parseInt(k[1]));if(k[2]){var n=parseInt(k[3]);"-"===k[2]&&(n=-n);var o=l.getUTCMinutes();l.setUTCMinutes(o-n)}if(!isNaN(l.valueOf()))return l}}return i}var p={jqxdate:"yyyy-MM-dd HH:mm:ss",d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",ISO8601:"yyyy-MM-ddTHH:mm:ss.sssZ",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",d3:"MM-dd-yyyy",d4:"MM.dd.yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff",iso:"yyyy-MM-ddTHH:mm:ssZ",iso_date1:"yyyy-MM-dd",iso_date2:"yyyy-MM-dd",iso_date3:"yyyy-ddd",iso_date4:"yyyy-MM-dd HH:mm",iso_date5:"yyyy-MM-dd HH:mm Z",iso_date6:"yyyy-MMM-dd",iso_date7:"yyyy-MM",iso_date8:"yyyy-MMM",iso_date9:"yyyy-MMMM",iso_date10:"yyyy-MMMM-dd",iso_time1:"HH:mm:ss.tttt",iso_time2:"HH:mm:ss",iso_time3:"HH:mm",iso_time4:"HH",iso_time5:"yyyyyy-MM-dd",iso_time6:"yyyyyy-MM-dd"};for(var q in p)if(i=m.parseDate(b,p[q],c))return i;var r=c.patterns;for(q in r)if(i=m.parseDate(b,r[q],c)){if("ISO"==q){var s=m.parseDate(b,r.ISO2,c);if(s)return s}return i}if("string"===a.type(b)){b=m.trim(b);var t=[":","/","-"," ",","],u=function(a,b,c){return c.replace(new RegExp(a,"g"),b)};b=u(", ",",",b);var v="",w=b;b.indexOf(":")>=0?(v=b.substring(b.indexOf(":")-2),v=m.trim(v),w=b.substring(0,b.indexOf(":")-2)):b.toUpperCase().indexOf("AM")>=0?(v=b.substring(b.toUpperCase().indexOf("AM")-2),v=m.trim(v),w=b.substring(0,b.toUpperCase().indexOf("AM")-2)):b.toUpperCase().indexOf("PM")>=0&&(v=b.substring(b.toUpperCase().indexOf("PM")-2),v=m.trim(v),w=b.substring(0,b.toUpperCase().indexOf("PM")-2));var x=new Date,y=!1;if(w){for(var f=0;f<t.length;f++)if(w.indexOf(t[f])>=0){R=w.split(t[f]);break}for(var z=new Array,A=new Array,B=new Array,C=null,D=null,f=0;f<R.length;f++){var E=R[f],F=m.parseDate(E,"d",c)||m.parseDate(E,"dd",c)||m.parseDate(E,"ddd",c)||m.parseDate(E,"dddd",c);if(F&&(z.push(F.getDate()),E.length>2)){C=f;break}}for(var f=0;f<R.length;f++){var E=R[f],G=m.parseDate(E,"M",c)||m.parseDate(E,"MM",c)||m.parseDate(E,"MMM",c)||m.parseDate(E,"MMMM",c);if(G){if(void 0!=C&&C==f)continue;if(A.push(G.getMonth()),E.length>2){D=f;break}}}for(var f=0;f<R.length;f++){var E=R[f],H=m.parseDate(E,"yyyy",c);if(H){if(void 0!=C&&C==f)continue;if(void 0!=D&&D==f)continue;B.push(H.getFullYear())}}for(var I=new Array,J=0;J<z.length;J++)for(var j=0;j<A.length;j++)for(var K=0;K<B.length;K++){var l=new Date(B[K],A[j],z[J]);B[K]<1970&&l.setFullYear(B[K]),NaN!=l.getTime()&&I.push(l)}I.length>0&&(x=I[0],y=!0)}if(v){var L=v.indexOf(":")>=0?v.split(":"):v,M=m.parseDate(v,"h:mm tt",c)||m.parseDate(v,"HH:mm:ss.fff",c)||m.parseDate(v,"HH:mm:ss.ff",c)||m.parseDate(v,"h:mm:ss tt",c)||m.parseDate(v,"HH:mm:ss.tttt",c)||m.parseDate(v,"HH:mm:ss",c)||m.parseDate(v,"HH:mm",c)||m.parseDate(v,"HH",c),N=0,O=0,P=0,Q=0;M&&NaN!=M.getTime()?(N=M.getHours(),O=M.getMinutes(),P=M.getSeconds(),Q=M.getMilliseconds()):(1==L.length&&(N=parseInt(L[0])),2==L.length&&(N=parseInt(L[0]),O=parseInt(L[1])),3==L.length&&(N=parseInt(L[0]),O=parseInt(L[1]),L[2].indexOf(".")>=0?(P=parseInt(L[2].toString().split(".")[0]),Q=parseInt(L[2].toString().split(".")[1])):P=parseInt(L[2])),4==L.length&&(N=parseInt(L[0]),O=parseInt(L[1]),P=parseInt(L[2]),Q=parseInt(L[3]))),!x||isNaN(N)||isNaN(O)||isNaN(P)||isNaN(Q)||(x.setHours(N,O,P,Q),y=!0)}if(y)return x}if(null!=b){for(var s=null,R=[":","/","-"],S=!0,E=0;E<R.length;E++)b.indexOf(R[E])!=-1&&(S=!1);if(S){var T=new Number(b);if(!isNaN(T))return new Date(T)}}return null},m.getParseRegExp=function(a,b){var c=a._parseRegExp;if(c){var d=c[b];if(d)return d}else a._parseRegExp=c={};for(var e,f=m.expandFormat(a,b).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),g=["^"],h=[],i=0,j=0,k=m.getTokenRegExp();null!==(e=k.exec(f));){var l=f.slice(i,e.index);if(i=k.lastIndex,j+=m.appendPreOrPostMatch(l,g),j%2)g.push(e[0]);else{var n,o=e[0],p=o.length;switch(o){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":n="(\\D+)";break;case"tt":case"t":n="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":n="(\\d{"+p+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":n="(\\d\\d?)";break;case"zzz":n="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":n="([+-]?\\d\\d?)";break;case"/":n="(\\"+a["/"]+")";break;default:throw"Invalid date format pattern '"+o+"'."}n&&g.push(n),h.push(e[0])}}m.appendPreOrPostMatch(f.slice(i),g),g.push("$");var q=g.join("").replace(/\s+/g,"\\s+"),r={regExp:q,groups:h};return c[b]=r},m.outOfRange=function(a,b,c){return a<b||a>c},m.expandYear=function(a,b){var c=new Date,d=m.getEra(c);if(b<100){var e=a.twoDigitYearMax;e="string"==typeof e?(new Date).getFullYear()%100+parseInt(e,10):e;var f=m.getEraYear(c,a,d);b+=f-f%100,b>e&&(b-=100)}return b},m.parseDate=function(a,b,c){void 0!=c&&null!=c||(c=m.calendar),a=m.trim(a);var d=c,e=m.getParseRegExp(d,b),f=new RegExp(e.regExp).exec(a);if(null===f)return null;for(var g,h=e.groups,i=null,j=null,k=null,l=null,n=null,o=0,p=0,q=0,r=0,s=null,t=!1,u=0,v=h.length;u<v;u++){var w=f[u+1];if(w){var x=h[u],y=x.length,z=parseInt(w,10);switch(x){case"dd":case"d":if(l=z,m.outOfRange(l,1,31))return null;break;case"MMM":case"MMMM":case"MMMMM":case"MMMMMM":case"MMMMMMM":case"MMMMMMMM":if(k=m.getMonthIndex(d,w,3===y),m.outOfRange(k,0,11))return null;break;case"M":case"MM":if(k=z-1,m.outOfRange(k,0,11))return null;break;case"y":case"yy":case"yyyy":if(j=y<4?m.expandYear(d,z):z,m.outOfRange(j,0,9999))return null;break;case"h":case"hh":if(o=z,12===o&&(o=0),m.outOfRange(o,0,11))return null;break;case"H":case"HH":if(o=z,m.outOfRange(o,0,23))return null;break;case"m":case"mm":if(p=z,m.outOfRange(p,0,59))return null;break;case"s":case"ss":if(q=z,m.outOfRange(q,0,59))return null;break;case"tt":case"t":if(t=d.PM&&(w===d.PM[0]||w===d.PM[1]||w===d.PM[2]),!t&&(!d.AM||w!==d.AM[0]&&w!==d.AM[1]&&w!==d.AM[2]))return null;break;case"f":case"ff":case"fff":if(r=z*Math.pow(10,3-y),m.outOfRange(r,0,999))return null;break;case"ddd":case"dddd":if(n=m.getDayIndex(d,w,3===y),m.outOfRange(n,0,6))return null;break;case"zzz":var A=w.split(/:/);if(2!==A.length)return null;if(g=parseInt(A[0],10),m.outOfRange(g,-12,13))return null;var B=parseInt(A[1],10);if(m.outOfRange(B,0,59))return null;s=60*g+(m.startsWith(w,"-")?-B:B);break;case"z":case"zz":if(g=z,m.outOfRange(g,-12,13))return null;s=60*g;break;case"g":case"gg":var C=w;if(!C||!d.eras)return null;C=trim(eraNathat.toLowerCase());for(var D=0,E=d.eras.length;D<E;D++)if(C===d.eras[D].nathat.toLowerCase()){i=D;break}if(null===i)return null}}}var F,G=new Date,H=d.convert;if(F=G.getFullYear(),null===j?j=F:d.eras&&(j+=d.eras[i||0].offset),null===k&&(k=0),null===l&&(l=1),H){if(G=H.toGregorian(j,k,l),null===G)return null}else{if(G.setFullYear(j,k,l),G.getDate()!==l)return null;if(null!==n&&G.getDay()!==n)return null}if(t&&o<12&&(o+=12),G.setHours(o,p,q,r),null!==s){var I=G.getMinutes()-(s+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(I/60,10),I%60)}return G},m.toString=function(b,c){function d(a,b){var c,d=a+"";return b>1&&d.length<b?(c=o[b-2]+d,c.substr(c.length-b,b)):c=d}function e(a,b){if(n)return n[b];if(void 0!=a.getMonth)switch(b){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate()}}if(void 0===b&&(b="yyyy-MM-dd HH:mm:ss"),a.jqx.date.cache&&a.jqx.date.cache[m.dateData+b])return a.jqx.date.cache[m.dateData+b];if(c&&"string"===a.type(c)&&Globalize){var f=Globalize.cultures[c];f&&(c=f.calendar)}var g=m.toDate();if(void 0!=c&&null!=c||(c=m.calendar),"string"==typeof g)return g;g.toString()+"_"+b;if(!b||!b.length||"i"===b){var h;return h=m.formatDate(g,c.patterns.F,c)}var i=c.eras,j="s"===b;b=m.expandFormat(c,b),h=[];for(var k,l,n,o=["0","00","000"],p=0,q=m.getTokenRegExp();;){var r=q.lastIndex,s=q.exec(b),t=b.slice(r,s?s.index:b.length);if(p+=m.appendPreOrPostMatch(t,h),!s)break;if(p%2)h.push(s[0]);else{var u=s[0],v=u.length;switch(u){case"ddd":case"dddd":var w=3===v?c.days.namesAbbr:c.days.names;h.push(w[g.getDay()]);break;case"d":case"dd":l=!0,h.push(d(e(g,2),v));break;case"MMM":case"MMMM":var x=e(g,1);h.push(c.months[3===v?"namesAbbr":"names"][x]);break;case"M":case"MM":h.push(d(e(g,1)+1,v));break;case"y":case"yy":case"yyyy":x=m.getEraYear(g,c,m.getEra(g,i),j),v<4&&(x%=100),h.push(d(x,v));break;case"h":case"hh":k=g.getHours()%12,0===k&&(k=12),h.push(d(k,v));break;case"H":case"HH":h.push(d(g.getHours(),v));break;case"m":case"mm":h.push(d(g.getMinutes(),v));break;case"s":case"ss":h.push(d(g.getSeconds(),v));break;case"t":case"tt":x=g.getHours()<12?c.AM?c.AM[0]:" ":c.PM?c.PM[0]:" ",h.push(1===v?x.charAt(0):x);break;case"f":case"ff":case"fff":h.push(d(g.getMilliseconds(),3).substr(0,v));break;case"z":case"zz":k=g.getTimezoneOffset()/60,h.push((k<=0?"+":"-")+d(Math.floor(Math.abs(k)),v));break;case"zzz":k=g.getTimezoneOffset()/60,h.push((k<=0?"+":"-")+d(Math.floor(Math.abs(k)),2)+":"+d(Math.abs(g.getTimezoneOffset()%60),2));break;case"g":case"gg":c.eras&&h.push(c.eras[m.getEra(g,i)].name);break;case"/":h.push(c["/"]);break;default:throw"Invalid date format pattern '"+u+"'.";
}}}var y=h.join("");return a.jqx.date.cache||(a.jqx.date.cache=new Array),a.jqx.date.cache[m.dateData+b]=y,y},m.add=function(b,c,d){var e=m.internalMS();if(void 0===c){if(d===!1)return m.dateData=e+parseInt(b._ticks/m.ticksPerMillisecond),m;var f=new a.jqx.date(e+parseInt(b._ticks/m.ticksPerMillisecond));return f.timeZone=m.timeZone,f}var g=b*c;if(g<=-m.maxMillis||g>=m.maxMillis)throw new Error("Out of Range");if(d===!1)return m.dateData=e+g,m;var f=new a.jqx.date(e+g);return f.timeZone=m.timeZone,f},m.addDays=function(a,b){return m.add(a,m.millisPerDay,b)},m.clone=function(){var b=new a.jqx.date(m.dateData);return b.timeZone=m.timeZone,b},m.clearTime=function(){var b=m.month(),c=m.year(),d=m.day(),e=new a.jqx.date(c,b,d,0,0,0,0);return e.timeZone=m.timeZone,e},m.addHours=function(a,b){return m.add(a,m.millisPerHour,b)},m.addMilliseconds=function(a,b){return m.add(a,1,b)},m.addMinutes=function(a,b){return m.add(a,m.millisPerMinute,b)},m.addMonths=function(b,c){if(b<-12e4||b>12e4)throw new Error("Invalid Months Value");var d=parseInt(m.getDatePart(m.datePartYear)),e=parseInt(m.getDatePart(m.datePartMonth)),f=parseInt(m.getDatePart(m.datePartDay)),g=e-1+b;if(g>=0?(e=g%12+1,d+=g/12):(e=12+(g+1)%12,d+=(g-11)/12),d=parseInt(d),d<1||d>9999)throw new Error("Year out of range");var h=m.daysInMonth(d,e);if(f>h&&(f=h),c===!1)return m.dateData=m.dateToMS(d,e,f)+m.internalMS()%m.millisPerDay,m;var i=new a.jqx.date(m.dateToMS(d,e,f)+m.internalMS()%m.millisPerDay);return i.timeZone=m.timeZone,i},m.addSeconds=function(a,b){return m.add(a,m.millisPerSecond,b)},m.addYears=function(a,b){return m.addMonths(12*a,b)},m.getTimeZoneOffset=function(){var a=new Date,b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1),d=a.getTimezoneOffset()<Math.max(b.getTimezoneOffset(),c.getTimezoneOffset());return{offset:-(a.getTimezoneOffset()/60),dst:+d}},m.isInDaylightSavingTime=function(){var a=new Date,b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1);return m.date().getTimezoneOffset()<Math.max(b.getTimezoneOffset(),c.getTimezoneOffset())},m.supportsDaylightSavingTime=function(){var a=new Date,b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1);return b.getTimezoneOffset()!=c.getTimezoneOffset()},m.date=function(){var b=m.month(),c=m.year(),d=m.day(),e=new a.jqx.date(c,b,d);return e.timeZone=m.timeZone,e},m.isWeekend=function(){return 0==m.dayOfWeek()||6==m.dayOfWeek()},m.toDate=function(a){var b=m.month(),c=m.year(),d=m.day(),e=m.hour(),f=m.minute(),g=m.second(),h=m.millisecond(),i=new Date(c,b-1,d);if(c<1970&&i.setFullYear(c),i.setHours(e,f,g,h),a){var j=m.timeZones.filter(function(b){return b.id==a});if(j.length){var k=j[0].offset;"Local"==a&&(k=-i.getTimezoneOffset());var l=i.getTime(),n=60*i.getTimezoneOffset()*1e3;if(m.timeZone){var o=m.timeZones.filter(function(a){return a.id==m.timeZone});if(o.length)var n=60*-o[0].offset*1e3}var p=l+n;i=new Date(p+6e4*k)}}return i},m.toTimeZone=function(b){var c=b;null==c&&(c="Local");var d=m.toDate(c),e=new a.jqx.date(d);return e.timeZone=b,e},m.day=function(){return m.getDatePart(m.datePartDay)},m.month=function(){return m.getDatePart(m.datePartMonth)},m.year=function(){return m.getDatePart(m.datePartYear)},m.millisecond=function(){return parseInt(m.internalMS()%1e3)},m.hour=function(){return parseInt(m.internalMS()/m.millisPerHour%24)},m.minute=function(){return parseInt(m.internalMS()/m.millisPerMinute%60)},m.second=function(){return parseInt(m.internalMS()/m.millisPerSecond%60)},m.valueOf=function(){return m.dateData},m.equals=function(a){return m.dateData===a.dateData},0===arguments.length){var n=new Date;m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else if(1===arguments.length){void 0==arguments[0]&&(arguments[0]="todayDate");var o="number"==typeof arguments[0]&&isFinite(arguments[0]);if(o||"string"!==a.type(arguments[0]))if("number"==typeof arguments[0])m.dateData=arguments[0];else if("date"==a.type(arguments[0])){var n=arguments[0];m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else m.dateData=arguments[0];else if("today"===arguments[0]){var n=new Date;m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else if("todayDate"===arguments[0]){var n=new Date;n.setHours(0,0,0,0),m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else{var n=m.tryparseDate(arguments[0]);m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}}else if(2===arguments.length){void 0==arguments[0]&&(arguments[0]="todayDate");var o="number"==typeof arguments[0]&&isFinite(arguments[0]);if(o||"string"!==a.type(arguments[0]))if("number"==typeof arguments[0])m.dateData=arguments[0];else if("date"==a.type(arguments[0])){var n=arguments[0];m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else m.dateData=arguments[0];else if("today"===arguments[0]){var n=new Date;m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else if("todayDate"===arguments[0]){var n=new Date;n.setHours(0,0,0,0),m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else{var n=m.tryparseDate(arguments[0]);m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}m.timeZone=arguments[1]}else if(arguments.length>2)if("string"===a.type(arguments[0])){var n=m.tryparseDate(arguments[0],arguments[2],arguments[1]);m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}else{var p=arguments[0],q=arguments[1],r=arguments[2],s=arguments[3],t=arguments[4],u=arguments[5],v=arguments[6];void 0===s&&(s=0),void 0===t&&(t=0),void 0===u&&(u=0),void 0===v&&(v=0),q--;var n=new Date(p,q,r,s,t,u,v);p<1970&&n.setFullYear(p),m.dateData=m.dateToMS(n.getFullYear(),n.getMonth()+1,n.getDate())+m.timeToMS(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())}return m}}(jqxBaseFramework),Array.prototype.filter||(Array.prototype.filter=function(a){"use strict";if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments[1],f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d});

