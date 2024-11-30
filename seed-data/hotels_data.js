const hotelsData = [
    {
        "id": 1,
        "festival_id": 1,
        "hotel_name": "Rio Hotel & Casino",
        "distance": "35",
        "cost_per_night": 250,
        "currency": "USD",
        "stars": 3
    },
    {
        "id": 2,
        "festival_id": 1,
        "hotel_name": "Park MGM",
        "distance": "40",
        "cost_per_night": 300,
        "currency": "USD",
        "stars": 4
    },
    {
        "id": 3,
        "festival_id": 1,
        "hotel_name": "Bellagio",
        "distance": "42",
        "cost_per_night": 600,
        "currency": "USD",
        "stars": 5
    },
    {
        "id": 4,
        "festival_id": 2,
        "hotel_name": "Best Western Orlando West",
        "distance": "6",
        "cost_per_night": 200,
        "currency": "USD",
        "stars": 2.5
    },
    {
        "id": 5,
        "festival_id": 2,
        "hotel_name": "Hilton Garden Inn Orlando Downtown",
        "distance": "2",
        "cost_per_night": 250,
        "currency": "USD",
        "stars": 3
    },
    {
        "id": 6,
        "festival_id": 2,
        "hotel_name": "Days Inn by Wyndham Orlando Downtown",
        "distance": "10",
        "cost_per_night": 100,
        "currency": "USD",
        "stars": 2
    },
    {
        "id": 7,
        "festival_id": 3,
        "hotel_name": "Holiday Inn Express Toronto - North York",
        "distance": "7",
        "cost_per_night": 380,
        "currency": "CAD",
        "stars": 2.5
    },
    {
        "id": 8,
        "festival_id": 3,
        "hotel_name": "Novotel Toronto North York",
        "distance": "8.5",
        "cost_per_night": 350,
        "currency": "CAD",
        "stars": 3.5
    },
    {
        "id": 9,
        "festival_id": 3,
        "hotel_name": "Courtyard by Marriott Toronto Vaughan",
        "distance": "11",
        "cost_per_night": 300,
        "currency": "CAD",
        "stars": 3
    },
    {
        "id": 10,
        "festival_id": 4,
        "hotel_name": "Washington Marriott Capitol Hill",
        "distance": "5",
        "cost_per_night": 350,
        "currency": "USD",
        "stars": 3.5
    },
    {
        "id": 11,
        "festival_id": 4,
        "hotel_name": "Hilton Garden Inn Washington DC/U.S. Capitol",
        "distance": "8",
        "cost_per_night": 300,
        "currency": "USD",
        "stars": 3.5
    },
    {
        "id": 12,
        "festival_id": 4,
        "hotel_name": "Grand Hyatt Washington",
        "distance": "8",
        "cost_per_night": 350,
        "currency": "USD",
        "stars": 4
    },
    {
        "id": 13,
        "festival_id": 5,
        "hotel_name": "The Westin Ottawa",
        "distance": "4",
        "cost_per_night": 400,
        "currency": "CAD",
        "stars": 4
    },
    {
        "id": 14,
        "festival_id": 5,
        "hotel_name": "Delta Hotels by Marriott Ottawa City Centre",
        "distance": "3",
        "cost_per_night": 380,
        "currency": "CAD",
        "stars": 4
    },
    {
        "id": 15,
        "festival_id": 5,
        "hotel_name": "Holiday Inn Express & Suites Downtown Ottawa East",
        "distance": "6",
        "cost_per_night": 218,
        "currency": "CAD",
        "stars": 2.5
    },
    {
        "id": 16,
        "festival_id": 6,
        "hotel_name": "Miami Marriott Biscayne Bay",
        "distance": "2.5",
        "cost_per_night": 550,
        "currency": "USD",
        "stars": 4
    },
    {
        "id": 17,
        "festival_id": 6,
        "hotel_name": "JW Marriott Marquis Miami",
        "distance": "2",
        "cost_per_night": 700,
        "currency": "USD",
        "stars": 5
    },
    {
        "id": 18,
        "festival_id": 6,
        "hotel_name": "Comfort Inn & Suites Downtown Brickell - Port of Miami",
        "distance": "1",
        "cost_per_night": 500,
        "currency": "USD",
        "stars": 3
    },
    {
        "id": 19,
        "festival_id": 7,
        "hotel_name": "Comfort Inn And Suites Colton",
        "distance": "4",
        "cost_per_night": 380,
        "currency": "USD",
        "stars": 2.5
    },
    {
        "id": 20,
        "festival_id": 7,
        "hotel_name": "Residence Inn by Marriott San Bernardino",
        "distance": "8",
        "cost_per_night": 500,
        "currency": "USD",
        "stars": 3
    },
    {
        "id": 21,
        "festival_id": 7,
        "hotel_name": "La Quinta Inn & Suites by Wyndham San Bernardino",
        "distance": "6",
        "cost_per_night": 500,
        "currency": "USD",
        "stars": 2.5
    },
    {
        "id": 22,
        "festival_id": 8,
        "hotel_name": "Travelodge Hotel by Wyndham Montreal Centre",
        "distance": "10",
        "cost_per_night": 190,
        "currency": "CAD",
        "stars": 3
    },
    {
        "id": 23,
        "festival_id": 8,
        "hotel_name": "Montreal Marriott Chateau Champlain",
        "distance": "8",
        "cost_per_night": 380,
        "currency": "CAD",
        "stars": 4
    },
    {
        "id": 24,
        "festival_id": 8,
        "hotel_name": "Le Westin Montréal",
        "distance": "6",
        "cost_per_night": 500,
        "currency": "CAD",
        "stars": 4
    },
    {
        "id": 25,
        "festival_id": 9,
        "hotel_name": "Hotel Concord",
        "distance": "6",
        "cost_per_night": 200,
        "currency": "AUD",
        "stars": 2
    },
    {
        "id": 26,
        "festival_id": 9,
        "hotel_name": "Pullman at Sydney Olympic Park",
        "distance": "0.5",
        "cost_per_night": 500,
        "currency": "AUD",
        "stars": 5
    },
    {
        "id": 27,
        "festival_id": 9,
        "hotel_name": "ibis budget Sydney Olympic Park",
        "distance": "1.1",
        "cost_per_night": 250,
        "currency": "AUD",
        "stars": 3
    },
    {
        "id": 28,
        "festival_id": 10,
        "hotel_name": "Holiday Inn Express Mexico Aeropuerto, an IHG Hotel",
        "distance": "0.3",
        "cost_per_night": 7000,
        "currency": "MXN",
        "stars": 3
    },
    {
        "id": 29,
        "festival_id": 10,
        "hotel_name": "Hotel Rossel Plaza",
        "distance": "3",
        "cost_per_night": 1300,
        "currency": "MXN",
        "stars": 2
    },
    {
        "id": 30,
        "festival_id": 10,
        "hotel_name": "Fiesta Americana Viaducto Aeropuerto",
        "distance": "2",
        "cost_per_night": 4500,
        "currency": "MXN",
        "stars": 4
    }
];
export default hotelsData;
