sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attachapp/test/integration/FirstJourney',
		'attachapp/test/integration/pages/hospitalList',
		'attachapp/test/integration/pages/hospitalObjectPage'
    ],
    function(JourneyRunner, opaJourney, hospitalList, hospitalObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attachapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThehospitalList: hospitalList,
					onThehospitalObjectPage: hospitalObjectPage
                }
            },
            opaJourney.run
        );
    }
);