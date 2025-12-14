import React, { useState } from "react";
import "./Timeline.css";

const bibliographyEvent = {
    title: "Bibliography",
    year: "", // All hail jank
    details: (
        <div className="bibliography-list">
            <p className="bib-entry">
                Binsasi, Norbertus Antoin, Ahmad Zubaidi, and Heri Santoso. “Nasakom and Bhinneka Tunggal Ika: A New Reading of Sukarno’s Politics from Philosophical Perspectives.” <em>MUHARRIK</em> 7, no. 2 (2024): 300–316. https://doi.org/10.37680/muharrik.v7i2.6702.
            </p>

            <p className="bib-entry">
                Citrawan, Harison, and Ganesh Cintika Putri. 2024. “Law, Memory, and Silence: The Case of Anti-Communism Laws in Indonesia”. <em>The Age of Human Rights Journal</em>, no. 22 (January): e8021. https://doi.org/10.17561/tahrj.v22.8021.
            </p>

            <p className="bib-entry">
                Estrelita, G. T. “Beyond Leftist Phobia: Political Prejudice and Stigma in Indonesia.” In <em>The Palgrave Handbook of Political Norms in Southeast Asia</em>, edited by G. Facal, E. Lafaye de Micheaux, and A. Norén Nilsson. Singapore: Palgrave Macmillan, 2024. https://doi.org/10.1007/978-981-99-9655-1_15.
            </p>

            <p className="bib-entry">
                Hulshof, Christopher. "The Voice from the Well: Norman Reddaway, the Information Research Department, and British Propaganda in Indonesia". Journal of Cold War Studies Vol. 28, Issue 1 (Winter 2026), forthcoming.
            </p>

            <p className="bib-entry">
                McGregor, Katharine. “Heads from the North: Transcultural Memorialization of the 1965 Indonesian Killings at the National Gallery of Australia.” In <em>The Indonesian Genocide of 1965: Causes, Dynamics and Legacies</em>, edited by Katharine McGregor, Jess Melvin, and Annie Pohlman, 179–180, 39–40. Cham: Palgrave Macmillan, 2018.
            </p>

            <p className="bib-entry">
                Nadhirianto, Averio. “Managing Disappointment: Regime Survival and the Normalization of Indonesia–United States Relations 1957–1958.” <em>Jurnal Asia Pacific Studies</em> 8, no. 2 (2024): 20–33. https://doi.org/10.33541/japs.v8i2.6088.
            </p>

            <p className="bib-entry">
                Sun, Peter Liang Tek. “A Life Under Three Flags.” PhD diss., University of Western Sydney, 2008. https://researchers-admin.westernsydney.edu.au/ws/portalfiles/portal/94895842/uws_6389.pdf
            </p>

            <p className="bib-entry">
                The Jakarta Post. “Timeline of Communist Activity in Indonesia and Reconciliation Efforts.” Jakarta, 2015. Accessed December 3, 2025. https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?.
            </p>

            <p className="bib-entry">
                United States Department of State, Bureau of Intelligence and Research (Cumming). “Intelligence Note: Intelligence Analysis of Prospects for Effective Anti-Communist Action in Indonesia.” Memorandum to Secretary of State Dulles, June 20, 1958. In <em>Foreign Relations of the United States, 1958–1960, Indonesia, Volume XVII</em>, Document 123. Washington, D.C.: U.S. Government Printing Office.
            </p>

            <p className="bib-entry">
                 Xie, Kankan. “Estranged Comrades: Global Networks of Indonesian Communism, 1926-1932.” PhD diss., University of California, Berkeley, 2018. https://escholarship.org/uc/item/79314435.
            </p>
           
        </div>
    )
};


const events = [
    { 
        year: "1914", 
        title: "ISDV Founded", 
        description: "Precursor Party, \"Indische Sociaal-Democratische Vereeniging\" (Dutch)", 
        details: "Henk Sneevliet establishes the ISDV in Surabaya. The majority-Dutch communist party played the critical role of being both the first Asian communist party outside of the Russian sphere and also the precursor party to the PKI.", 
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015, https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?"
    },
    {
        year: "1918-1919",
        title: "ISDV Suppressed / Sneevliet Exiled",
        description: "Colonial crackdown",
        details: "From 1918-1919, Dutch officials heavily suppress the ISDV, and exile ISDV party founder Henk Sneevliet.",
        extraSpace: "100",
        source: "Peter Liang Tek Sun, \“A Life Under Three Flags\” (PhD diss., University of Western Sydney, 2008), 37, https://researchers-admin.westernsydney.edu.au/ws/portalfiles/portal/94895842/uws_6389.pdf."
    },
    {
        year: "1920",
        title: "ISDV -> PKH",
        description: "\"Partai Komunist Hindia\" (Indonesian)",
        details: "The party changes its name for the first time to the Partai Komunist Hindia, a sign of increasing Indonesian influence in the party.",
        source: "Peter Liang Tek Sun, \“A Life Under Three Flags\” (PhD diss., University of Western Sydney, 2008), 37, https://researchers-admin.westernsydney.edu.au/ws/portalfiles/portal/94895842/uws_6389.pdf."
    },
    {
        year: "1924", 
        title: "PKH -> PKI", 
        description: " \"Partai Komunis Indonesia\" (Indonesian)", 
        details: "In its ninth congress, the party changes its name to the more permanent \"Partai Komunis Indonesia\" (Indonesian).",
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015,https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?"
    },
    { 
        year: "1924", 
        title: "Trade Unions", 
        description: "PKI expands labor influence", 
        details: "After the Dutch leaders are exiled, the PKI's new Indonesian leadership makes efforts to organize and gain influence in trade unions and workers' groups. Trade unions become one of the cornerstones of PKI support.", 
        extraSpace: -200, // Custom spacing, -224.5 for direct adjacency
        source: "Peter Liang Tek Sun, \“A Life Under Three Flags\” (PhD diss., University of Western Sydney, 2008), 37, https://researchers-admin.westernsydney.edu.au/ws/portalfiles/portal/94895842/uws_6389.pdf."
    },
    { 
        year: "1926-7", 
        title: "PKI Uprisings", 
        description: "Failed PKI revolts", 
        details: "PKI uprisings break out in Batavia, Priangan, Banten and Sumatra. The January 1st uprisings in Western Sumatra are swiftly crushed, and in the aftermath the Dutch colonial government redoubles its efforts to suppress communist movements.",
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015,https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?"
    },
    { 
        year: "1927", 
        title: "PKI Outlawed", 
        description: "Dutch authorities ban the PKI", 
        details: "The PKI is officially banned by the colonial government in response to the PKI uprisings, causing the party to go underground in the face of suppresion by Dutch authorities.", 
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015, https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?", 
        extraSpace: -100,
    },
    { 
        year: "1927", 
        title: "Sukarno First Writes About Nasakom", 
        description: "Nasionalisme, Agama, Komunisme", 
        details: "Sukarno first pens his thoughts on his anti-colonial political philosophy in a piece titled \"Nationalism Marxism Islamism\", which would form the bedrock for Sukarno's political concept \"Nasakom.\"", 
        extraSpace: -150,
        source: "Binsasi, Norbertus Antoin, Ahmad Zubaidi, and Heri Santoso. \“Nasakom and Bhinneka Tunggal Ika: A New Reading of Sukarno\’s Politics from Philosophical Perspectives.\” MUHARRIK 7, no. 2 (2024): 300-316. https://doi.org/10.37680/muharrik.v7i2.6702"
    },
    {
        year: "1927-1945", 
        title: "Ongoing Suppression", 
        description: "Communist activity within Indonesia is heavily stifled", 
        details: "The Dutch authority's response to the PKI uprisings saw more than 90% of the party imprisoned by the end of 1927, with Dutch agents having infiltrated much of the party's organization. The entire Central Committee was detained, and an attempt to reform the party in Surabaya led to more arrests. Active suppression continued during the Japanese occupation. As a result, the party was essentially defunct until re-established following Japanese capitulation.",
        extraSpace: 200,
        source: "Kankan Xie, “Estranged Comrades: Global Networks of Indonesian Communism, 1926-1932” (PhD diss., University of California, Berkeley, 2018), 3-4, 50, https://escholarship.org/uc/item/79314435."
    },
    {
        year: "1945",
        title: "Political Re‑entry of the PKI",
        description: "Sukarno introduces Pancasila; PKI resumes open political activity",
        details: "With the 1 June 1945 speech by Sukarno launching Pancasila as Indonesia’s ideology, leftist groups including PKI and its mass‑organization BTI re\‑enter popular Indonesian politics. In subsequent years, PKI rebuilds its membership and becomes a significant political force by the 1950s.",
        source: "G. T. Estrelita, “Beyond Leftist-Phobia: Political Prejudice and Stigma in Indonesia,” in The Palgrave Handbook of Political Norms in Southeast Asia, ed. Gabriel Facal, Elsa Lafaye de Micheaux, and Astrid Norén-Nilsson (Singapore: Palgrave Macmillan, 2024), 248, https://doi.org/10.1007/978-981-99-9655-1_15.",
        extraSpace: 300
    },
    {
        year: "1946",
        title: "Return of Fugitive PKI Members",
        description: "Many veteran PKI members return to Indonesia and take control of the party leadership.",
        details: "After the PKI was refounded in 1945, many fugitive former PKI members banished during the Dutch suppression return to Indonesia. By late 1946, the returned older generation had taken over as party leadership.",
        source: "Kankan Xie, “Estranged Comrades: Global Networks of Indonesian Communism, 1926-1932” (PhD diss., University of California, Berkeley, 2018), 4, https://escholarship.org/uc/item/79314435.",
        extraSpace: -50
    },
    { 
        year: "1955", 
        title: "PKI Electoral Rise", 
        description: "PKI becomes major political force", 
        details: "In the 1955 general election, the resurgent PKI wins 16% of the vote, emerging as one of Indonesia's four leading political parties.", 
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015, https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?",
        extraSpace: 200
    },
    { 
        year: "1958", 
        title: "Political Power Struggle", 
        description: "Many other Indonesian political figures directly opposed the PKI", 
        details: "By 1958, the military's Chief of Staff, the Prime Minister, the Indonesian National Party (PNI), and the Muslim parties were all vehemently opposed to the PKI. Proposed plans included further postponing general elections for five more years, reshuffling the political cabinet, and an economic development program to make the PKI less politically attractive. There is internal disagreement within the Indonesian Army's senior leadership over whether or not to enlist U.S. aid to help fight the PKI.",
        source: "Memorandum From the Director of the Bureau of Intelligence and Research (Cumming) to Secretary of State Dulles, “Intelligence Note: Intelligence Analysis of Prospects for Effective Anti-Communist Action in Indonesia,” June 20, 1958, in Foreign Relations of the United States, 1958–1960, Indonesia, Volume XVII, Document 123."
    }, 
    { 
        year: "1958", 
        title: "PRRI Rebellions", 
        description: "US-backed right-wing regional revolts against central government", 
        details: "The PRRI (Sumatra) and Permesta (Sulawesi) rebellions openly challenge Sukarno's government before eventually being put down. Alarmed by the closeness of the PKI to Sukarno's regime, the US hoped the rebellions would transform Indonesia's political landscape. Following the PRRI rebellions, Sukarno would seek normalization with the U.S., in stark contrast to his fervent anti-colonial rhetoric.",
        source: "Averio Nadhirianto, “MANAGING DISAPPOINTMENT: Regime Survival and the Normalization of Indonesia–United States Relations 1957–1958,” Jurnal Asia Pacific Studies 8, no. 2 (2024): 20–33, https://doi.org/10.33541/japs.v8i2.6088",
        extraSpace: -150 
    },   
    { 
        year: "1960-1965", 
        title: "Nasakom Balancing Act", 
        description: "Sukarno launches Nasakom, soldifying his political balancing act.", 
        details: "Sukarno publicly coins the phrase Nasakom (Nasionalisme, Agama, Komunisme), solidifying the PKI as a recognized part of Sukarno's political bloc. With Nasakom comes a political balancing act by Sukarno between the PKI and the military, which would continue for the next five years.",
        source: "\“Timeline of Communist Activity in Indonesia and Reconciliation Efforts,\” The Jakarta Post, 2015, https://www.thejakartapost.com/news/2015/09/30/timeline-communist-activity-indonesia-and-reconciliation-efforts.html?",
        extraSpace: 100
    },
    { 
        year: "1965", 
        title: "Failed PKI Coup Attempt", 
        description: "The PKI attempts a failed coup", 
        details: "PKI forces abduct and kill 6 Indonesian army generals, dumping their bodies in wells. Two battalions of troops position themselves around Jakarta and in the National Radio Station, and later a proclamation for the 30th September Movement would be made over the national airwaves. However, they would fail to maintain control of Jakarta and the army, led by General Suharto, would reclaim the capital in a bloodless action. There they announced the end of the coup attempt, which had lasted less than 24 hours.",
        source: "Christopher Hulshof, \"The Voice from the Well: Norman Reddaway, the Information Research Department, and British Propaganda in Indonesia,\" Journal of Cold War Studies Vol. 28, Issue 1 (Winter 2026), forthcoming. 29-30.",
        extraSpace: 300
     },
    { 
        year: "1965", 
        title: "Military Counter-Coup", 
        description: "Suharto conducts a counter-coup", 
        details: "Though Sukarno attempts to lower the political temperature, Suharto maintains control of the airwaves and works to whip the Indonesian populace into a frenzy. The army occupy printing presses to ensure Suharto's broadcasts and allied anticommunist papers were the only source of news on the coup, and the PKI were thus able to be portrayed as having plotted a violent coup to control the entire nation. On midnight of October 2nd, Lieutenant General Ahmad Junus Mokoginta makes the first public call to eradicate the PKI, and on October 8th youths encouraged by the army burned down the PKI headquarters. Suharto ousts Sukarno, and propaganda such as the \"Voices from the Well\", a radio station purported to mimic the voices of the six dead generals, continues to dominate the airwaves.", 
        extraSpace: -224.5,
        source: "Christopher Hulshof, \"The Voice from the Well: Norman Reddaway, the Information Research Department, and British Propaganda in Indonesia,\" Journal of Cold War Studies Vol. 28, Issue 1 (Winter 2026), forthcoming. 30-35."
    },
    { 
        year: "1966", 
        title: "Party Banned", 
        description: "Suharto's New Order bans the PKI", 
        details: "Suharto bans the PKI March 12th 1966, through Presidential Decree 1/3/1966. The law becomes a legal bludgeon with which Suharto is able to banish the party, persecute those denoted as communist sympathizers, and justify the detainment and mass killings of leftists and suspected communists.", 
        source: "Harison Citrawan and Ganesh Cintika Putri, “Law, Memory, and Silence: The Case of Anti-Communism Laws in Indonesia,” The Age of Human Rights Journal, no. 22 (2024): 1-2, https://doi.org/10.17561/tahrj.v22.8021.",
        extraSpace: ""
    },
    { 
        year: "1965-70\'s", 
        title: "Political Mass Killings", 
        description: "With Suharto's New Order comes mass violence", 
        details: "The explosive rhetoric from Suharto's New Order enabled him to use the populace as a tool to maintain deniability as left-of-center Indonesians were detained and massacred en masse. By the end of the killings, half a million to upwards of a milllion people were killed, and between 600,000-750,000 people detained for varying lengths of time up to the late 1970's. Much of the violence was conducted by religious political groups, such as the Ansor Youth Group. Ethnicity also played a large role in the violence, with many Chinese-Indonesian citizens being murdered, especially in Medan, Makassar, and Lombok.",
        source:"Katharine McGregor, \“Heads from the North: Transcultural Memorialization of the 1965 Indonesian Killings at the National Gallery of Australia,\” in The Indonesian Genocide of 1965: Causes, Dynamics and Legacies, ed. Katharine McGregor, Jess Melvin, and Annie Pohlman (Cham: Palgrave Macmillan, 2018), 179-180, 39-40.", 
        extraSpace: -200 },
];

export default function Timeline() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // DETAIL POPUP VIEW 
    if (selectedEvent) {
        return (
            <div className="timeline-detail">
                <h2>
                    {selectedEvent.title}
                    {selectedEvent.year ? ` (${selectedEvent.year})` : ""}
                </h2>

                {/* Render details */}
                <div>{selectedEvent.details}</div>

                {/* Render source if present */}
                {selectedEvent.source && (
                    <div style={{ marginTop: "1rem", fontStyle: "italic", color: "gray" }}>
                        Source: {selectedEvent.source}
                    </div>
                )}

                <button onClick={() => setSelectedEvent(null)}>Back to Timeline</button>
            </div>
        );
    }


    // MAIN TIMELINE VIEW
    return (
        <>
            <div className="timeline-wrapper">
                <div className="timeline-inner">
                    <div className="timeline-line" />
                    <div className="timeline-container">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="timeline-event-wrapper"
                                style={{
                                    marginLeft: event.extraSpace
                                        ? `${event.extraSpace}px`
                                        : "0", // Lord, please give me custom spacing
                                }}
                            >
                                {/* Dot */}
                                <div
                                    className="timeline-dot"
                                    onClick={() => setSelectedEvent(event)}
                                />

                                {/* Above summary */}
                                {index % 2 === 0 && (
                                    <div className="timeline-event-above">
                                        <h3 className="timeline-year">{event.year}</h3>
                                        <h4 className="timeline-title">{event.title}</h4>
                                        <p className="timeline-description">{event.description}</p>
                                    </div>
                                )}

                                {/* Below summary */}
                                {index % 2 !== 0 && (
                                    <div className="timeline-event-below">
                                        <h3 className="timeline-year">{event.year}</h3>
                                        <h4 className="timeline-title">{event.title}</h4>
                                        <p className="timeline-description">{event.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bibliography  */}
            <button
                className="bibliography-button"
                onClick={() => setSelectedEvent(bibliographyEvent)}
            >
                View Bibliography
            </button>
        </>
    );
}
