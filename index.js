var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
        , PNF = require('google-libphonenumber').PhoneNumberFormat
        , PNT = require('google-libphonenumber').PhoneNumberType;

var data = require('./countries');
var phoneNumbers = require('./phoneNumbers')

phoneNumbers.forEach(function(element){
	console.log( element.country + ":");
	parsePhones(element.country, element.phoneNumbers);
});


function parsePhones(country, phoneNumbers){

	var code = data.filter(function(element)
		{
			return element.name == country;
		});

	if (code[0]){
		code = code[0].code;

		try {
			phoneNumbers.forEach(function(phone){
				console.log("\tINTERNATIONAL\t" + phone + " => " + phoneUtil.format(phoneUtil.parse(phone, code), PNF.INTERNATIONAL));
				console.log("\tNATIONAL\t" + phone + " => " + phoneUtil.format(phoneUtil.parse(phone, code), PNF.NATIONAL));
				console.log("\tE164\t" + phone + " => " + phoneUtil.format(phoneUtil.parse(phone, code), PNF.E164));
				console.log();
			});
		}
		catch (error){
			console.log("ERROR: (" + country + ") " + error);
		}
	} else {
		console.log("#######################")
		console.log("Can't find country code");
		console.log("#######################")
	}

	console.log();
}

