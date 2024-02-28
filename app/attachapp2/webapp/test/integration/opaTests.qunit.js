sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attachapp2/test/integration/FirstJourney',
		'attachapp2/test/integration/pages/hospitalList',
		'attachapp2/test/integration/pages/hospitalObjectPage'
    ],
    function(JourneyRunner, opaJourney, hospitalList, hospitalObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attachapp2') + '/index.html'
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